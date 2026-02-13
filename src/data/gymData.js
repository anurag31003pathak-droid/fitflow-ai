export const GYM_DATA = {
    // Trainers: id -> [Name, Specialty, Certifications, ImagePlaceholder]
    t: {
        1: ["Rahul Sharma", "HIIT & Cardio", "ACE, CrossFit L2", "👨‍🏫"],
        2: ["Priyanka Kapoor", "Yoga & Flexibility", "RYT-500", "🧘‍♀️"],
        3: ["Vikram Singh", "Strength & Power", "CSCS, Indian Weightlifting Fed", "🏋️‍♂️"],
        4: ["Anjali Desai", "Bollywood Dance & Cardio", "Zumba Certified", "💃"]
    },
    // Class Types: id -> [Name, Description, Intensity(1-5)]
    c: {
        1: ["Morning Burn", "High intensity interval training to start your day.", 5],
        2: ["Power Yoga", "Traditional yoga with a strength focus.", 3],
        3: ["Desi Dandiya Cardio", "Fun cardio workout with Dandiya sticks.", 4],
        4: ["Bollywood Blast", "Dance your way to fitness with Bollywood hits.", 4],
        5: ["Iron Pump", "Heavy lifting and compound movements.", 5]
    },
    // Schedule: [Day(0=Sun, 6=Sat), Hour(24h), ClassTypeID, TrainerID, Slots, Price(INR)]
    s: [
        [1, 7, 1, 1, 20, 500],
        [1, 9, 2, 2, 15, 600],
        [1, 18, 5, 3, 10, 800],
        [2, 8, 4, 4, 25, 450],
        [2, 12, 5, 1, 20, 500],
        [2, 17, 2, 2, 15, 600],
        [3, 7, 5, 3, 10, 800],
        [3, 19, 3, 4, 30, 400],
        [4, 10, 2, 2, 15, 600],
        [4, 16, 4, 4, 25, 450],
        [5, 6, 1, 1, 25, 500],
        [5, 18, 3, 4, 30, 400]
    ]
};

// Helper: Expand Schedule
export const getSchedule = () => {
    return GYM_DATA.s.map((session, idx) => ({
        id: `sess-${idx}`,
        day: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][session[0]],
        hour: session[1],
        classInfo: {
            name: GYM_DATA.c[session[2]][0],
            desc: GYM_DATA.c[session[2]][1],
            intensity: GYM_DATA.c[session[2]][2],
        },
        trainer: {
            name: GYM_DATA.t[session[3]][0],
            specialty: GYM_DATA.t[session[3]][1],
            certs: GYM_DATA.t[session[3]][2],
            emoji: GYM_DATA.t[session[3]][3]
        },
        slots: session[4],
        price: session[5]
    }));
};

// Helper: Get Trainers
export const getTrainers = () => {
    return Object.entries(GYM_DATA.t).map(([id, data]) => ({
        id,
        name: data[0],
        specialty: data[1],
        certs: data[2],
        emoji: data[3]
    }));
};
