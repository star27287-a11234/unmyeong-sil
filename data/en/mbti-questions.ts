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
    question: "When traveling, what interests me most is?",
    dimension: 'SN',
    options: [
      { text: "Famous restaurants, tourist attractions, and local markets—concrete experiences I can enjoy firsthand.", value: 'S' },
      { text: "The region's history, cultural significance, and the philosophy behind how people live.", value: 'N' }
    ]
  },
  {
    id: 5,
    question: "When solving problems, I tend to?",
    dimension: 'SN',
    options: [
      { text: "Use proven methods I've used successfully before. I trust tried-and-tested approaches.", value: 'S' },
      { text: "Experiment with new approaches and look for innovative solutions.", value: 'N' }
    ]
  },
  {
    id: 6,
    question: "When choosing a book or movie, I'm drawn to?",
    dimension: 'SN',
    options: [
      { text: "Realistic and concrete stories that could actually happen in real life.", value: 'S' },
      { text: "Stories that spark imagination and explore possibilities and the future.", value: 'N' }
    ]
  },
  {
    id: 7,
    question: "When a friend shares something difficult they're going through, I tend to?",
    dimension: 'TF',
    options: [
      { text: "Analyze the situation and offer practical solutions.", value: 'T' },
      { text: "Empathize first, share their emotions, and offer comfort.", value: 'F' }
    ]
  },
  {
    id: 8,
    question: "When making important decisions, I prioritize?",
    dimension: 'TF',
    options: [
      { text: "Logical analysis, objective facts, and efficiency.", value: 'T' },
      { text: "The feelings of people I care about, personal values, and harmony.", value: 'F' }
    ]
  },
  {
    id: 9,
    question: "When I notice someone has done something wrong, I tend to?",
    dimension: 'TF',
    options: [
      { text: "Point out the problem directly and honestly. Truth matters most to me.", value: 'T' },
      { text: "Approach it gently, considering the person's feelings. Maintaining the relationship is important.", value: 'F' }
    ]
  },
  {
    id: 10,
    question: "When planning a trip, I tend to?",
    dimension: 'JP',
    options: [
      { text: "Carefully plan every detail—accommodations, schedules, restaurants—in advance.", value: 'J' },
      { text: "Set the general outline and decide things spontaneously once I'm there.", value: 'P' }
    ]
  },
  {
    id: 11,
    question: "With deadlines looming, I tend to?",
    dimension: 'JP',
    options: [
      { text: "Start early and finish comfortably with time to spare.", value: 'J' },
      { text: "Work better as the deadline approaches; my focus peaks right before the deadline.", value: 'P' }
    ]
  },
  {
    id: 12,
    question: "My living or work space is typically?",
    dimension: 'JP',
    options: [
      { text: "Always organized and tidy. Everything has its designated place.", value: 'J' },
      { text: "A bit messy, but I know exactly where everything is.", value: 'P' }
    ]
  }
]
