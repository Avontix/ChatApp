import { useContext } from "react";
import { ChatContext } from "../../contexts/ChatContext";
import ContactCard from "../ContactCard/ContactCard";
import "./Contacts.css";

const Contacts = (props) => {
  const { chats: contacts } = useContext(ChatContext);
  return (
    <div className="contacts">
      <div className="contacts__heading">
        <h1> Contacts </h1>
      </div>
      <div className="contacts__list">
        {contacts.map((contact) => (
          <ContactCard key={contact.id} contact={contact} />
        ))}
      </div>
      <div className="add_contacts_footer">
        <h3 onClick={props.AddContactToggle}> +Add New Contact </h3>
      </div>
    </div>
  );
};

export default Contacts;
