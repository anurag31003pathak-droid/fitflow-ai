🏋️ FitFlow AI — Cyberpunk Gym Assistant

The Gym App from 2077 — built for today.

FitFlow AI is a high-performance gym assistant designed to modernize the fitness experience through intelligent chat interactions, lightning-fast performance, and a futuristic cyberpunk interface.

Built during a hackathon with a strong focus on design + usability, this project proves that gym software does not have to feel outdated or transactional — it can be immersive, responsive, and genuinely enjoyable to use.

🌟 Why FitFlow AI?

Most gym apps are slow, cluttered, and generic.

FitFlow AI takes a different approach:

⚡ Instant responses with local processing

🎯 Built for Indian users, not retrofitted later

🎨 Visually unforgettable UI

🧠 Smart intent detection without heavy AI dependencies

🪶 Lightweight architecture

The result is an app that feels futuristic but remains practical.

🚀 Features
🇮🇳 Designed for the Indian Fitness Ecosystem

FitFlow AI was built with localization as a priority — not an afterthought.

Supports ₹ INR for pricing

Includes culturally familiar workouts like Bollywood Blast and Desi Dandiya Cardio

Trainers have relatable identities (Vikram Singh, Anjali Desai)

Understands Hinglish-style interactions

Provides Veg & Non-Veg diet plans based on real Indian food habits

This makes the experience immediately comfortable for users.

🎨 Cyberpunk UI That Actually Serves UX

Instead of adding effects just for aesthetics, every visual element supports engagement.

Highlights include:

A living 3D grid background for depth

Mouse-reactive 3D tilt class cards

Neon accents with glassmorphism

Terminal-style typing animations

Pulsing LIVE indicators

Subtle CRT scanlines for personality

The interface is bold — but never distracting.

⚡ Core Capabilities

✅ Smart class discovery by trainer, time, or category
✅ One-click booking with unique digital tokens
✅ Automatic waitlist handling
✅ “My Bookings” dashboard with membership view
✅ Fast, conversational chatbot navigation

Everything is optimized to reduce friction.

🧠 How the System Works

FitFlow AI uses a custom-built intent engine instead of relying on heavy external AI services.

Flow:

1. Intent Detection
User message → keyword scan → mapped intent
Example:
“I want to lose weight” → RECOMMEND_WEIGHT_LOSS

2. Data Query
The system checks gymData.js for matching sessions (e.g., high intensity or cardio).

3. UI Rendering
Interactive components like ClassCard present the results instantly.

4. Booking Engine
When a class is booked:

Availability is verified

Slots are updated locally

A cryptographic-style token is generated
(Example: IND-X9J2KL)

No unnecessary backend calls. No lag.

🛠 Tech Stack

Frontend: React 18
Build Tool: Vite

Styling:

CSS Modules

CSS Variables

CSS3 3D transforms

Keyframe animations

State Management:
React useState + useEffect
(Intentionally avoided heavy libraries to keep performance tight.)

Fonts:
Orbitron — headings
JetBrains Mono — UI/data

📁 Project Architecture
fitflow-ai/
├── src/
│   ├── components/
│   │   ├── BookingModal.jsx
│   │   ├── ChatContainer.jsx
│   │   ├── ClassCard.jsx
│   │   ├── InputArea.jsx
│   │   ├── MessageBubble.jsx
│   │   ├── QuickActions.jsx
│   │   └── TrainerCard.jsx
│   ├── data/
│   │   └── gymData.js
│   ├── styles/
│   │   └── global.css
│   ├── utils/
│   │   └── botLogic.js
│   ├── App.jsx
│   └── main.jsx


Clean structure. Easy to scale.

🏃 Getting Started
Prerequisites

Node.js ≥ 14

npm ≥ 6

Installation
git clone https://github.com/anurag31003pathak-droid/fitflow-ai.git
cd fitflow-ai
npm install
npm run dev


Open:

http://localhost:5173

🔮 What’s Next?

Planned upgrades include:

🔗 Firebase/Supabase for real-time bookings

🎙 Voice commands via Web Speech API

🤖 Advanced AI integration for adaptive fitness advice

📱 Mobile-first optimization

🧾 Trainer analytics dashboard

FitFlow AI is built to evolve.

🤝 Contributing

Have an idea that can improve FitFlow?

Fork the repo

Create a feature branch

Commit your changes

Push your branch

Open a PR

Great projects grow through collaboration.

📜 License

Licensed under the MIT License — free to use, modify, and distribute.

👨‍💻 Author

Anurag Pathak

Built with focus, curiosity, and more caffeine than recommended.
