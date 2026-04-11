export interface MbtiOption {
  text: string
  value: 'E' | 'I' | 'S' | 'N' | 'T' | 'F' | 'J' | 'P'
}

export interface MbtiQuestion {
  id: number
  question: string
  dimension: 'EI' | 'SN' | 'TF' | 'JP'
  options: [MbtiOption, MbtiOption]
}

export const mbtiQuestions: MbtiQuestion[] = [
  // ─── EI (7 questions) ───
  {
    id: 1,
    question: "When attending a party or gathering, I tend to?",
    dimension: 'EI',
    options: [
      { text: "Mingle enthusiastically and have conversations with new people. I feel energized by being around lots of people.", value: 'E' },
      { text: "Have deep conversations with a few people I know and then quietly slip away. Large groups tire me out.", value: 'I' }
    ]
  },
  {
    id: 2,
    question: "When I have nothing planned for the weekend, I?",
    dimension: 'EI',
    options: [
      { text: "Contact friends and spontaneously do something together. Being alone feels boring.", value: 'E' },
      { text: "Enjoy my own time to recharge. I find being alone comfortable and relaxing.", value: 'I' }
    ]
  },
  {
    id: 3,
    question: "When entering a new environment, I tend to?",
    dimension: 'EI',
    options: [
      { text: "Take the initiative to introduce myself and adapt quickly to the situation.", value: 'E' },
      { text: "Observe carefully and understand the situation before adapting at my own pace.", value: 'I' }
    ]
  },
  {
    id: 4,
    question: "When stuck waiting alone with a stranger, I tend to?",
    dimension: 'EI',
    options: [
      { text: "Naturally start a conversation and keep it going.", value: 'E' },
      { text: "Check my phone or quietly wait separately — that feels more comfortable.", value: 'I' }
    ]
  },
  {
    id: 5,
    question: "How would you describe your activity on social media?",
    dimension: 'EI',
    options: [
      { text: "I post often and enjoy exchanging comments and reactions with others.", value: 'E' },
      { text: "I mostly browse; I rarely post or comment myself.", value: 'I' }
    ]
  },
  {
    id: 6,
    question: "How would you describe your friendships?",
    dimension: 'EI',
    options: [
      { text: "I have many diverse friends and get along well across different social groups.", value: 'E' },
      { text: "I have a small circle of deeply trusted friends I've known for a long time.", value: 'I' }
    ]
  },
  {
    id: 7,
    question: "After spending a long time with people, I feel?",
    dimension: 'EI',
    options: [
      { text: "Even more energized and happy than before.", value: 'E' },
      { text: "I need alone time to recover my energy.", value: 'I' }
    ]
  },

  // ─── SN (6 questions) ───
  {
    id: 8,
    question: "When traveling, what interests me most is?",
    dimension: 'SN',
    options: [
      { text: "Famous restaurants, tourist attractions, and local markets—concrete experiences I can enjoy firsthand.", value: 'S' },
      { text: "The region's history, cultural significance, and the philosophy behind how people live.", value: 'N' }
    ]
  },
  {
    id: 9,
    question: "When solving problems, I tend to?",
    dimension: 'SN',
    options: [
      { text: "Use proven methods I've used successfully before. I trust tried-and-tested approaches.", value: 'S' },
      { text: "Experiment with new approaches and look for innovative solutions.", value: 'N' }
    ]
  },
  {
    id: 10,
    question: "When choosing a book or movie, I'm drawn to?",
    dimension: 'SN',
    options: [
      { text: "Realistic and concrete stories that could actually happen in real life.", value: 'S' },
      { text: "Stories that spark imagination and explore possibilities and the future.", value: 'N' }
    ]
  },
  {
    id: 11,
    question: "In conversations, I naturally gravitate toward talking about?",
    dimension: 'SN',
    options: [
      { text: "Recent experiences, things I've seen or heard — concrete, real-world happenings.", value: 'S' },
      { text: "Ideas, possibilities, and abstract thoughts about the future.", value: 'N' }
    ]
  },
  {
    id: 12,
    question: "When choosing a restaurant you've never been to, you?",
    dimension: 'SN',
    options: [
      { text: "Carefully read reviews, ratings, and menu photos before picking a proven place.", value: 'S' },
      { text: "Go for places with a unique concept or atmosphere, even if you're not sure.", value: 'N' }
    ]
  },
  {
    id: 13,
    question: "When thinking about five years into the future, you?",
    dimension: 'SN',
    options: [
      { text: "Make realistic, concrete plans based on a logical extension of where you are now.", value: 'S' },
      { text: "Feel excited imagining the many different possibilities that could unfold.", value: 'N' }
    ]
  },

  // ─── TF (6 questions) ───
  {
    id: 14,
    question: "When a friend shares something difficult they're going through, I tend to?",
    dimension: 'TF',
    options: [
      { text: "Analyze the situation and offer practical solutions.", value: 'T' },
      { text: "Empathize first, share their emotions, and offer comfort.", value: 'F' }
    ]
  },
  {
    id: 15,
    question: "When making important decisions, I prioritize?",
    dimension: 'TF',
    options: [
      { text: "Logical analysis, objective facts, and efficiency.", value: 'T' },
      { text: "The feelings of people I care about, personal values, and harmony.", value: 'F' }
    ]
  },
  {
    id: 16,
    question: "When I notice someone has done something wrong, I tend to?",
    dimension: 'TF',
    options: [
      { text: "Point out the problem directly and honestly. Truth matters most to me.", value: 'T' },
      { text: "Approach it gently, considering the person's feelings. Maintaining the relationship is important.", value: 'F' }
    ]
  },
  {
    id: 17,
    question: "After watching a movie or TV show, what stays with me more?",
    dimension: 'TF',
    options: [
      { text: "How well the plot holds together logically — whether the twists make sense and the story is coherent.", value: 'T' },
      { text: "The characters' emotional journeys, relatable relationships, and scenes that touched my heart.", value: 'F' }
    ]
  },
  {
    id: 18,
    question: "When a conflict arises within a team, I?",
    dimension: 'TF',
    options: [
      { text: "Set emotions aside and focus on finding the root cause and a rational solution.", value: 'T' },
      { text: "Try to understand everyone's feelings first and find a direction that makes everyone comfortable.", value: 'F' }
    ]
  },
  {
    id: 19,
    question: "When I need to persuade someone, I usually?",
    dimension: 'TF',
    options: [
      { text: "Present data and evidence, explaining things logically.", value: 'T' },
      { text: "Build empathy and appeal to emotions to win them over.", value: 'F' }
    ]
  },

  // ─── JP (6 questions) ───
  {
    id: 20,
    question: "When planning a trip, I tend to?",
    dimension: 'JP',
    options: [
      { text: "Carefully plan every detail—accommodations, schedules, restaurants—in advance.", value: 'J' },
      { text: "Set the general outline and decide things spontaneously once I'm there.", value: 'P' }
    ]
  },
  {
    id: 21,
    question: "With deadlines looming, I tend to?",
    dimension: 'JP',
    options: [
      { text: "Start early and finish comfortably with time to spare.", value: 'J' },
      { text: "Work better as the deadline approaches; my focus peaks right before the deadline.", value: 'P' }
    ]
  },
  {
    id: 22,
    question: "My living or work space is typically?",
    dimension: 'JP',
    options: [
      { text: "Always organized and tidy. Everything has its designated place.", value: 'J' },
      { text: "A bit messy, but I know exactly where everything is.", value: 'P' }
    ]
  },
  {
    id: 23,
    question: "When my plans suddenly change, I?",
    dimension: 'JP',
    options: [
      { text: "Feel unsettled and uncomfortable with the unexpected shift.", value: 'J' },
      { text: "Adapt flexibly and quickly adjust to the new situation.", value: 'P' }
    ]
  },
  {
    id: 24,
    question: "When faced with too many options, I?",
    dimension: 'JP',
    options: [
      { text: "Set clear criteria, systematically compare options, and decide quickly.", value: 'J' },
      { text: "Keep exploring all the options and tend to delay making a final decision.", value: 'P' }
    ]
  },
  {
    id: 25,
    question: "How do you manage your daily tasks?",
    dimension: 'JP',
    options: [
      { text: "Write out a to-do list in advance and work through it in order.", value: 'J' },
      { text: "Handle whatever feels right or comes to mind in the moment.", value: 'P' }
    ]
  },
]
