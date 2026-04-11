'use client'

import { useState, useEffect } from 'react'

interface DdayItem {
  id: string
  title: string
  date: string
}

function calcDday(targetDate: string): number {
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  const target = new Date(targetDate)
  target.setHours(0, 0, 0, 0)
  return Math.ceil((target.getTime() - today.getTime()) / (1000 * 60 * 60 * 24))
}

function formatDdayLabel(diff: number): string {
  if (diff === 0) return 'D-Day!'
  if (diff > 0) return `D-${diff}`
  return `D+${Math.abs(diff)}`
}

function getDdayColor(diff: number): string {
  if (diff === 0) return '#e0c97f'
  if (diff > 0 && diff <= 7) return '#e05c7f'
  if (diff > 0) return '#4a9eff'
  return '#8090a8'
}

export default function DdayPage() {
  const [items, setItems] = useState<DdayItem[]>([])
  const [title, setTitle] = useState('')
  const [date, setDate] = useState('')
  const [today, setToday] = useState('')

  useEffect(() => {
    const saved = localStorage.getItem('dday-items')
    if (saved) setItems(JSON.parse(saved))

    const d = new Date()
    setToday(d.toISOString().split('T')[0])
  }, [])

  function save(next: DdayItem[]) {
    setItems(next)
    localStorage.setItem('dday-items', JSON.stringify(next))
  }

  function addItem() {
    if (!title.trim() || !date) return
    const next = [
      ...items,
      { id: Date.now().toString(), title: title.trim(), date },
    ].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
    save(next)
    setTitle('')
    setDate('')
  }

  function removeItem(id: string) {
    save(items.filter((i) => i.id !== id))
  }

  const todayLabel = today
    ? new Date(today).toLocaleDateString('ko-KR', { year: 'numeric', month: 'long', day: 'numeric', weekday: 'short' })
    : ''

  return (
    <div className="min-h-screen py-10 px-4">
      <div className="max-w-lg mx-auto">

        {/* 헤더 */}
        <div className="text-center mb-8">
          <div className="text-5xl mb-3">📅</div>
          <h1 className="text-4xl font-black mb-2" style={{ color: '#e0c97f' }}>D-day 계산기</h1>
          <p className="text-sm" style={{ color: '#6b7280' }}>오늘: {todayLabel}</p>
        </div>

        {/* 추가 폼 */}
        <div
          className="rounded-2xl p-6 mb-6"
          style={{ background: 'linear-gradient(135deg, #16213e, #0f1f3d)', border: '1px solid #e0c97f30' }}
        >
          <h2 className="text-lg font-bold mb-4" style={{ color: '#e8e8f0' }}>새 D-day 추가</h2>
          <div className="flex flex-col gap-3">
            <input
              type="text"
              placeholder="제목 (예: 수능, 결혼기념일)"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              maxLength={20}
              style={{
                background: '#0f1a30',
                border: '1px solid #e0c97f30',
                borderRadius: '12px',
                padding: '12px 16px',
                color: '#e8e8f0',
                fontSize: '16px',
                outline: 'none',
                width: '100%',
              }}
              onKeyDown={(e) => e.key === 'Enter' && addItem()}
            />
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              style={{
                background: '#0f1a30',
                border: '1px solid #e0c97f30',
                borderRadius: '12px',
                padding: '12px 16px',
                color: date ? '#e8e8f0' : '#505070',
                fontSize: '16px',
                outline: 'none',
                width: '100%',
                colorScheme: 'dark',
              }}
            />
            <button
              onClick={addItem}
              disabled={!title.trim() || !date}
              style={{
                background: title.trim() && date
                  ? 'linear-gradient(135deg, #e0c97f, #c8a850)'
                  : '#2a2a4a',
                color: title.trim() && date ? '#16213e' : '#505070',
                fontWeight: 900,
                padding: '14px',
                borderRadius: '12px',
                border: 'none',
                cursor: title.trim() && date ? 'pointer' : 'not-allowed',
                fontSize: '16px',
                transition: 'all 0.2s',
              }}
            >
              + 추가하기
            </button>
          </div>
        </div>

        {/* D-day 목록 */}
        {items.length === 0 ? (
          <div
            className="rounded-2xl p-10 text-center"
            style={{ background: '#16213e', border: '1px solid #e0c97f15' }}
          >
            <div className="text-4xl mb-3">🗓️</div>
            <p style={{ color: '#6b7280' }}>아직 추가된 D-day가 없어요</p>
            <p className="text-sm mt-1" style={{ color: '#404060' }}>위에서 추가해보세요!</p>
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            {items.map((item) => {
              const diff = calcDday(item.date)
              const label = formatDdayLabel(diff)
              const color = getDdayColor(diff)
              const dateStr = new Date(item.date).toLocaleDateString('ko-KR', {
                year: 'numeric', month: 'long', day: 'numeric', weekday: 'short',
              })
              return (
                <div
                  key={item.id}
                  className="rounded-2xl p-5"
                  style={{
                    background: 'linear-gradient(135deg, #16213e, #0f1f3d)',
                    border: `1px solid ${color}40`,
                  }}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <div
                        className="text-3xl font-black mb-1"
                        style={{ color, fontVariantNumeric: 'tabular-nums' }}
                      >
                        {label}
                      </div>
                      <div className="text-lg font-bold truncate" style={{ color: '#e8e8f0' }}>
                        {item.title}
                      </div>
                      <div className="text-sm mt-1" style={{ color: '#6b7280' }}>{dateStr}</div>
                      {diff < 0 && (
                        <div className="text-xs mt-1" style={{ color: '#505068' }}>
                          {Math.abs(diff)}일이 지났어요
                        </div>
                      )}
                    </div>
                    <button
                      onClick={() => removeItem(item.id)}
                      style={{
                        color: '#404060',
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        fontSize: '20px',
                        padding: '4px',
                        flexShrink: 0,
                      }}
                      aria-label="삭제"
                    >
                      ×
                    </button>
                  </div>
                </div>
              )
            })}
          </div>
        )}

        <p className="text-center text-xs mt-8" style={{ color: '#404060' }}>
          ※ D-day 목록은 이 기기의 브라우저에 저장됩니다
        </p>
      </div>
    </div>
  )
}
