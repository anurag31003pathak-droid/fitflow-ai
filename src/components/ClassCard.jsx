import React from 'react';
import styles from './ClassCard.module.css';

const ClassCard = ({ classInfo, onBook }) => {
    const { id, day, hour, classInfo: info, trainer, slots, price } = classInfo;

    return (
        <div className={styles.card}>
            <div className={styles.header}>
                <span className={styles.time}>{day} @ {hour}:00</span>
                <span className={styles.price}>₹{price}</span>
            </div>
            <h3 className={styles.title}>{info.name}</h3>
            <p className={styles.trainer}>with {trainer.name} {trainer.emoji}</p>

            <div className={styles.footer}>
                <span className={styles.slots}>{slots} spots left</span>
                <button
                    className={styles.bookBtn}
                    onClick={() => onBook(id)}
                >
                    {slots > 0 ? 'Book Now' : 'Join Waitlist'}
                </button>
            </div>
        </div>
    );
};

export default ClassCard;
