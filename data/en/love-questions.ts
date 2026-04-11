export interface LoveOption {
  text: string
  score: Record<string, number>
}

export interface LoveQuestion {
  id: number
  question: string
  options: LoveOption[]
}

export const loveQuestions: LoveQuestion[] = [
  {
    id: 1,
    question: "When you develop feelings for someone you just met, do you?",
    options: [
      { text: "Approach them directly and start a conversation. Hesitation means losing the chance!", score: { 열정형: 3, 자유형: 2, 독립형: 1 } },
      { text: "Observe them slowly and understand their personality before taking action.", score: { 신중형: 3, 현실형: 2, 분석형: 1 } },
      { text: "Send them a small gift or heartfelt message to express your feelings.", score: { 낭만형: 3, 헌신형: 2, 감성형: 2 } },
      { text: "Wait for a natural situation to develop before making a move.", score: { 감성형: 3, 신중형: 2, 헌신형: 1 } }
    ]
  },
  {
    id: 2,
    question: "What is your ideal date with a romantic partner?",
    options: [
      { text: "A spontaneous trip to explore new places together with excitement.", score: { 자유형: 3, 열정형: 2, 독립형: 2 } },
      { text: "Spending hours at your favorite café sharing deep conversations.", score: { 감성형: 3, 헌신형: 2, 낭만형: 2 } },
      { text: "Creating unforgettable memories through planned special events.", score: { 낭만형: 3, 열정형: 2, 헌신형: 1 } },
      { text: "Spending comfortable time together cooking or watching movies at home.", score: { 현실형: 3, 헌신형: 2, 신중형: 1 } }
    ]
  },
  {
    id: 3,
    question: "When your partner suddenly becomes unreachable, you?",
    options: [
      { text: "Feel anxious and worried, and keep trying to contact them.", score: { 헌신형: 3, 열정형: 2, 감성형: 2 } },
      { text: "Think they must be busy and focus on your own things.", score: { 독립형: 3, 자유형: 2, 현실형: 2 } },
      { text: "Wonder if you did something wrong and reflect on your actions.", score: { 신중형: 3, 감성형: 2, 헌신형: 1 } },
      { text: "Assume they have their reasons and wait patiently without stress.", score: { 낭만형: 2, 현실형: 2, 신중형: 2 } }
    ]
  },
  {
    id: 4,
    question: "When you're angry at your partner, you?",
    options: [
      { text: "Say it right away. Emotions need to be expressed immediately.", score: { 열정형: 3, 독립형: 2, 자유형: 1 } },
      { text: "Wait until emotions cool down, then talk calmly.", score: { 신중형: 3, 현실형: 2, 낭만형: 1 } },
      { text: "Feel hurt but make an effort to understand them first.", score: { 헌신형: 3, 감성형: 2, 낭만형: 2 } },
      { text: "Need some alone time and temporarily distance yourself.", score: { 독립형: 3, 자유형: 2, 신중형: 1 } }
    ]
  },
  {
    id: 5,
    question: "What matters most to you in a romantic relationship?",
    options: [
      { text: "Excitement and passion — if there's no butterflies, it's not love.", score: { 열정형: 3, 낭만형: 2, 자유형: 1 } },
      { text: "Trust and stability — someone dependable is the best.", score: { 현실형: 3, 헌신형: 2, 신중형: 2 } },
      { text: "Deep emotional connection — true love means hearts in sync.", score: { 감성형: 3, 헌신형: 2, 낭만형: 2 } },
      { text: "Respecting each other's freedom — personal space must be honored.", score: { 독립형: 3, 자유형: 3, 신중형: 1 } }
    ]
  },
  {
    id: 6,
    question: "On your partner's birthday, you?",
    options: [
      { text: "Plan a perfect surprise event months in advance.", score: { 낭만형: 3, 열정형: 2, 헌신형: 2 } },
      { text: "Carefully figure out what they truly need and gift that.", score: { 헌신형: 3, 현실형: 2, 신중형: 1 } },
      { text: "Give a special trip or a new experience as a gift.", score: { 자유형: 3, 열정형: 2, 독립형: 1 } },
      { text: "Give a heartfelt handwritten letter with a small meaningful gift.", score: { 감성형: 3, 낭만형: 2, 헌신형: 2 } }
    ]
  },
  {
    id: 7,
    question: "What is your ideal relationship duration?",
    options: [
      { text: "Short and intense! The more it burns like fire, the better.", score: { 열정형: 3, 자유형: 2, 독립형: 1 } },
      { text: "A slowly deepening love — I want to be together for a long time.", score: { 헌신형: 3, 현실형: 2, 낭만형: 2 } },
      { text: "Duration doesn't matter — as long as we're truly happy together.", score: { 감성형: 3, 신중형: 2, 낭만형: 1 } },
      { text: "As long as we help each other grow, we can be together forever.", score: { 독립형: 3, 신중형: 2, 현실형: 2 } }
    ]
  },
  {
    id: 8,
    question: "If your partner has completely different hobbies and interests from yours?",
    options: [
      { text: "It's a chance to explore each other's worlds! It could be fun to try together.", score: { 자유형: 3, 열정형: 2, 낭만형: 1 } },
      { text: "Enjoy your own things separately while creating shared interests together.", score: { 독립형: 3, 현실형: 2, 신중형: 1 } },
      { text: "Learn their hobbies to understand them more deeply.", score: { 헌신형: 3, 감성형: 2, 낭만형: 2 } },
      { text: "As long as we understand and consider each other, differences are fine.", score: { 신중형: 3, 현실형: 2, 감성형: 1 } }
    ]
  },
  {
    id: 9,
    question: "When it comes to confessing your feelings, how do you do it?",
    options: [
      { text: "Confess directly and honestly without reading the room.", score: { 열정형: 3, 독립형: 2, 자유형: 1 } },
      { text: "Wait for the perfect moment and prepare a touching confession.", score: { 낭만형: 3, 헌신형: 2, 열정형: 1 } },
      { text: "Rather than confessing, you gradually grow closer until you're naturally together.", score: { 감성형: 3, 신중형: 2, 현실형: 2 } },
      { text: "Carefully confirm their feelings first, then express yours thoughtfully.", score: { 신중형: 3, 현실형: 2, 헌신형: 1 } }
    ]
  },
  {
    id: 10,
    question: "What is absolutely non-negotiable in a relationship?",
    options: [
      { text: "Honesty and transparency — lying is unforgivable.", score: { 열정형: 2, 현실형: 2, 독립형: 2, 신중형: 2 } },
      { text: "Emotional support and empathy — they must truly understand my heart.", score: { 감성형: 3, 헌신형: 2, 낭만형: 2 } },
      { text: "Respecting each other's freedom and personal space — can't feel suffocated.", score: { 독립형: 3, 자유형: 3, 신중형: 1 } },
      { text: "A shared vision and goals for the future together.", score: { 현실형: 3, 헌신형: 2, 신중형: 2 } }
    ]
  },
  {
    id: 11,
    question: "When your partner is going through a tough time, you?",
    options: [
      { text: "Drop everything and be by their side.", score: { 헌신형: 3, 감성형: 2, 낭만형: 1 } },
      { text: "Prepare a gift or event to lift their spirits.", score: { 낭만형: 3, 열정형: 2, 헌신형: 1 } },
      { text: "Ask what they need and help accordingly.", score: { 현실형: 3, 신중형: 2, 헌신형: 2 } },
      { text: "Trust that time will heal and quietly wait for them.", score: { 독립형: 2, 자유형: 2, 신중형: 2 } }
    ]
  },
  {
    id: 12,
    question: "What is your view on jealousy in a relationship?",
    options: [
      { text: "Jealousy is proof of love — some of it is natural.", score: { 열정형: 3, 헌신형: 2, 감성형: 1 } },
      { text: "Jealousy comes from lack of trust — it should be overcome.", score: { 현실형: 3, 신중형: 2, 독립형: 1 } },
      { text: "Rather than jealousy, I prefer to resolve things through honest conversation.", score: { 낭만형: 2, 자유형: 2, 신중형: 2 } },
      { text: "I trust my partner enough that jealousy rarely comes up.", score: { 독립형: 3, 자유형: 3 } }
    ]
  },
  {
    id: 13,
    question: "How often do you prefer to communicate with your partner?",
    options: [
      { text: "Texting or calling throughout the day — constant contact feels good.", score: { 헌신형: 3, 열정형: 2, 감성형: 1 } },
      { text: "Good morning and good night messages, then only when needed.", score: { 현실형: 3, 신중형: 2, 낭만형: 1 } },
      { text: "Occasional long, heartfelt messages that carry real emotion.", score: { 감성형: 3, 낭만형: 2, 헌신형: 1 } },
      { text: "Frequency doesn't matter — quality time when we're together is what counts.", score: { 독립형: 3, 자유형: 2, 현실형: 1 } }
    ]
  },
  {
    id: 14,
    question: "What is the most important quality in your ideal partner?",
    options: [
      { text: "Magnetic charm — they need to make my heart race.", score: { 열정형: 3, 낭만형: 2, 자유형: 1 } },
      { text: "A sense of security and trustworthiness that puts me at ease.", score: { 현실형: 3, 헌신형: 2, 신중형: 2 } },
      { text: "Deep empathy that truly understands my emotions.", score: { 감성형: 3, 헌신형: 2, 낭만형: 1 } },
      { text: "Independence and a strong sense of self in their own life.", score: { 독립형: 3, 자유형: 3, 현실형: 1 } }
    ]
  },
  {
    id: 15,
    question: "When you feel your relationship is drifting apart, you?",
    options: [
      { text: "Take initiative and actively try to reconnect.", score: { 열정형: 3, 헌신형: 2, 낭만형: 1 } },
      { text: "Understand the cause and calmly request a conversation.", score: { 신중형: 3, 현실형: 2, 감성형: 1 } },
      { text: "Express your feelings honestly and check each other's hearts.", score: { 감성형: 3, 낭만형: 2, 헌신형: 2 } },
      { text: "Give them the space they seem to want and wait.", score: { 독립형: 3, 자유형: 2, 신중형: 2 } }
    ]
  },
  {
    id: 16,
    question: "Once a conflict with your partner is resolved, you?",
    options: [
      { text: "Want to make the reconciliation moment special and memorable.", score: { 낭만형: 3, 열정형: 2, 감성형: 1 } },
      { text: "Make sure to discuss how to prevent the same conflict from repeating.", score: { 현실형: 3, 신중형: 2, 독립형: 1 } },
      { text: "Feel relieved that you've both opened up and sense you've grown closer.", score: { 감성형: 3, 헌신형: 2, 낭만형: 1 } },
      { text: "Want to quickly return to normal — you don't like dragging out conflicts.", score: { 독립형: 2, 자유형: 2, 현실형: 2 } }
    ]
  },
  {
    id: 17,
    question: "When talking about the future with your partner, you?",
    options: [
      { text: "Want to make concrete plans together — marriage, where to live, etc.", score: { 현실형: 3, 헌신형: 2, 신중형: 2 } },
      { text: "Love painting an exciting future and sharing your dreams.", score: { 낭만형: 3, 감성형: 2, 열정형: 1 } },
      { text: "Prefer to focus on the present moment rather than the future.", score: { 자유형: 3, 열정형: 2, 독립형: 1 } },
      { text: "Want to check if your growth and life directions are aligned.", score: { 독립형: 3, 신중형: 2, 현실형: 1 } }
    ]
  },
  {
    id: 18,
    question: "When planning a trip with your partner, you?",
    options: [
      { text: "Research everything in advance and prepare a perfect itinerary.", score: { 헌신형: 3, 낭만형: 2, 현실형: 1 } },
      { text: "Enjoy the process of planning together — it's part of the fun.", score: { 감성형: 3, 낭만형: 2, 열정형: 1 } },
      { text: "Just decide the destination and figure the rest out spontaneously.", score: { 자유형: 3, 열정형: 2, 독립형: 1 } },
      { text: "Each share your wishes honestly and find a reasonable compromise.", score: { 신중형: 3, 현실형: 2, 독립형: 1 } }
    ]
  },
  {
    id: 19,
    question: "If you find out your partner lied to you, you?",
    options: [
      { text: "Confront them immediately and demand an honest explanation.", score: { 열정형: 3, 독립형: 2, 현실형: 1 } },
      { text: "Try to understand why they did it, but feel a deep sense of betrayal.", score: { 감성형: 3, 헌신형: 2, 낭만형: 1 } },
      { text: "Calm down first, then carefully assess the situation before talking.", score: { 신중형: 3, 현실형: 2, 독립형: 1 } },
      { text: "Assess whether trust can be restored, depending on the circumstances.", score: { 현실형: 3, 신중형: 2, 독립형: 2 } }
    ]
  },
  {
    id: 20,
    question: "What kind of presence do you want to be for your partner?",
    options: [
      { text: "A dependable pillar of support who is always by their side.", score: { 헌신형: 3, 현실형: 2, 감성형: 1 } },
      { text: "A special person who brings excitement and energy to their everyday life.", score: { 열정형: 3, 낭만형: 2, 자유형: 1 } },
      { text: "A true soulmate they can share deep emotions and thoughts with.", score: { 감성형: 3, 낭만형: 2, 헌신형: 1 } },
      { text: "An equal and independent partner who supports each other's growth.", score: { 독립형: 3, 자유형: 2, 신중형: 1 } }
    ]
  },
  {
    id: 21,
    question: "When you feel the love in your relationship fading, you?",
    options: [
      { text: "Actively plan events and surprises to bring back the spark.", score: { 열정형: 3, 낭만형: 2, 헌신형: 1 } },
      { text: "Have an honest talk and reflect on the relationship together.", score: { 감성형: 3, 신중형: 2, 헌신형: 1 } },
      { text: "See it as a natural evolution into a deeper, more stable love.", score: { 현실형: 3, 독립형: 2, 신중형: 2 } },
      { text: "Give each other more alone time and try to show new sides of yourselves.", score: { 자유형: 3, 독립형: 2, 낭만형: 1 } }
    ]
  },
  {
    id: 22,
    question: "Do you prioritize your relationship or your personal growth?",
    options: [
      { text: "The relationship comes first when someone you love is involved.", score: { 헌신형: 3, 열정형: 2, 감성형: 1 } },
      { text: "Both my goals and the relationship matter — I seek a balance.", score: { 현실형: 3, 신중형: 2, 낭만형: 1 } },
      { text: "I need to be happy myself to be a good partner.", score: { 독립형: 3, 자유형: 2, 현실형: 1 } },
      { text: "It depends on the situation — I stay flexible and find balance.", score: { 자유형: 2, 신중형: 2, 독립형: 2 } }
    ]
  },
  {
    id: 23,
    question: "If your partner doesn't get along well with your friends, you?",
    options: [
      { text: "Create more opportunities for them to meet naturally and bond.", score: { 헌신형: 2, 낭만형: 2, 감성형: 2 } },
      { text: "Think it's fine to keep your friend group and partner separate.", score: { 독립형: 3, 자유형: 2, 현실형: 1 } },
      { text: "Believe time will eventually ease the awkwardness and trust the process.", score: { 신중형: 3, 현실형: 2, 낭만형: 1 } },
      { text: "Talk honestly with your partner and work together on a solution.", score: { 감성형: 3, 열정형: 2, 헌신형: 1 } }
    ]
  },
  {
    id: 24,
    question: "When the early excitement in your relationship fades, you?",
    options: [
      { text: "Try to revive that excitement by doing something new.", score: { 열정형: 3, 낭만형: 2, 헌신형: 1 } },
      { text: "See it as a sign that you've grown into a deeper, trusting bond.", score: { 현실형: 3, 헌신형: 2, 신중형: 2 } },
      { text: "Find happiness and peace in simply being together.", score: { 감성형: 3, 헌신형: 2, 낭만형: 1 } },
      { text: "Seek new experiences and changes to breathe fresh life into the relationship.", score: { 자유형: 3, 열정형: 2, 독립형: 1 } }
    ]
  },
  {
    id: 25,
    question: "Which word best describes your love style?",
    options: [
      { text: "Fiery — a passionate love where you pour everything in.", score: { 열정형: 3, 낭만형: 2, 헌신형: 1 } },
      { text: "Deep — a sincere love that builds layer by layer over time.", score: { 감성형: 3, 헌신형: 2, 낭만형: 2 } },
      { text: "Free — a relaxed love built on mutual respect and independence.", score: { 자유형: 3, 독립형: 3, 현실형: 1 } },
      { text: "Steady — a reliable love you can count on no matter what.", score: { 현실형: 3, 헌신형: 2, 신중형: 2 } }
    ]
  },
]
