import { configureStore } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const initialState = {
  contacts: [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
]
	,
  filters: {
		name: ""
	}
}

const contactsReducer = (state = initialState.contacts, action) => {
  switch (action.type) {
    case "contacts/addContact": {
      return {
        ...state,
        contacts: [...state, state.payload.action]
      }
    default:
      return state
  }
}
}

export const removeContact = (value) => { return { type: "contacts/removeContact", payload: value.id } }
export const addContact = (values) => {return { type: "contacts/addContact", payload: {id: nanoid(), name: values.user, number: values.number } }}

export const store = configureStore({
  reducer: contactsReducer,
})