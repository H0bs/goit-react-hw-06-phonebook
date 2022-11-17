import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from 'nanoid';

const contactsInitialState = {
  contacts: [],
  filter: '',
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState: contactsInitialState,
  reducers: {
    addContact: {
      reducer({contacts}, action) {
        contacts.push(action.payload);
      },
      prepare(name, number) {
        return {
          payload: {
            id: nanoid(),
            name,
            number,
          },
        };
      },
    },
    deleteContact({contacts}, action) {
      const index = contacts.findIndex(contact => contact.id === action.payload)
      contacts.splice(index, 1);
    },
    filteredContacts(state, action) {
      state.filter = action.payload;
    }
  },
});

export const { addContact, deleteContact, filteredContacts} = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;