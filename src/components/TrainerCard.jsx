import React from 'react';
import styles from './TrainerCard.module.css';

const TrainerCard = ({ trainer }) => {
    return (
        <div className={styles.card}>
            <div className={styles.avatar}>{trainer.emoji}</div>
            <div className={styles.info}>
                <h3 className={styles.name}>{trainer.name}</h3>
                <p className={styles.specialty}>{trainer.specialty}</p>
                <p className={styles.certs}>{trainer.certs}</p>
            </div>
        </div>
    );
};

export default TrainerCard;
