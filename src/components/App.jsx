import { ContactList } from 'components/ContactList/ContactList';
import { AddContact } from 'components/AddContact/AddContact';
import { Filter } from 'components/FilterContacts/FilterContacts';
import { GlobalStyle } from 'components/GlobalStyle';
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
