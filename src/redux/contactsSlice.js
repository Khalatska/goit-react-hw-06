import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  contacts: {
    items: [],
  },
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState: INITIAL_STATE,
  reducers: {
    addContact(state, actions) {
      state.contacts.items.push(actions.payload);
    },
    deleteContact(state, actions) {
      const contactIndex = state.contacts.items.findIndex(
        (state) => state.id === actions.payload
      );
      state.contacts.items.splice(contactIndex, 1);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;
