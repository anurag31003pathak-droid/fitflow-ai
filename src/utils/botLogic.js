import { getSchedule, getTrainers, GYM_DATA } from '../data/gymData';

// Expanded intent parser
const intents = {
    GREETING: ['hi', 'hello', 'hey', 'start', 'namaste'],
    BROWSE_CLASSES: ['browse', 'classes', 'schedule', 'types'],
    BROWSE_TRAINERS: ['trainers', 'coaches', 'who'],
    BOOK_CLASS: ['book', 'reserve', 'sign up'],
    GOAL_WEIGHT_LOSS: ['weight', 'fat', 'burn', 'cardio'],
    GOAL_MUSCLE: ['muscle', 'strength', 'gain', 'lift'],
    FAQ_PRICING: ['price', 'cost', 'membership', 'fee', 'paisa'],
    FAQ_HOURS: ['hours', 'open', 'close', 'time'],
    DIET_CONSULT: ['diet', 'food', 'nutrition', 'eat'],
    HELP: ['help', 'options', 'menu']
};

const determineIntent = (text) => {
    const lower = text.toLowerCase();

    if (text.startsWith('BOOK_ID:')) return 'EXECUTE_BOOKING';

    if (intents.DIET_CONSULT.some(w => lower.includes(w))) {
        if (lower.includes('non') || lower.includes('chicken') || lower.includes('egg')) return 'DIET_NON_VEG';
        if (lower.includes('veg')) return 'DIET_VEG';
        return 'ask_diet_pref'; // Intermediate state hook
    }

    // Goals
    if (intents.GOAL_WEIGHT_LOSS.some(w => lower.includes(w))) return 'RECOMMEND_WEIGHT_LOSS';
    if (intents.GOAL_MUSCLE.some(w => lower.includes(w))) return 'RECOMMEND_MUSCLE';

    // Browsing
    if (intents.BROWSE_CLASSES.some(w => lower.includes(w))) return 'BROWSE_CLASSES';
    if (intents.BROWSE_TRAINERS.some(w => lower.includes(w))) return 'BROWSE_TRAINERS';

    // FAQ
    if (intents.FAQ_PRICING.some(w => lower.includes(w))) return 'FAQ_PRICING';
    if (intents.FAQ_HOURS.some(w => lower.includes(w))) return 'FAQ_HOURS';

    if (intents.GREETING.some(w => lower.includes(w))) return 'GREETING';
    if (intents.BOOK_CLASS.some(w => lower.includes(w))) return 'BOOK_CLASS';

    return 'UNKNOWN';
};

export const processUserMessage = (text) => {
    const intent = determineIntent(text);

    switch (intent) {
        case 'GREETING':
            return [{ sender: 'bot', text: "Namaste! 🙏 FitFlow AI here.\nType 'Diet' for nutrition plans, 'Classes' to browse, or tell me your fitness goal!" }];

        case 'BROWSE_CLASSES':
            const schedule = getSchedule();
            return [
                { sender: 'bot', text: "Check out our desi-power packed classes:" },
                { sender: 'bot', type: 'class', data: schedule.slice(0, 5) }
            ];

        case 'RECOMMEND_WEIGHT_LOSS':
            const cardioClasses = getSchedule().filter(c => c.classInfo.intensity >= 4 || c.classInfo.name.includes('Blast') || c.classInfo.name.includes('Burn'));
            return [
                { sender: 'bot', text: "For weight loss, try our high-energy Bollywood & Cardio sessions:" },
                { sender: 'bot', type: 'class', data: cardioClasses.slice(0, 3) }
            ];

        case 'RECOMMEND_MUSCLE':
            const strengthClasses = getSchedule().filter(c => c.classInfo.name.includes('Iron') || c.classInfo.name.includes('Power'));
            return [
                { sender: 'bot', text: "Bhai/Behen, build strong muscles with these classes:" },
                { sender: 'bot', type: 'class', data: strengthClasses.slice(0, 3) }
            ];

        case 'BROWSE_TRAINERS':
            const trainers = getTrainers();
            return [
                { sender: 'bot', text: "Meet our top-notch coaches:" },
                { sender: 'bot', type: 'trainer', data: trainers }
            ];

        case 'ask_diet_pref':
            return [{ sender: 'bot', text: "Sure! Are you looking for a **Veg** 🥦 or **Non-Veg** 🍗 diet plan?" }];

        case 'DIET_VEG':
            return [{ sender: 'bot', text: "🥗 **Pure Veg Plan (Muscle Gain):**\n- Breakfast: Paneer Paratha + Curd\n- Lunch: Dal Makhani + Brown Rice + Salad\n- Snack: Roasted Chana\n- Dinner: Soya Chunks Curry + Roti" }];

        case 'DIET_NON_VEG':
            return [{ sender: 'bot', text: "🍗 **Non-Veg Plan (Lean Muscle):**\n- Breakfast: 3 Egg Whites Omelet + Toast\n- Lunch: Grilled Chicken Breast + Quinoa\n- Snack: Protein Shake\n- Dinner: Fish Curry + Rice" }];

        case 'FAQ_PRICING':
            return [{ sender: 'bot', text: "💎 Memberships start at ₹2000/month. Drop-in classes are ₹400-800 depending on the session." }];

        case 'FAQ_HOURS':
            return [{ sender: 'bot', text: "🕒 Open 5 AM - 11 PM daily. Sunday reduced hours." }];

        case 'BOOK_CLASS':
            return [{ sender: 'bot', text: "Please browse classes first, then click 'Book Now' on the class you want." }];

        case 'EXECUTE_BOOKING':
            const classId = text.split(':')[1];
            const bookedSession = getSchedule().find(s => s.id === classId);

            if (bookedSession && bookedSession.slots === 0) {
                return [{ sender: 'bot', text: `Arre! This class is full! 🛑 \nI've added you to the waitlist for ${bookedSession.classInfo.name}.` }];
            }

            // Generating a random digital token
            const token = `IND-${Math.random().toString(36).substr(2, 6).toUpperCase()}`;

            // Mock Reminder
            const reminderText = `📅 Calendar invite sent for ${bookedSession ? bookedSession.day : 'Day'} @ ${bookedSession ? bookedSession.hour : '00'}:00.`;

            return [{ sender: 'bot', text: `Booking Confirmed! Badhai Ho! 🎉\nClass: ${bookedSession ? bookedSession.classInfo.name : 'Session'}\nToken: ${token}\n\n${reminderText}` }];

        default:
            return [{ sender: 'bot', text: "Samjha nahi... Try 'Show classes', 'Diet Plan', or 'Trainers'." }];
    }
};
