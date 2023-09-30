import { useSelector, useDispatch } from 'react-redux';
import {
  StyledLi,
  StyledH2,
  StyledUl,
  StyledButton,
} from './ContactList.style';
import { deleteContact } from 'redux/slice';

export const ContactList = ({ title }) => {
  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const filtredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <StyledH2>{title}</StyledH2>

      <StyledUl>
        {filtredContacts.map(contact => {
          return (
            <StyledLi key={contact.id}>
              <p>{contact.name}</p>
              <p>{contact.number}</p>
              <StyledButton
                type="button"
                onClick={() => dispatch(deleteContact(contact.id))}
              >
                Delete
              </StyledButton>
            </StyledLi>
          );
        })}
      </StyledUl>
    </>
  );
};
