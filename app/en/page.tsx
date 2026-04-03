import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Thread of Fate | Four Pillars & Psychology Tests',
  description: 'Discover your destiny through Four Pillars of Destiny analysis and psychology tests.',
}

const services = [
  {
    href: '/en/saju',
    icon: '🔮',
    title: 'Four Pillars',
    subtitle: 'Your destiny in birth date & time',
    description: 'Analyze your personality, talents, and 2026 fortune through the Five Elements energy.',
    color: '#9c59d1',
  },
  {
    href: '/en/test/love',
    icon: '💘',
    title: 'Love Type',
    subtitle: 'What is your love style?',
    description: '10 questions to reveal your romance style and ideal partner.',
    color: '#e05c7f',
  },
  {
    href: '/en/test/career',
    icon: '💼',
    title: 'Career Aptitude',
    subtitle: 'What work suits you?',
    description: 'Discover your optimal career type through innate talents and personality.',
    color: '#4a9eff',
  },
  {
    href: '/en/test/mbti',
    icon: '🧩',
    title: 'MBTI',
    subtitle: '16 personality types',
    description: '12 questions for an accurate MBTI type with in-depth analysis.',
    color: '#00cc77',
  },
  {
    href: '/en/test/money',
    icon: '💰',
    title: 'Wealth Fortune',
    subtitle: 'How do you attract money?',
    description: 'Find your wealth personality and personal strategy for financial success.',
    color: '#e0c97f',
  },
]

export default function EnglishHomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section
        className="relative overflow-hidden py-20 px-4"
        style={{ background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)' }}
      >
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="text-5xl sm:text-6xl mb-4 animate-float">✨</div>
          <h1
            className="text-4xl sm:text-5xl md:text-6xl font-black mb-4"
            style={{
              color: '#e0c97f',
              textShadow: '0 0 30px #e0c97f40, 0 0 60px #e0c97f20',
              lineHeight: 1.2,
            }}
          >
            Read Your Destiny
          </h1>
          <p className="text-xl sm:text-2xl font-light mb-2" style={{ color: '#c0c0d0' }}>
            Through Four Pillars of Destiny & Psychology
          </p>
          <p className="text-lg sm:text-xl mb-10" style={{ color: '#8080a0' }}>
            Begin your journey to truly understand yourself
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/en/saju"
              className="px-8 py-4 rounded-2xl text-lg font-bold transition-all duration-300 hover:scale-105 active:scale-95 inline-block"
              style={{
                background: 'linear-gradient(135deg, #e0c97f, #c4a84f)',
                color: '#1a1a2e',
                boxShadow: '0 8px 30px #e0c97f40',
              }}
            >
              🔮 Start Fortune Reading
            </Link>
            <Link
              href="/en/test"
              className="px-8 py-4 rounded-2xl text-lg font-bold transition-all duration-300 hover:scale-105 active:scale-95 inline-block"
              style={{
                background: 'transparent',
                border: '2px solid #e0c97f60',
                color: '#e0c97f',
              }}
            >
              🧩 Take Psychology Tests
            </Link>
          </div>
        </div>
      </section>

      <div
        className="h-px mx-8"
        style={{ background: 'linear-gradient(90deg, transparent, #e0c97f30, transparent)' }}
      />

      {/* Services */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3" style={{ color: '#e8e8f0' }}>
              What would you like to explore?
            </h2>
            <p style={{ color: '#8080a0' }}>5 services to analyze every aspect of your life</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="group relative rounded-2xl p-6 block transition-all duration-300 hover:scale-[1.03]"
                style={{
                  background: 'linear-gradient(135deg, #16213e, #0f3460)',
                  border: '1px solid #e0c97f20',
                }}
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-1" style={{ color: '#e8e8f0' }}>
                  {service.title}
                </h3>
                <p className="text-sm mb-3 font-medium" style={{ color: service.color }}>
                  {service.subtitle}
                </p>
                <p className="text-sm leading-relaxed" style={{ color: '#8090a8' }}>
                  {service.description}
                </p>
                <div className="mt-4 flex items-center gap-1 text-sm font-medium" style={{ color: '#e0c97f' }}>
                  <span>Get Started</span>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why section */}
      <section className="py-16 px-4" style={{ borderTop: '1px solid #e0c97f10' }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-6" style={{ color: '#e0c97f' }}>
            Why Thread of Fate?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: '🎯', title: 'Deep Analysis', desc: 'In-depth insights combining ancient Four Pillars wisdom with modern psychology to reveal your true self.' },
              { icon: '📖', title: 'Rich Content', desc: 'Not just results — detailed, actionable content that genuinely helps you understand yourself better.' },
              { icon: '🔒', title: 'Privacy First', desc: 'Your information is used only for analysis. Nothing is stored or shared with third parties.' },
            ].map((item) => (
              <div
                key={item.title}
                className="p-6 rounded-2xl"
                style={{ background: '#16213e', border: '1px solid #e0c97f15' }}
              >
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-bold mb-2" style={{ color: '#e8e8f0' }}>{item.title}</h3>
                <p className="text-sm" style={{ color: '#8090a8' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
