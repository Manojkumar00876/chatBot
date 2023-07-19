import React, { useState } from 'react';
import './App.css';
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import {
  MainContainer,
  ChatContainer,
  Message,
  MessageList,
  MessageInput,
  TypingIndicator,
} from '@chatscope/chat-ui-kit-react';

function App() {
  const [messages, setMessages] = useState([
    {
      message: "Hello !",
      sender: "ChatGPT",
    },
  ]);

  // Set isTyping state to true or false based on the typing status
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = async (message) => {
    const newMessage = {
      message: message,
      sender: 'user',
      direction: 'outgoing',
    };

    // Add the new message to the state
    setMessages([...messages, newMessage]);

    // Process the message to ChatGPT and see the response
    // (Add the logic here for processing the message and getting the response from ChatGPT)
  };

  return (
    <div className="App">
      <div style={{ position: 'relative', height: '600px', width: '700px' }}>
        <MainContainer>
          <ChatContainer>
            <MessageList >
              {messages.map((message, i) => {
                return <Message key={i} model={message} />;
              })}
            </MessageList>
            <MessageInput placeholder="Type message here" onSend={handleSend} />
          </ChatContainer>
        </MainContainer>
      </div>
    </div>
  );
}

export default App;
