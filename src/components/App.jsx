import { ContactList } from './ContactList/ContactList';
import { AddContact } from './AddContact/AddContact';
import { Filter } from 'components/FilterContacts/FilterContacts';
import { GlobalStyle } from './GlobalStyle';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h2>Phonebook</h2>
      <AddContact />
      <Filter />
      <ContactList title="Contacts" />
      <GlobalStyle />
    </div>
  );
};
