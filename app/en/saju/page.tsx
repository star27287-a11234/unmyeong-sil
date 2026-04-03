'use client'

import { useState, useEffect, useCallback } from 'react'
import LoadingAnimation from '@/components/LoadingAnimation'
import ResultGate from '@/components/ResultGate'
import AdBanner from '@/components/AdBanner'
import NextTestSuggestion from '@/components/NextTestSuggestion'
import { calcSaju, elementToHanja, elementToColor, elementToEmoji } from '@/lib/saju-calc'
import { sajuResults } from '@/data/en/saju-results'

type Step = 'input' | 'loading' | 'summary' | 'detail'

interface SajuInput {
  name: string
  year: number
  month: number
  day: number
  hour: number | null
  gender: 'male' | 'female'
}

interface SajuCalcResult {
  mainElement: string
  subElement: string
  resultKey: string
}

const elementNamesEn: Record<string, string> = {
  '목': 'Wood',
  '화': 'Fire',
  '토': 'Earth',
  '금': 'Metal',
  '수': 'Water',
}

export default function EnglishSajuPage() {
  const [step, setStep] = useState<Step>('input')
  const [unlocked, setUnlocked] = useState(false)
  const [input, setInput] = useState<SajuInput>({
    name: '',
    year: 1995,
    month: 6,
    day: 15,
    hour: null,
    gender: 'female',
  })
  const [calcResult, setCalcResult] = useState<SajuCalcResult | null>(null)

  useEffect(() => {
    const saved = sessionStorage.getItem('saju-result-en')
    if (saved) {
      try {
        const data = JSON.parse(saved)
        setCalcResult(data.calcResult)
        setInput(data.input)
        setStep('summary')
      } catch { /* ignore */ }
    }
  }, [])

  const handleSubmit = useCallback(() => {
    const result = calcSaju(input.year, input.month, input.day, input.hour, input.gender)
    setCalcResult(result)
    setStep('loading')
    sessionStorage.setItem('saju-result-en', JSON.stringify({ calcResult: result, input }))
    setTimeout(() => setStep('summary'), 2500)
  }, [input])

  const handleAdWatch = useCallback(() => {
    alert('Thank you for watching! Your full analysis is now unlocked. 🎉\n(In live service, an actual ad will play here)')
    setUnlocked(true)
    setStep('detail')
  }, [])

  const sajuData = calcResult ? (sajuResults[calcResult.resultKey] || sajuResults['토_토']) : null

  const years = Array.from({ length: 67 }, (_, i) => 2006 - i)
  const months = Array.from({ length: 12 }, (_, i) => i + 1)
  const days = Array.from({ length: 31 }, (_, i) => i + 1)
  const hours = Array.from({ length: 24 }, (_, i) => i)

  const monthNames = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']

  if (step === 'input') {
    return (
      <div className="min-h-screen py-12 px-4">
        <div className="max-w-lg mx-auto">
          <div className="text-center mb-10">
            <div className="text-5xl mb-4">🔮</div>
            <h1 className="text-3xl font-black mb-2" style={{ color: '#e0c97f' }}>
              Four Pillars Reading
            </h1>
            <p style={{ color: '#8080a0' }}>
              Analyze your Five Elements energy and destiny through your birth date & time
            </p>
          </div>

          <div
            className="rounded-2xl p-8"
            style={{
              background: 'linear-gradient(135deg, #16213e, #0f3460)',
              border: '1px solid #e0c97f20',
            }}
          >
            {/* Name */}
            <div className="mb-6">
              <label className="block text-sm font-medium mb-2" style={{ color: '#c0c0d0' }}>
                Name (optional)
              </label>
              <input
                type="text"
                value={input.name}
                onChange={(e) => setInput(prev => ({ ...prev, name: e.target.value.slice(0, 20) }))}
                placeholder="Enter your name"
                maxLength={20}
                autoComplete="off"
                className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all"
                style={{ background: '#1a1a2e', border: '1px solid #e0c97f20', color: '#e8e8f0' }}
                onFocus={(e) => { e.target.style.borderColor = '#e0c97f60' }}
                onBlur={(e) => { e.target.style.borderColor = '#e0c97f20' }}
              />
            </div>

            {/* Gender */}
            <div className="mb-6">
              <label className="block text-sm font-medium mb-2" style={{ color: '#c0c0d0' }}>Gender</label>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { value: 'male', label: 'Male', icon: '♂' },
                  { value: 'female', label: 'Female', icon: '♀' },
                ].map((g) => (
                  <button
                    key={g.value}
                    onClick={() => setInput(prev => ({ ...prev, gender: g.value as 'male' | 'female' }))}
                    className="py-3 rounded-xl font-medium transition-all"
                    style={{
                      background: input.gender === g.value ? '#e0c97f20' : '#1a1a2e',
                      border: input.gender === g.value ? '2px solid #e0c97f' : '2px solid #e0c97f20',
                      color: input.gender === g.value ? '#e0c97f' : '#8090a8',
                    }}
                  >
                    {g.icon} {g.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Year */}
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2" style={{ color: '#c0c0d0' }}>Birth Year</label>
              <select
                value={input.year}
                onChange={(e) => setInput(prev => ({ ...prev, year: Number(e.target.value) }))}
                className="w-full px-4 py-3 rounded-xl text-sm outline-none"
                style={{ background: '#1a1a2e', border: '1px solid #e0c97f20', color: '#e8e8f0' }}
              >
                {years.map(y => (
                  <option key={y} value={y} style={{ background: '#1a1a2e' }}>{y}</option>
                ))}
              </select>
            </div>

            {/* Month & Day */}
            <div className="grid grid-cols-2 gap-3 mb-4">
              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: '#c0c0d0' }}>Month</label>
                <select
                  value={input.month}
                  onChange={(e) => setInput(prev => ({ ...prev, month: Number(e.target.value) }))}
                  className="w-full px-4 py-3 rounded-xl text-sm outline-none"
                  style={{ background: '#1a1a2e', border: '1px solid #e0c97f20', color: '#e8e8f0' }}
                >
                  {months.map(m => (
                    <option key={m} value={m} style={{ background: '#1a1a2e' }}>{monthNames[m-1]}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: '#c0c0d0' }}>Day</label>
                <select
                  value={input.day}
                  onChange={(e) => setInput(prev => ({ ...prev, day: Number(e.target.value) }))}
                  className="w-full px-4 py-3 rounded-xl text-sm outline-none"
                  style={{ background: '#1a1a2e', border: '1px solid #e0c97f20', color: '#e8e8f0' }}
                >
                  {days.map(d => (
                    <option key={d} value={d} style={{ background: '#1a1a2e' }}>{d}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Hour */}
            <div className="mb-8">
              <label className="block text-sm font-medium mb-2" style={{ color: '#c0c0d0' }}>
                Birth Hour (optional)
              </label>
              <select
                value={input.hour ?? 'unknown'}
                onChange={(e) => {
                  const val = e.target.value
                  setInput(prev => ({ ...prev, hour: val === 'unknown' ? null : Number(val) }))
                }}
                className="w-full px-4 py-3 rounded-xl text-sm outline-none"
                style={{ background: '#1a1a2e', border: '1px solid #e0c97f20', color: '#e8e8f0' }}
              >
                <option value="unknown" style={{ background: '#1a1a2e' }}>Unknown</option>
                {hours.map(h => (
                  <option key={h} value={h} style={{ background: '#1a1a2e' }}>
                    {h < 10 ? `0${h}` : h}:00
                  </option>
                ))}
              </select>
            </div>

            <button
              onClick={handleSubmit}
              className="w-full py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-[1.02] active:scale-95"
              style={{
                background: 'linear-gradient(135deg, #e0c97f, #c4a84f)',
                color: '#1a1a2e',
                boxShadow: '0 8px 30px #e0c97f30',
              }}
            >
              🔮 Start My Reading
            </button>
          </div>

          <p className="text-center text-xs mt-4" style={{ color: '#606080' }}>
            Your information is used only for analysis and is never stored.
          </p>
        </div>
      </div>
    )
  }

  if (step === 'loading') {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <LoadingAnimation />
      </div>
    )
  }

  if ((step === 'summary' || step === 'detail') && sajuData && calcResult) {
    const mainColor = elementToColor(calcResult.mainElement)
    const subColor = elementToColor(calcResult.subElement)
    const mainEn = elementNamesEn[calcResult.mainElement] || calcResult.mainElement
    const subEn = elementNamesEn[calcResult.subElement] || calcResult.subElement

    const TextBlock = ({ content }: { content: string }) => (
      <div className="space-y-3">
        {content.split('\n\n').map((para, i) => (
          <p key={i} className="text-sm leading-7" style={{ color: '#b0b8c8' }}>{para}</p>
        ))}
      </div>
    )

    const MonthlyFortuneBlock = ({ content }: { content: string }) => {
      const months = content.split('/').map(s => s.trim()).filter(Boolean)
      return (
        <div className="grid grid-cols-1 gap-2">
          {months.map((month, i) => {
            const [label, ...rest] = month.split(':')
            return (
              <div key={i} className="flex gap-3 items-start rounded-lg px-3 py-2" style={{ background: '#1a1a2e60' }}>
                <span className="text-xs font-bold mt-0.5 shrink-0 px-2 py-0.5 rounded"
                  style={{ background: '#e0c97f20', color: '#e0c97f' }}>
                  {label?.trim()}
                </span>
                <p className="text-sm leading-relaxed" style={{ color: '#b0b8c8' }}>{rest.join(':').trim()}</p>
              </div>
            )
          })}
        </div>
      )
    }

    const DetailContent = () => (
      <div className="space-y-5 mt-6">
        <div className="rounded-2xl p-6" style={{ background: '#16213e', border: '1px solid #e0c97f20' }}>
          <h4 className="font-bold text-base mb-4 flex items-center gap-2" style={{ color: '#e0c97f' }}>
            🌟 Personality Traits
          </h4>
          <TextBlock content={sajuData.personality} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="rounded-2xl p-5" style={{ background: '#16213e', border: '1px solid #00ff8820' }}>
            <h4 className="font-bold text-sm mb-3" style={{ color: '#00ff88' }}>💪 Strengths</h4>
            <p className="text-sm leading-7" style={{ color: '#b0b8c8' }}>{sajuData.strength}</p>
          </div>
          <div className="rounded-2xl p-5" style={{ background: '#16213e', border: '1px solid #ff666620' }}>
            <h4 className="font-bold text-sm mb-3" style={{ color: '#ff9966' }}>⚠️ Watch Out For</h4>
            <p className="text-sm leading-7" style={{ color: '#b0b8c8' }}>{sajuData.weakness}</p>
          </div>
        </div>

        <div className="rounded-2xl p-6" style={{ background: '#16213e', border: '1px solid #9c59d120' }}>
          <h4 className="font-bold text-base mb-4" style={{ color: '#9c59d1' }}>🎯 2026 Fortune</h4>
          <TextBlock content={sajuData.fortune2025} />
        </div>

        <div className="rounded-2xl p-6" style={{ background: '#16213e', border: '1px solid #e0c97f15' }}>
          <h4 className="font-bold text-base mb-4" style={{ color: '#e0c97f' }}>📅 Monthly Fortune</h4>
          <MonthlyFortuneBlock content={sajuData.monthlyFortune} />
        </div>

        <div className="rounded-2xl p-6" style={{ background: '#16213e', border: '1px solid #e0c97f15' }}>
          <h4 className="font-bold text-base mb-3" style={{ color: '#e0c97f' }}>💼 Career Aptitude</h4>
          <p className="text-sm leading-7 mb-6" style={{ color: '#b0b8c8' }}>{sajuData.career}</p>
          <hr style={{ borderColor: '#e0c97f10' }} />
          <h4 className="font-bold text-base mt-5 mb-3" style={{ color: '#e0c97f' }}>💞 Compatibility</h4>
          <p className="text-sm leading-7" style={{ color: '#b0b8c8' }}>{sajuData.compatibility}</p>
        </div>
      </div>
    )

    return (
      <div className="min-h-screen py-12 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            {input.name && (
              <p className="text-sm mb-2" style={{ color: '#8080a0' }}>
                {input.name}&apos;s Four Pillars Reading
              </p>
            )}
            <h1 className="text-3xl font-black mb-2" style={{ color: '#e0c97f' }}>
              {sajuData.title}
            </h1>
          </div>

          <div
            className="rounded-2xl p-6 mb-6"
            style={{
              background: 'linear-gradient(135deg, #16213e, #0f3460)',
              border: '1px solid #e0c97f30',
            }}
          >
            <div className="flex justify-center gap-8 mb-6">
              <div className="text-center">
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center text-3xl mb-2 mx-auto"
                  style={{ background: `${mainColor}20`, border: `2px solid ${mainColor}60`, boxShadow: `0 0 20px ${mainColor}30` }}
                >
                  {elementToEmoji(calcResult.mainElement)}
                </div>
                <p className="text-xs mb-1" style={{ color: '#8080a0' }}>Primary Element</p>
                <p className="font-bold text-lg" style={{ color: mainColor }}>
                  {mainEn} ({elementToHanja(calcResult.mainElement)})
                </p>
              </div>

              <div className="flex items-center" style={{ color: '#e0c97f60' }}>
                <span className="text-2xl">+</span>
              </div>

              <div className="text-center">
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center text-3xl mb-2 mx-auto"
                  style={{ background: `${subColor}20`, border: `2px solid ${subColor}60`, boxShadow: `0 0 20px ${subColor}30` }}
                >
                  {elementToEmoji(calcResult.subElement)}
                </div>
                <p className="text-xs mb-1" style={{ color: '#8080a0' }}>Secondary Element</p>
                <p className="font-bold text-lg" style={{ color: subColor }}>
                  {subEn} ({elementToHanja(calcResult.subElement)})
                </p>
              </div>
            </div>

            <div className="rounded-xl p-4" style={{ background: '#1a1a2e50', border: '1px solid #e0c97f15' }}>
              {sajuData.summary.split('\n').map((line, i) => (
                <p key={i} className="text-sm leading-relaxed" style={{ color: '#c0c8d8' }}>{line}</p>
              ))}
            </div>
          </div>

          <AdBanner adSlot="1234509876" adFormat="auto" className="mb-2" />

          {step === 'detail' || unlocked ? (
            <div>
              <h2 className="text-xl font-bold mb-4" style={{ color: '#e8e8f0' }}>Full Analysis</h2>
              <DetailContent />
            </div>
          ) : (
            <ResultGate
              onAdWatch={handleAdWatch}
              blurContent={<DetailContent />}
              title="View Full Analysis"
              subtitle="Watch a short ad to unlock your complete reading"
              watchAdLabel="📺 Watch Ad & Unlock for Free"
              note="Watch one ad to access your full detailed analysis"
            />
          )}

          <div className="mt-8 text-center">
            <button
              onClick={() => {
                sessionStorage.removeItem('saju-result-en')
                setStep('input')
                setUnlocked(false)
                setCalcResult(null)
              }}
              className="px-6 py-3 rounded-xl text-sm font-medium transition-all"
              style={{ background: 'transparent', border: '1px solid #e0c97f30', color: '#8090a8' }}
            >
              Start New Reading
            </button>
          </div>
        </div>
      </div>
    )
  }

  return null
}
