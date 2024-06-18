
import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css"

const ContactList = () => {
  
  const contacts = useSelector(state => state.contacts)
  return (
    <ul className={css.nameList}>
      {contacts.map((contact) => (
        <li className={css.nameItem} key={contact.id}>
          <Contact data={contact}  />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
