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
    question: "What is your natural role in a team project?",
    options: [
      { text: "The leader who guides the whole team and sets the direction.", score: { 리더형: 3, 전략형: 2, 소통형: 1 } },
      { text: "The creator who pitches original ideas.", score: { 창작형: 3, 탐험형: 2, 장인형: 1 } },
      { text: "The analyst who digs into data to find the best solution.", score: { 분석형: 3, 전략형: 2, 장인형: 1 } },
      { text: "The communicator who smoothly connects everyone on the team.", score: { 소통형: 3, 봉사형: 2, 리더형: 1 } }
    ]
  },
  {
    id: 2,
    question: "What is your ideal work environment?",
    options: [
      { text: "An environment where I have decision-making authority and can lead a team.", score: { 리더형: 3, 전략형: 2, 탐험형: 1 } },
      { text: "An environment that guarantees creative freedom.", score: { 창작형: 3, 탐험형: 2, 장인형: 2 } },
      { text: "A quiet environment where I can focus alone.", score: { 분석형: 3, 장인형: 3, 창작형: 1 } },
      { text: "An environment where I actively interact with diverse people.", score: { 소통형: 3, 봉사형: 2, 리더형: 1 } }
    ]
  },
  {
    id: 3,
    question: "When do you feel the greatest sense of accomplishment at work?",
    options: [
      { text: "When the team achieves its goal and delivers results.", score: { 리더형: 3, 전략형: 2, 소통형: 1 } },
      { text: "When something I created or produced has an impact on people.", score: { 창작형: 3, 봉사형: 1, 소통형: 1 } },
      { text: "When I solve a complex problem through logical reasoning.", score: { 분석형: 3, 전략형: 2, 장인형: 2 } },
      { text: "When someone else improves because of my help.", score: { 봉사형: 3, 소통형: 2, 헌신형: 2 } }
    ]
  },
  {
    id: 4,
    question: "What is the first thing you do when starting a new project?",
    options: [
      { text: "Establish an overall strategy and roadmap.", score: { 전략형: 3, 리더형: 2, 분석형: 1 } },
      { text: "Brainstorm a wide range of ideas.", score: { 창작형: 3, 탐험형: 2, 소통형: 1 } },
      { text: "Thoroughly collect relevant data and information.", score: { 분석형: 3, 장인형: 2, 전략형: 1 } },
      { text: "Gather the people involved and collect their opinions.", score: { 소통형: 3, 봉사형: 2, 리더형: 1 } }
    ]
  },
  {
    id: 5,
    question: "What are you best at?",
    options: [
      { text: "Persuading people and motivating them.", score: { 리더형: 3, 소통형: 2, 전략형: 1 } },
      { text: "Creating something new and original.", score: { 창작형: 3, 탐험형: 2, 장인형: 1 } },
      { text: "Finding patterns in complex information.", score: { 분석형: 3, 전략형: 2, 장인형: 2 } },
      { text: "Identifying people's needs and helping them.", score: { 봉사형: 3, 소통형: 2, 헌신형: 2 } }
    ]
  },
  {
    id: 6,
    question: "When you fail, you?",
    options: [
      { text: "Analyze the cause and build a better strategy.", score: { 전략형: 3, 분석형: 2, 리더형: 1 } },
      { text: "Find a different creative approach and try again.", score: { 창작형: 3, 탐험형: 2, 장인형: 1 } },
      { text: "Review the data again and look for errors.", score: { 분석형: 3, 장인형: 2, 전략형: 1 } },
      { text: "Talk with teammates and find solutions together.", score: { 소통형: 3, 봉사형: 2, 리더형: 2 } }
    ]
  },
  {
    id: 7,
    question: "What is your ideal version of yourself in 10 years?",
    options: [
      { text: "In a leadership position guiding an organization.", score: { 리더형: 3, 전략형: 2, 소통형: 1 } },
      { text: "Having built my own unique creative world.", score: { 창작형: 3, 장인형: 2, 탐험형: 1 } },
      { text: "Recognized as the top expert in my field.", score: { 분석형: 3, 장인형: 3, 전략형: 1 } },
      { text: "Having made a positive impact on many people's lives.", score: { 봉사형: 3, 소통형: 2, 창작형: 1 } }
    ]
  },
  {
    id: 8,
    question: "When you're stressed at work, you?",
    options: [
      { text: "Focus harder and try to directly solve the problem.", score: { 리더형: 2, 전략형: 2, 분석형: 2 } },
      { text: "Switch gears with creative activities.", score: { 창작형: 3, 탐험형: 2, 장인형: 1 } },
      { text: "Take quiet time alone to organize your thoughts.", score: { 분석형: 3, 장인형: 2, 전략형: 1 } },
      { text: "Talk things through with people you trust.", score: { 소통형: 3, 봉사형: 2, 감성형: 2 } }
    ]
  },
  {
    id: 9,
    question: "What matters most to you about compensation?",
    options: [
      { text: "High-performance incentives and bonuses based on results.", score: { 리더형: 3, 전략형: 2, 탐험형: 1 } },
      { text: "Fair pay and ownership rights for creative work.", score: { 창작형: 3, 장인형: 2, 독립형: 1 } },
      { text: "Stable high income commensurate with expertise.", score: { 분석형: 3, 장인형: 3, 전략형: 1 } },
      { text: "The meaning and value of the work over compensation.", score: { 봉사형: 3, 소통형: 2, 창작형: 1 } }
    ]
  },
  {
    id: 10,
    question: "What type of work style appeals to you most?",
    options: [
      { text: "Drawing the big picture and setting the overall direction.", score: { 리더형: 3, 전략형: 3, 탐험형: 1 } },
      { text: "Creating something new from scratch.", score: { 창작형: 3, 탐험형: 2, 장인형: 2 } },
      { text: "Perfecting every tiny detail.", score: { 장인형: 3, 분석형: 2, 전략형: 1 } },
      { text: "Collaborating and building things together with people.", score: { 소통형: 3, 봉사형: 2, 리더형: 1 } }
    ]
  },
  {
    id: 11,
    question: "If you had to choose between starting your own business or being employed?",
    options: [
      { text: "Start a business — I want to take on challenges with my own ideas.", score: { 리더형: 3, 탐험형: 2, 창작형: 2 } },
      { text: "Employment — I want to build expertise on a stable foundation.", score: { 장인형: 3, 분석형: 2, 전략형: 1 } },
      { text: "Freelance — I want to work freely in my own way.", score: { 창작형: 3, 독립형: 2, 장인형: 1 } },
      { text: "Social enterprise — I want to do meaningful work.", score: { 봉사형: 3, 소통형: 2, 창작형: 1 } }
    ]
  },
  {
    id: 12,
    question: "When a conflict arises with a coworker, you?",
    options: [
      { text: "Talk directly and resolve it quickly.", score: { 리더형: 3, 소통형: 2, 전략형: 1 } },
      { text: "Analyze the root cause and propose a rational solution.", score: { 분석형: 3, 전략형: 2, 장인형: 1 } },
      { text: "Try to understand the other person's perspective first.", score: { 봉사형: 3, 소통형: 2, 감성형: 2 } },
      { text: "Seek help from a third party or wait for time to resolve it.", score: { 신중형: 2, 장인형: 2, 창작형: 1 } }
    ]
  },
  {
    id: 13,
    question: "How do you prefer to acquire new skills or knowledge?",
    options: [
      { text: "Study systematically through books and courses.", score: { 분석형: 3, 장인형: 2, 전략형: 1 } },
      { text: "Learn through hands-on experience by doing.", score: { 창작형: 3, 탐험형: 3, 리더형: 1 } },
      { text: "Learn from experts or mentors.", score: { 소통형: 3, 봉사형: 2, 장인형: 1 } },
      { text: "Use various sources to build my own approach.", score: { 전략형: 3, 탐험형: 2, 창작형: 2 } }
    ]
  },
  {
    id: 14,
    question: "When you receive praise for your work, you?",
    options: [
      { text: "Feel motivated to achieve even bigger results.", score: { 리더형: 3, 전략형: 2, 탐험형: 1 } },
      { text: "Feel relieved and reassured that you're on the right track.", score: { 장인형: 3, 분석형: 2, 봉사형: 1 } },
      { text: "Want to share the achievement with your teammates.", score: { 소통형: 3, 봉사형: 2, 리더형: 1 } },
      { text: "Feel confident enough to try more creative, daring things.", score: { 창작형: 3, 탐험형: 2, 장인형: 1 } }
    ]
  },
  {
    id: 15,
    question: "When overtime becomes necessary, you?",
    options: [
      { text: "Happily do it for the sake of achieving the goal. Results matter.", score: { 리더형: 3, 전략형: 2, 장인형: 1 } },
      { text: "First look for ways to work more efficiently and finish on time.", score: { 분석형: 3, 전략형: 2, 탐험형: 1 } },
      { text: "With the team together, even a tough situation can be enjoyable.", score: { 소통형: 3, 봉사형: 2, 리더형: 1 } },
      { text: "Focus during the hours when your creativity is at its peak.", score: { 창작형: 3, 장인형: 2, 독립형: 1 } }
    ]
  },
  {
    id: 16,
    question: "What is your natural role in meetings?",
    options: [
      { text: "The driver who leads the agenda and steers toward a conclusion.", score: { 리더형: 3, 전략형: 2, 소통형: 1 } },
      { text: "The one who pitches brilliant ideas and brings fresh perspectives.", score: { 창작형: 3, 탐험형: 2, 소통형: 1 } },
      { text: "The one who presents logical grounds and evaluates risks.", score: { 분석형: 3, 전략형: 2, 장인형: 1 } },
      { text: "The mediator who listens to different views and builds consensus.", score: { 소통형: 3, 봉사형: 2, 리더형: 1 } }
    ]
  },
  {
    id: 17,
    question: "To you, success means?",
    options: [
      { text: "Rising to an influential position in an organization or society.", score: { 리더형: 3, 전략형: 2, 소통형: 1 } },
      { text: "Creating a product or brand that carries your name.", score: { 창작형: 3, 탐험형: 2, 장인형: 2 } },
      { text: "Achieving expertise that no one can deny.", score: { 장인형: 3, 분석형: 3, 전략형: 1 } },
      { text: "Witnessing the people you helped grow and thrive.", score: { 봉사형: 3, 소통형: 2, 헌신형: 2 } }
    ]
  },
  {
    id: 18,
    question: "Which matters more to you in your career — stability or growth potential?",
    options: [
      { text: "Stability — a sustainable career with no major risks.", score: { 장인형: 3, 분석형: 2, 봉사형: 1 } },
      { text: "Growth potential — an environment where I can keep developing.", score: { 리더형: 3, 전략형: 2, 탐험형: 2 } },
      { text: "Both matter, but growth edges slightly ahead.", score: { 탐험형: 3, 창작형: 2, 리더형: 1 } },
      { text: "I need both stability and purpose — neither alone is enough.", score: { 봉사형: 3, 소통형: 2, 장인형: 1 } }
    ]
  },
  {
    id: 19,
    question: "What do you most want from a mentor?",
    options: [
      { text: "A network that connects me with industry contacts and opportunities.", score: { 리더형: 3, 소통형: 2, 탐험형: 1 } },
      { text: "Feedback that challenges my creative thinking and opens new perspectives.", score: { 창작형: 3, 탐험형: 2, 장인형: 1 } },
      { text: "Systematic advice and a roadmap for career development.", score: { 전략형: 3, 분석형: 2, 장인형: 1 } },
      { text: "Emotional support and reassurance that I'm doing well.", score: { 봉사형: 3, 소통형: 2, 감성형: 2 } }
    ]
  },
  {
    id: 20,
    question: "What is your view on work-life balance?",
    options: [
      { text: "Work is life — when you do what you love, the line disappears.", score: { 창작형: 3, 장인형: 2, 탐험형: 1 } },
      { text: "Work is work, life is life — strict separation is the most efficient approach.", score: { 분석형: 3, 전략형: 2, 독립형: 1 } },
      { text: "With the right team, work is enjoyable and balance comes naturally.", score: { 소통형: 3, 봉사형: 2, 리더형: 1 } },
      { text: "I need both decent achievement and enough rest — together.", score: { 봉사형: 2, 장인형: 2, 현실형: 2 } }
    ]
  },
  {
    id: 21,
    question: "What do you prioritize most when choosing a job?",
    options: [
      { text: "Growth potential and opportunities to keep learning.", score: { 탐험형: 3, 리더형: 2, 창작형: 1 } },
      { text: "An environment that guarantees creativity and autonomy.", score: { 창작형: 3, 장인형: 2, 독립형: 2 } },
      { text: "Social value and meaningful impact.", score: { 봉사형: 3, 소통형: 2, 헌신형: 2 } },
      { text: "A field where I can build and be recognized for my expertise.", score: { 장인형: 3, 분석형: 3, 전략형: 1 } }
    ]
  },
  {
    id: 22,
    question: "When you make a mistake at work, you?",
    options: [
      { text: "Take responsibility and immediately report with a solution.", score: { 리더형: 3, 전략형: 2, 소통형: 1 } },
      { text: "Thoroughly analyze the cause and put a recurrence prevention plan in place.", score: { 분석형: 3, 장인형: 2, 전략형: 1 } },
      { text: "Share it openly with teammates and work together on a fix.", score: { 소통형: 3, 봉사형: 2, 리더형: 1 } },
      { text: "Quickly brainstorm creative alternatives to turn the situation around.", score: { 창작형: 3, 탐험형: 2, 장인형: 1 } }
    ]
  },
  {
    id: 23,
    question: "What work situation do you most want to avoid?",
    options: [
      { text: "When I have to make all decisions alone.", score: { 소통형: 3, 봉사형: 2, 장인형: 1 } },
      { text: "When all I do is repetitive tasks with no creativity.", score: { 창작형: 3, 탐험형: 2, 장인형: 1 } },
      { text: "When I have to make decisions by gut feeling without data or evidence.", score: { 분석형: 3, 장인형: 2, 전략형: 1 } },
      { text: "When I'm forced to do meaningless work.", score: { 봉사형: 3, 창작형: 2, 리더형: 1 } }
    ]
  },
  {
    id: 24,
    question: "What is your ideal form of recognition at work?",
    options: [
      { text: "Clear performance-based incentives.", score: { 리더형: 3, 전략형: 2, 탐험형: 1 } },
      { text: "Public recognition of my expertise and work.", score: { 창작형: 3, 장인형: 2, 분석형: 1 } },
      { text: "A stable and sustainable fixed salary.", score: { 분석형: 2, 장인형: 2, 봉사형: 2 } },
      { text: "Opportunities for growth and learning above financial reward.", score: { 탐험형: 3, 소통형: 2, 창작형: 1 } }
    ]
  },
  {
    id: 25,
    question: "Which professional philosophy resonates with you most?",
    options: [
      { text: "Leading and making an impact is my role.", score: { 리더형: 3, 소통형: 2, 전략형: 1 } },
      { text: "Creating things that never existed before is my mission.", score: { 창작형: 3, 탐험형: 3, 장인형: 1 } },
      { text: "Delivering the best results through flawless expertise is my value.", score: { 장인형: 3, 분석형: 3, 전략형: 1 } },
      { text: "My reward is knowing that others' lives improved because of me.", score: { 봉사형: 3, 소통형: 3, 헌신형: 2 } }
    ]
  },
]
