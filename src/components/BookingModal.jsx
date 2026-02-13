import React from 'react';
import styles from './BookingModal.module.css';

const BookingModal = ({ isOpen, onClose, bookings }) => {
    if (!isOpen) return null;

    return (
        <div className={styles.overlay}>
            <div className={styles.modal}>
                <div className={styles.header}>
                    <h2>🎟️ My Bookings</h2>
                    <button onClick={onClose} className={styles.closeBtn}>×</button>
                </div>

                {bookings.length === 0 ? (
                    <p className={styles.empty}>No active bookings found.</p>
                ) : (
                    <div className={styles.list}>
                        {bookings.map((booking, index) => (
                            <div key={index} className={styles.ticket}>
                                <div className={styles.ticketHeader}>
                                    <span className={styles.token}>{booking.token}</span>
                                    <span className={styles.status}>Confirmed</span>
                                </div>
                                <h3>{booking.className}</h3>
                                <p>🕒 {booking.time}</p>
                            </div>
                        ))}
                    </div>
                )}

                <div className={styles.membershipCard}>
                    <div className={styles.cardHeader}>
                        <span>FITFLOW ELITE</span>
                        <span className={styles.memberId}>ID: #FF-9988</span>
                    </div>
                    <div className={styles.cardBody}>
                        <h3>Javier Rodriguez</h3>
                        <p>Member since 2024</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;
