import { createAsyncThunk } from '@reduxjs/toolkit';
import * as mockAPI from 'services/mockAPI';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, thunkApi) => {
    try {
      const contacts = await mockAPI.fetchContacts();
      return contacts;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkApi) => {
    try {
      const result = await mockAPI.addContact(contact);
      return result;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkApi) => {
    try {
      const resultId = await mockAPI.deleteContact(contactId);
      return resultId;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
