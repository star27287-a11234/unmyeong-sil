'use client'

import { useState, useCallback } from 'react'
import LoadingAnimation from '@/components/LoadingAnimation'
import ResultGate from '@/components/ResultGate'
import AdBanner from '@/components/AdBanner'
import NextTestSuggestion from '@/components/NextTestSuggestion'
import { mbtiQuestions } from '@/data/en/mbti-questions'
import { mbtiResults } from '@/data/en/mbti-results'
import { calcMbtiType } from '@/lib/test-calc'

type Step = 'quiz' | 'loading' | 'summary' | 'detail'

export default function EnglishMbtiTestPage() {
  const [step, setStep] = useState<Step>('quiz')
  const [currentQ, setCurrentQ] = useState(0)
  const [answers, setAnswers] = useState<{ dimension: string; value: string }[]>([])
  const [resultType, setResultType] = useState<string>('')
  const [unlocked, setUnlocked] = useState(false)

  const handleAnswer = useCallback((optionIndex: 0 | 1) => {
    const question = mbtiQuestions[currentQ]
    const selected = question.options[optionIndex]
    const newAnswers = [...answers.slice(0, currentQ), { dimension: question.dimension, value: selected.value }]
    setAnswers(newAnswers)

    if (currentQ < mbtiQuestions.length - 1) {
      setCurrentQ(currentQ + 1)
    } else {
      const type = calcMbtiType(newAnswers)
      setResultType(type)
      setStep('loading')
      setTimeout(() => setStep('summary'), 2000)
    }
  }, [currentQ, answers])

  const handleBack = useCallback(() => {
    if (currentQ > 0) {
      setCurrentQ(currentQ - 1)
      setAnswers(prev => prev.slice(0, currentQ - 1))
    }
  }, [currentQ])

  const handleAdWatch = useCallback(() => {
    alert('Thank you for watching! Your full results are now unlocked. 🎉')
    setUnlocked(true)
    setStep('detail')
  }, [])

  const result = mbtiResults[resultType]

  const handleReset = () => {
    setStep('quiz')
    setCurrentQ(0)
    setAnswers([])
    setResultType('')
    setUnlocked(false)
  }

  const dimensionColors: Record<string, string> = {
    EI: '#9c59d1', SN: '#4a9eff', TF: '#e05c7f', JP: '#e0c97f',
  }
  const dimensionLabels: Record<string, string> = {
    EI: 'Extraversion / Introversion',
    SN: 'Sensing / Intuition',
    TF: 'Thinking / Feeling',
    JP: 'Judging / Perceiving',
  }
  const typeColors: Record<string, string> = {
    'E': '#9c59d1', 'I': '#4a9eff',
    'S': '#e0c97f', 'N': '#00cc77',
    'T': '#4a9eff', 'F': '#e05c7f',
    'J': '#e0c97f', 'P': '#9c59d1',
  }

  if (step === 'quiz') {
    const question = mbtiQuestions[currentQ]
    const dimColor = dimensionColors[question.dimension] || '#e0c97f'
    const progress = ((currentQ + 1) / mbtiQuestions.length) * 100

    return (
      <div className="min-h-screen py-12 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <div className="text-4xl mb-3">🧩</div>
            <h1 className="text-3xl font-black mb-1" style={{ color: '#e0c97f' }}>MBTI Test</h1>
            <p className="text-sm" style={{ color: '#8080a0' }}>Discover your personality type</p>
          </div>

          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm" style={{ color: '#9090b0' }}>
                Question {currentQ + 1} of {mbtiQuestions.length}
              </span>
              <span className="text-sm font-medium" style={{ color: '#e0c97f' }}>{Math.round(progress)}%</span>
            </div>
            <div className="w-full h-1.5 rounded-full overflow-hidden" style={{ background: '#e0c97f20' }}>
              <div className="h-full rounded-full transition-all duration-500"
                style={{ width: `${progress}%`, background: 'linear-gradient(90deg, #e0c97f, #9c59d1)' }} />
            </div>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold mb-4"
            style={{ background: `${dimColor}20`, color: dimColor, border: `1px solid ${dimColor}40` }}>
            <span>{dimensionLabels[question.dimension]}</span>
          </div>

          <div className="rounded-2xl p-6 mb-6"
            style={{ background: 'linear-gradient(135deg, #16213e, #0f3460)', border: '1px solid #e0c97f20' }}>
            <p className="text-lg font-medium leading-relaxed" style={{ color: '#e8e8f0' }}>{question.question}</p>
          </div>

          <div className="flex flex-col gap-4">
            {question.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(index as 0 | 1)}
                className="w-full text-left p-5 rounded-xl transition-all duration-200 hover:scale-[1.02] active:scale-95"
                style={{ background: '#16213e', border: '1px solid #e0c97f20', color: '#c0c0d0' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = dimColor + '80'
                  e.currentTarget.style.background = '#1a2a4e'
                  e.currentTarget.style.color = '#e8e8f0'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#e0c97f20'
                  e.currentTarget.style.background = '#16213e'
                  e.currentTarget.style.color = '#c0c0d0'
                }}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold"
                    style={{ background: `${dimColor}20`, color: dimColor }}>
                    {index === 0 ? 'A' : 'B'}
                  </div>
                  <div>
                    <div className="text-xs font-bold mb-1" style={{ color: dimColor }}>{option.value}</div>
                    <p className="text-sm leading-relaxed">{option.text}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {currentQ > 0 && (
            <div className="mt-6 text-center">
              <button onClick={handleBack} className="text-sm transition-all" style={{ color: '#7070a0' }}>
                ← Previous question
              </button>
            </div>
          )}
        </div>
      </div>
    )
  }

  if (step === 'loading') {
    return <div className="min-h-screen flex items-center justify-center"><LoadingAnimation /></div>
  }

  if ((step === 'summary' || step === 'detail') && result) {
    const Paragraphs = ({ text }: { text: string }) => (
      <div className="space-y-3">
        {text.split('\n\n').map((p, i) => (
          <p key={i} className="text-sm leading-7" style={{ color: '#b0b8c8' }}>{p}</p>
        ))}
      </div>
    )

    const DetailContent = () => (
      <div className="space-y-4 mt-4">
        <div className="rounded-xl p-5" style={{ background: '#16213e', border: '1px solid #e0c97f15' }}>
          <h4 className="font-bold mb-3" style={{ color: '#e0c97f' }}>🔍 Detailed Analysis</h4>
          <Paragraphs text={result.detail} />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="rounded-xl p-5" style={{ background: '#16213e', border: '1px solid #00ff8820' }}>
            <h4 className="font-bold mb-3" style={{ color: '#00ff88' }}>💪 Strengths</h4>
            <Paragraphs text={result.strength} />
          </div>
          <div className="rounded-xl p-5" style={{ background: '#16213e', border: '1px solid #ff707020' }}>
            <h4 className="font-bold mb-3" style={{ color: '#ff7070' }}>⚠️ Weaknesses</h4>
            <Paragraphs text={result.weakness} />
          </div>
        </div>
        <div className="rounded-xl p-5" style={{ background: '#16213e', border: '1px solid #9c59d120' }}>
          <h4 className="font-bold mb-3" style={{ color: '#9c59d1' }}>💞 Compatibility</h4>
          <Paragraphs text={result.compatibility} />
        </div>
      </div>
    )

    return (
      <div className="min-h-screen py-12 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <div className="flex justify-center gap-1 mb-4">
              {resultType.split('').map((char, i) => (
                <div key={i} className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl font-black"
                  style={{
                    background: `${typeColors[char] || '#e0c97f'}20`,
                    border: `2px solid ${typeColors[char] || '#e0c97f'}60`,
                    color: typeColors[char] || '#e0c97f',
                  }}>
                  {char}
                </div>
              ))}
            </div>
            <h1 className="text-2xl font-black mb-1" style={{ color: '#e0c97f' }}>{result.title}</h1>
            <p className="text-sm" style={{ color: '#8080a0' }}>MBTI Personality Type Result</p>
          </div>

          <div className="rounded-2xl p-6 mb-6"
            style={{ background: 'linear-gradient(135deg, #16213e, #0f3460)', border: '1px solid #e0c97f30' }}>
            <p className="text-sm leading-relaxed" style={{ color: '#c0c8d8' }}>{result.summary}</p>
          </div>

          <AdBanner adSlot="9012345678" adFormat="auto" className="mb-2" />

          {step === 'detail' || unlocked ? (
            <div>
              <h2 className="text-xl font-bold mb-2" style={{ color: '#e8e8f0' }}>Full Analysis</h2>
              <DetailContent />
            </div>
          ) : (
            <ResultGate
              onAdWatch={handleAdWatch}
              blurContent={<DetailContent />}
              title="View Full Analysis"
              subtitle="Watch a short ad to unlock your complete results"
              watchAdLabel="📺 Watch Ad & Unlock for Free"
              note="Watch one ad to access your full detailed analysis"
            />
          )}

          <NextTestSuggestion currentPath="/en/test/mbti" lang="en" />

          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <button onClick={handleReset} className="px-6 py-3 rounded-xl text-sm font-medium"
              style={{ background: 'transparent', border: '1px solid #e0c97f30', color: '#8090a8' }}>
              Retake Test
            </button>
            <a href="/en/test" className="px-6 py-3 rounded-xl text-sm font-medium text-center"
              style={{ background: '#16213e', border: '1px solid #e0c97f30', color: '#e0c97f' }}>
              Other Tests
            </a>
          </div>
        </div>
      </div>
    )
  }

  return null
}
