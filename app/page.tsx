import Link from 'next/link'

const services = [
  {
    href: '/saju',
    icon: '🔮',
    title: '사주팔자',
    subtitle: '생년월일시로 보는 운명',
    description: '오행의 기운으로 당신의 성격, 재능, 2025년 운세를 분석합니다.',
    color: '#9c59d1',
    badge: '',
  },
  {
    href: '/test/love',
    icon: '💘',
    title: '연애유형',
    subtitle: '나는 어떤 연애를 할까?',
    description: '10가지 질문으로 당신의 연애 스타일과 최고의 파트너를 찾아드립니다.',
    color: '#e05c7f',
    badge: '',
  },
  {
    href: '/test/career',
    icon: '💼',
    title: '직업적성',
    subtitle: '나에게 맞는 일은?',
    description: '타고난 재능과 성향으로 최적의 직업 유형을 분석합니다.',
    color: '#4a9eff',
    badge: '',
  },
  {
    href: '/test/mbti',
    icon: '🧩',
    title: 'MBTI',
    subtitle: '16가지 성격 유형 분석',
    description: '12가지 질문으로 정확한 MBTI 유형과 심층 분석을 제공합니다.',
    color: '#00cc77',
    badge: '',
  },
  {
    href: '/test/money',
    icon: '💰',
    title: '재물운',
    subtitle: '나의 돈 버는 스타일은?',
    description: '재물운과 금전 관리 성향으로 나만의 부의 전략을 찾습니다.',
    color: '#e0c97f',
    badge: '',
  },
  {
    href: '/pro',
    icon: '⭐',
    title: 'PRO 종합',
    subtitle: '광고 없이 전체 분석',
    description: '사주+심리테스트 전체 결과를 광고 없이 무제한으로 이용합니다.',
    color: '#e0c97f',
    badge: 'PRO',
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* 히어로 섹션 */}
      <section
        className="relative overflow-hidden py-20 px-4"
        style={{
          background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
        }}
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
            당신의 운명을 읽다
          </h1>
          <p className="text-xl sm:text-2xl font-light mb-2" style={{ color: '#c0c0d0' }}>
            사주팔자와 심리테스트로
          </p>
          <p className="text-lg sm:text-xl mb-10" style={{ color: '#8080a0' }}>
            진정한 나를 이해하는 여정을 시작하세요
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/saju"
              className="px-8 py-4 rounded-2xl text-lg font-bold transition-all duration-300 hover:scale-105 active:scale-95 inline-block"
              style={{
                background: 'linear-gradient(135deg, #e0c97f, #c4a84f)',
                color: '#1a1a2e',
                boxShadow: '0 8px 30px #e0c97f40',
              }}
            >
              🔮 사주 분석 시작
            </Link>
            <Link
              href="/test"
              className="px-8 py-4 rounded-2xl text-lg font-bold transition-all duration-300 hover:scale-105 active:scale-95 inline-block"
              style={{
                background: 'transparent',
                border: '2px solid #e0c97f60',
                color: '#e0c97f',
              }}
            >
              🧩 심리테스트 하기
            </Link>
          </div>
        </div>
      </section>

      <div
        className="h-px mx-8"
        style={{ background: 'linear-gradient(90deg, transparent, #e0c97f30, transparent)' }}
      />

      {/* 서비스 카드 섹션 */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3" style={{ color: '#e8e8f0' }}>
              무엇을 알아보고 싶으신가요?
            </h2>
            <p style={{ color: '#8080a0' }}>6가지 서비스로 당신의 모든 것을 분석합니다</p>
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
                {service.badge && (
                  <div
                    className="absolute top-4 right-4 px-2 py-0.5 rounded-full text-xs font-bold"
                    style={{
                      background: 'linear-gradient(135deg, #e0c97f, #c4a84f)',
                      color: '#1a1a2e',
                    }}
                  >
                    {service.badge}
                  </div>
                )}

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
                  <span>시작하기</span>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 소개 섹션 */}
      <section className="py-16 px-4" style={{ borderTop: '1px solid #e0c97f10' }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-6" style={{ color: '#e0c97f' }}>
            왜 운명의 실인가요?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: '🎯', title: '정확한 분석', desc: '사주 원리와 심리학을 결합한 심층 분석으로 당신의 진짜 모습을 발견하세요.' },
              { icon: '📖', title: '풍부한 콘텐츠', desc: '단순한 결과가 아닌, 실제 도움이 되는 상세하고 풍부한 내용을 제공합니다.' },
              { icon: '🔒', title: '개인정보 보호', desc: '입력된 정보는 분석에만 활용되며 저장되거나 외부에 공유되지 않습니다.' },
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

      {/* 푸터 */}
      <footer className="py-8 px-4 text-center" style={{ borderTop: '1px solid #e0c97f10' }}>
        <p className="text-sm mb-2" style={{ color: '#606080' }}>
          © 2025 운명의 실. 사주 분석은 오락·참고 목적으로 제공됩니다.
        </p>
        <div className="flex justify-center gap-4">
          <span className="text-xs cursor-pointer" style={{ color: '#707090' }}>이용약관</span>
          <span style={{ color: '#404060' }}>|</span>
          <span className="text-xs cursor-pointer" style={{ color: '#707090' }}>개인정보처리방침</span>
        </div>
      </footer>
    </div>
  )
}
