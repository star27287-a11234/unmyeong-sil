export interface CareerOption {
  text: string
  score: Record<string, number>
}

export interface CareerQuestion {
  id: number
  question: string
  options: CareerOption[]
}

export const careerQuestions: CareerQuestion[] = [
  {
    id: 1,
    question: "In team projects, what is your natural role?",
    options: [
      { text: "A leader who guides the team and sets direction", score: { 리더형: 3, 전략형: 2, 소통형: 1 } },
      { text: "A creator who proposes original and innovative ideas", score: { 창작형: 3, 탐험형: 2, 장인형: 1 } },
      { text: "An analyst who examines data and information to find optimal solutions", score: { 분석형: 3, 전략형: 2, 장인형: 1 } },
      { text: "A communicator who smoothly connects team members", score: { 소통형: 3, 봉사형: 2, 리더형: 1 } }
    ]
  },
  {
    id: 2,
    question: "What is your ideal work environment?",
    options: [
      { text: "An environment where you have decision-making authority and can lead a team", score: { 리더형: 3, 전략형: 2, 탐험형: 1 } },
      { text: "An environment with creative freedom and autonomy", score: { 창작형: 3, 탐험형: 2, 장인형: 2 } },
      { text: "A quiet environment where you can concentrate alone", score: { 분석형: 3, 장인형: 3, 창작형: 1 } },
      { text: "An environment with diverse people and active interaction", score: { 소통형: 3, 봉사형: 2, 리더형: 1 } }
    ]
  },
  {
    id: 3,
    question: "When do you feel the greatest sense of accomplishment in your work?",
    options: [
      { text: "When your team achieves goals and delivers strong results", score: { 리더형: 3, 전략형: 2, 소통형: 1 } },
      { text: "When your work or content has a positive impact on people", score: { 창작형: 3, 봉사형: 1, 소통형: 1 } },
      { text: "When you logically solve a complex problem", score: { 분석형: 3, 전략형: 2, 장인형: 2 } },
      { text: "When your help has made someone's life better", score: { 봉사형: 3, 소통형: 2, 헌신형: 2 } }
    ]
  },
  {
    id: 4,
    question: "When starting a new project, what do you do first?",
    options: [
      { text: "Establish an overall strategy and roadmap", score: { 전략형: 3, 리더형: 2, 분석형: 1 } },
      { text: "Brainstorm a variety of ideas", score: { 창작형: 3, 탐험형: 2, 소통형: 1 } },
      { text: "Thoroughly collect and analyze related information and data", score: { 분석형: 3, 장인형: 2, 전략형: 1 } },
      { text: "Gather relevant people and consolidate their opinions", score: { 소통형: 3, 봉사형: 2, 리더형: 1 } }
    ]
  },
  {
    id: 5,
    question: "What are you best at?",
    options: [
      { text: "Persuading people and motivating them", score: { 리더형: 3, 소통형: 2, 전략형: 1 } },
      { text: "Creating something new and original", score: { 창작형: 3, 탐험형: 2, 장인형: 1 } },
      { text: "Finding patterns in complex information", score: { 분석형: 3, 전략형: 2, 장인형: 2 } },
      { text: "Understanding people's needs and providing support", score: { 봉사형: 3, 소통형: 2, 헌신형: 2 } }
    ]
  },
  {
    id: 6,
    question: "When you fail, what do you do?",
    options: [
      { text: "Analyze the cause and develop a better strategy", score: { 전략형: 3, 분석형: 2, 리더형: 1 } },
      { text: "Try again using a different creative approach", score: { 창작형: 3, 탐험형: 2, 장인형: 1 } },
      { text: "Review the data and identify the errors", score: { 분석형: 3, 장인형: 2, 전략형: 1 } },
      { text: "Communicate with team members to find solutions together", score: { 소통형: 3, 봉사형: 2, 리더형: 2 } }
    ]
  },
  {
    id: 7,
    question: "What is your ideal vision of yourself in 10 years?",
    options: [
      { text: "Holding a leadership position leading an organization", score: { 리더형: 3, 전략형: 2, 소통형: 1 } },
      { text: "Building your own unique creative body of work", score: { 창작형: 3, 장인형: 2, 탐험형: 1 } },
      { text: "Being recognized as a top expert in your field", score: { 분석형: 3, 장인형: 3, 전략형: 1 } },
      { text: "Having positively influenced many people's lives", score: { 봉사형: 3, 소통형: 2, 창작형: 1 } }
    ]
  },
  {
    id: 8,
    question: "When you're stressed, what do you do?",
    options: [
      { text: "Focus even harder and solve the problem directly", score: { 리더형: 2, 전략형: 2, 분석형: 2 } },
      { text: "Switch gears through creative activities", score: { 창작형: 3, 탐험형: 2, 장인형: 1 } },
      { text: "Take time alone to think and organize your thoughts", score: { 분석형: 3, 장인형: 2, 전략형: 1 } },
      { text: "Talk things through with people you trust", score: { 소통형: 3, 봉사형: 2, 감성형: 2 } }
    ]
  },
  {
    id: 9,
    question: "Regarding compensation, what do you prioritize?",
    options: [
      { text: "High incentives and bonuses based on strong performance", score: { 리더형: 3, 전략형: 2, 탐험형: 1 } },
      { text: "Fair compensation and copyright for creative work", score: { 창작형: 3, 장인형: 2, 독립형: 1 } },
      { text: "Stable, high income commensurate with expertise", score: { 분석형: 3, 장인형: 3, 전략형: 1 } },
      { text: "Moderate compensation, but meaningful and valuable work", score: { 봉사형: 3, 소통형: 2, 창작형: 1 } }
    ]
  },
  {
    id: 10,
    question: "What work approach appeals to you most?",
    options: [
      { text: "Drawing the big picture and providing overall direction", score: { 리더형: 3, 전략형: 3, 탐험형: 1 } },
      { text: "Creating something entirely new from a blank canvas", score: { 창작형: 3, 탐험형: 2, 장인형: 2 } },
      { text: "Perfecting every detail with meticulous precision", score: { 장인형: 3, 분석형: 2, 전략형: 1 } },
      { text: "Creating together through collaboration and teamwork", score: { 소통형: 3, 봉사형: 2, 리더형: 1 } }
    ]
  }
]
