'use client'

import { useState, useEffect, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import LoadingAnimation from '@/components/LoadingAnimation'
import ResultGate from '@/components/ResultGate'
import { calcSaju, elementToHanja, elementToColor, elementToEmoji } from '@/lib/saju-calc'
import { sajuResults } from '@/data/saju-results'

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

export default function SajuPage() {
  const router = useRouter()
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

  // 세션 스토리지에서 복원
  useEffect(() => {
    const saved = sessionStorage.getItem('saju-result')
    if (saved) {
      try {
        const data = JSON.parse(saved)
        setCalcResult(data.calcResult)
        setInput(data.input)
        setStep('summary')
      } catch {
        // 무시
      }
    }
  }, [])

  const handleSubmit = useCallback(() => {
    const result = calcSaju(input.year, input.month, input.day, input.hour, input.gender)
    setCalcResult(result)
    setStep('loading')

    sessionStorage.setItem('saju-result', JSON.stringify({ calcResult: result, input }))

    setTimeout(() => {
      setStep('summary')
    }, 2500)
  }, [input])

  const handleAdWatch = useCallback(() => {
    alert('광고를 시청했습니다! 전체 결과를 볼 수 있습니다. 🎉\n(실제 서비스에서는 광고가 재생됩니다)')
    setUnlocked(true)
    setStep('detail')
  }, [])

  const handleProClick = useCallback(() => {
    router.push('/pro')
  }, [router])

  const sajuData = calcResult ? (sajuResults[calcResult.resultKey] || sajuResults['토_토']) : null

  const years = Array.from({ length: 67 }, (_, i) => 2006 - i)
  const months = Array.from({ length: 12 }, (_, i) => i + 1)
  const days = Array.from({ length: 31 }, (_, i) => i + 1)
  const hours = Array.from({ length: 24 }, (_, i) => i)

  // 입력 화면
  if (step === 'input') {
    return (
      <div className="min-h-screen py-12 px-4">
        <div className="max-w-lg mx-auto">
          {/* 헤더 */}
          <div className="text-center mb-10">
            <div className="text-5xl mb-4">🔮</div>
            <h1 className="text-3xl font-black mb-2" style={{ color: '#e0c97f' }}>
              사주팔자 분석
            </h1>
            <p style={{ color: '#8080a0' }}>
              생년월일시로 당신의 오행 기운과 운명을 분석합니다
            </p>
          </div>

          {/* 입력 폼 */}
          <div
            className="rounded-2xl p-8"
            style={{
              background: 'linear-gradient(135deg, #16213e, #0f3460)',
              border: '1px solid #e0c97f20',
            }}
          >
            {/* 이름 */}
            <div className="mb-6">
              <label className="block text-sm font-medium mb-2" style={{ color: '#c0c0d0' }}>
                이름 (선택)
              </label>
              <input
                type="text"
                value={input.name}
                onChange={(e) => setInput(prev => ({ ...prev, name: e.target.value }))}
                placeholder="이름을 입력하세요"
                className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all"
                style={{
                  background: '#1a1a2e',
                  border: '1px solid #e0c97f20',
                  color: '#e8e8f0',
                }}
                onFocus={(e) => { e.target.style.borderColor = '#e0c97f60' }}
                onBlur={(e) => { e.target.style.borderColor = '#e0c97f20' }}
              />
            </div>

            {/* 성별 */}
            <div className="mb-6">
              <label className="block text-sm font-medium mb-2" style={{ color: '#c0c0d0' }}>
                성별
              </label>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { value: 'male', label: '남성', icon: '♂' },
                  { value: 'female', label: '여성', icon: '♀' },
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

            {/* 년도 */}
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2" style={{ color: '#c0c0d0' }}>
                태어난 년도
              </label>
              <select
                value={input.year}
                onChange={(e) => setInput(prev => ({ ...prev, year: Number(e.target.value) }))}
                className="w-full px-4 py-3 rounded-xl text-sm outline-none"
                style={{
                  background: '#1a1a2e',
                  border: '1px solid #e0c97f20',
                  color: '#e8e8f0',
                }}
              >
                {years.map(y => (
                  <option key={y} value={y} style={{ background: '#1a1a2e' }}>{y}년</option>
                ))}
              </select>
            </div>

            {/* 월, 일 */}
            <div className="grid grid-cols-2 gap-3 mb-4">
              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: '#c0c0d0' }}>월</label>
                <select
                  value={input.month}
                  onChange={(e) => setInput(prev => ({ ...prev, month: Number(e.target.value) }))}
                  className="w-full px-4 py-3 rounded-xl text-sm outline-none"
                  style={{ background: '#1a1a2e', border: '1px solid #e0c97f20', color: '#e8e8f0' }}
                >
                  {months.map(m => (
                    <option key={m} value={m} style={{ background: '#1a1a2e' }}>{m}월</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: '#c0c0d0' }}>일</label>
                <select
                  value={input.day}
                  onChange={(e) => setInput(prev => ({ ...prev, day: Number(e.target.value) }))}
                  className="w-full px-4 py-3 rounded-xl text-sm outline-none"
                  style={{ background: '#1a1a2e', border: '1px solid #e0c97f20', color: '#e8e8f0' }}
                >
                  {days.map(d => (
                    <option key={d} value={d} style={{ background: '#1a1a2e' }}>{d}일</option>
                  ))}
                </select>
              </div>
            </div>

            {/* 시간 */}
            <div className="mb-8">
              <label className="block text-sm font-medium mb-2" style={{ color: '#c0c0d0' }}>
                태어난 시간 (선택)
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
                <option value="unknown" style={{ background: '#1a1a2e' }}>모름</option>
                {hours.map(h => (
                  <option key={h} value={h} style={{ background: '#1a1a2e' }}>
                    {h < 10 ? `0${h}` : h}시 ({h === 0 ? '자시' : h < 6 ? '축~인시' : h < 12 ? '묘~오시' : h < 18 ? '오~유시' : '유~해시'})
                  </option>
                ))}
              </select>
            </div>

            {/* 제출 버튼 */}
            <button
              onClick={handleSubmit}
              className="w-full py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-[1.02] active:scale-95"
              style={{
                background: 'linear-gradient(135deg, #e0c97f, #c4a84f)',
                color: '#1a1a2e',
                boxShadow: '0 8px 30px #e0c97f30',
              }}
            >
              🔮 사주 분석 시작
            </button>
          </div>

          <p className="text-center text-xs mt-4" style={{ color: '#606080' }}>
            입력하신 정보는 분석에만 활용되며 저장되지 않습니다.
          </p>
        </div>
      </div>
    )
  }

  // 로딩 화면
  if (step === 'loading') {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <LoadingAnimation />
      </div>
    )
  }

  // 요약 화면
  if ((step === 'summary' || step === 'detail') && sajuData && calcResult) {
    const mainColor = elementToColor(calcResult.mainElement)
    const subColor = elementToColor(calcResult.subElement)

    const TextBlock = ({ content }: { content: string }) => (
      <div className="space-y-3">
        {content.split('\n\n').map((para, i) => (
          <p key={i} className="text-sm leading-7" style={{ color: '#b0b8c8' }}>
            {para}
          </p>
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
              <div key={i} className="flex gap-3 items-start rounded-lg px-3 py-2"
                style={{ background: '#1a1a2e60' }}>
                <span className="text-xs font-bold mt-0.5 shrink-0 px-2 py-0.5 rounded"
                  style={{ background: '#e0c97f20', color: '#e0c97f' }}>
                  {label?.trim()}
                </span>
                <p className="text-sm leading-relaxed" style={{ color: '#b0b8c8' }}>
                  {rest.join(':').trim()}
                </p>
              </div>
            )
          })}
        </div>
      )
    }

    const DetailContent = () => (
      <div className="space-y-5 mt-6">
        {/* 성격 특성 */}
        <div className="rounded-2xl p-6" style={{ background: '#16213e', border: '1px solid #e0c97f20' }}>
          <h4 className="font-bold text-base mb-4 flex items-center gap-2" style={{ color: '#e0c97f' }}>
            🌟 성격 특성
          </h4>
          <TextBlock content={sajuData.personality} />
        </div>

        {/* 강점 / 주의할 점 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="rounded-2xl p-5" style={{ background: '#16213e', border: '1px solid #00ff8820' }}>
            <h4 className="font-bold text-sm mb-3 flex items-center gap-2" style={{ color: '#00ff88' }}>
              💪 강점
            </h4>
            <p className="text-sm leading-7" style={{ color: '#b0b8c8' }}>{sajuData.strength}</p>
          </div>
          <div className="rounded-2xl p-5" style={{ background: '#16213e', border: '1px solid #ff666620' }}>
            <h4 className="font-bold text-sm mb-3 flex items-center gap-2" style={{ color: '#ff9966' }}>
              ⚠️ 주의할 점
            </h4>
            <p className="text-sm leading-7" style={{ color: '#b0b8c8' }}>{sajuData.weakness}</p>
          </div>
        </div>

        {/* 2026년 운세 */}
        <div className="rounded-2xl p-6" style={{ background: '#16213e', border: '1px solid #9c59d120' }}>
          <h4 className="font-bold text-base mb-4 flex items-center gap-2" style={{ color: '#9c59d1' }}>
            🎯 2026년 운세
          </h4>
          <TextBlock content={sajuData.fortune2025} />
        </div>

        {/* 월별 운세 */}
        <div className="rounded-2xl p-6" style={{ background: '#16213e', border: '1px solid #e0c97f15' }}>
          <h4 className="font-bold text-base mb-4 flex items-center gap-2" style={{ color: '#e0c97f' }}>
            📅 월별 운세 흐름
          </h4>
          <MonthlyFortuneBlock content={sajuData.monthlyFortune} />
        </div>

        {/* 직업 적성 / 궁합 */}
        <div className="rounded-2xl p-6" style={{ background: '#16213e', border: '1px solid #e0c97f15' }}>
          <h4 className="font-bold text-base mb-3 flex items-center gap-2" style={{ color: '#e0c97f' }}>
            💼 직업 적성
          </h4>
          <p className="text-sm leading-7 mb-6" style={{ color: '#b0b8c8' }}>{sajuData.career}</p>
          <hr style={{ borderColor: '#e0c97f10' }} />
          <h4 className="font-bold text-base mt-5 mb-3 flex items-center gap-2" style={{ color: '#e0c97f' }}>
            💞 궁합
          </h4>
          <p className="text-sm leading-7" style={{ color: '#b0b8c8' }}>{sajuData.compatibility}</p>
        </div>
      </div>
    )

    return (
      <div className="min-h-screen py-12 px-4">
        <div className="max-w-2xl mx-auto">
          {/* 결과 헤더 */}
          <div className="text-center mb-8">
            {input.name && (
              <p className="text-sm mb-2" style={{ color: '#8080a0' }}>
                {input.name}님의 사주 분석 결과
              </p>
            )}
            <h1 className="text-3xl font-black mb-2" style={{ color: '#e0c97f' }}>
              {sajuData.title}
            </h1>
          </div>

          {/* 오행 기운 표시 */}
          <div
            className="rounded-2xl p-6 mb-6"
            style={{
              background: 'linear-gradient(135deg, #16213e, #0f3460)',
              border: '1px solid #e0c97f30',
            }}
          >
            <div className="flex justify-center gap-8 mb-6">
              {/* 주기운 */}
              <div className="text-center">
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center text-3xl mb-2 mx-auto"
                  style={{
                    background: `${mainColor}20`,
                    border: `2px solid ${mainColor}60`,
                    boxShadow: `0 0 20px ${mainColor}30`,
                  }}
                >
                  {elementToEmoji(calcResult.mainElement)}
                </div>
                <p className="text-xs mb-1" style={{ color: '#8080a0' }}>주기운</p>
                <p className="font-bold text-lg" style={{ color: mainColor }}>
                  {calcResult.mainElement}({elementToHanja(calcResult.mainElement)})
                </p>
              </div>

              {/* 구분 */}
              <div className="flex items-center" style={{ color: '#e0c97f60' }}>
                <span className="text-2xl">+</span>
              </div>

              {/* 보조기운 */}
              <div className="text-center">
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center text-3xl mb-2 mx-auto"
                  style={{
                    background: `${subColor}20`,
                    border: `2px solid ${subColor}60`,
                    boxShadow: `0 0 20px ${subColor}30`,
                  }}
                >
                  {elementToEmoji(calcResult.subElement)}
                </div>
                <p className="text-xs mb-1" style={{ color: '#8080a0' }}>보조기운</p>
                <p className="font-bold text-lg" style={{ color: subColor }}>
                  {calcResult.subElement}({elementToHanja(calcResult.subElement)})
                </p>
              </div>
            </div>

            {/* 3줄 요약 */}
            <div
              className="rounded-xl p-4"
              style={{ background: '#1a1a2e50', border: '1px solid #e0c97f15' }}
            >
              {sajuData.summary.split('\n').map((line, i) => (
                <p key={i} className="text-sm leading-relaxed" style={{ color: '#c0c8d8' }}>
                  {line}
                </p>
              ))}
            </div>
          </div>

          {/* 상세 결과 (잠금/해제) */}
          {step === 'detail' || unlocked ? (
            <div>
              <h2 className="text-xl font-bold mb-4" style={{ color: '#e8e8f0' }}>
                상세 분석
              </h2>
              <DetailContent />
            </div>
          ) : (
            <ResultGate
              onAdWatch={handleAdWatch}
              onProClick={handleProClick}
              blurContent={<DetailContent />}
            />
          )}

          {/* 다시 하기 */}
          <div className="mt-8 text-center">
            <button
              onClick={() => {
                sessionStorage.removeItem('saju-result')
                setStep('input')
                setUnlocked(false)
                setCalcResult(null)
              }}
              className="px-6 py-3 rounded-xl text-sm font-medium transition-all"
              style={{
                background: 'transparent',
                border: '1px solid #e0c97f30',
                color: '#8090a8',
              }}
            >
              다시 분석하기
            </button>
          </div>
        </div>
      </div>
    )
  }

  return null
}
