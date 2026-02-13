import React, { useState } from 'react';
import styles from './InputArea.module.css';

const InputArea = ({ onSendMessage }) => {
    const [input, setInput] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (input.trim()) {
            onSendMessage(input);
            setInput('');
        }
    };

    return (
        <form className={styles.inputContainer} onSubmit={handleSubmit}>
            <input
                type="text"
                className={styles.input}
                placeholder="Ask about gym classes..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button type="submit" className={styles.sendButton} disabled={!input.trim()}>
                ➤
            </button>
        </form>
    );
};

export default InputArea;
