'use client'

import { useMemo, useState } from 'react'

// 시드 기반 난수 생성기
function seeded(seed: number) {
  let s = seed >>> 0
  return () => {
    s = Math.imul(s ^ (s >>> 15), s | 1)
    s ^= s + Math.imul(s ^ (s >>> 7), s | 61)
    return ((s ^ (s >>> 14)) >>> 0) / 4294967296
  }
}

function getDaySeed() {
  const d = new Date()
  return d.getFullYear() * 10000 + (d.getMonth() + 1) * 100 + d.getDate()
}

function pick<T>(arr: T[], rand: () => number): T {
  return arr[Math.floor(rand() * arr.length)]
}

function score(rand: () => number, min = 2, max = 5): number {
  return min + Math.floor(rand() * (max - min + 1))
}

const ZODIACS = [
  { name: '쥐', emoji: '🐭', years: '1960·1972·1984·1996·2008·2020', color: '#60b8e0' },
  { name: '소', emoji: '🐮', years: '1961·1973·1985·1997·2009·2021', color: '#80d080' },
  { name: '호랑이', emoji: '🐯', years: '1962·1974·1986·1998·2010·2022', color: '#e08040' },
  { name: '토끼', emoji: '🐰', years: '1963·1975·1987·1999·2011·2023', color: '#e060a0' },
  { name: '용', emoji: '🐲', years: '1964·1976·1988·2000·2012·2024', color: '#9c59d1' },
  { name: '뱀', emoji: '🐍', years: '1965·1977·1989·2001·2013·2025', color: '#60c0c0' },
  { name: '말', emoji: '🐴', years: '1966·1978·1990·2002·2014', color: '#e0a030' },
  { name: '양', emoji: '🐑', years: '1967·1979·1991·2003·2015', color: '#c8a8e0' },
  { name: '원숭이', emoji: '🐵', years: '1968·1980·1992·2004·2016', color: '#e06060' },
  { name: '닭', emoji: '🐔', years: '1969·1981·1993·2005·2017', color: '#e0c050' },
  { name: '개', emoji: '🐶', years: '1970·1982·1994·2006·2018', color: '#a08060' },
  { name: '돼지', emoji: '🐷', years: '1971·1983·1995·2007·2019', color: '#e080a0' },
]

const OVERALL_MSG = [
  '오늘은 모든 기운이 상승하는 날입니다. 주저하지 말고 도전하세요.',
  '좋은 인연이 찾아옵니다. 주변 사람과 대화를 나눠보세요.',
  '평온하고 안정적인 하루입니다. 내면을 가다듬기 좋은 날.',
  '새로운 기회의 문이 열립니다. 긍정적인 마음으로 임하세요.',
  '작은 행운들이 연속으로 찾아오는 날. 감사하는 마음을 잊지 마세요.',
  '오늘은 자신을 믿고 앞으로 나아가면 좋은 결과가 따라옵니다.',
  '차분하게 계획을 세우는 날. 서두르지 않으면 좋은 성과가 생깁니다.',
  '주변의 도움을 받기 좋은 날입니다. 혼자보다 함께가 힘이 됩니다.',
  '오늘은 직감을 믿으세요. 마음이 끌리는 대로 행동하면 길이 열립니다.',
  '노력이 빛을 발하는 날. 꾸준히 해온 것들이 인정받는 시기입니다.',
  '변화를 두려워하지 마세요. 변화 속에 더 큰 행운이 숨어 있습니다.',
  '오늘은 재물운이 강합니다. 중요한 결정을 내리기에 좋은 날입니다.',
]

const LOVE_MSG = [
  ['설레는 만남이 기다립니다', '연인과의 관계가 깊어집니다', '솔직한 대화로 오해를 풀 수 있어요'],
  ['인연이 가까운 곳에 있습니다', '작은 표현 하나가 큰 감동이 됩니다', '상대의 마음에 여유를 주세요'],
  ['감정을 솔직하게 표현할 때입니다', '좋은 기운이 연애운을 높여줍니다', '새로운 만남의 기회가 생깁니다'],
]

const MONEY_MSG = [
  ['예상치 못한 수입이 생길 수 있어요', '재물운이 상승하는 시기입니다', '투자보다 저축에 집중하세요'],
  ['지출을 아끼면 나중에 보상받습니다', '재물이 모이는 흐름입니다', '큰 지출은 내일로 미루세요'],
  ['작은 부업 아이디어가 빛납니다', '알뜰한 소비가 행운을 부릅니다', '재물운이 차차 나아집니다'],
]

const WORK_MSG = [
  ['업무 능률이 최고조에 달합니다', '동료와 협력하면 시너지가 폭발합니다', '새 프로젝트에 도전하기 좋은 날'],
  ['꼼꼼하게 검토하면 좋은 결과가 옵니다', '리더십을 발휘할 기회가 생깁니다', '인정받는 결과물이 나옵니다'],
  ['집중력이 높아지는 하루입니다', '묵혀둔 업무를 마무리하기 좋아요', '아이디어가 풍부하게 떠오릅니다'],
]

