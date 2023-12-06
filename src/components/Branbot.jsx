import React, { useState } from 'react';

const Branbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);

    const handleMessage = (e) => {
        const textarea = e.target;
        setMessage(textarea.value);

        textarea.style.height = '35px';
        textarea.style.height = `${textarea.scrollHeight}px`;
    }

    const toggleChat = () => {
        setIsOpen(prevState => !prevState);
    }

    const handleSendMessage = (e) => {
        e.preventDefault();
        sendMessage(message);
    }
    const sendMessage = async (userMessage) => {
        // Add the user's message to the chat
        setMessages(prevMessages => [...prevMessages, { sender: 'user', text: userMessage }]);

        try {
            // Send the message to your Lambda function via API Gateway
            const response = await fetch('https://your-api-gateway-url.com/branbot', {
                method: 'POST',
                body: JSON.stringify({ message: userMessage }),
                headers: { 'Content-Type': 'application/json' }
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();

            // Add the bot's response to the chat
            setMessages(prevMessages => [...prevMessages, { sender: 'bot', text: data.reply }]);
        } catch (error) {
            console.error('Error:', error);
            // Optionally, handle the error in the UI, for example, by showing an error message
        }
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
                            <div key={index} className={`message ${msg.sender === 'user' ? 'user-message' : 'bot-message'}`}>
                                {msg.text}
                            </div>
                        ))}
                    </div>
                    <form className='message-form' onSubmit={handleSendMessage}>
                        <textarea
                            className='message-input'
                            value={message}
                            onChange={handleMessage}
                            placeholder="Message Branbot..."
                        />
                        <button disabled={!message} type='submit' className='send-button'>
                            <i className="fas fa-arrow-up"></i>
                        </button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default Branbot;
