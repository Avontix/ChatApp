import "./ChatNav.css";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import VideocamIcon from "@material-ui/icons/Videocam";
import CallIcon from "@material-ui/icons/Call";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { Avatar } from "@material-ui/core";
import { useContext, useState } from "react";
import { ChatContext } from "../../contexts/ChatContext";
import { Modal, ModalBody } from "reactstrap";

const ChatNav = ({ selectedChat }) => {
  const { setSelectedChat } = useContext(ChatContext);
  const [model, setModel]= useState(false);

  const toggle =()=>{
    setModel(!model);
  }
  const clearSelectedChat = () => {
    setSelectedChat(null);
  };
  return (
    <div className="chatNav">
      <div className="chatNav__left">
        <ArrowBackIcon onClick={clearSelectedChat} />
        <Avatar src={selectedChat.photoUrl} />
        <h2> {selectedChat.name} </h2>
      </div>
      <div className="chatNav__right">
        <VideocamIcon />
        <CallIcon onClick={toggle}/>
        <MoreVertIcon />
      </div>

      <Modal isOpen={model} toggle={toggle}>
            <ModalBody className="profile_model">
            <h2> {selectedChat.name} </h2>
            <Avatar src={selectedChat.photoUrl} />
            </ModalBody>
          </Modal>
    </div>
  );
};

export default ChatNav;
