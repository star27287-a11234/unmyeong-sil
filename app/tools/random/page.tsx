'use client'

import { useState } from 'react'

type Mode = 'pick' | 'order'

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

const MEDAL = ['🥇', '🥈', '🥉']

export default function RandomPickPage() {
  const [mode, setMode] = useState<Mode>('pick')
  const [input, setInput] = useState('')
  const [pickCount, setPickCount] = useState(1)
  const [result, setResult] = useState<string[] | null>(null)
  const [isAnimating, setIsAnimating] = useState(false)

  function getNames(): string[] {
    return input
      .split(/[\n,，]/)
      .map((s) => s.trim())
      .filter(Boolean)
  }

  function run() {
    const names = getNames()
    if (names.length === 0) return

    setIsAnimating(true)
    setResult(null)

    setTimeout(() => {
      const shuffled = shuffle(names)
      if (mode === 'pick') {
        setResult(shuffled.slice(0, Math.min(pickCount, names.length)))
      } else {
        setResult(shuffled)
      }
      setIsAnimating(false)
    }, 600)
  }

  const names = getNames()
  const canRun = names.length >= (mode === 'pick' ? 1 : 2)

  return (
    <div className="min-h-screen py-10 px-4">
      <div className="max-w-lg mx-auto">

        {/* 헤더 */}
        <div className="text-center mb-8">
          <div className="text-5xl mb-3">🎲</div>
          <h1 className="text-4xl font-black mb-2" style={{ color: '#e0c97f' }}>랜덤 뽑기</h1>
          <p className="text-sm" style={{ color: '#6b7280' }}>당번 · 순서 · 팀 나누기 · 발표자 선정</p>
        </div>

        {/* 모드 탭 */}
        <div
          className="flex rounded-xl p-1 mb-6 gap-1"
          style={{ background: '#0f1a30' }}
        >
          {[
            { id: 'pick' as Mode, label: '🎯 랜덤 뽑기', desc: '여러 명 중 N명 선택' },
            { id: 'order' as Mode, label: '🔀 순서 정하기', desc: '전체 순서 랜덤 배정' },
          ].map((m) => (
            <button
              key={m.id}
              onClick={() => { setMode(m.id); setResult(null) }}
              style={{
                flex: 1,
                padding: '10px 6px',
                borderRadius: '10px',
                border: 'none',
                cursor: 'pointer',
                fontWeight: 700,
                fontSize: '14px',
                transition: 'all 0.2s',
                background: mode === m.id ? 'linear-gradient(135deg, #e0c97f, #c8a850)' : 'transparent',
                color: mode === m.id ? '#16213e' : '#8090a8',
              }}
            >
              {m.label}
            </button>
          ))}
        </div>

        {/* 입력 영역 */}
        <div
          className="rounded-2xl p-6 mb-4"
          style={{ background: 'linear-gradient(135deg, #16213e, #0f1f3d)', border: '1px solid #e0c97f30' }}
        >
          <label className="block text-sm font-bold mb-2" style={{ color: '#a0a8c0' }}>
            이름 입력 (줄바꿈 또는 쉼표로 구분)
          </label>
          <textarea
            placeholder={'예:\n홍길동\n김철수\n이영희\n박민준'}
            value={input}
            onChange={(e) => { setInput(e.target.value); setResult(null) }}
            rows={5}
            style={{
              background: '#0f1a30',
              border: '1px solid #e0c97f30',
              borderRadius: '12px',
              padding: '12px 16px',
              color: '#e8e8f0',
              fontSize: '15px',
              outline: 'none',
              width: '100%',
              resize: 'vertical',
              fontFamily: 'inherit',
            }}
          />
          {names.length > 0 && (
            <p className="text-xs mt-2" style={{ color: '#6b7280' }}>
              총 {names.length}명 입력됨
            </p>
          )}

          {/* 뽑기 모드: 인원 수 선택 */}
          {mode === 'pick' && (
            <div className="flex items-center justify-between mt-4 mb-1">
              <span className="text-sm font-bold" style={{ color: '#a0a8c0' }}>뽑을 인원</span>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setPickCount((c) => Math.max(1, c - 1))}
                  style={{
                    width: 32, height: 32, borderRadius: '50%',
                    background: '#0f1a30', border: '1px solid #e0c97f30',
                    color: '#e0c97f', fontWeight: 900, fontSize: 16, cursor: 'pointer',
                  }}
                >-</button>
                <span style={{ color: '#e0c97f', fontWeight: 900, fontSize: 18, minWidth: 20, textAlign: 'center' }}>
                  {pickCount}
                </span>
                <button
                  onClick={() => setPickCount((c) => Math.min(Math.max(names.length, 1), c + 1))}
                  style={{
                    width: 32, height: 32, borderRadius: '50%',
                    background: '#0f1a30', border: '1px solid #e0c97f30',
                    color: '#e0c97f', fontWeight: 900, fontSize: 16, cursor: 'pointer',
                  }}
                >+</button>
                <span className="text-sm" style={{ color: '#6b7280' }}>명</span>
              </div>
            </div>
          )}
        </div>

        {/* 실행 버튼 */}
        <button
          onClick={run}
          disabled={!canRun || isAnimating}
          style={{
            background: canRun
              ? 'linear-gradient(135deg, #e0c97f, #c8a850)'
              : '#2a2a4a',
            color: canRun ? '#16213e' : '#505070',
            fontWeight: 900,
            padding: '16px',
            borderRadius: '14px',
            border: 'none',
            cursor: canRun ? 'pointer' : 'not-allowed',
            fontSize: '18px',
            width: '100%',
            marginBottom: '24px',
            boxShadow: canRun ? '0 4px 20px #e0c97f30' : 'none',
            transition: 'all 0.2s',
          }}
        >
          {isAnimating ? '🎲 추첨 중...' : mode === 'pick' ? '🎯 뽑기 시작!' : '🔀 순서 정하기!'}
        </button>

        {/* 결과 */}
        {result && !isAnimating && (
          <div
            className="rounded-2xl p-6"
            style={{
              background: 'linear-gradient(135deg, #16213e, #0f1f3d)',
              border: '1px solid #00cc7740',
            }}
          >
            <h2 className="text-lg font-black mb-4" style={{ color: '#00cc77' }}>
              {mode === 'pick' ? '🎉 당첨자' : '📋 순서 결과'}
            </h2>
            <div className="flex flex-col gap-2">
              {result.map((name, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 rounded-xl px-4 py-3"
                  style={{
                    background: i === 0 && mode === 'pick' ? '#00cc7715' : '#0f1a30',
                    border: i === 0 && mode === 'pick' ? '1px solid #00cc7740' : '1px solid transparent',
                  }}
                >
                  <span style={{ fontSize: '20px', minWidth: 28, textAlign: 'center' }}>
                    {i < 3 ? MEDAL[i] : `${i + 1}.`}
                  </span>
                  <span
                    style={{
                      color: i === 0 && mode === 'pick' ? '#00cc77' : '#e8e8f0',
                      fontWeight: i === 0 && mode === 'pick' ? 900 : 500,
                      fontSize: i === 0 && mode === 'pick' ? '20px' : '16px',
                    }}
                  >
                    {name}
                  </span>
                  {i === 0 && mode === 'pick' && (
                    <span style={{ marginLeft: 'auto', color: '#00cc77', fontSize: '20px' }}>🎊</span>
                  )}
                </div>
              ))}
            </div>

            <button
              onClick={run}
              style={{
                marginTop: '16px',
                background: 'transparent',
                border: '1px solid #e0c97f40',
                borderRadius: '10px',
                padding: '10px',
                color: '#e0c97f',
                fontWeight: 700,
                cursor: 'pointer',
                fontSize: '14px',
                width: '100%',
              }}
            >
              🔄 다시 뽑기
            </button>
          </div>
        )}

      </div>
    </div>
  )
}
