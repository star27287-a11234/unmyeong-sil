import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '무료 심리테스트 | MBTI · 연애유형 · 직업적성 · 재물운 — 운명의 실',
  description: 'MBTI 성격유형, 연애유형, 직업적성, 재물운까지 — 4가지 무료 심리테스트로 나를 더 깊이 이해하세요. 25문항, 즉시 결과, 저장 없음.',
}

const tests = [
  {
    href: '/test/love',
    icon: '💘',
    title: '연애유형 테스트',
    subtitle: '나는 어떤 연애를 할까?',
    description: '25가지 질문으로 당신의 연애 스타일을 분석합니다. 열정형, 헌신형, 낭만형 등 8가지 유형 중 나의 유형은?',
    questions: 25,
    time: '5분',
    color: '#e05c7f',
    types: ['열정형', '헌신형', '낭만형', '독립형', '공감형'],
  },
  {
    href: '/test/career',
    icon: '💼',
    title: '직업적성 테스트',
    subtitle: '나에게 맞는 직업은?',
    description: '타고난 재능과 성향으로 최적의 직업 유형을 찾습니다. 리더형, 창작형, 분석형 등 8가지 직업 유형을 확인하세요.',
    questions: 25,
    time: '5분',
    color: '#4a9eff',
    types: ['리더형', '창작형', '분석형', '케어형', '기술형'],
  },
  {
    href: '/test/mbti',
    icon: '🧩',
    title: 'MBTI 성격유형 테스트',
    subtitle: '나의 성격 유형은?',
    description: 'E/I, S/N, T/F, J/P 4가지 차원 25개 질문으로 정확한 MBTI 유형과 심층 분석을 제공합니다.',
    questions: 25,
    time: '6분',
    color: '#2db8a0',
    types: ['INTJ', 'ENFP', 'INFJ', 'ENTJ', '16가지'],
  },
  {
    href: '/test/money',
    icon: '💰',
    title: '재물운 테스트',
    subtitle: '나의 돈 버는 스타일은?',
    description: '재물운과 금전 관리 성향을 분석합니다. 황금손, 꾸준형, 투자형 등 6가지 재물 유형 중 나는?',
    questions: 25,
    time: '5분',
    color: '#d4951e',
    types: ['황금손형', '꾸준형', '투자형', '절약형', '기부형'],
  },
]

export default function TestPage() {
  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-4xl mx-auto">

        {/* 헤더 */}
        <div className="mb-12">
          <p className="text-xs tracking-widest uppercase mb-2" style={{ color: '#4a4570' }}>Psychology Tests</p>
          <h1 className="text-3xl font-black mb-3" style={{ color: '#ede9fe' }}>
            무료 심리테스트
          </h1>
          <p className="text-base leading-relaxed max-w-2xl" style={{ color: '#a89dc7' }}>
            심리학 원리를 바탕으로 설계된 4가지 테스트. 연애, 직업, 성격, 재물까지 —
            당신이 미처 몰랐던 자신을 발견하는 여정을 시작하세요.
          </p>
        </div>

        {/* 테스트 카드 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-16">
          {tests.map((test) => (
            <Link
              key={test.href}
              href={test.href}
              className="test-card group relative rounded-xl p-6 block transition-all duration-200 active:scale-[0.99]"
            >
              <div className="text-4xl mb-4">{test.icon}</div>
              <h2 className="text-xl font-bold mb-1" style={{ color: '#ede9fe' }}>{test.title}</h2>
              <p className="text-sm font-medium mb-3" style={{ color: test.color }}>{test.subtitle}</p>
              <p className="text-sm leading-relaxed mb-4" style={{ color: '#a89dc7' }}>{test.description}</p>

              <div className="flex flex-wrap gap-1.5 mb-4">
                {test.types.map(t => (
                  <span key={t} className="text-xs px-2 py-0.5 rounded-full"
                    style={{ background: `${test.color}15`, color: test.color }}>
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-xs" style={{ color: '#4a4570' }}>📝 {test.questions}문항</span>
                  <span className="text-xs" style={{ color: '#4a4570' }}>⏱ 약 {test.time}</span>
                </div>
                <span className="text-sm font-bold" style={{ color: test.color }}>시작 →</span>
              </div>
            </Link>
          ))}
        </div>

        {/* 심리테스트 가이드 */}
        <div className="glass-card p-8 mb-8">
          <h2 className="text-lg font-bold mb-4" style={{ color: '#ede9fe' }}>
            🌟 심리테스트를 올바르게 활용하는 방법
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm leading-relaxed" style={{ color: '#a89dc7' }}>
            <div>
              <p className="font-semibold mb-2" style={{ color: '#a78bfa' }}>✓ 직관적으로 답하세요</p>
              <p>정답이 없습니다. 너무 오래 고민하지 말고, 첫 번째 떠오르는 대답을 선택하는 것이 가장 정확합니다.</p>
            </div>
            <div>
              <p className="font-semibold mb-2" style={{ color: '#67e8f9' }}>✓ 현재의 나를 기준으로</p>
              <p>이상적인 모습이 아닌, 지금 현재 실제 자신의 모습을 기준으로 답하세요. 결과의 정확도가 높아집니다.</p>
            </div>
            <div>
              <p className="font-semibold mb-2" style={{ color: '#fcd34d' }}>✓ 참고 자료로만 활용</p>
              <p>심리테스트는 자기 이해를 돕는 도구입니다. 결과가 절대적인 정의가 아닌, 자신을 탐색하는 출발점으로 삼으세요.</p>
            </div>
            <div>
              <p className="font-semibold mb-2" style={{ color: '#e879a0' }}>✓ 여러 번 해도 좋아요</p>
              <p>사람은 변합니다. 시간이 지난 후 다시 테스트를 해보면 달라진 자신을 발견할 수 있습니다.</p>
            </div>
          </div>
        </div>

        {/* 테스트 선택 가이드 */}
        <div className="text-center">
          <p className="text-sm mb-4" style={{ color: '#4a4570' }}>어떤 테스트부터 시작할지 모르겠다면?</p>
          <Link href="/test/mbti" className="btn-primary px-6 py-3 text-sm inline-block">
            🧩 가장 인기 있는 MBTI부터 →
          </Link>
        </div>

      </div>
    </div>
  )
}
