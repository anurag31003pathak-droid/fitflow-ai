import React, { useEffect, useRef } from 'react';
import MessageBubble from './MessageBubble';
import styles from './ChatContainer.module.css';

const ChatContainer = ({ messages, onBook }) => {
    const endRef = useRef(null);

    useEffect(() => {
        endRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    return (
        <div className={styles.container}>
            {messages.map((msg, index) => (
                <MessageBubble key={index} message={msg} isUser={msg.sender === 'user'} onBook={onBook} />
            ))}
            <div ref={endRef} />
        </div>
    );
};

export default ChatContainer;
