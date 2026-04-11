'use client'

import { useState, useEffect } from 'react'

type Tab = 'after' | 'between' | 'age'

function getWeekday(date: Date): string {
  return ['일', '월', '화', '수', '목', '금', '토'][date.getDay()]
}

function formatDate(date: Date): string {
  return date.toLocaleDateString('ko-KR', {
    year: 'numeric', month: 'long', day: 'numeric',
  }) + ` (${getWeekday(date)})`
}

export default function DateCalcPage() {
  const [tab, setTab] = useState<Tab>('after')
  const [todayStr, setTodayStr] = useState('')

  // Tab: 며칠 후
  const [baseDate, setBaseDate] = useState('')
  const [days, setDays] = useState('')
  const [afterResult, setAfterResult] = useState<string | null>(null)

  // Tab: 두 날짜 사이
  const [fromDate, setFromDate] = useState('')
  const [toDate, setToDate] = useState('')
  const [betweenResult, setBetweenResult] = useState<string | null>(null)

  // Tab: 나이 계산
  const [birthDate, setBirthDate] = useState('')
  const [ageResult, setAgeResult] = useState<{ korean: number; international: number; days: number } | null>(null)

  useEffect(() => {
    const today = new Date()
    const str = today.toISOString().split('T')[0]
    setTodayStr(str)
    setBaseDate(str)
    setFromDate(str)
    setToDate(str)
  }, [])

  function calcAfter() {
    if (!baseDate || !days) return
    const d = new Date(baseDate)
    d.setDate(d.getDate() + parseInt(days, 10))
    setAfterResult(formatDate(d))
  }

  function calcBetween() {
    if (!fromDate || !toDate) return
    const a = new Date(fromDate)
    const b = new Date(toDate)
    a.setHours(0, 0, 0, 0)
    b.setHours(0, 0, 0, 0)
    const diff = Math.round((b.getTime() - a.getTime()) / (1000 * 60 * 60 * 24))
    setBetweenResult(`${Math.abs(diff)}일 차이 (${diff >= 0 ? `${diff}일 후` : `${Math.abs(diff)}일 전`})`)
  }

  function calcAge() {
    if (!birthDate) return
    const today = new Date()
    const birth = new Date(birthDate)
    today.setHours(0, 0, 0, 0)
    birth.setHours(0, 0, 0, 0)

    // 만 나이
    let international = today.getFullYear() - birth.getFullYear()
    const mDiff = today.getMonth() - birth.getMonth()
    if (mDiff < 0 || (mDiff === 0 && today.getDate() < birth.getDate())) {
      international--
    }

    // 한국식 나이 (올해 - 출생년도 + 1)
    const korean = today.getFullYear() - birth.getFullYear() + 1

    // 살아온 날
    const totalDays = Math.round((today.getTime() - birth.getTime()) / (1000 * 60 * 60 * 24))

    setAgeResult({ korean, international, days: totalDays })
  }

  const tabs: { id: Tab; label: string; icon: string }[] = [
    { id: 'after', label: '며칠 후', icon: '➕' },
    { id: 'between', label: '날짜 차이', icon: '↔️' },
    { id: 'age', label: '나이 계산', icon: '🎂' },
  ]

  const inputStyle: React.CSSProperties = {
    background: '#0f1a30',
    border: '1px solid #e0c97f30',
    borderRadius: '12px',
    padding: '12px 16px',
    color: '#e8e8f0',
    fontSize: '16px',
    outline: 'none',
    width: '100%',
    colorScheme: 'dark',
  }

  const btnStyle: React.CSSProperties = {
    background: 'linear-gradient(135deg, #e0c97f, #c8a850)',
    color: '#16213e',
    fontWeight: 900,
    padding: '14px',
    borderRadius: '12px',
    border: 'none',
    cursor: 'pointer',
    fontSize: '16px',
    width: '100%',
  }

  return (
    <div className="min-h-screen py-10 px-4">
      <div className="max-w-lg mx-auto">

        {/* 헤더 */}
        <div className="text-center mb-8">
          <div className="text-5xl mb-3">🗓️</div>
          <h1 className="text-4xl font-black mb-2" style={{ color: '#e0c97f' }}>날짜 계산기</h1>
          <p className="text-sm" style={{ color: '#6b7280' }}>며칠 후 · 날짜 차이 · 나이 계산</p>
        </div>

        {/* 탭 */}
        <div
          className="flex rounded-xl p-1 mb-6 gap-1"
          style={{ background: '#0f1a30' }}
        >
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              style={{
                flex: 1,
                padding: '10px 6px',
                borderRadius: '10px',
                border: 'none',
                cursor: 'pointer',
                fontWeight: 700,
                fontSize: '14px',
                transition: 'all 0.2s',
                background: tab === t.id ? 'linear-gradient(135deg, #e0c97f, #c8a850)' : 'transparent',
                color: tab === t.id ? '#16213e' : '#8090a8',
              }}
            >
              {t.icon} {t.label}
            </button>
          ))}
        </div>

        {/* 탭 내용 */}
        <div
          className="rounded-2xl p-6"
          style={{ background: 'linear-gradient(135deg, #16213e, #0f1f3d)', border: '1px solid #e0c97f30' }}
        >

          {/* 며칠 후 */}
          {tab === 'after' && (
            <div className="flex flex-col gap-4">
              <div>
                <label className="block text-sm font-bold mb-2" style={{ color: '#a0a8c0' }}>기준 날짜</label>
                <input
                  type="date"
                  value={baseDate}
                  onChange={(e) => setBaseDate(e.target.value)}
                  style={inputStyle}
                />
              </div>
              <div>
                <label className="block text-sm font-bold mb-2" style={{ color: '#a0a8c0' }}>며칠 후? (음수 입력 시 이전 날짜)</label>
                <input
                  type="number"
                  placeholder="예: 100"
                  value={days}
                  onChange={(e) => setDays(e.target.value)}
                  style={inputStyle}
                  onKeyDown={(e) => e.key === 'Enter' && calcAfter()}
                />
              </div>
              <button onClick={calcAfter} style={btnStyle}>계산하기</button>
              {afterResult && (
                <div
                  className="rounded-xl p-5 text-center"
                  style={{ background: '#0f1a30', border: '1px solid #e0c97f40' }}
                >
                  <div className="text-sm mb-1" style={{ color: '#8090a8' }}>
                    {baseDate && new Date(baseDate).toLocaleDateString('ko-KR')} 기준 {days}일 후
                  </div>
                  <div className="text-2xl font-black" style={{ color: '#e0c97f' }}>{afterResult}</div>
                </div>
              )}
            </div>
          )}

          {/* 날짜 차이 */}
          {tab === 'between' && (
            <div className="flex flex-col gap-4">
              <div>
                <label className="block text-sm font-bold mb-2" style={{ color: '#a0a8c0' }}>시작 날짜</label>
                <input
                  type="date"
                  value={fromDate}
                  onChange={(e) => setFromDate(e.target.value)}
                  style={inputStyle}
                />
              </div>
              <div>
                <label className="block text-sm font-bold mb-2" style={{ color: '#a0a8c0' }}>종료 날짜</label>
                <input
                  type="date"
                  value={toDate}
                  onChange={(e) => setToDate(e.target.value)}
                  style={inputStyle}
                />
              </div>
              <button onClick={calcBetween} style={btnStyle}>계산하기</button>
              {betweenResult && (
                <div
                  className="rounded-xl p-5 text-center"
                  style={{ background: '#0f1a30', border: '1px solid #4a9eff40' }}
                >
                  <div className="text-sm mb-1" style={{ color: '#8090a8' }}>두 날짜 사이</div>
                  <div className="text-2xl font-black" style={{ color: '#4a9eff' }}>{betweenResult}</div>
                </div>
              )}
            </div>
          )}

          {/* 나이 계산 */}
          {tab === 'age' && (
            <div className="flex flex-col gap-4">
              <div>
                <label className="block text-sm font-bold mb-2" style={{ color: '#a0a8c0' }}>생년월일</label>
                <input
                  type="date"
                  value={birthDate}
                  onChange={(e) => setBirthDate(e.target.value)}
                  style={inputStyle}
                />
              </div>
              <button onClick={calcAge} disabled={!birthDate} style={{ ...btnStyle, opacity: birthDate ? 1 : 0.5, cursor: birthDate ? 'pointer' : 'not-allowed' }}>
                계산하기
              </button>
              {ageResult && (
                <div
                  className="rounded-xl p-5"
                  style={{ background: '#0f1a30', border: '1px solid #00cc7740' }}
                >
                  <div className="grid grid-cols-3 gap-3 text-center">
                    <div>
                      <div className="text-xs mb-1" style={{ color: '#8090a8' }}>한국 나이</div>
                      <div className="text-3xl font-black" style={{ color: '#e0c97f' }}>{ageResult.korean}</div>
                      <div className="text-xs" style={{ color: '#606080' }}>세</div>
                    </div>
                    <div>
                      <div className="text-xs mb-1" style={{ color: '#8090a8' }}>만 나이</div>
                      <div className="text-3xl font-black" style={{ color: '#4a9eff' }}>{ageResult.international}</div>
                      <div className="text-xs" style={{ color: '#606080' }}>세</div>
                    </div>
                    <div>
                      <div className="text-xs mb-1" style={{ color: '#8090a8' }}>살아온 날</div>
                      <div className="text-3xl font-black" style={{ color: '#00cc77' }}>{ageResult.days.toLocaleString()}</div>
                      <div className="text-xs" style={{ color: '#606080' }}>일</div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

      </div>
    </div>
  )
}
