const facts = [
    "The Earth's atmosphere is composed of approximately 78% nitrogen, 21% oxygen, and trace amounts of other gases.",
    "The Great Wall of China is not a single continuous wall but a series of walls and fortifications built by various Chinese dynasties over centuries.",
    "The human brain is the most complex organ in the body, containing around 86 billion neurons.",
    "The Amazon Rainforest produces more than 20% of the world's oxygen supply.",
    "The speed of light in a vacuum is approximately 299,792 kilometers per second (about 186,282 miles per second).",
    "The coldest temperature ever recorded on Earth was -128.6 degrees Fahrenheit (-89.2 degrees Celsius) in Antarctica.",
    "The largest desert in the world is not the Sahara but Antarctica, which is considered a cold desert due to its low precipitation levels.",
    "The Tyrannosaurus rex lived during the late Cretaceous Period, around 68-66 million years ago.",
    "The smallest bone in the human body is the stapes bone located in the middle ear, measuring just a few millimeters.",
    "The Pacific Ocean is the largest ocean on Earth, covering more than 63 million square miles (165 million square kilometers)."
];

const dadJokes = [
    "I'm reading a book on anti-gravity. It's impossible to put down!",
    "What do you call fake spaghetti? An impasta!",
    "Why don't skeletons fight each other? They don't have the guts.",
    "I used to play piano by ear, but now I use my hands.",
    "Why don't scientists trust atoms? Because they make up everything!",
    "Did you hear about the cheese factory that exploded? There was nothing left but de-brie!",
    "I'm reading a book on the history of glue. I just can't seem to put it down!",
    "I only know 25 letters of the alphabet. I don't know y.",
    "I told my wife she was drawing her eyebrows too high. She looked surprised.",
    "Why don't eggs tell jokes? Because they might crack up!"
  ];

const astrologyOutcomes = {
    "Aries": [
        "You'll find success in a new venture this month. Stay bold and confident.",
        "Be cautious of impulsive decisions, especially in financial matters.",
        "Your energy levels will be high, making it a great time to tackle challenging tasks.",
        "Focus on improving relationships with loved ones for emotional fulfillment.",
        "Travel plans may bring unexpected opportunities for growth and adventure."
    ],
    "Taurus": [
        "Financial gains are on the horizon. Keep a close eye on investment opportunities.",
        "Take time to indulge in self-care activities for physical and mental well-being.",
        "Romantic relationships may face some challenges, but communication is key to resolving conflicts.",
        "A new hobby or interest will bring joy and relaxation into your life.",
        "Stay grounded and practical when making major decisions for long-term success."
    ],
    "Gemini": [
        "You'll experience a surge in creativity, making it an excellent time for artistic pursuits.",
        "Embrace spontaneity and say yes to new experiences that come your way.",
        "Communication skills will be highlighted, leading to successful negotiations and collaborations.",
        "Take time to focus on personal growth and self-reflection.",
        "Travel plans may lead to exciting encounters and opportunities for personal development."
    ],
    "Cancer": [
        "Family matters will take center stage this month. Show your loved ones how much you care.",
        "Listen to your intuition when faced with difficult decisions. Trust your inner voice.",
        "Financial stability is within reach, but avoid overspending on unnecessary luxuries.",
        "Emotional healing is important. Seek support from trusted friends or professionals.",
        "Stay optimistic and embrace change as an opportunity for growth and renewal."
    ],
    "Leo": [
        "Your charisma will be at its peak, attracting admiration and opportunities from others.",
        "Focus on personal goals and ambitions, and don't let distractions deter you.",
        "Romantic relationships will flourish with passion and excitement.",
        "Stay open to feedback from others to improve your skills and abilities.",
        "A leadership opportunity may arise. Step up and showcase your natural talents."
    ],
    "Virgo": [
        "Organization and attention to detail will be your strengths this month. Use them to your advantage.",
        "Take time to declutter your environment for improved mental clarity.",
        "Relationships with coworkers and peers will be harmonious. Collaboration is key to success.",
        "Focus on health and wellness goals. Small lifestyle changes can lead to big improvements.",
        "Financial planning and budgeting will help you achieve long-term stability and security."
    ],
    "Libra": [
        "Balance will be crucial in all aspects of your life this month. Find harmony between work and play.",
        "Listen to both your heart and your head when making decisions. Trust your instincts.",
        "Romantic relationships may face challenges, but compromise and understanding will strengthen bonds.",
        "Take time for self-care and relaxation. Remember to prioritize your own well-being.",
        "Social connections will bring joy and support. Nurture your friendships and community."
    ],
    "Scorpio": [
        "Intuition will guide you in important decisions. Trust your gut feelings.",
        "Embrace transformation and let go of what no longer serves you.",
        "Romantic relationships will deepen, but be open to vulnerability and communication.",
        "Focus on personal growth and healing. Face your fears and confront inner demons.",
        "Financial investments may bring lucrative returns. Stay attentive to opportunities."
    ],
    "Sagittarius": [
        "Adventure awaits! Take risks and explore new horizons.",
        "Stay optimistic and maintain a positive outlook, even in challenging situations.",
        "Romantic relationships will be exciting and spontaneous. Embrace the thrill of the unknown.",
        "Focus on expanding your knowledge and learning new skills.",
        "Travel plans may lead to unexpected encounters and opportunities for growth."
    ],
    "Capricorn": [
        "Hard work and determination will pay off this month. Stay focused on your goals.",
        "Practicality and discipline will be your strengths. Use them to overcome obstacles.",
        "Relationships with authority figures will be favorable. Seek guidance and mentorship.",
        "Take time for self-reflection and introspection. Clarify your values and priorities.",
        "Financial planning and savings will bring long-term stability and security."
    ],
    "Aquarius": [
        "Embrace your uniqueness and individuality. Don't be afraid to stand out from the crowd.",
        "Social connections will be important for personal and professional growth.",
        "Romantic relationships may bring surprises and unconventional experiences.",
        "Focus on humanitarian causes and making a positive impact in your community.",
        "Intellectual pursuits and creative endeavors will bring fulfillment and satisfaction."
    ],
    "Pisces": [
        "Trust your intuition and inner wisdom. It will guide you in the right direction.",
        "Embrace your sensitivity and empathy. They are your greatest strengths.",
        "Romantic relationships will be deep and meaningful. Connect on a spiritual level.",
        "Focus on creativity and artistic expression. Use your imagination to inspire others.",
        "Take time for self-care and introspection. Nurture your emotional well-being."
    ]
};

let factIndex = Math.floor(Math.random() * facts.length)
let dadJokeIndex = Math.floor(Math.random() * dadJokes.length)
let starSignIndex = Math.floor(Math.random() * 12)
let fortuneIndex = Math.floor(Math.random() * 5)

let starSign = Object.keys(astrologyOutcomes)

let fortune = astrologyOutcomes[starSign[starSignIndex]][fortuneIndex]


console.log('Welcome to the facts and advice bot!')

console.log(

`
Fact of the day: 

    ${facts[factIndex]}
    
Here's a joke for you: 
    
    ${dadJokes[dadJokeIndex]}
    
Astrology: 
    
    ${starSign[starSignIndex]}: ${fortune}

` )







