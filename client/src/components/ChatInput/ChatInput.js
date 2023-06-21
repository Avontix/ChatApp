import "./ChatInput.css";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import CameraAltIcon from "@material-ui/icons/CameraAlt";
import SentimentVerySatisfiedIcon from "@material-ui/icons/SentimentVerySatisfied";
import MicIcon from "@material-ui/icons/Mic";
import { useContext, useState } from "react";
import { ChatContext } from "../../contexts/ChatContext";
import Picker from "emoji-picker-react";
import { Send } from "@material-ui/icons";

const ChatInput = ({ setMessages }) => {
  const { selectedChat } = useContext(ChatContext);
  const [message, setMessage] = useState("");
  const [image, setImage] = useState("");
  const [showPicker, setShowPicker] = useState(false);
  const sendMessage = (e) => {
    e.preventDefault();
    if (message.trim() !== "" || e.target.files) {
      const newMessage = {
        type: "sent",
        image: message.trim()=='' && e.target.files[0] && URL.createObjectURL(e.target.files[0]),
        content: message,
        timestamp: new Intl.DateTimeFormat('en-US', { hour: '2-digit', minute: '2-digit' }).format(Date.now())
      };
      setMessages([...selectedChat.messages, newMessage]);
      selectedChat.messages.push(newMessage);
      setMessage("");
      setShowPicker(false);
    }
  };
  const togglePicker = () => {
    setShowPicker(!showPicker);
  };
  const addEmoji = (e, emoji) => {
    setMessage(message + emoji.emoji);
  };
  const onImageChange = (event) => {debugger
    
  }

  return (
    <div className="chatInput">
      <div className="chatInput__form">
        {showPicker && <Picker onEmojiClick={addEmoji} />}
        <SentimentVerySatisfiedIcon onClick={togglePicker} />
        <form onSubmit={sendMessage}>
          <input
            type="text"
            value={message}
            placeholder="Type a message..."
            onChange={(e) => {
              setMessage(e.target.value);
            }}
          />
        </form>
        <div className="chatInput__formIcons">
          <AttachFileIcon />
          <input type='file' id='uploadDoc' multiple={true} className="d-none" onChange={(e) => sendMessage(e)} />
          <label htmlFor='uploadDoc'>
            <CameraAltIcon onChange={(e) => sendMessage(e)}/>
          </label>

        </div>
      </div>
      {!message ? <div className="chatInput__icons">
        <MicIcon />
      </div> :
        <div className="chatInput__icons">
          <Send onClick={sendMessage} />
        </div>}
    </div>
  );
};

export default ChatInput;
