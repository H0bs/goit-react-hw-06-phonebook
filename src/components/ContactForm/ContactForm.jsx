import { Form, FormLabel, FormInput, InputButton } from './ContactForm.styled';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { addContact } from 'redux/contactsSlice';

const AddContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleInputChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        return;
      case 'number':
        setNumber(value);
        return;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase())
    )
      return alert(`${name} is already in contacts.`);

    dispatch(addContact(name, number));
    resetForm();
  }

  const resetForm = () => {
    setName('');
    setNumber('');
  }

  return (
    <>
        <Form onSubmit={handleSubmit}>
          <FormLabel> Name
            <FormInput
              type="text"
              name="name"
            value={name}
            onChange={handleInputChange}
              placeholder="Oleksandr Veremchuk"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </FormLabel>
          <FormLabel>Phone number
            <FormInput
              type="tel"
              name="number"
            value={number}
            onChange={handleInputChange}
              placeholder="555-55-55"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </FormLabel>
          <InputButton type="submit">Add contact</InputButton>
        </Form>
      </>
  )
}

export default AddContactForm;