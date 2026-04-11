import Link from 'next/link'

const tests = [
  {
    href: '/test/love',
    icon: '💘',
    title: '연애유형 테스트',
    subtitle: '나는 어떤 연애를 할까?',
    description: '10가지 질문으로 당신의 연애 스타일을 분석합니다. 열정형, 헌신형, 낭만형 등 8가지 유형 중 나의 유형은?',
    questions: 10,
    time: '3분',
    color: '#e05c7f',
  },
  {
    href: '/test/career',
    icon: '💼',
    title: '직업적성 테스트',
    subtitle: '나에게 맞는 직업은?',
    description: '타고난 재능과 성향으로 최적의 직업 유형을 찾습니다. 리더형, 창작형, 분석형 등 8가지 직업 유형을 확인하세요.',
    questions: 10,
    time: '3분',
    color: '#4a9eff',
  },
  {
    href: '/test/mbti',
    icon: '🧩',
    title: 'MBTI 테스트',
    subtitle: '나의 성격 유형은?',
    description: 'E/I, S/N, T/F, J/P 4가지 차원 12개 질문으로 정확한 MBTI 유형을 분석합니다.',
    questions: 12,
    time: '4분',
    color: '#2db8a0',
  },
  {
    href: '/test/money',
    icon: '💰',
    title: '재물운 테스트',
    subtitle: '나의 돈 버는 스타일은?',
    description: '재물운과 금전 관리 성향을 분석합니다. 황금손, 꾸준형, 투자형 등 6가지 재물 유형 중 나는?',
    questions: 10,
    time: '3분',
    color: '#d4951e',
  },
]

export default function TestPage() {
  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* 헤더 */}
        <div className="mb-10">
          <h1 className="text-3xl font-black mb-2" style={{ color: '#f0eef8' }}>
            심리테스트
          </h1>
          <p style={{ color: '#505075' }}>
            나를 더 깊이 이해하는 4가지 심리 분석
          </p>
        </div>

        {/* 테스트 카드 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {tests.map((test) => (
            <Link
              key={test.href}
              href={test.href}
              className="test-card group relative rounded-xl p-6 block transition-all duration-200 active:scale-[0.99]"
              style={{
                background: '#111120',
                border: '1px solid #1e1e38',
              }}
            >
              {/* 아이콘 */}
              <div className="text-5xl mb-4">{test.icon}</div>

              {/* 타이틀 */}
              <h2 className="text-xl font-bold mb-1" style={{ color: '#f0eef8' }}>
                {test.title}
              </h2>
              <p className="text-sm font-medium mb-3" style={{ color: test.color }}>
                {test.subtitle}
              </p>
              <p className="text-sm leading-relaxed mb-4" style={{ color: '#9090b8' }}>
                {test.description}
              </p>

              {/* 메타 정보 */}
              <div className="flex items-center gap-4 mb-4">
                <span className="text-xs px-2 py-1 rounded-full" style={{ background: '#0b0b16', color: '#505075' }}>
                  📝 {test.questions}문항
                </span>
                <span className="text-xs px-2 py-1 rounded-full" style={{ background: '#0b0b16', color: '#505075' }}>
                  ⏱ 약 {test.time}
                </span>
              </div>

              {/* 시작 버튼 */}
              <div
                className="flex items-center gap-2 text-sm font-bold"
                style={{ color: test.color }}
              >
                <span>테스트 시작하기</span>
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
