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

      {/* FAQ */}
      <section className="py-16 px-4" style={{ borderTop: '1px solid rgba(120,80,220,0.1)' }}>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-xs tracking-widest uppercase mb-2" style={{ color: '#4a4570' }}>FAQ</p>
            <h2 className="text-2xl font-bold" style={{ color: '#ede9fe' }}>자주 묻는 질문</h2>
          </div>
          <div className="space-y-4">
            {[
              { q: '사주팔자 분석은 어떻게 이루어지나요?', a: '생년월일시의 천간(天干)과 지지(地支)를 분석하여 오행(水·火·木·金·土)의 기운을 파악합니다. 이를 바탕으로 성격, 재능, 인간관계, 재물운, 건강 등 삶의 다양한 영역을 풀이합니다. 단, 결과는 오락 및 자기 이해의 참고 목적으로만 활용하시기 바랍니다.' },
              { q: '서비스는 무료인가요?', a: '네, 운명의 실의 모든 서비스는 100% 무료입니다. 사주 분석, MBTI, 연애유형, 직업적성, 재물운 테스트 모두 별도 비용 없이 즉시 이용하실 수 있습니다.' },
              { q: '입력한 개인정보는 저장되나요?', a: '아니요. 입력하신 이름, 생년월일, 성별 등 모든 정보는 분석에만 사용되며 서버에 저장되지 않습니다. 브라우저를 닫으면 모든 데이터가 완전히 삭제됩니다.' },
              { q: 'MBTI 결과가 정확한가요?', a: '저희 MBTI 테스트는 공식 MBTI 지표의 원리를 기반으로 설계된 자기보고형 성격 검사입니다. 25개 질문으로 E/I, S/N, T/F, J/P 4가지 차원을 측정합니다. 자기 이해의 참고 자료로 활용하시되, 중요한 결정의 근거로는 사용하지 않기를 권장합니다.' },
              { q: '오늘의 운세는 언제 업데이트되나요?', a: '오늘의 운세는 매일 자정(00:00)에 자동으로 업데이트됩니다. 12가지 띠 동물별로 오늘의 전체운, 애정운, 금전운, 직업운, 건강운과 행운의 색상·숫자·방향을 제공합니다.' },
              { q: '심리테스트 결과를 저장할 수 있나요?', a: '결과 페이지를 화면 캡처하거나 스크린샷으로 저장하시는 것을 권장합니다. 브라우저를 닫거나 페이지를 이탈하면 결과가 초기화되며, 언제든지 다시 테스트를 진행하실 수 있습니다.' },
            ].map((faq, i) => (
              <div key={i} className="glass-card p-5">
                <p className="font-semibold mb-2 text-sm" style={{ color: '#a78bfa' }}>Q. {faq.q}</p>
                <p className="text-sm leading-relaxed" style={{ color: '#a89dc7' }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* JSON-LD FAQ 구조화 데이터 */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              { '@type': 'Question', name: '사주팔자 분석은 어떻게 이루어지나요?', acceptedAnswer: { '@type': 'Answer', text: '생년월일시의 천간과 지지를 분석하여 오행의 기운을 파악하고 성격, 재능, 운세를 풀이합니다.' } },
              { '@type': 'Question', name: '서비스는 무료인가요?', acceptedAnswer: { '@type': 'Answer', text: '네, 모든 서비스(사주, MBTI, 연애유형, 직업적성, 재물운)는 100% 무료입니다.' } },
              { '@type': 'Question', name: '입력한 개인정보는 저장되나요?', acceptedAnswer: { '@type': 'Answer', text: '아니요. 모든 입력 정보는 분석에만 사용되며 서버에 저장되지 않습니다.' } },
            ]
          })
        }}
      />
    </div>
  )
}
