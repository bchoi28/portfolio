import React, { useState, useEffect } from 'react';
import BranbotIcon from '../branbot.svg';
import Wave from '../wave.svg';
import { Tooltip } from './Tooltip';

const Branbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isClosing, setIsClosing] = useState(false);

    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);



    const handleMessage = (e) => {
        const textarea = e.target;
        setMessage(textarea.value);

        textarea.style.height = '35px';
        textarea.style.height = `${textarea.scrollHeight}px`;
    }

    const toggleOpen = () => {
        setIsOpen(true);
    }

    const toggleClose = () => {
        setIsClosing(true);
        setTimeout(() => {
            setIsOpen(false);
            setIsClosing(false)
        }, 250)
    }

    const handleSendMessage = (e) => {
        e.preventDefault();
        sendMessage(message);
    }

    const handleTestMessage = (e) => {
        e.preventDefault();
        sendTestMessage(message);
    }

    const sendTestMessage = (userMessage) => {
        setMessages(prevMessages => [...prevMessages, { sender: 'user', text: userMessage }]);
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

    // Function to add a bot message to introduce Branbot
    const introduceBot = () => {
        const introMessage = "Hi, I'm Branbot. Ask me anything about Brandon, and I'll do my best to answer!";
        setMessages(prevMessages => [...prevMessages, { sender: 'bot', text: introMessage }]);
    };

    useEffect(() => {
        // When the chatbot opens, introduce Branbot
        if (isOpen && messages.length === 0) {
            introduceBot();
        }
    }, [isOpen]);


    return (
        <div className="chatbot-wrapper">

            {!isOpen && (
                <Tooltip text='Hi! Have any questions?' placement='left'>
                    <div className='branbot-toggle-container'>
                        <img className='branbot-logo' onClick={toggleOpen} src={BranbotIcon} alt='bot' />
                        <img className='branbot-wave' src={Wave} alt='wave' />
                    </div>
                </Tooltip>
            )}

            {isOpen && (
                <div className={`chatbot-container ${isOpen ? 'open' : ''} ${isClosing ? 'closing' : ''}`}>
                    <div onClick={toggleClose} className="close-icon">&times;</div>

                    <div className='chatbot-interface'>
                        <div className="messages">
                            {messages.map((msg, index) => (
                                <div key={index} className={`message ${msg.sender === 'user' ? 'user-message' : 'bot-message'}`}>
                                    {msg.text}
                                </div>
                            ))}
                        </div>
                        <form className='message-form' onSubmit={handleTestMessage}>
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
                </div>
            )}
        </div>
    );
};

export default Branbot;
