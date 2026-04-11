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
    question: "When your paycheck arrives, what do you do first?",
    options: [
      { text: "Set up auto-transfer to savings first, then live on what's left.", score: { 절약형: 3, 꾸준형: 2, 황금손: 1 } },
      { text: "Buy something I've been wanting. I earned it!", score: { 복권형: 2, 기회형: 2, 황금손: 1 } },
      { text: "Put it straight into my investment account. Money should work for me.", score: { 투자형: 3, 황금손: 2, 꾸준형: 1 } },
      { text: "Review my spending and plan my budget for the month.", score: { 꾸준형: 3, 절약형: 2, 황금손: 2 } }
    ]
  },
  {
    id: 2,
    question: "If you unexpectedly received $5,000, what would you do?",
    options: [
      { text: "Invest in stocks or crypto. You have to seize opportunities.", score: { 투자형: 3, 기회형: 2, 복권형: 1 } },
      { text: "Put it in a safe fixed deposit or savings account.", score: { 절약형: 3, 꾸준형: 2, 황금손: 1 } },
      { text: "Spend it on myself — travel, self-improvement, things I want.", score: { 복권형: 2, 기회형: 2, 황금손: 1 } },
      { text: "Look for real estate or business opportunities.", score: { 황금손: 3, 투자형: 2, 기회형: 2 } }
    ]
  },
  {
    id: 3,
    question: "What is your attitude toward financial planning?",
    options: [
      { text: "Study and analyze specific investments yourself.", score: { 투자형: 3, 황금손: 2, 분석형: 2 } },
      { text: "Safe and steady saving is the best approach.", score: { 절약형: 3, 꾸준형: 3, 황금손: 1 } },
      { text: "When a good opportunity comes, invest boldly.", score: { 기회형: 3, 투자형: 2, 복권형: 1 } },
      { text: "Delegate to experts or use indirect investment products.", score: { 꾸준형: 2, 황금손: 2, 절약형: 1 } }
    ]
  },
  {
    id: 4,
    question: "When do you feel least guilty about spending money?",
    options: [
      { text: "When investing in self-development or education for the future.", score: { 꾸준형: 3, 황금손: 2, 투자형: 1 } },
      { text: "When finally buying something I've wanted for a long time.", score: { 기회형: 2, 복권형: 2, 절약형: 1 } },
      { text: "When making an investment I'm confident will return a profit.", score: { 투자형: 3, 황금손: 3, 기회형: 1 } },
      { text: "When spending on someone I care about.", score: { 절약형: 1, 복권형: 1, 꾸준형: 1, 기회형: 1 } }
    ]
  },
  {
    id: 5,
    question: "When a friend tells you they made a lot of money from an investment?",
    options: [
      { text: "I should do that too! Start studying and get in right away.", score: { 기회형: 3, 복권형: 2, 투자형: 2 } },
      { text: "There's risk, so I'll study it carefully before deciding.", score: { 황금손: 3, 투자형: 2, 꾸준형: 1 } },
      { text: "I'll stick to my own approach. Others' success is just a reference.", score: { 절약형: 2, 꾸준형: 2, 황금손: 1 } },
      { text: "I envy them, thinking I just don't have that kind of luck.", score: { 복권형: 3, 절약형: 1 } }
    ]
  },
  {
    id: 6,
    question: "When your monthly expenses exceed your budget, you?",
    options: [
      { text: "Immediately review your spending and revise next month's plan.", score: { 꾸준형: 3, 절약형: 2, 황금손: 2 } },
      { text: "Think 'it can't be helped' and resolve to be more frugal next month.", score: { 기회형: 2, 복권형: 2, 절약형: 1 } },
      { text: "Look for ways to increase your income.", score: { 황금손: 3, 투자형: 2, 기회형: 2 } },
      { text: "Don't worry much about it — things will work out.", score: { 복권형: 3, 기회형: 2 } }
    ]
  },
  {
    id: 7,
    question: "What is your financial goal in 5 years?",
    options: [
      { text: "Own a home or build a stable asset base.", score: { 꾸준형: 3, 절약형: 3, 황금손: 1 } },
      { text: "Move toward financial freedom through investment returns.", score: { 투자형: 3, 황금손: 3, 기회형: 1 } },
      { text: "Live life fully enjoying the things I want.", score: { 복권형: 2, 기회형: 2 } },
      { text: "Build additional income streams beyond my main salary.", score: { 황금손: 3, 기회형: 2, 투자형: 1 } }
    ]
  },
  {
    id: 8,
    question: "How would you describe your spending pattern in one word?",
    options: [
      { text: "Planned — strict management within a budget.", score: { 절약형: 3, 꾸준형: 2, 황금손: 1 } },
      { text: "Impulsive — if I feel like it, I buy it right away.", score: { 복권형: 3, 기회형: 2 } },
      { text: "Strategic — I weigh value for money and investment potential.", score: { 황금손: 3, 투자형: 2, 꾸준형: 1 } },
      { text: "Balanced — I maintain a balance between saving and spending.", score: { 꾸준형: 3, 황금손: 2, 절약형: 1 } }
    ]
  },
  {
    id: 9,
    question: "What is your personal belief about money?",
    options: [
      { text: "Money should be diligently saved. Every little bit counts.", score: { 절약형: 3, 꾸준형: 3 } },
      { text: "Money should be put to work. Investing is the answer.", score: { 투자형: 3, 황금손: 3 } },
      { text: "Money should be made big when an opportunity comes.", score: { 기회형: 3, 복권형: 2, 황금손: 1 } },
      { text: "Money is meant to be spent. Happiness today is everything.", score: { 복권형: 3, 기회형: 1 } }
    ]
  },
  {
    id: 10,
    question: "When you hit a financially difficult period, you?",
    options: [
      { text: "Cut expenses further and get through it frugally.", score: { 절약형: 3, 꾸준형: 2 } },
      { text: "Find new income sources and actively respond.", score: { 황금손: 3, 기회형: 2, 투자형: 1 } },
      { text: "See the crisis as an opportunity and try contrarian investing.", score: { 투자형: 3, 기회형: 3, 황금손: 1 } },
      { text: "Tough it out, believing things will eventually get better.", score: { 복권형: 3, 꾸준형: 1 } }
    ]
  },
  {
    id: 11,
    question: "How do you prefer to learn about personal finance?",
    options: [
      { text: "Study systematically through books and courses from the basics up.", score: { 꾸준형: 3, 투자형: 2, 황금손: 1 } },
      { text: "Learn through hands-on experience by actually investing.", score: { 기회형: 3, 투자형: 2, 복권형: 1 } },
      { text: "Use diverse sources like YouTube, communities, and online forums.", score: { 황금손: 3, 기회형: 2, 꾸준형: 1 } },
      { text: "Mainly follow expert advice or specialized channels.", score: { 절약형: 2, 꾸준형: 2, 황금손: 2 } }
    ]
  },
  {
    id: 12,
    question: "A popular asset looks like a bubble to you. What do you do?",
    options: [
      { text: "Even if it's a bubble, riding the trend can be profitable. Invest moderately.", score: { 기회형: 3, 복권형: 2, 투자형: 1 } },
      { text: "Risky — I'll watch from the sidelines. An opportunity will come when it pops.", score: { 황금손: 3, 투자형: 2, 절약형: 1 } },
      { text: "Never touch it. Safety first.", score: { 절약형: 3, 꾸준형: 2 } },
      { text: "Put in a small amount just to see what happens.", score: { 투자형: 2, 꾸준형: 2, 기회형: 2 } }
    ]
  },
  {
    id: 13,
    question: "When an acquaintance recommends an investment to you, you?",
    options: [
      { text: "If it's someone I trust, I invest right away.", score: { 복권형: 3, 기회형: 2 } },
      { text: "Analyze and verify it myself before deciding.", score: { 투자형: 3, 황금손: 2, 절약형: 1 } },
      { text: "Your own judgment comes first when investing — decline for now.", score: { 절약형: 3, 꾸준형: 2, 황금손: 1 } },
      { text: "Take note of it, but give it plenty of thought before committing.", score: { 꾸준형: 2, 황금손: 2, 기회형: 2 } }
    ]
  },
  {
    id: 14,
    question: "What is your ideal split of income between spending and saving/investing?",
    options: [
      { text: "Saving/investing 70%+ — save as much as possible for the future.", score: { 절약형: 3, 꾸준형: 3 } },
      { text: "50/50 — enjoy the present while preparing for the future.", score: { 꾸준형: 3, 황금손: 2, 기회형: 1 } },
      { text: "Focus on investing; adjust the ratio flexibly based on opportunities.", score: { 투자형: 3, 황금손: 2, 기회형: 2 } },
      { text: "Spend as much as I want and save whatever is left over.", score: { 복권형: 3, 기회형: 2 } }
    ]
  },
  {
    id: 15,
    question: "How do you think about retirement financial planning?",
    options: [
      { text: "Start preparing now diligently with pension and savings products.", score: { 꾸준형: 3, 절약형: 3 } },
      { text: "Achieve financial freedom through investment returns and retire early.", score: { 투자형: 3, 황금손: 2, 기회형: 1 } },
      { text: "I can keep working after retirement. It's still far away.", score: { 복권형: 2, 기회형: 2 } },
      { text: "Build diverse income pipelines to prepare for retirement.", score: { 황금손: 3, 기회형: 2, 투자형: 2 } }
    ]
  },
  {
    id: 16,
    question: "What is your view on real estate investment?",
    options: [
      { text: "The safest and most reliable asset — it's a must.", score: { 꾸준형: 3, 황금손: 2, 절약형: 1 } },
      { text: "I'm open to actively investing using leverage.", score: { 투자형: 3, 기회형: 2, 황금손: 2 } },
      { text: "The risk is high, so I'd study carefully before entering.", score: { 황금손: 3, 투자형: 2, 꾸준형: 1 } },
      { text: "Stocks or other assets seem more attractive to me.", score: { 기회형: 2, 투자형: 2, 복권형: 2 } }
    ]
  },
  {
    id: 17,
    question: "Do you prefer short-term high returns or long-term stable returns?",
    options: [
      { text: "Short-term high returns — get in, make money, and get out.", score: { 기회형: 3, 복권형: 2, 투자형: 1 } },
      { text: "Long-term stable returns — slow but steady compound growth.", score: { 꾸준형: 3, 절약형: 2, 황금손: 1 } },
      { text: "Split the portfolio and pursue both.", score: { 황금손: 3, 투자형: 2, 꾸준형: 2 } },
      { text: "Preserving principal is the top priority over returns.", score: { 절약형: 3, 꾸준형: 2 } }
    ]
  },
  {
    id: 18,
    question: "How do you set your financial goals?",
    options: [
      { text: "Set specific numbers and deadlines and manage systematically.", score: { 꾸준형: 3, 황금손: 2, 절약형: 1 } },
      { text: "Set the general direction and adjust flexibly as opportunities arise.", score: { 기회형: 3, 황금손: 2, 투자형: 1 } },
      { text: "No benchmark — just save as much as possible.", score: { 절약형: 3, 복권형: 1 } },
      { text: "I set goals but have trouble sticking to them.", score: { 복권형: 3, 기회형: 2 } }
    ]
  },
  {
    id: 19,
    question: "When you see economic instability news, how do you react?",
    options: [
      { text: "Immediately review your portfolio and reduce risk.", score: { 황금손: 3, 꾸준형: 2, 절약형: 1 } },
      { text: "A crisis is an opportunity — aim to buy at the bottom.", score: { 투자형: 3, 기회형: 2, 황금손: 1 } },
      { text: "Already in safe assets, so I'm not very moved.", score: { 절약형: 3, 꾸준형: 3 } },
      { text: "Not really worried about it — I can't control it anyway.", score: { 복권형: 3, 기회형: 1 } }
    ]
  },
  {
    id: 20,
    question: "When you have extra money to spare, you?",
    options: [
      { text: "Put it straight into a savings or investment account.", score: { 절약형: 3, 꾸준형: 2, 황금손: 1 } },
      { text: "Buy something you've wanted or spend it on an experience.", score: { 복권형: 3, 기회형: 2 } },
      { text: "Look for a short-term investment with good returns.", score: { 투자형: 3, 기회형: 2, 황금손: 1 } },
      { text: "Set it aside and use it when the right opportunity comes.", score: { 황금손: 3, 꾸준형: 2, 기회형: 1 } }
    ]
  },
  {
    id: 21,
    question: "When a close friend asks to borrow money, you?",
    options: [
      { text: "Lend it for the sake of the relationship if you can afford to.", score: { 복권형: 2, 기회형: 2 } },
      { text: "As a principle, avoid financial transactions with personal relationships.", score: { 절약형: 3, 꾸준형: 2, 황금손: 1 } },
      { text: "Consider carefully depending on the amount and situation.", score: { 황금손: 3, 투자형: 2, 꾸준형: 1 } },
      { text: "Instead of lending, give them an amount you can comfortably part with.", score: { 꾸준형: 2, 절약형: 2, 복권형: 1 } }
    ]
  },
  {
    id: 22,
    question: "What is your view on tax optimization and financial planning?",
    options: [
      { text: "Tax optimization is part of finance too — I actively manage it.", score: { 황금손: 3, 꾸준형: 2, 투자형: 1 } },
      { text: "I just pay what I owe — I don't think about it much.", score: { 복권형: 3, 기회형: 2 } },
      { text: "I actively use tax-advantaged accounts like IRAs.", score: { 꾸준형: 3, 절약형: 2, 황금손: 2 } },
      { text: "I know it's important but haven't studied it enough yet.", score: { 투자형: 2, 꾸준형: 2, 절약형: 1 } }
    ]
  },
  {
    id: 23,
    question: "Which financial approach suits you best?",
    options: [
      { text: "Savings and deposits — safe and risk-free.", score: { 절약형: 3, 꾸준형: 3 } },
      { text: "Long-term stock or ETF investing — time is the answer.", score: { 투자형: 3, 꾸준형: 2, 황금손: 1 } },
      { text: "Short-term trading or crypto — high risk, high reward.", score: { 기회형: 3, 복권형: 2, 투자형: 1 } },
      { text: "Side projects and additional income streams — grow the income itself.", score: { 황금손: 3, 기회형: 2, 투자형: 1 } }
    ]
  },
  {
    id: 24,
    question: "How do you prevent a financial crisis?",
    options: [
      { text: "Always keep a 6-month emergency fund in liquid assets.", score: { 절약형: 3, 꾸준형: 3, 황금손: 1 } },
      { text: "Build multiple income streams so I'm not dependent on one source.", score: { 황금손: 3, 기회형: 2, 투자형: 2 } },
      { text: "Diversify investments so a loss in one area is covered by others.", score: { 투자형: 3, 황금손: 2, 꾸준형: 1 } },
      { text: "No real plan — deal with it when and if it happens.", score: { 복권형: 3, 기회형: 2 } }
    ]
  },
  {
    id: 25,
    question: "What is the most important virtue in personal finance?",
    options: [
      { text: "Consistency — keep at it and you'll win in the end.", score: { 꾸준형: 3, 절약형: 2, 황금손: 1 } },
      { text: "Knowledge — the more you know, the more money you see.", score: { 투자형: 3, 황금손: 2, 꾸준형: 1 } },
      { text: "Decisiveness — opportunities belong to those who seize them.", score: { 기회형: 3, 황금손: 2, 복권형: 1 } },
      { text: "Discipline — not spending is the most reliable financial strategy.", score: { 절약형: 3, 꾸준형: 2 } }
    ]
  },
]
