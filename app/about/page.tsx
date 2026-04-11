import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '서비스 소개 | 운명의 실',
  description: '운명의 실은 사주팔자, 관상, 손금, 심리테스트를 통해 나를 이해하는 여정을 함께하는 서비스입니다.',
}

const services = [
  { icon: '🔮', title: '사주팔자', desc: '생년월일시를 바탕으로 오행의 기운을 분석하고 성격, 재능, 운세를 풀이합니다.' },
  { icon: '💘', title: '연애유형', desc: '나의 연애 스타일과 이상형 유형을 심리학 기반으로 분석합니다.' },
  { icon: '💼', title: '직업적성', desc: '타고난 성향과 재능으로 최적의 직업 유형을 찾아드립니다.' },
  { icon: '🧩', title: 'MBTI', desc: '12가지 질문으로 MBTI 성격 유형과 심층 분석을 제공합니다.' },
  { icon: '💰', title: '재물운', desc: '금전 관리 성향과 재물운을 분석하여 나만의 부의 전략을 제시합니다.' },
  { icon: '👁', title: '관상학', desc: '얼굴 부위별 운세를 풀이하는 관상학 칼럼을 제공합니다.' },
  { icon: '✋', title: '손금학', desc: '생명선, 감정선, 두뇌선, 운명선 등 손금 전체를 해설합니다.' },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-3xl mx-auto">

        {/* 헤더 */}
        <div className="text-center mb-14">
          <div className="text-5xl mb-4">✨</div>
          <h1 className="text-4xl font-black mb-4" style={{ color: '#e0c97f' }}>
            운명의 실 소개
          </h1>
          <p className="text-lg leading-relaxed" style={{ color: '#8090a8' }}>
            사주팔자와 심리테스트로<br />진정한 나를 이해하는 여정
          </p>
        </div>

        {/* 소개 본문 */}
        <div
          className="rounded-2xl p-8 mb-10"
          style={{ background: 'linear-gradient(135deg, #16213e, #0f3460)', border: '1px solid #e0c97f20' }}
        >
          <h2 className="text-xl font-bold mb-5" style={{ color: '#e0c97f' }}>우리는 왜 운명의 실을 만들었나요?</h2>
          <div className="space-y-4 text-sm leading-7" style={{ color: '#b0b8c8' }}>
            <p>
              사람들은 누구나 자신을 더 잘 이해하고 싶어합니다.
              "나는 왜 이런 선택을 할까?", "내 강점은 무엇일까?", "나에게 맞는 사람은 어떤 사람일까?"
            </p>
            <p>
              동양의 지혜인 사주팔자와 현대 심리학을 결합하여, 단순한 흥미를 넘어
              실제로 도움이 되는 깊이 있는 분석을 제공하고자 운명의 실을 만들었습니다.
            </p>
            <p>
              모든 분석 결과는 오락 및 자기 이해의 참고 목적으로 제공됩니다.
              중요한 의사결정은 반드시 전문가와 상담하시기 바랍니다.
            </p>
          </div>
        </div>

        {/* 제공 서비스 */}
        <h2 className="text-2xl font-bold mb-6" style={{ color: '#e8e8f0' }}>제공 서비스</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
          {services.map((s) => (
            <div
              key={s.title}
              className="rounded-xl p-5"
              style={{ background: '#16213e', border: '1px solid #e0c97f15' }}
            >
              <div className="text-2xl mb-2">{s.icon}</div>
              <h3 className="font-bold mb-1" style={{ color: '#e8e8f0' }}>{s.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: '#8090a8' }}>{s.desc}</p>
            </div>
          ))}
        </div>

        {/* 운영 원칙 */}
        <div
          className="rounded-2xl p-8 mb-10"
          style={{ background: '#16213e', border: '1px solid #e0c97f15' }}
        >
          <h2 className="text-xl font-bold mb-5" style={{ color: '#e0c97f' }}>운영 원칙</h2>
          <ul className="space-y-3 text-sm leading-7" style={{ color: '#b0b8c8' }}>
            <li className="flex gap-3">
              <span style={{ color: '#e0c97f' }}>•</span>
              입력하신 생년월일, 성별 등 개인정보는 분석에만 사용되며 서버에 저장되지 않습니다.
            </li>
            <li className="flex gap-3">
              <span style={{ color: '#e0c97f' }}>•</span>
              제공되는 모든 분석 결과는 참고 목적이며, 실제 의사결정의 근거로 사용하지 않기를 권장합니다.
            </li>
            <li className="flex gap-3">
              <span style={{ color: '#e0c97f' }}>•</span>
              서비스 품질 개선을 위해 방문 통계를 수집하며, 이는 Google 정책에 따라 처리됩니다.
            </li>
            <li className="flex gap-3">
              <span style={{ color: '#e0c97f' }}>•</span>
              광고 수익으로 서비스를 운영하며, 광고는 Google AdSense를 통해 제공됩니다.
            </li>
          </ul>
        </div>

        {/* 문의 */}
        <div
          className="rounded-2xl p-8 mb-10 text-center"
          style={{ background: '#16213e', border: '1px solid #e0c97f20' }}
        >
          <h2 className="text-xl font-bold mb-3" style={{ color: '#e0c97f' }}>문의 및 제안</h2>
          <p className="text-sm mb-4" style={{ color: '#8090a8' }}>
            서비스 이용 중 문의사항이나 개선 제안이 있으시면 이메일로 연락해 주세요.
          </p>
          <a
            href="mailto:starroad0717@gmail.com"
            className="inline-block px-6 py-3 rounded-xl font-medium text-sm transition-all hover:scale-105"
            style={{
              background: 'linear-gradient(135deg, #e0c97f, #c4a84f)',
              color: '#1a1a2e',
            }}
          >
            starroad0717@gmail.com
          </a>
        </div>

        {/* 서비스 시작 링크 */}
        <div className="text-center">
          <Link
            href="/"
            className="inline-block px-8 py-4 rounded-2xl font-bold text-lg transition-all hover:scale-105"
            style={{
              background: 'transparent',
              border: '2px solid #e0c97f60',
              color: '#e0c97f',
            }}
          >
            서비스 시작하기 →
          </Link>
        </div>

      </div>
    </div>
  )
}
