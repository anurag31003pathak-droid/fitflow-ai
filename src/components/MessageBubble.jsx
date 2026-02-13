import React, { useState, useEffect } from 'react';
import ClassCard from './ClassCard';
import TrainerCard from './TrainerCard';
import styles from './MessageBubble.module.css';

const Typewriter = ({ text, onComplete }) => {
    const [displayText, setDisplayText] = useState('');

    useEffect(() => {
        let i = 0;
        const timer = setInterval(() => {
            if (i < text.length) {
                setDisplayText(prev => prev + text.charAt(i));
                i++;
            } else {
                clearInterval(timer);
                if (onComplete) onComplete();
            }
        }, 20); // Typing speed

        return () => clearInterval(timer);
    }, [text, onComplete]);

    return <span>{displayText}</span>;
};

const MessageBubble = ({ message, isUser, onBook }) => {
    if (message.type === 'class') {
        return (
            <div className={`${styles.bubble} ${styles.bot} ${styles.cardsContainer}`}>
                {message.data.map(cls => (
                    <ClassCard key={cls.id} classInfo={cls} onBook={onBook} />
                ))}
            </div>
        )
    }

    if (message.type === 'trainer') {
        return (
            <div className={`${styles.bubble} ${styles.bot} ${styles.cardsContainer}`}>
                {message.data.map(tr => (
                    <TrainerCard key={tr.id} trainer={tr} />
                ))}
            </div>
        )
    }

    return (
        <div className={`${styles.bubble} ${isUser ? styles.user : styles.bot}`}>
            <div className={styles.content}>
                {isUser ? message.text : <Typewriter text={message.text} />}
            </div>
            <div className={styles.timestamp}>
                {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </div>
        </div>
    );
};

export default MessageBubble;
