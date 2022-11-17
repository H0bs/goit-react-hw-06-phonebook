import { List, ListItem, DeleteButton, Text } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import { deleteContact } from 'redux/contactsSlice';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const filterContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()));
  };

  return (
    <List>
      {filterContacts().map(({ id, name, number}) => (
        <ListItem key={id}>
          <Text>{name} - {number}</Text>
          <DeleteButton type="button" onClick={() => dispatch(deleteContact(id))}>
            Delete Contact
          </DeleteButton>
        </ListItem>
      ))}
    </List>
  )
}

