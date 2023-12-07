import React, { useState, useEffect, useRef } from 'react';
import BranbotIcon from '../branbot.svg';
import BranbotLogoText from '../branbot_logo_text.svg';
// import WaveBlue from '../wave.svg';
import WaveGreen from '../wave_green.svg';
import { Tooltip } from './Tooltip';

const Branbot = () => {

    const messagesContainerRef = useRef(null);
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

    const handleTestMessage = (e) => {
        e.preventDefault();
        sendTestMessage(message);
        setMessage('')

        // test reply for now
        setTimeout(() => {
            setMessages((prevMessages) => {
                return [
                    ...prevMessages,
                    {
                        sender: 'bot',
                        text: (
                            <div className='test-reply'>
                                My apologies, I am still under construction. Come back soon
                                and we'll chat :)
                                <br />
                                In the meantime, check out a recent project of Brandon's <a href="https://nexus-zblj.onrender.com/" target="_blank" rel="noopener noreferrer">here!</a>
                            </div>
                        ),
                    },
                ];
            });
        }, 1000);
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleTestMessage(e);
        }
    };

    // const handleSendMessage = (e) => {
    //     e.preventDefault();
    //     sendMessage(message);
    // }

    const sendTestMessage = (userMessage) => {
        setMessages(prevMessages => [...prevMessages, { sender: 'user', text: userMessage }]);
    }

    // const sendMessage = async (userMessage) => {
    //     setMessages(prevMessages => [...prevMessages, { sender: 'user', text: userMessage }]);

    //     try {
    //         const conversationHistory = messages.map(msg => {
    //             return {
    //                 role: msg.sender === 'user' ? 'user' : 'system',
    //                 content: msg.text
    //             };
    //         });

    //         const response = await fetch('https://f0pumc0bb6.execute-api.us-east-2.amazonaws.com/prod', {
    //             method: 'POST',
    //             body: JSON.stringify({ messages: conversationHistory }),
    //             headers: { 'Content-Type': 'application/json' }
    //         });

    //         if (!response.ok) {
    //             throw new Error('Network response was not ok');
    //         }

    //         const data = await response.json();

    //         setMessages(prevMessages => [...prevMessages, { sender: 'bot', text: data.reply }]);
    //     } catch (error) {
    //         console.error('Error:', error);
    //     }
    // };


    const introduceBot = () => {
        const introMessage = "Hi, I'm Branbot. Ask me anything about Brandon, and I'll do my best to answer!";
        setMessages(prevMessages => [...prevMessages, { sender: 'bot', text: introMessage }]);
    };

    useEffect(() => {
        if (isOpen && messages.length === 0) {
            introduceBot();
        }
    }, [isOpen]);

    useEffect(() => {
        if (messagesContainerRef.current) {
            messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
        }
    }, [messages]);


    return (
        <div className="chatbot-wrapper">

            {!isOpen && (
                <Tooltip text='Hi! Have any questions?' placement='left'>
                    <div className='branbot-toggle-container'>
                        <img className='branbot-logo' onClick={toggleOpen} src={BranbotIcon} alt='bot' />
                        {/* <img className='branbot-wave' src={WaveBlue} alt='wave' /> */}
                        <img className='branbot-wave' src={WaveGreen} alt='wave' />
                    </div>
                </Tooltip>
            )}

            {isOpen && (
                <div className={`chatbot-container ${isOpen ? 'open' : ''} ${isClosing ? 'closing' : ''}`}>
                    <div className='chatbot-header'>
                        <img className='branbot-logo-header' src={BranbotLogoText} alt="bot" />
                        {/* <div className='chatbot-header-text'>Branbot</div> */}
                        <div onClick={toggleClose} className="close-icon">&times;</div>
                    </div>

                    <div className='chatbot-interface'>
                        <div className="messages" ref={messagesContainerRef}>
                            {messages.map((msg, index) => (
                                <div key={index} className='message' >
                                    <div className={msg.sender === 'user' ? 'user-header' : 'bot-header'}>
                                        <div className='message-icon'>
                                            {/* {msg.sender === 'user' ? <i className="fas fa-user"></i> : <img src={BranbotIconPlain} className='branbot-logo-message' alt='bot_plain' />} */}
                                            {msg.sender === 'user' ? <i className="fas fa-user-circle"></i> : <img src={BranbotIcon} className='branbot-logo-message' alt='bot_plain' />}
                                        </div>
                                        <div className="message-sender">
                                            {msg.sender === 'user' ? 'You' : 'Branbot'}
                                        </div>
                                    </div>
                                    <div className={msg.sender === 'user' ? 'user-message' : 'bot-message'}>{msg.text}</div>
                                </div>
                            ))}
                        </div>
                        <form className='message-form' onSubmit={handleTestMessage}>
                            <textarea
                                className='message-input'
                                value={message}
                                onChange={handleMessage}
                                onKeyDown={handleKeyDown}
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
