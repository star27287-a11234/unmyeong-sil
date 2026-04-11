'use client'

import { useState } from 'react'

function getBallColor(n: number): string {
  if (n <= 10) return '#ffd700'
  if (n <= 20) return '#aaaaaa'
  if (n <= 30) return '#ff7043'
  if (n <= 40) return '#54a0ff'
  return '#5f27cd'
}

function pickUnique(count: number, max: number): number[] {
  const pool = Array.from({ length: max }, (_, i) => i + 1)
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[pool[i], pool[j]] = [pool[j], pool[i]]
  }
  return pool.slice(0, count).sort((a, b) => a - b)
}

function generateSet(): { nums: number[]; bonus: number } {
  const nums = pickUnique(6, 45)
  let bonus: number
  do {
    bonus = Math.floor(Math.random() * 45) + 1
  } while (nums.includes(bonus))
  return { nums, bonus }
}

function LottoBall({ n, bonus }: { n: number; bonus?: boolean }) {
  const color = getBallColor(n)
  return (
    <span
      style={{
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        width: 42, height: 42, borderRadius: '50%',
        background: bonus ? 'transparent' : color,
        border: bonus ? `2px solid ${color}` : 'none',
        color: bonus ? color : (n > 10 && n <= 20) ? '#333' : '#fff',
        fontWeight: 800, fontSize: 14, flexShrink: 0,
      }}
    >
      {n}
    </span>
  )
}

export default function LottoGenPage() {
  const [sets, setSets] = useState<{ nums: number[]; bonus: number }[]>([generateSet()])
  const [count, setCount] = useState(5)

  function generateSets() {
    setSets(Array.from({ length: count }, () => generateSet()))
  }

  function addOne() {
    setSets((prev) => [...prev, generateSet()])
  }

  function removeSet(idx: number) {
    setSets((prev) => prev.filter((_, i) => i !== idx))
  }

  return (
    <div className="min-h-screen py-10 px-4">
      <div className="max-w-lg mx-auto">

        {/* 헤더 */}
        <div className="text-center mb-8">
          <div className="text-5xl mb-3">🎱</div>
          <h1 className="text-4xl font-black mb-2" style={{ color: '#e0c97f' }}>로또 번호 생성기</h1>
          <p className="text-sm" style={{ color: '#6b7280' }}>완전 랜덤 번호 · 클릭할 때마다 새 번호</p>
        </div>

        {/* 세트 수 선택 */}
        <div
          className="rounded-2xl p-6 mb-6"
          style={{ background: 'linear-gradient(135deg, #16213e, #0f1f3d)', border: '1px solid #e0c97f30' }}
        >
          <div className="flex items-center justify-between mb-4">
            <span className="font-bold" style={{ color: '#e8e8f0' }}>생성할 세트 수</span>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setCount((c) => Math.max(1, c - 1))}
                style={{
                  width: 36, height: 36, borderRadius: '50%',
                  background: '#0f1a30', border: '1px solid #e0c97f30',
                  color: '#e0c97f', fontWeight: 900, fontSize: 18,
                  cursor: 'pointer',
                }}
              >-</button>
              <span style={{ color: '#e0c97f', fontWeight: 900, fontSize: 20, minWidth: 24, textAlign: 'center' }}>
                {count}
              </span>
              <button
                onClick={() => setCount((c) => Math.min(10, c + 1))}
                style={{
                  width: 36, height: 36, borderRadius: '50%',
                  background: '#0f1a30', border: '1px solid #e0c97f30',
                  color: '#e0c97f', fontWeight: 900, fontSize: 18,
                  cursor: 'pointer',
                }}
              >+</button>
            </div>
          </div>
          <button
            onClick={generateSets}
            style={{
              background: 'linear-gradient(135deg, #e0c97f, #c8a850)',
              color: '#16213e',
              fontWeight: 900,
              padding: '14px',
              borderRadius: '12px',
              border: 'none',
              cursor: 'pointer',
              fontSize: '16px',
              width: '100%',
              boxShadow: '0 4px 20px #e0c97f30',
            }}
          >
            🎲 번호 생성하기
          </button>
        </div>

        {/* 번호 목록 */}
        <div className="flex flex-col gap-4">
          {sets.map((set, idx) => (
            <div
              key={idx}
              className="rounded-2xl p-5"
              style={{
                background: 'linear-gradient(135deg, #16213e, #0f1f3d)',
                border: '1px solid #e0c97f25',
              }}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-bold" style={{ color: '#8090a8' }}>세트 {idx + 1}</span>
                <button
                  onClick={() => removeSet(idx)}
                  style={{ color: '#404060', background: 'none', border: 'none', cursor: 'pointer', fontSize: '18px' }}
                  aria-label="삭제"
                >×</button>
              </div>
              <div className="flex items-center gap-2 flex-wrap">
                {set.nums.map((n) => <LottoBall key={n} n={n} />)}
                <span style={{ color: '#808090', fontSize: 18, margin: '0 2px' }}>+</span>
                <LottoBall n={set.bonus} bonus />
              </div>
              <div className="flex gap-3 text-xs flex-wrap mt-3">
                {[
                  { label: '1~10', color: '#ffd700' },
                  { label: '11~20', color: '#aaaaaa' },
                  { label: '21~30', color: '#ff7043' },
                  { label: '31~40', color: '#54a0ff' },
                  { label: '41~45', color: '#5f27cd' },
                ].map((c) => (
                  <span key={c.label} className="flex items-center gap-1">
                    <span style={{ width: 8, height: 8, borderRadius: '50%', background: c.color, display: 'inline-block' }} />
                    <span style={{ color: '#606080' }}>{c.label}</span>
                  </span>
                ))}
                <span className="flex items-center gap-1">
                  <span style={{ width: 8, height: 8, borderRadius: '50%', border: '2px solid #ffd700', display: 'inline-block' }} />
                  <span style={{ color: '#606080' }}>보너스</span>
                </span>
              </div>
            </div>
          ))}

          {/* 추가 버튼 */}
          {sets.length < 10 && (
            <button
              onClick={addOne}
              style={{
                background: 'transparent',
                border: '2px dashed #e0c97f30',
                borderRadius: '16px',
                padding: '14px',
                color: '#e0c97f80',
                fontWeight: 700,
                cursor: 'pointer',
                fontSize: '15px',
                transition: 'all 0.2s',
              }}
            >
              + 한 세트 더 추가
            </button>
          )}
        </div>

        <p className="text-center text-xs mt-8" style={{ color: '#404060' }}>
          ※ 본 번호는 재미 목적의 랜덤 생성이며, 실제 당첨을 보장하지 않습니다
        </p>
      </div>
    </div>
  )
}
