import axios from 'axios';

axios.defaults.baseURL = 'https://646b63327d3c1cae4ce3bad1.mockapi.io/';

export async function fetchContacts() {
  const { data } = await axios.get('/contacts');
  return data;
}

export async function addContact(contact) {
  const response = await axios.post('/contacts/', contact);
  return response.data;
}

export async function deleteContact(contactId) {
  const { data } = await axios.delete(`/contacts/${contactId}`);
  return data?.id;
}
