'use client'

import { useMemo, useState, useEffect } from 'react'

function seeded(seed: number) {
  let s = seed >>> 0
  return () => {
    s = Math.imul(s ^ (s >>> 15), s | 1)
    s ^= s + Math.imul(s ^ (s >>> 7), s | 61)
    return ((s ^ (s >>> 14)) >>> 0) / 4294967296
  }
}

function getWeekSeed() {
  const d = new Date()
  const day = d.getDay()
  const diff = d.getDate() - day + (day === 0 ? -6 : 1)
  const monday = new Date(d)
  monday.setDate(diff)
  return monday.getFullYear() * 10000 + (monday.getMonth() + 1) * 100 + monday.getDate()
}

function pickUnique(count: number, max: number, rand: () => number): number[] {
  const pool = Array.from({ length: max }, (_, i) => i + 1)
  const result: number[] = []
  for (let i = 0; i < count; i++) {
    const idx = Math.floor(rand() * (pool.length - i)) + i
    ;[pool[i], pool[idx]] = [pool[idx], pool[i]]
    result.push(pool[i])
  }
  return result.sort((a, b) => a - b)
}

function getKrLottoRound(): number {
  const firstDraw = new Date(2002, 11, 7)
  firstDraw.setHours(0, 0, 0, 0)
  const d = new Date()
  const day = d.getDay()
  const diff = d.getDate() - day + (day === 0 ? -6 : 1)
  const monday = new Date(d)
  monday.setDate(diff)
  const sat = new Date(monday)
  sat.setDate(monday.getDate() + 5)
  sat.setHours(0, 0, 0, 0)
  const weeks = Math.round((sat.getTime() - firstDraw.getTime()) / (7 * 24 * 60 * 60 * 1000))
  return weeks + 1
}

function getPowerballRound(): number {
  const firstDraw = new Date(1992, 3, 22)
  firstDraw.setHours(0, 0, 0, 0)
  const splitDate = new Date(2021, 7, 23)
  splitDate.setHours(0, 0, 0, 0)
  const now = new Date()
  now.setHours(0, 0, 0, 0)
  const phase1Days = Math.max(0, Math.min(splitDate.getTime(), now.getTime()) - firstDraw.getTime()) / 86400000
  const phase1Draws = Math.floor(phase1Days / 7 * 2)
  const phase2Days = Math.max(0, now.getTime() - splitDate.getTime()) / 86400000
  const phase2Draws = Math.floor(phase2Days / 7 * 3)
  return phase1Draws + phase2Draws + 1
}

function getEuromillionsRound(): number {
  const firstDraw = new Date(2004, 1, 13)
  firstDraw.setHours(0, 0, 0, 0)
  const splitDate = new Date(2011, 4, 10)
  splitDate.setHours(0, 0, 0, 0)
  const now = new Date()
  now.setHours(0, 0, 0, 0)
  const phase1Days = Math.max(0, Math.min(splitDate.getTime(), now.getTime()) - firstDraw.getTime()) / 86400000
  const phase1Draws = Math.floor(phase1Days / 7)
  const phase2Days = Math.max(0, now.getTime() - splitDate.getTime()) / 86400000
  const phase2Draws = Math.floor(phase2Days / 7 * 2)
  return phase1Draws + phase2Draws + 1
}

function getMegaMillionsRound(): number {
  const firstDraw = new Date(1996, 8, 6)
  firstDraw.setHours(0, 0, 0, 0)
  const now = new Date()
  now.setHours(0, 0, 0, 0)
  const days = (now.getTime() - firstDraw.getTime()) / 86400000
  return Math.floor(days / 7 * 2) + 1
}

function getDrawDate(offsetDays: number): string {
  const d = new Date()
  const day = d.getDay()
  const diff = d.getDate() - day + (day === 0 ? -6 : 1)
  const target = new Date(d)
  target.setDate(diff + offsetDays)
  const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
  const days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat']
  return `${months[target.getMonth()]} ${target.getDate()} (${days[target.getDay()]})`
}

function getBallColor(n: number): string {
  if (n <= 10) return '#ffd700'
  if (n <= 20) return '#aaaaaa'
  if (n <= 30) return '#ff7043'
  if (n <= 40) return '#54a0ff'
  return '#5f27cd'
}

