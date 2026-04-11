import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Psychology Tests | Thread of Fate',
  description: 'Explore your personality through love, career, MBTI, and wealth psychology tests.',
}

const tests = [
  {
    href: '/en/test/love',
    icon: '💘',
    title: 'Love Type Test',
    subtitle: 'What is your romance style?',
    description: '10 questions to analyze your love style. Passionate, Devoted, Romantic — which of the 8 types are you?',
    questions: 10,
    time: '3 min',
    color: '#e05c7f',
  },
  {
    href: '/en/test/career',
    icon: '💼',
    title: 'Career Aptitude Test',
    subtitle: 'What career suits you?',
    description: 'Find your optimal career type through innate talents and personality. Leader, Creative, Analyst — 8 types to discover.',
    questions: 10,
    time: '3 min',
    color: '#4a9eff',
  },
  {
    href: '/en/test/mbti',
    icon: '🧩',
    title: 'MBTI Test',
    subtitle: 'What is your personality type?',
    description: '12 questions across E/I, S/N, T/F, J/P dimensions for an accurate MBTI type with in-depth analysis.',
    questions: 12,
    time: '4 min',
    color: '#2db8a0',
  },
  {
    href: '/en/test/money',
    icon: '💰',
    title: 'Wealth Fortune Test',
    subtitle: 'How do you attract money?',
    description: 'Analyze your wealth fortune and money personality. Golden Touch, Steady Saver, Investor — 6 wealth types.',
    questions: 10,
    time: '3 min',
    color: '#d4951e',
  },
]

export default function EnglishTestPage() {
  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-10">
          <h1 className="text-3xl font-black mb-2" style={{ color: '#f0eef8' }}>
            Psychology Tests
          </h1>
          <p style={{ color: '#505075' }}>
            4 in-depth psychological analyses to understand yourself better
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {tests.map((test) => (
            <Link
              key={test.href}
              href={test.href}
              className="group relative rounded-xl p-6 block transition-all duration-200 active:scale-[0.99]"
              style={{
                background: '#111120',
                border: '1px solid #1e1e38',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = '#2a2a48'
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = '#1e1e38'
              }}
            >
              <div className="text-5xl mb-4">{test.icon}</div>
              <h2 className="text-xl font-bold mb-1" style={{ color: '#f0eef8' }}>
                {test.title}
              </h2>
              <p className="text-sm font-medium mb-3" style={{ color: test.color }}>
                {test.subtitle}
              </p>
              <p className="text-sm leading-relaxed mb-4" style={{ color: '#9090b8' }}>
                {test.description}
              </p>
              <div className="flex items-center gap-4 mb-4">
                <span className="text-xs px-2 py-1 rounded-full" style={{ background: '#0b0b16', color: '#505075' }}>
                  📝 {test.questions} questions
                </span>
                <span className="text-xs px-2 py-1 rounded-full" style={{ background: '#0b0b16', color: '#505075' }}>
                  ⏱ ~{test.time}
                </span>
              </div>
              <div className="flex items-center gap-2 text-sm font-bold" style={{ color: test.color }}>
                <span>Start Test</span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
