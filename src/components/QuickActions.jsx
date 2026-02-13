import React from 'react';
import styles from './QuickActions.module.css';

const actions = [
    { label: "📅 Classes", text: "Show classes" },
    { label: "🥗 Diet Plan", text: "I need a diet plan" },
    { label: "🧘‍♀️ Trainers", text: "Show trainers" },
    { label: "🎟️ My Bookings", text: "Show my bookings" },
    { label: "💪 Muscle Gain", text: "I want muscle gain" },
    { label: "🔥 Weight Loss", text: "I want weight loss" }
];

const QuickActions = ({ onAction }) => {
    return (
        <div className={styles.container}>
            {actions.map((action, index) => (
                <button
                    key={index}
                    className={styles.chip}
                    onClick={() => onAction(action.text)}
                >
                    {action.label}
                </button>
            ))}
        </div>
    );
};

export default QuickActions;
