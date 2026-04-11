import Link from 'next/link'

const services = [
  {
    href: '/saju',
    icon: '🔮',
    title: '사주팔자',
    subtitle: '생년월일시로 보는 운명',
    description: '오행의 기운으로 당신의 성격, 재능, 2025년 운세를 분석합니다.',
    accent: '#c94444',
  },
  {
    href: '/test/love',
    icon: '💘',
    title: '연애유형',
    subtitle: '나는 어떤 연애를 할까?',
    description: '25가지 질문으로 당신의 연애 스타일과 최고의 파트너를 찾아드립니다.',
    accent: '#e05272',
  },
  {
    href: '/test/career',
    icon: '💼',
    title: '직업적성',
    subtitle: '나에게 맞는 일은?',
    description: '타고난 재능과 성향으로 최적의 직업 유형을 분석합니다.',
    accent: '#4a90e2',
  },
  {
    href: '/test/mbti',
    icon: '🧩',
    title: 'MBTI',
    subtitle: '16가지 성격 유형 분석',
    description: '25가지 질문으로 정확한 MBTI 유형과 심층 분석을 제공합니다.',
    accent: '#2db8a0',
  },
  {
    href: '/test/money',
    icon: '💰',
    title: '재물운',
    subtitle: '나의 돈 버는 스타일은?',
    description: '재물운과 금전 관리 성향으로 나만의 부의 전략을 찾습니다.',
    accent: '#d4951e',
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen">

      {/* 히어로 */}
      <section className="px-4 pt-20 pb-16" style={{ borderBottom: '1px solid #1e1e38' }}>
        <div className="max-w-3xl mx-auto">
          <div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium mb-6"
            style={{ background: 'rgba(201,68,68,0.12)', color: '#c94444', border: '1px solid rgba(201,68,68,0.25)' }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-current" />
            무료 · 즉시 결과 · 저장 없음
          </div>

          <h1
            className="text-4xl sm:text-5xl font-black mb-5 leading-tight"
            style={{ color: '#f0eef8', letterSpacing: '-0.02em' }}
          >
            당신의 운명을<br />
            <span style={{ color: '#c94444' }}>지금 읽어드립니다</span>
          </h1>

          <p className="text-lg mb-10" style={{ color: '#6060a0', lineHeight: 1.7 }}>
            사주팔자와 심리테스트로 진정한 나를 이해하는 여정
          </p>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/saju"
              className="px-7 py-3.5 rounded-full text-sm font-bold transition-opacity hover:opacity-90"
              style={{
                background: '#c94444',
                color: '#fff',
              }}
            >
              사주 분석 시작 →
            </Link>
            <Link
              href="/test"
              className="px-7 py-3.5 rounded-full text-sm font-bold transition-colors"
              style={{
                background: 'transparent',
                border: '1px solid #2a2a48',
                color: '#9090b8',
              }}
            >
              심리테스트 보기
            </Link>
          </div>
        </div>
      </section>

      {/* 서비스 */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">

          <div className="mb-10">
            <p className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: '#505075' }}>Services</p>
            <h2 className="text-2xl font-bold" style={{ color: '#f0eef8' }}>무엇을 알아보고 싶으신가요?</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="group block rounded-xl p-6 transition-all duration-200"
                style={{
                  background: '#111120',
                  border: '1px solid #1e1e38',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget
                  el.style.borderColor = service.accent + '50'
                  el.style.background = '#16162a'
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget
                  el.style.borderColor = '#1e1e38'
                  el.style.background = '#111120'
                }}
              >
                <div className="text-3xl mb-4">{service.icon}</div>
                <div
                  className="text-xs font-semibold tracking-wide uppercase mb-1"
                  style={{ color: service.accent }}
                >
                  {service.subtitle}
                </div>
                <h3 className="text-lg font-bold mb-2" style={{ color: '#f0eef8' }}>
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: '#505075' }}>
                  {service.description}
                </p>
                <div className="mt-5 text-xs font-medium" style={{ color: service.accent }}>
                  시작하기 →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 소개 */}
      <section className="py-14 px-4" style={{ borderTop: '1px solid #1e1e38' }}>
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px" style={{ background: '#1e1e38' }}>
            {[
              { label: '01', title: '정확한 분석', desc: '사주 원리와 심리학을 결합한 심층 분석으로 당신의 진짜 모습을 발견하세요.' },
              { label: '02', title: '풍부한 콘텐츠', desc: '단순한 결과가 아닌, 실제 도움이 되는 상세하고 풍부한 내용을 제공합니다.' },
              { label: '03', title: '개인정보 보호', desc: '입력된 정보는 분석에만 활용되며 저장되거나 외부에 공유되지 않습니다.' },
            ].map((item) => (
              <div
                key={item.title}
                className="p-7"
                style={{ background: '#0b0b16' }}
              >
                <div className="text-xs font-bold mb-4" style={{ color: '#c94444' }}>{item.label}</div>
                <h3 className="font-bold mb-2 text-base" style={{ color: '#f0eef8' }}>{item.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#505075' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}
