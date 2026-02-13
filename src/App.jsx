import { useState } from 'react';
import ChatContainer from './components/ChatContainer';
import InputArea from './components/InputArea';
import { processUserMessage } from './utils/botLogic';
import styles from './App.module.css';

import QuickActions from './components/QuickActions';
import BookingModal from './components/BookingModal';

function App() {
  const [messages, setMessages] = useState([
    { sender: 'bot', text: "Namaste! 🙏 FitFlow AI here.\nType 'Diet' for nutrition plans, 'Classes' to browse, or tell me your fitness goal!" }
  ]);
  const [bookings, setBookings] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSendMessage = (text) => {
    // Quick Action Handler for specific UI triggers
    if (text === "Show my bookings") {
      setIsModalOpen(true);
      return;
    }

    // Add user message
    const userMsg = { sender: 'user', text };
    setMessages(prev => [...prev, userMsg]);

    // Process with bot logic
    setTimeout(() => {
      const botResponse = processUserMessage(text);
      setMessages(prev => [...prev, ...botResponse]);
    }, 500); // Simulate "typing" delay
  };

  const handleBookClass = (classId) => {
    const response = processUserMessage(`BOOK_ID:${classId}`);

    // Extract token and info if booking successful
    const botMsg = response[0].text;
    if (botMsg.includes("Confirmed")) {
      const token = botMsg.match(/Token: (IND-[A-Z0-9]+)/)?.[1] || "PENDING";
      const className = botMsg.match(/Class: (.*?)(\n|$)/)?.[1] || "Class Session";
      setBookings(prev => [...prev, { token, className, time: "Today @ 7:00 PM" }]); // Mock time for now
    }

    setMessages(prev => [...prev, ...response]);
  };

  return (
    <div className={styles.appContainer}>
      <header className={styles.header}>
        <h1>FitFlow AI <span className={styles.liveIndicator}>● LIVE</span></h1>
      </header>
      <ChatContainer messages={messages} onBook={handleBookClass} />
      <QuickActions onAction={handleSendMessage} />
      <InputArea onSendMessage={handleSendMessage} />
      <BookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        bookings={bookings}
      />
    </div>
  );
}

export default App;
