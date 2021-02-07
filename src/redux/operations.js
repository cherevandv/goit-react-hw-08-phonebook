import { createAsyncThunk } from '@reduxjs/toolkit';
import * as contactsAPI from 'services/contacts-api';

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async ({ name, number }) => {
    const { data } = await contactsAPI.fetchAddContact(name, number);
    return data;
  },
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async id => {
    await contactsAPI.fetchDeleteContactById(id);
    return id;
  },
);

export const fetchAllContacts = createAsyncThunk('/contacts', async () => {
  const { arg } = await contactsAPI.fetchContacts();
  return arg;
});
