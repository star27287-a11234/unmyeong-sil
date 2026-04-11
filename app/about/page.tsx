import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '서비스 소개 | 운명의 실',
  description: '운명의 실은 사주팔자, 심리테스트, 관상, 손금을 통해 나를 이해하는 여정을 함께하는 무료 서비스입니다.',
}

export default function AboutPage() {
  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-3xl mx-auto">

        {/* 헤더 */}
        <div className="text-center mb-16">
          <div className="text-6xl mb-5 animate-float">✨</div>
          <p className="text-xs tracking-widest uppercase mb-3" style={{ color: '#4a4570' }}>About</p>
          <h1 className="text-4xl font-black mb-4 text-gradient">운명의 실</h1>
          <p className="text-lg leading-relaxed max-w-xl mx-auto" style={{ color: '#a89dc7' }}>
            동양의 지혜와 현대 심리학이 만나는 곳.<br />
            당신의 운명을 함께 읽어드립니다.
          </p>
        </div>

        {/* 소개 본문 */}
        <div className="glass-card p-8 mb-8">
          <h2 className="text-xl font-bold mb-5" style={{ color: '#a78bfa' }}>
            🌌 왜 운명의 실인가요?
          </h2>
          <div className="space-y-4 text-sm leading-7" style={{ color: '#a89dc7' }}>
            <p>
              사람들은 누구나 자신을 더 잘 이해하고 싶어합니다.
              <strong style={{ color: '#ede9fe' }}>"나는 왜 이런 선택을 할까?"</strong>,
              <strong style={{ color: '#ede9fe' }}>"내 강점은 무엇일까?"</strong>,
              <strong style={{ color: '#ede9fe' }}>"나에게 맞는 사람은 어떤 사람일까?"</strong>
            </p>
            <p>
              수천 년의 역사를 가진 동양의 지혜 — 사주팔자(四柱八字), 관상학(觀相學), 손금학(手相學) — 은
              인간을 이해하는 깊은 통찰을 담고 있습니다. 여기에 현대 심리학의 과학적 접근을 결합하면,
              단순한 흥미를 넘어 실제로 도움이 되는 자기 이해의 도구가 탄생합니다.
            </p>
            <p>
              운명의 실은 그 두 가지를 하나로 엮어, 누구나 무료로 쉽게 접근할 수 있도록 만들었습니다.
            </p>
          </div>
        </div>

        {/* 사주팔자란 */}
        <div className="glass-card p-8 mb-6">
          <h2 className="text-xl font-bold mb-4" style={{ color: '#67e8f9' }}>🔮 사주팔자(四柱八字)란?</h2>
          <div className="space-y-3 text-sm leading-7" style={{ color: '#a89dc7' }}>
            <p>
              사주팔자는 태어난 해·월·일·시 네 기둥(四柱)에서 추출한 여덟 글자(八字)로 운명을 분석하는 동양 철학입니다.
              각 글자는 오행(五行) — <strong style={{ color: '#ede9fe' }}>목(木)·화(火)·토(土)·금(金)·수(水)</strong> — 의
              기운을 담고 있으며, 이 기운의 균형과 흐름이 개인의 성격, 재능, 삶의 흐름을 결정한다고 봅니다.
            </p>
            <p>
              중국 당나라 이후 한반도에 깊이 뿌리내린 사주학은 오늘날에도 진로 선택, 궁합, 연간 운세 파악에 폭넓게 활용됩니다.
              운명의 실에서는 누구나 생년월일시를 입력하면 자신의 주기운(主氣運)과 보조기운을 즉시 분석받을 수 있습니다.
            </p>
          </div>
        </div>

        {/* 오행 설명 */}
        <div className="grid grid-cols-5 gap-3 mb-8">
          {[
            { name: '목(木)', emoji: '🌱', desc: '성장·창의·인내', color: '#2db8a0' },
            { name: '화(火)', emoji: '🔥', desc: '열정·표현·도전', color: '#e05252' },
            { name: '토(土)', emoji: '🌍', desc: '안정·신뢰·포용', color: '#d4951e' },
            { name: '금(金)', emoji: '⚡', desc: '결단·정의·집중', color: '#a89dc7' },
            { name: '수(水)', emoji: '💧', desc: '지혜·유연·통찰', color: '#4a90e2' },
          ].map(e => (
            <div key={e.name} className="glass-card p-4 text-center">
              <div className="text-2xl mb-2">{e.emoji}</div>
              <p className="text-xs font-bold mb-1" style={{ color: e.color }}>{e.name}</p>
              <p className="text-xs" style={{ color: '#4a4570' }}>{e.desc}</p>
            </div>
          ))}
        </div>

        {/* 제공 서비스 */}
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-5" style={{ color: '#ede9fe' }}>제공 서비스</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { icon: '🔮', title: '사주팔자 분석', desc: '생년월일시로 오행 기운과 성격, 재능, 연간 운세를 분석합니다.', href: '/saju' },
              { icon: '💘', title: '연애유형 테스트', desc: '25문항으로 나의 연애 스타일과 최고 궁합 유형을 찾아드립니다.', href: '/test/love' },
              { icon: '💼', title: '직업적성 테스트', desc: '타고난 재능과 성향으로 가장 잘 맞는 직업 유형을 분석합니다.', href: '/test/career' },
              { icon: '🧩', title: 'MBTI 테스트', desc: '25문항으로 16가지 MBTI 성격 유형과 심층 분석을 제공합니다.', href: '/test/mbti' },
              { icon: '💰', title: '재물운 테스트', desc: '금전 성향과 재물운을 분석해 나만의 부의 전략을 제시합니다.', href: '/test/money' },
              { icon: '🌟', title: '오늘의 운세', desc: '12띠별 오늘의 전체운·애정운·금전운·직업운·건강운을 제공합니다.', href: '/fortune' },
              { icon: '👁', title: '관상학 칼럼', desc: '얼굴 부위별 운세를 풀이하는 관상학 입문 콘텐츠입니다.', href: '/blog/gwansang' },
              { icon: '✋', title: '손금학 칼럼', desc: '생명선, 감정선, 두뇌선, 운명선 등 손금 전체를 해설합니다.', href: '/blog/songeum' },
            ].map(s => (
              <Link key={s.title} href={s.href} className="glass-card p-5 block transition-all duration-200 hover:border-violet-400">
                <div className="flex items-start gap-3">
                  <span className="text-2xl flex-shrink-0">{s.icon}</span>
                  <div>
                    <h3 className="font-bold mb-1 text-sm" style={{ color: '#ede9fe' }}>{s.title}</h3>
                    <p className="text-xs leading-relaxed" style={{ color: '#4a4570' }}>{s.desc}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* 운영 원칙 */}
        <div className="glass-card p-8 mb-8">
          <h2 className="text-xl font-bold mb-5" style={{ color: '#fcd34d' }}>📜 운영 원칙</h2>
          <ul className="space-y-4 text-sm leading-7" style={{ color: '#a89dc7' }}>
            {[
              { icon: '🔒', text: '입력하신 생년월일, 성별 등 개인정보는 분석에만 사용되며 서버에 저장되지 않습니다. 브라우저를 닫으면 모든 데이터가 삭제됩니다.' },
              { icon: '⚖️', text: '제공되는 모든 분석 결과는 오락 및 자기 이해의 참고 목적입니다. 중요한 의사결정의 근거로 사용하지 않기를 권장합니다.' },
              { icon: '📊', text: '서비스 품질 개선을 위해 익명 방문 통계를 수집하며, 이는 Google Analytics 정책에 따라 처리됩니다.' },
              { icon: '💼', text: '광고 수익으로 서비스를 운영하며, 광고는 Google AdSense를 통해 제공됩니다. 광고 콘텐츠는 Google이 자동으로 관리합니다.' },
            ].map((item, i) => (
              <li key={i} className="flex gap-3">
                <span className="flex-shrink-0 mt-0.5">{item.icon}</span>
                <span>{item.text}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* 문의 */}
        <div className="glass-card p-8 mb-10 text-center">
          <h2 className="text-xl font-bold mb-3" style={{ color: '#ede9fe' }}>문의 및 제안</h2>
          <p className="text-sm mb-5" style={{ color: '#a89dc7' }}>
            서비스 이용 중 문의사항이나 개선 제안이 있으시면 이메일로 연락해 주세요.
          </p>
          <a
            href="mailto:starroad0717@gmail.com"
            className="btn-primary px-6 py-3 text-sm inline-block"
          >
            ✉ starroad0717@gmail.com
          </a>
        </div>

        <div className="text-center">
          <Link href="/" className="btn-secondary px-8 py-4 text-sm inline-block">
            서비스 시작하기 →
          </Link>
        </div>

      </div>
    </div>
  )
}
