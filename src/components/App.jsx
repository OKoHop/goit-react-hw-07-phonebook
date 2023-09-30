import { ContactList } from './ContactList/ContactList';
import { AddContact } from './AddContact/AddContact';
import { Filter } from 'components/FilterContacts/FilterContacts';
import { GlobalStyle } from './GlobalStyle';

export const App = () => {
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
