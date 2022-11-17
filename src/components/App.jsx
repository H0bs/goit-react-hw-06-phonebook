
import AddContactForm from "./ContactForm/ContactForm";
import { ContactList } from "./ContactList/ContactList";
import { Filter } from "./Filter/Filter";
import { Container, Title, ContactsTitle } from './App.styled';

function App() {
  return (
    <Container>
      <Title>Phone book</Title>
      <AddContactForm/>
      <ContactsTitle>Contacts</ContactsTitle>
      <Filter/>
      <ContactList/>
    </Container>
  )
}

export default App;