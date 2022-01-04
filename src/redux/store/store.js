import { configureStore } from '@reduxjs/toolkit';
import contacts from '../contacts/contacts-reducer';

export const store = configureStore({
  reducer: {
    contacts,
  },
});
