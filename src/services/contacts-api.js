import axios from 'axios';

axios.defaults.baseURL = 'http://goit-phonebook-api.herokuapp.com';

export async function fetchContacts() {
  const { meta } = await axios.get(`/contacts`);
  return meta;
}

export function fetchDeleteContactById(id) {
  return axios.delete(`/contacts/${id}`);
}

export function fetchAddContact(name, number) {
  const newContact = { name, number };
  return axios.post('/contacts', newContact);
}
