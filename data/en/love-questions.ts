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
    question: "When your partner suddenly becomes unresponsive, do you?",
    options: [
      { text: "Feel anxious and worried, constantly trying to reach out.", score: { 헌신형: 3, 열정형: 2, 감성형: 2 } },
      { text: "Think they're probably busy and focus on your own activities.", score: { 독립형: 3, 자유형: 2, 현실형: 2 } },
      { text: "Reflect and wonder if you've done something wrong.", score: { 신중형: 3, 감성형: 2, 헌신형: 1 } },
      { text: "Believe there's a reason and wait patiently without worry.", score: { 낭만형: 2, 현실형: 2, 신중형: 2 } }
    ]
  },
  {
    id: 4,
    question: "When you get angry at your partner, do you?",
    options: [
      { text: "Express it immediately and directly. Feelings should be communicated right away.", score: { 열정형: 3, 독립형: 2, 자유형: 1 } },
      { text: "Wait until your emotions calm down before discussing it calmly.", score: { 신중형: 3, 현실형: 2, 낭만형: 1 } },
      { text: "Try to understand them first, even though you're hurt.", score: { 헌신형: 3, 감성형: 2, 낭만형: 2 } },
      { text: "Need time alone to process before you're ready to talk.", score: { 독립형: 3, 자유형: 2, 신중형: 1 } }
    ]
  },
  {
    id: 5,
    question: "What matters most to you in a romantic relationship?",
    options: [
      { text: "Excitement and passion — without butterflies, it's not real love.", score: { 열정형: 3, 낭만형: 2, 자유형: 1 } },
      { text: "Trust and stability — a reliable person is everything.", score: { 현실형: 3, 헌신형: 2, 신중형: 2 } },
      { text: "Deep emotional connection — true love requires hearts to align.", score: { 감성형: 3, 헌신형: 2, 낭만형: 2 } },
      { text: "Mutual respect for each other's freedom — don't lose yourself in love.", score: { 독립형: 3, 자유형: 3, 신중형: 1 } }
    ]
  },
  {
    id: 6,
    question: "On your partner's birthday, you?",
    options: [
      { text: "Plan a perfect surprise event months in advance.", score: { 낭만형: 3, 열정형: 2, 헌신형: 2 } },
      { text: "Carefully figure out what they truly need and give them that.", score: { 헌신형: 3, 현실형: 2, 신중형: 1 } },
      { text: "Give them a special trip or a new experience to enjoy together.", score: { 자유형: 3, 열정형: 2, 독립형: 1 } },
      { text: "Give them a heartfelt handwritten letter with a meaningful small gift.", score: { 감성형: 3, 낭만형: 2, 헌신형: 2 } }
    ]
  },
  {
    id: 7,
    question: "What is your ideal relationship duration?",
    options: [
      { text: "Short and intense! Every moment burning with passion is best.", score: { 열정형: 3, 자유형: 2, 독립형: 1 } },
      { text: "Gradually deepening love, wanting to be together for a long time.", score: { 헌신형: 3, 현실형: 2, 낭만형: 2 } },
      { text: "Depth matters more than duration. Happiness in the present is enough.", score: { 감성형: 3, 신중형: 2, 낭만형: 1 } },
      { text: "Any length is fine if the relationship helps both grow together.", score: { 독립형: 3, 신중형: 2, 현실형: 2 } }
    ]
  },
  {
    id: 8,
    question: "If you and your partner have completely different hobbies?",
    options: [
      { text: "It's an opportunity to explore their world! Trying together sounds fun.", score: { 자유형: 3, 열정형: 2, 낭만형: 1 } },
      { text: "Each enjoys their own, but create shared interests together.", score: { 독립형: 3, 현실형: 2, 신중형: 1 } },
      { text: "Learn about their interests and share them to understand each other better.", score: { 헌신형: 3, 감성형: 2, 낭만형: 2 } },
      { text: "Different interests are fine if we understand and care for each other.", score: { 신중형: 3, 현실형: 2, 감성형: 1 } }
    ]
  },
  {
    id: 9,
    question: "How do you typically confess your love?",
    options: [
      { text: "Direct and honest without worrying about the moment. Feelings should be expressed clearly.", score: { 열정형: 3, 독립형: 2, 자유형: 1 } },
      { text: "Wait for the perfect moment to prepare a touching confession.", score: { 낭만형: 3, 헌신형: 2, 열정형: 1 } },
      { text: "Rather than confessing, gradually become closer until you're together naturally.", score: { 감성형: 3, 신중형: 2, 현실형: 2 } },
      { text: "Confirm their feelings first, then express your emotions carefully.", score: { 신중형: 3, 현실형: 2, 헌신형: 1 } }
    ]
  },
  {
    id: 10,
    question: "What's your absolute deal-breaker in love?",
    options: [
      { text: "Honesty and transparency — lies are unforgivable.", score: { 열정형: 2, 현실형: 2, 독립형: 2, 신중형: 2 } },
      { text: "Emotional support and empathy — you need to understand how I feel.", score: { 감성형: 3, 헌신형: 2, 낭만형: 2 } },
      { text: "Respecting each other's freedom and personal space — can't feel suffocated.", score: { 독립형: 3, 자유형: 3, 신중형: 1 } },
      { text: "A shared vision and goals for the future we'll build together.", score: { 현실형: 3, 헌신형: 2, 신중형: 2 } }
    ]
  }
]
