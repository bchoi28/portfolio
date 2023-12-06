import React, { useState } from 'react';
import './Chatbot.css'; // Import your CSS file

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([]);

    const toggleChat = () => setIsOpen(!isOpen);

    const sendMessage = (message) => {
        // Here you would integrate with AWS Lambda and API Gateway
        // For now, let's just add the message to our state
        setMessages([...messages, { sender: 'user', text: message }]);
    };

    return (
        <div className="chatbot-container">
            <button onClick={toggleChat} className="chatbot-toggle">
                {isOpen ? 'Close Chat' : 'Chat with Branbot'}
            </button>

            {isOpen && (
                <div className="chat-interface">
                    <div className="messages">
                        {messages.map((msg, index) => (
                            <div key={index} className={`message ${msg.sender}`}>
                                {msg.text}
                            </div>
                        ))}
                    </div>
                    <input
                        type="text"
                        className="message-input"
                        placeholder="Type a message..."
                    // Implement logic to capture input and send messages
                    />
                    <button className="send-button">Send</button>
                </div>
            )}
        </div>
    );
};

export default Chatbot;