const HEALTH_MSG = [
  ['활력이 넘치는 하루입니다', '가벼운 운동으로 기운을 높여보세요', '숙면이 최고의 보약입니다'],
  ['수분 보충과 휴식이 중요합니다', '스트레스를 풀어주는 시간을 가지세요', '건강 상태가 양호합니다'],
  ['무리하지 말고 자신을 돌보세요', '소화기 건강에 신경 쓰면 좋겠습니다', '몸이 보내는 신호에 귀 기울이세요'],
]

const LUCKY_COLORS = ['빨강', '주황', '노랑', '초록', '파랑', '보라', '분홍', '하늘', '금색', '은색', '흰색', '검정']
const LUCKY_DIRS = ['동', '서', '남', '북', '동남', '서북', '동북', '서남']

function Stars({ n, color }: { n: number; color: string }) {
  return (
    <span>
      {[1,2,3,4,5].map(i => (
        <span key={i} style={{ color: i <= n ? color : '#1e1e38', fontSize: '14px' }}>★</span>
      ))}
    </span>
  )
}

export default function FortunePage() {
  const today = new Date()
  const dateStr = `${today.getFullYear()}년 ${today.getMonth() + 1}월 ${today.getDate()}일`
  const dayNames = ['일', '월', '화', '수', '목', '금', '토']
  const dayName = dayNames[today.getDay()]

  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const fortunes = useMemo(() => {
    const base = getDaySeed()
    return ZODIACS.map((z, i) => {
      const rand = seeded(base + i * 9973)
      const overall = score(rand, 2, 5)
      const love = score(rand, 2, 5)
      const money = score(rand, 2, 5)
      const work = score(rand, 2, 5)
      const health = score(rand, 2, 5)
      return {
        ...z,
        overall,
        love,
        money,
        work,
        health,
        msg: pick(OVERALL_MSG, rand),
        loveMsg: pick(pick(LOVE_MSG, rand), rand),
        moneyMsg: pick(pick(MONEY_MSG, rand), rand),
        workMsg: pick(pick(WORK_MSG, rand), rand),
        healthMsg: pick(pick(HEALTH_MSG, rand), rand),
        luckyColor: pick(LUCKY_COLORS, rand),
        luckyNum: Math.floor(rand() * 9) + 1,
        luckyDir: pick(LUCKY_DIRS, rand),
      }
    })
  }, [])

  const avgScore = (f: typeof fortunes[0]) => ((f.love + f.money + f.work + f.health) / 4).toFixed(1)

  const toggleIndex = (i: number) => {
    setOpenIndex(prev => prev === i ? null : i)
  }

  return (
    <div className="min-h-screen py-10 px-4">
      <div className="max-w-2xl mx-auto">

        {/* 헤더 */}
        <div className="text-center mb-8">
          <div className="text-5xl mb-3">🔮</div>
          <p className="text-xs tracking-widest uppercase mb-2" style={{ color: '#4a4570' }}>Daily Fortune</p>
          <h1 className="text-4xl font-black mb-2 text-gradient">오늘의 운세</h1>
          <p className="text-lg font-medium" style={{ color: '#a89dc7' }}>
            {dateStr} ({dayName}요일)
          </p>
          <p className="text-sm mt-1" style={{ color: '#4a4570' }}>매일 자정 업데이트 · 12띠별 운세</p>
        </div>

        {/* 십이지 소개 */}
        <div className="glass-card p-6 mb-6">
          <h2 className="text-base font-bold mb-3" style={{ color: '#a78bfa' }}>🐾 십이지(十二支)란?</h2>
          <p className="text-sm leading-7" style={{ color: '#a89dc7' }}>
            십이지(十二支)는 동양 천문학에서 하늘의 기운을 12가지 동물 — 쥐·소·호랑이·토끼·용·뱀·말·양·원숭이·닭·개·돼지 —
            에 대응시킨 체계입니다. 출생 연도에 따라 정해진 띠동물은 그 사람의 기질, 운명의 흐름과 깊이 연결된다고 봅니다.
            오늘의 운세는 각 띠의 기운이 오늘의 천지 에너지와 어떻게 만나는지를 풀이합니다.
          </p>
        </div>

        {/* 안내 */}
        <div className="rounded-xl px-4 py-3 mb-6 text-sm" style={{ background: 'rgba(10,7,30,0.75)', border: '1px solid rgba(120,80,220,0.2)' }}>
          <p style={{ color: '#a89dc7' }}>
            🐾 본인의 <span style={{ color: '#a78bfa' }}>띠(출생연도)</span>를 선택하여 오늘의 운세를 확인하세요.
            재미와 위안을 위한 콘텐츠입니다.
          </p>
        </div>

        {/* 12띠 아코디언 목록 */}
        <div className="flex flex-col gap-2">
          {fortunes.map((f, i) => {
            const isOpen = openIndex === i
            return (
              <div
                key={f.name}
                className="rounded-xl overflow-hidden"
                style={{ border: `1px solid ${isOpen ? f.color + '60' : '#1e1e38'}`, transition: 'border-color 0.2s' }}
              >
                {/* 아코디언 헤더 (클릭) */}
                <button
                  onClick={() => toggleIndex(i)}
                  className="w-full flex items-center justify-between px-5 py-4"
                  style={{ background: isOpen ? `${f.color}12` : '#111120' }}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{f.emoji}</span>
                    <div className="text-left">
                      <span className="text-lg font-black" style={{ color: f.color }}>{f.name}띠</span>
                      <p className="text-xs" style={{ color: '#505075' }}>{f.years}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="text-right">
                      <Stars n={f.overall} color={f.color} />
                      <p className="text-xs mt-0.5" style={{ color: '#505075' }}>종합 {avgScore(f)}점</p>
                    </div>
                    <span
                      className="text-xl font-bold transition-transform duration-300"
                      style={{ color: f.color, transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', display: 'inline-block' }}
                    >
                      ∨
                    </span>
                  </div>
                </button>

                {/* 아코디언 내용 */}
                {isOpen && (
                  <div
                    className="px-5 pb-5 pt-3"
                    style={{ background: '#111120' }}
                  >
                    {/* 운세 메시지 */}
                    <p className="text-sm leading-relaxed mb-4" style={{ color: '#9090b8' }}>{f.msg}</p>

                    {/* 세부 운세 */}
                    <div className="grid grid-cols-2 gap-2 mb-4">
                      {[
                        { label: '💕 애정운', s: f.love, msg: f.loveMsg },
                        { label: '💰 재물운', s: f.money, msg: f.moneyMsg },
                        { label: '💼 직업운', s: f.work, msg: f.workMsg },
                        { label: '💪 건강운', s: f.health, msg: f.healthMsg },
                      ].map(item => (
                        <div key={item.label} className="rounded-xl p-3" style={{ background: '#0b0b16' }}>
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-xs font-bold" style={{ color: '#505075' }}>{item.label}</span>
                            <Stars n={item.s} color={f.color} />
                          </div>
                          <p className="text-xs" style={{ color: '#505075' }}>{item.msg}</p>
                        </div>
                      ))}
                    </div>

                    {/* 행운의 정보 */}
                    <div className="flex gap-2 flex-wrap">
                      {[
                        { label: '🎨 행운의 색', val: f.luckyColor },
                        { label: '🔢 행운의 숫자', val: String(f.luckyNum) },
                        { label: '🧭 행운의 방향', val: f.luckyDir },
                      ].map(item => (
                        <span
                          key={item.label}
                          className="text-xs px-2 py-1 rounded-full"
                          style={{ background: `${f.color}15`, color: f.color }}
                        >
                          {item.label} <strong>{item.val}</strong>
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        <p className="text-center text-xs mt-8" style={{ color: '#4a4570' }}>
          ※ 본 운세는 재미·위안 목적의 콘텐츠로, 실제 미래를 예측하지 않습니다.
        </p>

        {/* 운세 활용 가이드 */}
        <div className="glass-card p-7 mt-8">
          <h2 className="text-base font-bold mb-4" style={{ color: '#a78bfa' }}>✨ 오늘의 운세를 더 잘 활용하는 방법</h2>
          <div className="space-y-3 text-sm leading-7" style={{ color: '#a89dc7' }}>
            <p>
              <strong style={{ color: '#ede9fe' }}>아침에 확인하세요.</strong> 하루를 시작하기 전 운세를 보면 그날의 기운을 의식하며
              더 집중된 마음으로 임할 수 있습니다. 좋은 운세는 자신감을 높이고, 주의가 필요한 운세는 미리 대비하게 합니다.
            </p>
            <p>
              <strong style={{ color: '#ede9fe' }}>행운의 색상과 방향을 활용하세요.</strong> 오늘의 행운 색상을 옷이나 소품에 포인트로 넣거나,
              행운의 방향을 향해 중요한 대화나 미팅을 진행해보세요. 작은 실천이 긍정적인 마음가짐을 만듭니다.
            </p>
            <p>
              <strong style={{ color: '#ede9fe' }}>사주팔자와 함께 보세요.</strong> 오늘의 운세는 띠별 일간 기운이며, 사주팔자는
              타고난 기질과 장기적 흐름을 분석합니다. 두 가지를 함께 활용하면 더 풍부한 자기 이해가 가능합니다.
            </p>
          </div>
        </div>

        {/* 관련 서비스 링크 */}
        <div className="grid grid-cols-2 gap-3 mt-4">
          {[
            { href: '/saju', icon: '🔮', label: '사주팔자 분석', color: '#a78bfa' },
            { href: '/blog', icon: '📚', label: '운세 칼럼', color: '#67e8f9' },
          ].map(item => (
            <a
              key={item.href}
              href={item.href}
              className="glass-card p-4 text-center block transition-all duration-200 hover:border-violet-400"
            >
              <div className="text-2xl mb-1">{item.icon}</div>
              <p className="text-xs font-bold" style={{ color: item.color }}>{item.label}</p>
            </a>
          ))}
        </div>

      </div>
    </div>
  )
}
