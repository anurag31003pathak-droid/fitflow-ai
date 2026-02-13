# 🏋️‍♂️ FitFlow AI - Elite Gym Assistant (Hackathon Edition)

![FitFlow AI Banner](https://via.placeholder.com/1200x400/000000/39ff14?text=FitFlow+AI:+Cyberpunk+Edition)

> **"The Gym App from 2077."**  
> A high-performance, cyberpunk-styled gym chatbot built specifically for the Indian fitness community.

---

## 🚀 Project Overview

**FitFlow AI** is a React-based intelligent chatbot designed to streamline gym operations with a focus on speed, aesthetics, and hyper-localization. Unlike standard booking apps, FitFlow combines a **high-fidelity "Cyberpunk" aesthetic** with **zero-latency local processing** to deliver an instant, engaging user experience.

It features a custom-built Natural Language Processing (NLP) engine to understand user intents like "Book a class", "Show me diet plans", or "I want to gain muscle".

## ✨ Key Features

### 🇮🇳 1. Hyper-Localization (Indian Context)
*   **Cultural Fit**: Pre-loaded with popular Indian workouts like *"Bollywood Blast"* and *"Desi Dandiya Cardio"*.
*   **Local Currency**: All pricing and transactions displayed in **₹ (INR)**.
*   **Relatable Identity**: Features trainers with common Indian names (e.g., *Vikram Singh*, *Anjali Desai*) and speaks *Hinglish* ("Namaste", "Badhai Ho", "Samjha nahi").
*   **Diet Consulting**: Built-in **Veg/Non-Veg** nutrition plans tailored to Indian diets (Paneer, Dal Makhani, Soya Chunks).

### 🎨 2. High-Fidelity "Cyberpunk" UI
*   **Dynamic Background**: A living, breathing **3D moving grid** that adds depth to the application.
*   **Holographic Interactions**: Class cards feature a **3D Tilt Effect** that reacts to mouse movement using CSS `perspective`.
*   **Neon & Glass**: Extensive use of **Neon Green/Pink** accents, glowing borders, and glassmorphism for that "Future-Tech" vibe.
*   **Micro-Animations**:
    *   **Typing Effect**: Bot messages decode character-by-character like a retro terminal.
    *   **Live Status**: Pulsing "● LIVE" indicator.
    *   **CRT Overlay**: Subtle scanlines for a tactile, hacked-together feel.

### ⚡ 3. Core Functionality
*   **Smart Scheduling**: Browse classes by category, time, or trainer.
*   **Instant Booking**: Generates unique, cryptographic-style **Digital Tokens** (e.g., `IND-X9J2KL`) for entry verification.
*   **Waitlist System**: Automatically handles fully booked classes.
*   **My Bookings**: A CRT-styled modal for tracking your active gym sessions and viewing your Membership Card.

---

## 🛠️ Tech Stack

*   **Frontend Library**: [React 18](https://reactjs.org/)
*   **Build Tool**: [Vite](https://vitejs.dev/)
*   **Styling**: 
    *   CSS Modules (Scoped styling)
    *   CSS Variables (Theming)
    *   CSS3 3D Transforms (Tilt effects)
    *   Keyframe Animations
*   **State Management**: React `useState`, `useEffect` (No external heavy libraries)
*   **Fonts**: `Orbitron` (Headers), `JetBrains Mono` (Data/Text)

---

## 📂 Project Structure

```
fitflow-ai/
├── src/
│   ├── components/
│   │   ├── BookingModal.jsx       # 'My Bookings' CRT Overlay
│   │   ├── ChatContainer.jsx      # Main chat scroll view
│   │   ├── ClassCard.jsx          # 3D Tilt Cards for classes
│   │   ├── InputArea.jsx          # Neon glowing input field
│   │   ├── MessageBubble.jsx      # Typing effect & message rendering
│   │   ├── QuickActions.jsx       # Chip-based navigation
│   │   └── TrainerCard.jsx        # Trainer profile cards
│   ├── data/
│   │   └── gymData.js             # Compressed JSON data (Schedule, Trainers)
│   ├── styles/
│   │   └── global.css             # Cyberpunk theme variables & animations
│   ├── utils/
│   │   └── botLogic.js            # Custom NLP & Intent Intent Engine
│   ├── App.jsx                    # Main Application Controller
│   └── main.jsx                   # Entry point
└── README.md
```

---

## 🏃‍♂️ Getting Started

### Prerequisites
*   Node.js (v14 or higher)
*   npm (v6 or higher)

### Installation

1.  **Clone the repository**
    ```bash
    git clone https://github.com/anurag31003pathak-droid/fitflow-ai.git
    cd fitflow-ai
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Run lower-environment (Dev)**
    ```bash
    npm run dev
    ```

4.  **Open in Browser**
    Navigate to `http://localhost:5173` (or the port shown in your terminal).

---

## 🧠 How it Works

1.  **Intent Recognition**: When you type "I want to lose weight", `botLogic.js` scans for keywords (`weight`, `fat`, `loss`) and triggers the `RECOMMEND_WEIGHT_LOSS` intent.
2.  **Data Retrieval**: The app queries `gymData.js` to find classes with `intensity > 4` or names containing "Cardio".
3.  **Response Generation**: The bot constructs a response object and renders interactive `ClassCard` components.
4.  **Booking Flow**: Clicking "Book Now" sends a `BOOK_ID:<id>` intent. The system checks slot availability, decrements the count (locally), and issues a token.

---

## 🔮 Future Improvements

*   **Backend Integration**: Connect to Firebase/Supabase for real-time multi-user slot management.
*   **Voice Command**: Web Speech API integration for hands-free queries.
*   **AI Integration**: Connect to Gemini API for dynamic, non-scripted fitness advice.

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

*Built with ❤️ & slightly too much caffeine by [Your Name].*
