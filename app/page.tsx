import Link from 'next/link'

const services = [
  {
    href: '/saju',
    icon: '🔮',
    title: '사주팔자',
    subtitle: '생년월일시로 보는 운명',
    description: '오행의 기운으로 당신의 성격, 재능, 운세를 분석합니다.',
    glow: 'rgba(124,58,237,0.3)',
    border: 'rgba(124,58,237,0.4)',
  },
  {
    href: '/test/love',
    icon: '💘',
    title: '연애유형',
    subtitle: '나는 어떤 연애를 할까?',
    description: '25가지 질문으로 당신의 연애 스타일과 최고의 파트너를 찾아드립니다.',
    glow: 'rgba(232,121,160,0.25)',
    border: 'rgba(232,121,160,0.4)',
  },
  {
    href: '/test/career',
    icon: '💼',
    title: '직업적성',
    subtitle: '나에게 맞는 일은?',
    description: '타고난 재능과 성향으로 최적의 직업 유형을 분석합니다.',
    glow: 'rgba(6,182,212,0.2)',
    border: 'rgba(6,182,212,0.4)',
  },
  {
    href: '/test/mbti',
    icon: '🧩',
    title: 'MBTI',
    subtitle: '16가지 성격 유형 분석',
    description: '25가지 질문으로 정확한 MBTI 유형과 심층 분석을 제공합니다.',
    glow: 'rgba(45,184,160,0.2)',
    border: 'rgba(45,184,160,0.4)',
  },
  {
    href: '/test/money',
    icon: '💰',
    title: '재물운',
    subtitle: '나의 돈 버는 스타일은?',
    description: '재물운과 금전 관리 성향으로 나만의 부의 전략을 찾습니다.',
    glow: 'rgba(245,158,11,0.2)',
    border: 'rgba(245,158,11,0.4)',
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen">

      {/* 히어로 */}
      <section className="relative px-4 pt-24 pb-20 overflow-hidden">
        {/* 중앙 글로우 */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse, rgba(124,58,237,0.15) 0%, transparent 70%)',
            filter: 'blur(40px)',
          }}
        />

        <div className="max-w-3xl mx-auto text-center relative">
          <div className="text-6xl mb-6 animate-float">✨</div>

          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-6"
            style={{
              background: 'rgba(124,58,237,0.15)',
              border: '1px solid rgba(124,58,237,0.35)',
              color: '#a78bfa',
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: '#a78bfa' }} />
            무료 · 즉시 결과 · 개인정보 저장 없음
          </div>

          <h1
            className="text-5xl sm:text-6xl font-black mb-5 leading-tight"
            style={{ letterSpacing: '-0.02em' }}
          >
            <span className="text-gradient">당신의 운명을</span>
            <br />
            <span style={{ color: '#ede9fe' }}>지금 읽어드립니다</span>
          </h1>

          <p className="text-lg mb-10" style={{ color: '#a89dc7', lineHeight: 1.8 }}>
            사주팔자와 심리테스트로<br className="sm:hidden" /> 진정한 나를 이해하는 여정
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/saju" className="btn-primary px-8 py-4 text-base">
              🔮 사주 분석 시작
            </Link>
            <Link href="/test" className="btn-secondary px-8 py-4 text-base">
              심리테스트 보기
            </Link>
          </div>
        </div>
      </section>

      {/* 구분선 */}
      <div
        className="mx-auto max-w-4xl h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(124,58,237,0.3), transparent)' }}
      />

      {/* 서비스 카드 */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs tracking-widest uppercase mb-2" style={{ color: '#4a4570' }}>Services</p>
            <h2 className="text-2xl font-bold" style={{ color: '#ede9fe' }}>무엇을 알아보고 싶으신가요?</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="test-card group block rounded-xl p-6 transition-all duration-250"
              >
                <div className="text-4xl mb-4">{s.icon}</div>
                <p className="text-xs font-semibold tracking-wide uppercase mb-1" style={{ color: '#a78bfa' }}>
                  {s.subtitle}
                </p>
                <h3 className="text-lg font-bold mb-2" style={{ color: '#ede9fe' }}>{s.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#4a4570' }}>{s.description}</p>
                <div className="mt-5 text-xs font-semibold" style={{ color: '#7c3aed' }}>
                  시작하기 →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 하단 소개 */}
      <section className="py-14 px-4" style={{ borderTop: '1px solid rgba(120,80,220,0.1)' }}>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { num: '01', title: '정확한 분석', desc: '사주 원리와 심리학을 결합한 심층 분석으로 당신의 진짜 모습을 발견하세요.', color: '#a78bfa' },
            { num: '02', title: '풍부한 콘텐츠', desc: '단순한 결과가 아닌, 실제 도움이 되는 상세하고 풍부한 내용을 제공합니다.', color: '#67e8f9' },
            { num: '03', title: '개인정보 보호', desc: '입력된 정보는 분석에만 활용되며 저장되거나 외부에 공유되지 않습니다.', color: '#fcd34d' },
          ].map((item) => (
            <div key={item.title} className="glass-card p-6">
              <div className="text-xs font-bold mb-3" style={{ color: item.color }}>{item.num}</div>
              <h3 className="font-bold mb-2" style={{ color: '#ede9fe' }}>{item.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: '#4a4570' }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  )
}
