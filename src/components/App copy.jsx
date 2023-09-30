import React, { useState, useEffect } from 'react';
import { ContactList } from './ContactList/ContactList';
import { AddContact } from './AddContact/AddContact';
import { Filter } from 'components/FilterContacts/FilterContacts';
import { GlobalStyle } from './GlobalStyle';

export const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const savedContacts = JSON.parse(localStorage.getItem('contacts'));
    if (savedContacts !== null) {
      setContacts(savedContacts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = newContact => {
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
      )
    ) {
      return alert(`${newContact.name} is already in contact!`);
    }
    setContacts(prevstate => [...prevstate, newContact]);
  };

  const filterChange = evt => {
    setFilter(evt.target.value);
  };

  const deleteContact = idContact => {
    setContacts(prevstate =>
      prevstate.filter(contact => contact.id !== idContact)
    );
  };

  const filtredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h2>Phonebook</h2>
      <AddContact onAdd={addContact} />
      <Filter value={filter} onChange={filterChange} />
      <ContactList
        title="Contacts"
        contacts={filtredContacts}
        onDelete={deleteContact}
      />
      <GlobalStyle />
    </div>
  );
};
