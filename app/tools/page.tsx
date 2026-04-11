import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '생활 도구 | 운명의 실',
  description: 'D-day 계산기, 날짜 계산기, 로또 번호 생성기, 랜덤 뽑기 등 일상에서 자주 쓰는 생활 도구 모음',
  keywords: ['D-day 계산기', '날짜 계산기', '로또 번호 생성기', '랜덤 뽑기', '당번 정하기', '생활 도구'],
}

const tools = [
  {
    href: '/tools/dday',
    icon: '📅',
    title: 'D-day 계산기',
    subtitle: '목표일까지 남은 날',
    description: '시험, 기념일, 여행까지 — 중요한 날까지 몇 일 남았는지 바로 확인하세요.',
    color: '#e05c7f',
  },
  {
    href: '/tools/date',
    icon: '🗓️',
    title: '날짜 계산기',
    subtitle: '며칠 후? 몇 살?',
    description: 'N일 후 날짜, 두 날짜 사이 일수, 만 나이까지 한 번에 계산합니다.',
    color: '#4a9eff',
  },
  {
    href: '/tools/lotto-gen',
    icon: '🎱',
    title: '로또 번호 생성기',
    subtitle: '나만의 행운 번호',
    description: '버튼 하나로 완전 랜덤 번호를 여러 세트 생성합니다. 이번 주도 행운을!',
    color: '#e0c97f',
  },
  {
    href: '/tools/random',
    icon: '🎲',
    title: '랜덤 뽑기',
    subtitle: '당번 · 순서 정하기',
    description: '이름을 입력하고 뽑기! 당번 정하기, 발표 순서, 팀 나누기에 딱입니다.',
    color: '#00cc77',
  },
]

export default function ToolsPage() {
  return (
    <div className="min-h-screen">
      {/* 히어로 */}
      <section
        className="relative overflow-hidden py-16 px-4"
        style={{
          background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
        }}
      >
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="text-5xl mb-4">🛠️</div>
          <h1
            className="text-4xl sm:text-5xl font-black mb-3"
            style={{ color: '#e0c97f', lineHeight: 1.2 }}
          >
            생활 도구
          </h1>
          <p className="text-lg sm:text-xl font-light mb-2" style={{ color: '#c0c0d0' }}>
            일상에서 자주 쓰는 계산기 모음
          </p>
          <p className="text-base" style={{ color: '#8080a0' }}>
            간단하고 빠르게, 광고 없이 바로 사용하세요
          </p>
        </div>
      </section>

      <div
        className="h-px mx-8"
        style={{ background: 'linear-gradient(90deg, transparent, #e0c97f30, transparent)' }}
      />

      {/* 도구 카드 */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {tools.map((tool) => (
              <Link
                key={tool.href}
                href={tool.href}
                className="group relative rounded-2xl p-7 block transition-all duration-300 hover:scale-[1.03]"
                style={{
                  background: 'linear-gradient(135deg, #16213e, #0f3460)',
                  border: '1px solid #e0c97f20',
                }}
              >
                <div className="text-5xl mb-4">{tool.icon}</div>
                <h2 className="text-2xl font-bold mb-1" style={{ color: '#e8e8f0' }}>
                  {tool.title}
                </h2>
                <p className="text-base mb-3 font-medium" style={{ color: tool.color }}>
                  {tool.subtitle}
                </p>
                <p className="text-base leading-relaxed" style={{ color: '#8090a8' }}>
                  {tool.description}
                </p>
                <div className="mt-5 flex items-center gap-1 text-base font-medium" style={{ color: '#e0c97f' }}>
                  <span>사용하기</span>
                  <svg width="18" height="18" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
