import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import {ContactList } from 'components/ContactList/ContactList';
import { Container, Title, Subtitle } from './App.styled';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/contactsOperations';

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);
    return (
        <Container>
            <Title>Phonebook</Title>
            <ContactForm />
            <Subtitle>Contacts</Subtitle>
            <Filter />
            <ContactList />
        </Container>
    );
};

export default App;
