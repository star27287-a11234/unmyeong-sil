export interface MoneyOption {
  text: string
  score: Record<string, number>
}

export interface MoneyQuestion {
  id: number
  question: string
  options: MoneyOption[]
}

export const moneyQuestions: MoneyQuestion[] = [
  {
    id: 1,
    question: "When your salary arrives, what's the first thing you do?",
    options: [
      { text: "Set up automatic transfers to savings first, then live on what's left.", score: { 절약형: 3, 꾸준형: 2, 황금손: 1 } },
      { text: "Buy something you've wanted for a while. You worked hard for this money after all.", score: { 복권형: 2, 기회형: 2, 황금손: 1 } },
      { text: "Put it into your investment account right away. Money should work for you.", score: { 투자형: 3, 황금손: 2, 꾸준형: 1 } },
      { text: "Review your spending and plan your monthly budget.", score: { 꾸준형: 3, 절약형: 2, 황금손: 2 } }
    ]
  },
  {
    id: 2,
    question: "You unexpectedly come into 5 million won. What do you do?",
    options: [
      { text: "Invest it in stocks or cryptocurrency. You need to seize the opportunity.", score: { 투자형: 3, 기회형: 2, 복권형: 1 } },
      { text: "Put it in a safe fixed deposit or savings account.", score: { 절약형: 3, 꾸준형: 2, 황금손: 1 } },
      { text: "Spend it on yourself. Travel, personal development, things you've wanted.", score: { 복권형: 2, 기회형: 2, 황금손: 1 } },
      { text: "Look for real estate or business opportunities.", score: { 황금손: 3, 투자형: 2, 기회형: 2 } }
    ]
  },
  {
    id: 3,
    question: "How would you describe your attitude toward wealth building?",
    options: [
      { text: "Study the market, analyze stocks yourself, and invest based on your research.", score: { 투자형: 3, 황금손: 2, 분석형: 2 } },
      { text: "Steady saving is the best approach. Build wealth safely and consistently.", score: { 절약형: 3, 꾸준형: 3, 황금손: 1 } },
      { text: "When a good opportunity comes, dive in boldly.", score: { 기회형: 3, 투자형: 2, 복권형: 1 } },
      { text: "Delegate to experts or use indirect investment products.", score: { 꾸준형: 2, 황금손: 2, 절약형: 1 } }
    ]
  },
  {
    id: 4,
    question: "When do you feel the least guilty spending money?",
    options: [
      { text: "When investing in self-improvement or education for your future.", score: { 꾸준형: 3, 황금손: 2, 투자형: 1 } },
      { text: "Finally buying something you've wanted for a long time.", score: { 기회형: 2, 복권형: 2, 절약형: 1 } },
      { text: "Making an investment you're confident will be profitable.", score: { 투자형: 3, 황금손: 3, 기회형: 1 } },
      { text: "Spending it on people you care about.", score: { 절약형: 1, 복권형: 1, 꾸준형: 1, 기회형: 1 } }
    ]
  },
  {
    id: 5,
    question: "A friend tells you they made a fortune through investing. What's your reaction?",
    options: [
      { text: "I need to do that too! I'll start studying and investing immediately.", score: { 기회형: 3, 복권형: 2, 투자형: 2 } },
      { text: "I'll study carefully and weigh the risks before deciding.", score: { 황금손: 3, 투자형: 2, 꾸준형: 1 } },
      { text: "Good for them, but I'll stick to my own approach. I can learn from their success but won't copy it.", score: { 절약형: 2, 꾸준형: 2, 황금손: 1 } },
      { text: "I don't have that kind of luck. I'll just admire from a distance.", score: { 복권형: 3, 절약형: 1 } }
    ]
  },
  {
    id: 6,
    question: "Your monthly expenses exceed budget. How do you react?",
    options: [
      { text: "Review spending immediately and adjust next month's plan.", score: { 꾸준형: 3, 절약형: 2, 황금손: 2 } },
      { text: "It can't be helped. I'll need to cut back next month.", score: { 기회형: 2, 복권형: 2, 절약형: 1 } },
      { text: "Look for ways to increase your income.", score: { 황금손: 3, 투자형: 2, 기회형: 2 } },
      { text: "Don't worry too much. Things will work out somehow.", score: { 복권형: 3, 기회형: 2 } }
    ]
  },
  {
    id: 7,
    question: "What's your financial goal for the next 5 years?",
    options: [
      { text: "Own a home or build a stable asset base.", score: { 꾸준형: 3, 절약형: 3, 황금손: 1 } },
      { text: "Achieve financial freedom through investment returns.", score: { 투자형: 3, 황금손: 3, 기회형: 1 } },
      { text: "Enjoy life fully—travel, experiences, and everything you desire.", score: { 복권형: 2, 기회형: 2 } },
      { text: "Create additional income through side businesses or ventures.", score: { 황금손: 3, 기회형: 2, 투자형: 1 } }
    ]
  },
  {
    id: 8,
    question: "If you had to describe your spending pattern in one word, it would be:",
    options: [
      { text: "Planned — I stick strictly to my budget.", score: { 절약형: 3, 꾸준형: 2, 황금손: 1 } },
      { text: "Spontaneous — I buy what I want when I want it.", score: { 복권형: 3, 기회형: 2 } },
      { text: "Strategic — I calculate value and investment potential.", score: { 황금손: 3, 투자형: 2, 꾸준형: 1 } },
      { text: "Balanced — I balance saving and spending wisely.", score: { 꾸준형: 3, 황금손: 2, 절약형: 1 } }
    ]
  },
  {
    id: 9,
    question: "What's your personal belief about money?",
    options: [
      { text: "Money should be accumulated steadily. Many drops make a river.", score: { 절약형: 3, 꾸준형: 3 } },
      { text: "Money should work for you. Investment is the answer.", score: { 투자형: 3, 황금손: 3 } },
      { text: "You need to spot big opportunities and earn money boldly.", score: { 기회형: 3, 복권형: 2, 황금손: 1 } },
      { text: "Money is meant to be spent. Happiness now is what matters most.", score: { 복권형: 3, 기회형: 1 } }
    ]
  },
  {
    id: 10,
    question: "When facing financial hardship, what do you do?",
    options: [
      { text: "Cut spending further and manage carefully until things improve.", score: { 절약형: 3, 꾸준형: 2 } },
      { text: "Actively seek new income sources and take aggressive action.", score: { 황금손: 3, 기회형: 2, 투자형: 1 } },
      { text: "See crisis as opportunity and attempt contrarian investments.", score: { 투자형: 3, 기회형: 3, 황금손: 1 } },
      { text: "It's difficult, but things will eventually get better. I'll persevere.", score: { 복권형: 3, 꾸준형: 1 } }
    ]
  }
]
