import { useEffect, useRef } from "react";
import ChatInput from "../ChatInput/ChatInput";
import ReceiverMessage from "../ReceiverMessage/ReceiverMessage";
import SenderMessage from "../SenderMessage/SenderMessage";
import "./ChatArea.css";

const ChatArea = ({ messages, setMessages }) => {
  const bottomRef = useRef(null);
  useEffect(() => {
    //scroll to bottom every time messages change
    bottomRef.current?.scrollIntoView({behavior: 'smooth'});
  }, [messages]);

  return (
    <div className="chatArea">
      <div className="chatArea__container"></div>
      <div className="chatArea__messages sticky bottom-0">
        {messages.map((message, index) => {
          return message.type === "sent" ? (
            <SenderMessage key={index} message={message} />
          ) : (
            <ReceiverMessage key={index} message={message} />
          );
        })}
        <div ref={bottomRef} />
      </div>
      <ChatInput setMessages={setMessages} />
    </div>
  );
};

export default ChatArea;