function LottoBall({ n, bonus }: { n: number; bonus?: boolean }) {
  const color = getBallColor(n)
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
      width: 40, height: 40, borderRadius: '50%',
      background: bonus ? 'transparent' : color,
      border: bonus ? `2px solid ${color}` : 'none',
      color: bonus ? color : (n > 10 && n <= 20) ? '#333' : '#fff',
      fontWeight: 800, fontSize: 14, flexShrink: 0,
    }}>
      {n}
    </span>
  )
}

function ForeignBall({ n, color, small }: { n: number; color: string; small?: boolean }) {
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
      width: small ? 32 : 36, height: small ? 32 : 36, borderRadius: '50%',
      background: color, color: '#fff', fontWeight: 800,
      fontSize: small ? 12 : 13, flexShrink: 0,
    }}>
      {n}
    </span>
  )
}

const AD_SECONDS = 5

export default function LottoPageEn() {
  const [adWatched, setAdWatched] = useState(false)
  const [showAdModal, setShowAdModal] = useState(false)
  const [countdown, setCountdown] = useState(AD_SECONDS)

  useEffect(() => {
    if (!showAdModal) return
    if (countdown <= 0) {
      setShowAdModal(false)
      setAdWatched(true)
      return
    }
    const t = setTimeout(() => setCountdown(c => c - 1), 1000)
    return () => clearTimeout(t)
  }, [showAdModal, countdown])

  function handleWatchAd() {
    setCountdown(AD_SECONDS)
    setShowAdModal(true)
  }

  const krRound = getKrLottoRound()
  const pbRound = getPowerballRound()
  const emRound = getEuromillionsRound()
  const mmRound = getMegaMillionsRound()

  const satDate = getDrawDate(5)
  const wedDate = getDrawDate(2)
  const tueDate = getDrawDate(1)

  const lottos = useMemo(() => {
    const base = getWeekSeed()

    const r1 = seeded(base + 1001)
    const kr = pickUnique(6, 45, r1)
    const krBonus = (() => {
      let b: number
      do { b = Math.floor(r1() * 45) + 1 } while (kr.includes(b))
      return b
    })()

    const r2 = seeded(base + 2001)
    const pb = pickUnique(5, 69, r2)
    const pbPower = Math.floor(r2() * 26) + 1

    const r3 = seeded(base + 3001)
    const em = pickUnique(5, 50, r3)
    const emStars = pickUnique(2, 12, r3)

    const r4 = seeded(base + 4001)
    const mm = pickUnique(5, 70, r4)
    const mmMega = Math.floor(r4() * 25) + 1

    return { kr, krBonus, pb, pbPower, em, emStars, mm, mmMega }
  }, [])

  return (
    <div className="min-h-screen py-10 px-4">
      <div className="max-w-2xl mx-auto">

        {/* Ad Modal */}
        {showAdModal && (
          <div style={{
            position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.88)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 9999,
          }}>
            <div style={{
              background: '#1a2040', borderRadius: '20px', padding: '2.5rem',
              maxWidth: '380px', width: '90%', textAlign: 'center',
              border: '1px solid #e0c97f40', boxShadow: '0 0 40px #e0c97f20',
            }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📺</div>
              <p style={{ color: '#e0c97f', fontWeight: 900, fontSize: '1.125rem', marginBottom: '0.5rem' }}>
                Watching Ad...
              </p>
              <p style={{ color: '#9090a8', fontSize: '0.875rem', marginBottom: '1.5rem' }}>
                Numbers reveal in <span style={{ color: '#ffffff', fontWeight: 700, fontSize: '1.5rem' }}>{countdown}</span> seconds
              </p>
              <div style={{ background: '#0f1f3d', borderRadius: '9999px', height: '8px', overflow: 'hidden', marginBottom: '1rem' }}>
                <div style={{
                  background: 'linear-gradient(90deg, #e0c97f, #c8a850)',
                  height: '100%',
                  width: `${((AD_SECONDS - countdown) / AD_SECONDS) * 100}%`,
                  transition: 'width 1s linear',
                  borderRadius: '9999px',
                }} />
              </div>
              <p style={{ color: '#505070', fontSize: '0.75rem' }}>Please watch until the end</p>
            </div>
          </div>
        )}

        {/* Header */}
        <div className="text-center mb-8">
          <div className="text-5xl mb-3">🍀</div>
          <h1 className="text-4xl font-black mb-2" style={{ color: '#e0c97f' }}>This Week&apos;s Lucky Numbers</h1>
          <p className="text-sm mt-1" style={{ color: '#6b7280' }}>Updated every Monday · Lucky numbers for fun</p>
        </div>

        {/* Notice */}
        <div className="rounded-xl px-4 py-3 mb-6 text-sm" style={{ background: '#e0c97f0a', border: '1px solid #e0c97f25' }}>
          <p style={{ color: '#9090a8' }}>
            🎯 Watch a short ad to reveal <span style={{ color: '#e0c97f' }}>this week&apos;s lucky numbers</span>.
            For entertainment purposes only.
          </p>
        </div>

        {/* Numbers section with blur gate */}
        <div className="relative">
          <div style={{
            filter: adWatched ? 'none' : 'blur(10px)',
            transition: 'filter 0.6s ease',
            userSelect: adWatched ? 'auto' : 'none',
            pointerEvents: adWatched ? 'auto' : 'none',
          }}>
            <div className="flex flex-col gap-6">

              {/* Korean Lotto 6/45 */}
              <div className="rounded-2xl p-6" style={{ background: 'linear-gradient(135deg, #16213e, #0f1f3d)', border: '1px solid #e0c97f30' }}>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">🇰🇷</span>
                    <div>
                      <h2 className="text-xl font-black" style={{ color: '#e0c97f' }}>Korean Lotto 6/45</h2>
                      <p className="text-xs" style={{ color: '#606080' }}>6 from 1–45 + 1 Bonus</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-black" style={{ color: '#e0c97f' }}>Draw #{krRound}</div>
                    <div className="text-xs" style={{ color: '#505068' }}>{satDate}</div>
                  </div>
                </div>
                <div className="flex items-center gap-2 flex-wrap mb-3">
                  {lottos.kr.map(n => <LottoBall key={n} n={n} />)}
                  <span style={{ color: '#808090', fontSize: 20, margin: '0 4px' }}>+</span>
                  <LottoBall n={lottos.krBonus} bonus />
                </div>
                <div className="flex gap-3 text-xs flex-wrap mt-2">
                  {[
                    { label: '1–10', color: '#ffd700' },
                    { label: '11–20', color: '#aaaaaa' },
                    { label: '21–30', color: '#ff7043' },
                    { label: '31–40', color: '#54a0ff' },
                    { label: '41–45', color: '#5f27cd' },
                  ].map(c => (
                    <span key={c.label} className="flex items-center gap-1">
                      <span style={{ width: 10, height: 10, borderRadius: '50%', background: c.color, display: 'inline-block' }} />
                      <span style={{ color: '#808090' }}>{c.label}</span>
                    </span>
                  ))}
                  <span className="flex items-center gap-1">
                    <span style={{ width: 10, height: 10, borderRadius: '50%', border: '2px solid #ffd700', display: 'inline-block' }} />
                    <span style={{ color: '#808090' }}>Bonus</span>
                  </span>
                </div>
              </div>

              {/* Powerball */}
              <div className="rounded-2xl p-6" style={{ background: 'linear-gradient(135deg, #16213e, #0f1f3d)', border: '1px solid #ff6b6b40' }}>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">🇺🇸</span>
                    <div>
                      <h2 className="text-xl font-black" style={{ color: '#ff6b6b' }}>Powerball</h2>
                      <p className="text-xs" style={{ color: '#606080' }}>5 from 1–69 + Powerball 1–26</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-black" style={{ color: '#ff6b6b' }}>Draw #{pbRound}</div>
                    <div className="text-xs" style={{ color: '#505068' }}>{wedDate}</div>
                  </div>
                </div>
                <div className="flex items-center gap-2 flex-wrap">
                  {lottos.pb.map(n => <ForeignBall key={n} n={n} color="#54a0ff" />)}
                  <span style={{ color: '#808090', fontSize: 20, margin: '0 4px' }}>+</span>
                  <ForeignBall n={lottos.pbPower} color="#ff4757" />
                </div>
                <p className="text-xs mt-3" style={{ color: '#606080' }}>
                  <span style={{ color: '#54a0ff' }}>●</span> White balls (1–69) &nbsp;
                  <span style={{ color: '#ff4757' }}>●</span> Powerball (1–26)
                </p>
              </div>

              {/* EuroMillions */}
              <div className="rounded-2xl p-6" style={{ background: 'linear-gradient(135deg, #16213e, #0f1f3d)', border: '1px solid #54a0ff40' }}>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">🇪🇺</span>
                    <div>
                      <h2 className="text-xl font-black" style={{ color: '#54a0ff' }}>EuroMillions</h2>
                      <p className="text-xs" style={{ color: '#606080' }}>5 from 1–50 + 2 Lucky Stars 1–12</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-black" style={{ color: '#54a0ff' }}>Draw #{emRound}</div>
                    <div className="text-xs" style={{ color: '#505068' }}>{tueDate}</div>
                  </div>
                </div>
                <div className="flex items-center gap-2 flex-wrap">
                  {lottos.em.map(n => <ForeignBall key={n} n={n} color="#54a0ff" />)}
                  <span style={{ color: '#808090', fontSize: 20, margin: '0 4px' }}>+</span>
                  {lottos.emStars.map(n => <ForeignBall key={n} n={n} color="#ffd700" small />)}
                </div>
                <p className="text-xs mt-3" style={{ color: '#606080' }}>
                  <span style={{ color: '#54a0ff' }}>●</span> Main balls (1–50) &nbsp;
                  <span style={{ color: '#ffd700' }}>★</span> Lucky Stars (1–12)
                </p>
              </div>

              {/* Mega Millions */}
              <div className="rounded-2xl p-6" style={{ background: 'linear-gradient(135deg, #16213e, #0f1f3d)', border: '1px solid #5f27cd40' }}>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">💎</span>
                    <div>
                      <h2 className="text-xl font-black" style={{ color: '#a29bfe' }}>Mega Millions</h2>
                      <p className="text-xs" style={{ color: '#606080' }}>5 from 1–70 + Mega Ball 1–25</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-black" style={{ color: '#a29bfe' }}>Draw #{mmRound}</div>
                    <div className="text-xs" style={{ color: '#505068' }}>{tueDate}</div>
                  </div>
                </div>
                <div className="flex items-center gap-2 flex-wrap">
                  {lottos.mm.map(n => <ForeignBall key={n} n={n} color="#5f27cd" />)}
                  <span style={{ color: '#808090', fontSize: 20, margin: '0 4px' }}>+</span>
                  <ForeignBall n={lottos.mmMega} color="#ffd700" />
                </div>
                <p className="text-xs mt-3" style={{ color: '#606080' }}>
                  <span style={{ color: '#5f27cd' }}>●</span> Main balls (1–70) &nbsp;
                  <span style={{ color: '#ffd700' }}>●</span> Mega Ball (1–25)
                </p>
              </div>

            </div>
          </div>

          {/* Lock overlay */}
          {!adWatched && (
            <div style={{
              position: 'absolute', inset: 0,
              display: 'flex', flexDirection: 'column',
              alignItems: 'center', justifyContent: 'center',
              background: 'rgba(10, 15, 35, 0.55)',
              borderRadius: '16px',
            }}>
              <div style={{ textAlign: 'center', padding: '2rem' }}>
                <div style={{ fontSize: '3.5rem', marginBottom: '0.75rem' }}>🔒</div>
                <h3 style={{ color: '#e0c97f', fontSize: '1.25rem', fontWeight: 900, marginBottom: '0.5rem' }}>
                  Watch an Ad to Unlock
                </h3>
                <p style={{ color: '#9090a8', fontSize: '0.875rem', marginBottom: '1.5rem', lineHeight: 1.6 }}>
                  Watch a short ad ({AD_SECONDS} sec) to reveal<br />this week&apos;s lucky numbers
                </p>
                <button
                  onClick={handleWatchAd}
                  style={{
                    background: 'linear-gradient(135deg, #e0c97f, #c8a850)',
                    color: '#16213e',
                    fontWeight: 900,
                    padding: '0.875rem 2rem',
                    borderRadius: '9999px',
                    border: 'none',
                    cursor: 'pointer',
                    fontSize: '1rem',
                    boxShadow: '0 4px 20px #e0c97f40',
                  }}
                >
                  📺 Watch Ad & Reveal Numbers
                </button>
              </div>
            </div>
          )}
        </div>

        <p className="text-center text-xs mt-8" style={{ color: '#404060' }}>
          ※ These numbers are for entertainment only and do not guarantee any lottery winnings.
        </p>
      </div>
    </div>
  )
}
