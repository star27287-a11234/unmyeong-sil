'use client'

import { useMemo } from 'react'

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
  { name: 'Rat', emoji: '🐭', years: '1960·1972·1984·1996·2008·2020', color: '#60b8e0' },
  { name: 'Ox', emoji: '🐮', years: '1961·1973·1985·1997·2009·2021', color: '#80d080' },
  { name: 'Tiger', emoji: '🐯', years: '1962·1974·1986·1998·2010·2022', color: '#e08040' },
  { name: 'Rabbit', emoji: '🐰', years: '1963·1975·1987·1999·2011·2023', color: '#e060a0' },
  { name: 'Dragon', emoji: '🐲', years: '1964·1976·1988·2000·2012·2024', color: '#9c59d1' },
  { name: 'Snake', emoji: '🐍', years: '1965·1977·1989·2001·2013·2025', color: '#60c0c0' },
  { name: 'Horse', emoji: '🐴', years: '1966·1978·1990·2002·2014', color: '#e0a030' },
  { name: 'Goat', emoji: '🐑', years: '1967·1979·1991·2003·2015', color: '#c8a8e0' },
  { name: 'Monkey', emoji: '🐵', years: '1968·1980·1992·2004·2016', color: '#e06060' },
  { name: 'Rooster', emoji: '🐔', years: '1969·1981·1993·2005·2017', color: '#e0c050' },
  { name: 'Dog', emoji: '🐶', years: '1970·1982·1994·2006·2018', color: '#a08060' },
  { name: 'Pig', emoji: '🐷', years: '1971·1983·1995·2007·2019', color: '#e080a0' },
]

const OVERALL_MSG = [
  'All energies are rising today. Don\'t hesitate — take the leap.',
  'A meaningful connection is on its way. Open up to conversations around you.',
  'A peaceful, stable day awaits. A great time to reflect and recharge.',
  'New opportunities are knocking. Approach them with an open heart.',
  'Small strokes of luck keep coming your way. Stay grateful.',
  'Trust yourself today — moving forward will bring wonderful results.',
  'Plan carefully and don\'t rush. Good results come to those who are steady.',
  'Today is a great day to lean on others. Together is stronger.',
  'Trust your instincts today. Follow your heart and the path will open.',
  'Your hard work is paying off. Recognition is coming your way.',
  'Don\'t fear change — greater fortune hides within it.',
  'Financial luck is strong today. A good day for important decisions.',
]

const LOVE_MSG = [
  ['An exciting encounter awaits', 'Your bond with your partner deepens', 'Honest talk can clear misunderstandings'],
  ['Love is closer than you think', 'A small gesture goes a long way', 'Give your partner space to breathe'],
  ['Express your feelings openly now', 'Good energy boosts your love life', 'New romantic opportunities arise'],
]

const MONEY_MSG = [
  ['An unexpected income may arrive', 'Financial luck is on the rise', 'Focus on saving over investing'],
  ['Cutting costs now will pay off later', 'Wealth is gathering in your favor', 'Delay big purchases for now'],
  ['A side project idea shines bright', 'Smart spending attracts good fortune', 'Financial luck is gradually improving'],
]

const WORK_MSG = [
  ['Work efficiency is at its peak', 'Collaborating brings explosive synergy', 'A great day to start a new project'],
  ['Careful review leads to great results', 'A chance to show leadership emerges', 'Your output earns recognition'],
  ['Focus and concentration are heightened', 'Good day to wrap up pending tasks', 'Ideas are flowing freely today'],
]

const HEALTH_MSG = [
  ['You\'re full of vitality today', 'Light exercise will boost your energy', 'Good sleep is your best medicine'],
  ['Stay hydrated and get some rest', 'Take time to de-stress today', 'Your overall health is in good shape'],
  ['Don\'t push too hard — be gentle with yourself', 'Pay attention to your digestive health', 'Listen to what your body is telling you'],
]

