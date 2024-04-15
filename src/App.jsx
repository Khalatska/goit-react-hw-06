import ContactList from "./components/ContactList/ContactList";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import { nanoid } from "nanoid";
import { useSelector, useDispatch } from "react-redux";
import { addContact, deleteContact } from "./redux/contactsSlice";
import { changeFilter } from "./redux/filtersSlice";

function App() {
  const selectContacts = useSelector((state) => state.contacts.contacts.items);
  const selectNameFilter = useSelector((state) => state.filter.filters.name);

  const dispatch = useDispatch();

  const addNewContact = (newContact) => {
    const finalContact = {
      ...newContact,
      id: nanoid(),
    };
    dispatch(addContact(finalContact));
  };

  const handleDelete = (contactId) => {
    dispatch(deleteContact(contactId));
  };

  const onChangeFilter = (value) => {
    dispatch(changeFilter(value));
  };

  const filteredContacts = selectContacts.filter((contact) =>
    contact.name.toLowerCase().includes(selectNameFilter.toLowerCase())
  );

  return (
    <div>
      <h1 className="titleMain">Phonebook</h1>
      <ContactForm addContact={addNewContact} />
      <SearchBox onFilter={onChangeFilter} />
      <ContactList contacts={filteredContacts} onDelete={handleDelete} />
    </div>
  );
}

export default App;
