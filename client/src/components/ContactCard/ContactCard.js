import "./ContactCard.css";
import { Avatar } from "@material-ui/core";
import { useContext, useState } from "react";
import { ChatContext } from "../../contexts/ChatContext";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import NoImage from '../../avatars/No_Image.png';

const ContactCard = ({ contact }) => {
  const { setSelectedChat } = useContext(ChatContext);
  const [model, setModel]= useState(false);

  const toggle =()=>{
    setModel(!model);
  }
  const openChat = () => {
    setSelectedChat(contact);
  };
  return (
    <div className="contactCard">
      <div onClick={toggle}><Avatar src={contact.photoUrl} /></div>
      <div className="contactCard__username" onClick={openChat}>
        <h3> {contact.name} </h3>
      </div>
      <Modal isOpen={model} toggle={toggle}>
            <ModalBody className="profile_model">
              <ModalHeader>Profile</ModalHeader>
              {contact.photoUrl ? <img src={contact.photoUrl}/>:
              <div>
                <img src={NoImage}/>
                </div>}
            </ModalBody>
          </Modal>
    </div>
  );
};

export default ContactCard;
