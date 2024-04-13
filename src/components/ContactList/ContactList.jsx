import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { useSelector } from "react-redux";

const ContactList = () => {
  const contacts = useSelector((state) => state.selectContacts.contacts.items);
  const filter = useSelector((state) => state.selectNameFilter.filters.name);
  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <ul className={css.contactList}>
      {Array.isArray(contacts) &&
        filteredContacts.map((contact) => {
          return <Contact key={contact.id} contact={contact} />;
        })}
    </ul>
  );
};

export default ContactList;