const LUCKY_COLORS = ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Purple', 'Pink', 'Sky Blue', 'Gold', 'Silver', 'White', 'Black']
const LUCKY_DIRS = ['East', 'West', 'South', 'North', 'SE', 'NW', 'NE', 'SW']

function Stars({ n, color }: { n: number; color: string }) {
  return (
    <span>
      {[1,2,3,4,5].map(i => (
        <span key={i} style={{ color: i <= n ? color : '#333355', fontSize: '14px' }}>★</span>
      ))}
    </span>
  )
}

export default function FortunePageEn() {
  const today = new Date()
  const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
  const days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat']
  const dateStr = `${months[today.getMonth()]} ${today.getDate()}, ${today.getFullYear()}`
  const dayName = days[today.getDay()]

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

  return (
    <div className="min-h-screen py-10 px-4">
      <div className="max-w-3xl mx-auto">

        <div className="text-center mb-8">
          <div className="text-5xl mb-3">🔮</div>
          <h1 className="text-4xl font-black mb-2" style={{ color: '#e0c97f' }}>Today&apos;s Fortune</h1>
          <p className="text-lg font-medium" style={{ color: '#c0c0d0' }}>
            {dateStr} ({dayName})
          </p>
          <p className="text-sm mt-1" style={{ color: '#6b7280' }}>Updated daily at midnight · 12 Chinese Zodiac signs</p>
        </div>

        <div className="rounded-xl px-4 py-3 mb-8 text-sm" style={{ background: '#e0c97f0a', border: '1px solid #e0c97f25' }}>
          <p style={{ color: '#9090a8' }}>
            🐾 Find your <span style={{ color: '#e0c97f' }}>zodiac sign (birth year)</span> and check today&apos;s fortune.
            This is for fun and comfort only.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {fortunes.map(f => (
            <div
              key={f.name}
              className="rounded-2xl p-5"
              style={{ background: 'linear-gradient(135deg, #16213e, #0f1f3d)', border: `1px solid ${f.color}25` }}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <span className="text-3xl">{f.emoji}</span>
                  <div>
                    <span className="text-lg font-black" style={{ color: f.color }}>{f.name}</span>
                    <p className="text-xs" style={{ color: '#606080' }}>{f.years}</p>
                  </div>
                </div>
                <div className="text-right">
                  <Stars n={f.overall} color={f.color} />
                  <p className="text-xs mt-0.5" style={{ color: '#808090' }}>Overall {avgScore(f)}</p>
                </div>
              </div>

              <p className="text-sm leading-relaxed mb-4" style={{ color: '#b0b8c8' }}>{f.msg}</p>

              <div className="grid grid-cols-2 gap-2 mb-4">
                {[
                  { label: '💕 Love', s: f.love, msg: f.loveMsg },
                  { label: '💰 Money', s: f.money, msg: f.moneyMsg },
                  { label: '💼 Career', s: f.work, msg: f.workMsg },
                  { label: '💪 Health', s: f.health, msg: f.healthMsg },
                ].map(item => (
                  <div key={item.label} className="rounded-xl p-3" style={{ background: '#ffffff06' }}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-bold" style={{ color: '#9090b0' }}>{item.label}</span>
                      <Stars n={item.s} color={f.color} />
                    </div>
                    <p className="text-xs" style={{ color: '#8090a8' }}>{item.msg}</p>
                  </div>
                ))}
              </div>

              <div className="flex gap-2 flex-wrap">
                {[
                  { label: '🎨 Color', val: f.luckyColor },
                  { label: '🔢 Number', val: String(f.luckyNum) },
                  { label: '🧭 Direction', val: f.luckyDir },
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
          ))}
        </div>

        <p className="text-center text-xs mt-8" style={{ color: '#404060' }}>
          ※ This fortune is for entertainment purposes only and does not predict actual future events.
        </p>
      </div>
    </div>
  )
}
