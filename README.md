🏋️‍♂️ FitFlow AI – Elite Gym Assistant (Hackathon Edition)

“The Gym App from 2077.”
A fast, visually striking, cyberpunk-inspired gym assistant built with the Indian fitness community in mind.

🚀 Project Overview

FitFlow AI is a React-powered intelligent gym chatbot created to simplify gym operations while delivering a smooth and engaging user experience. Instead of feeling like a typical booking app, FitFlow focuses on speed, design, and localization.

The app runs with near-zero latency using local processing, and features a custom Natural Language Processing (NLP) engine capable of understanding real user requests such as:

“Book a class”

“Show me diet plans”

“I want to gain muscle”

The goal behind this project was simple — build something that looks futuristic but remains practical for everyday gym users in India.

✨ Key Features
🇮🇳 Hyper-Localization (Built for India)

FitFlow AI is designed to feel familiar and relevant to Indian users.

Cultural Relevance: Includes workouts like Bollywood Blast and Desi Dandiya Cardio.

Local Currency: All pricing is displayed in ₹ (INR).

Relatable Identity: Trainers have familiar Indian names such as Vikram Singh and Anjali Desai, and the chatbot comfortably switches to Hinglish when needed (“Namaste”, “Samjha nahi”, etc.).

Diet Support: Offers both Veg and Non-Veg diet plans based on common Indian foods like Paneer, Dal Makhani, and Soya Chunks.

🎨 Cyberpunk-Inspired UI

The interface is heavily inspired by futuristic cyberpunk aesthetics while staying clean and usable.

Dynamic Background: A moving 3D grid creates depth and energy.

Interactive Cards: Class cards respond to mouse movement with a subtle 3D tilt using CSS perspective.

Neon + Glass Effects: Neon green/pink highlights combined with glassmorphism give the app a modern tech feel.

Micro-Animations for Better UX:

Typing animation that mimics a retro terminal.

Pulsing ● LIVE status indicator.

CRT-style scanlines for a slightly nostalgic, hacked-terminal vibe.

⚡ Core Functionality

FitFlow isn’t just about looks — it handles real gym workflows efficiently.

Smart Scheduling: Browse classes by trainer, category, or time.

Instant Booking: Generates unique digital entry tokens (example: IND-X9J2KL).

Waitlist System: Automatically manages fully booked sessions.

My Bookings: A CRT-themed modal that lets users track sessions and access their membership card.

🛠️ Tech Stack

Frontend: React 18
Build Tool: Vite

Styling Approach:

CSS Modules for scoped styling

CSS Variables for theming

CSS3 3D transforms for tilt effects

Keyframe animations

State Management:

React useState

React useEffect
(No heavy external libraries — intentionally kept lightweight.)

Fonts:

Orbitron – Headers

JetBrains Mono – Data & text

📂 Project Structure
fitflow-ai/
├── src/
│   ├── components/
│   │   ├── BookingModal.jsx       # 'My Bookings' CRT overlay
│   │   ├── ChatContainer.jsx      # Main chat interface
│   │   ├── ClassCard.jsx          # Interactive 3D class cards
│   │   ├── InputArea.jsx          # Neon-styled input
│   │   ├── MessageBubble.jsx      # Typing animation & messages
│   │   ├── QuickActions.jsx       # Chip-based navigation
│   │   └── TrainerCard.jsx        # Trainer profile cards
│   ├── data/
│   │   └── gymData.js             # Compressed schedule & trainer data
│   ├── styles/
│   │   └── global.css             # Theme variables & animations
│   ├── utils/
│   │   └── botLogic.js            # Custom NLP + intent engine
│   ├── App.jsx                    # Main app controller
│   └── main.jsx                   # Entry point
└── README.md

🏃‍♂️ Getting Started
Prerequisites

Make sure you have:

Node.js (v14 or higher)

npm (v6 or higher)

Installation

1. Clone the repository

git clone https://github.com/anurag31003pathak-droid/fitflow-ai.git
cd fitflow-ai


2. Install dependencies

npm install


3. Run the development server

npm run dev


4. Open your browser

http://localhost:5173


(or whichever port appears in your terminal)

🧠 How It Works

1. Intent Recognition
When a user types something like “I want to lose weight”, the botLogic.js module scans for keywords such as weight, fat, and loss to trigger the appropriate intent (RECOMMEND_WEIGHT_LOSS).

2. Data Retrieval
The system queries gymData.js to locate suitable classes — for example, sessions with higher intensity or cardio-focused workouts.

3. Response Generation
The chatbot builds a response and renders interactive components like ClassCard.

4. Booking Flow
Selecting Book Now sends a BOOK_ID:<id> intent. The app checks availability, updates the slot count locally, and generates a digital token.

🔮 Future Improvements

Planned upgrades for the next iteration:

Backend integration with Firebase or Supabase for real-time multi-user bookings.

Voice command support using the Web Speech API.

Advanced AI integration (Gemini/OpenAI) for more dynamic and personalized fitness guidance.

🤝 Contributing

Contributions are always welcome!

Fork the repository

Create a branch (git checkout -b feature/AmazingFeature)

Commit your changes (git commit -m "Add AmazingFeature")

Push to your branch (git push origin feature/AmazingFeature)

Open a Pull Request

📄 License

This project is open-source and available under the MIT License.

Built with ❤️ (and probably too much caffeine) by Anurag Pathak.
