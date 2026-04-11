'use client'

import { useState, useCallback } from 'react'
import LoadingAnimation from '@/components/LoadingAnimation'
import AdBanner from '@/components/AdBanner'
import NextTestSuggestion from '@/components/NextTestSuggestion'
import { mbtiQuestions } from '@/data/en/mbti-questions'
import { mbtiResults } from '@/data/en/mbti-results'
import { calcMbtiType } from '@/lib/test-calc'

type Step = 'quiz' | 'loading' | 'result'

export default function EnglishMbtiTestPage() {
  const [step, setStep] = useState<Step>('quiz')
  const [currentQ, setCurrentQ] = useState(0)
  const [answers, setAnswers] = useState<{ dimension: string; value: string }[]>([])
  const [resultType, setResultType] = useState<string>('')

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
      setTimeout(() => setStep('result'), 2000)
    }
  }, [currentQ, answers])

  const handleBack = useCallback(() => {
    if (currentQ > 0) {
      setCurrentQ(currentQ - 1)
      setAnswers(prev => prev.slice(0, currentQ - 1))
    }
  }, [currentQ])

  const result = mbtiResults[resultType]

  const handleReset = () => {
    setStep('quiz')
    setCurrentQ(0)
    setAnswers([])
    setResultType('')
  }

  const dimensionColors: Record<string, string> = {
    EI: '#2db8a0', SN: '#4a9eff', TF: '#e05c7f', JP: '#d4951e',
  }
  const dimensionLabels: Record<string, string> = {
    EI: 'Extraversion / Introversion',
    SN: 'Sensing / Intuition',
    TF: 'Thinking / Feeling',
    JP: 'Judging / Perceiving',
  }
  const typeColors: Record<string, string> = {
    'E': '#2db8a0', 'I': '#4a9eff',
    'S': '#d4951e', 'N': '#2db8a0',
    'T': '#4a9eff', 'F': '#e05c7f',
    'J': '#d4951e', 'P': '#2db8a0',
  }

  if (step === 'quiz') {
    const question = mbtiQuestions[currentQ]
    const dimColor = dimensionColors[question.dimension] || '#d4951e'
    const progress = ((currentQ + 1) / mbtiQuestions.length) * 100

    return (
      <div className="min-h-screen py-12 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <div className="text-4xl mb-3">🧩</div>
            <h1 className="text-3xl font-black mb-1" style={{ color: '#f0eef8' }}>MBTI Test</h1>
            <p className="text-sm" style={{ color: '#505075' }}>Discover your personality type</p>
          </div>

          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm" style={{ color: '#505075' }}>
                Question {currentQ + 1} of {mbtiQuestions.length}
              </span>
              <span className="text-sm font-medium" style={{ color: '#d4951e' }}>{Math.round(progress)}%</span>
            </div>
            <div className="w-full h-1.5 rounded-full overflow-hidden" style={{ background: '#1e1e38' }}>
              <div className="h-full rounded-full transition-all duration-500"
                style={{ width: `${progress}%`, background: '#c94444' }} />
            </div>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold mb-4"
            style={{ background: `${dimColor}20`, color: dimColor, border: `1px solid ${dimColor}40` }}>
            <span>{dimensionLabels[question.dimension]}</span>
          </div>

          <div className="rounded-2xl p-6 mb-6"
            style={{ background: '#111120', border: '1px solid #1e1e38' }}>
            <p className="text-lg font-medium leading-relaxed" style={{ color: '#f0eef8' }}>{question.question}</p>
          </div>

          <div className="flex flex-col gap-4">
            {question.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(index as 0 | 1)}
                className="w-full text-left p-5 rounded-xl transition-all duration-200 hover:scale-[1.02] active:scale-95"
                style={{ background: '#111120', border: '1px solid #1e1e38', color: '#9090b8' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = dimColor + '80'
                  e.currentTarget.style.background = '#1a0f1f'
                  e.currentTarget.style.color = '#f0eef8'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#1e1e38'
                  e.currentTarget.style.background = '#111120'
                  e.currentTarget.style.color = '#9090b8'
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
              <button onClick={handleBack} className="text-sm transition-all" style={{ color: '#505075' }}>
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

  if (step === 'result' && result) {
    const Paragraphs = ({ text }: { text: string }) => (
      <div className="space-y-3">
        {text.split('\n\n').map((p, i) => (
          <p key={i} className="text-sm leading-7" style={{ color: '#9090b8' }}>{p}</p>
        ))}
      </div>
    )

    const DetailContent = () => (
      <div className="space-y-4 mt-4">
        <div className="rounded-xl p-5" style={{ background: '#111120', border: '1px solid #1e1e38' }}>
          <h4 className="font-bold mb-3" style={{ color: '#f0eef8' }}>🔍 Detailed Analysis</h4>
          <Paragraphs text={result.detail} />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="rounded-xl p-5" style={{ background: '#111120', border: '1px solid #2db8a020' }}>
            <h4 className="font-bold mb-3" style={{ color: '#2db8a0' }}>💪 Strengths</h4>
            <Paragraphs text={result.strength} />
          </div>
          <div className="rounded-xl p-5" style={{ background: '#111120', border: '1px solid #e0525220' }}>
            <h4 className="font-bold mb-3" style={{ color: '#e05252' }}>⚠️ Weaknesses</h4>
            <Paragraphs text={result.weakness} />
          </div>
        </div>
        <div className="rounded-xl p-5" style={{ background: '#111120', border: '1px solid #2db8a020' }}>
          <h4 className="font-bold mb-3" style={{ color: '#2db8a0' }}>💞 Compatibility</h4>
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
                    background: `${typeColors[char] || '#d4951e'}20`,
                    border: `2px solid ${typeColors[char] || '#d4951e'}60`,
                    color: typeColors[char] || '#d4951e',
                  }}>
                  {char}
                </div>
              ))}
            </div>
            <h1 className="text-2xl font-black mb-1" style={{ color: '#f0eef8' }}>{result.title}</h1>
            <p className="text-sm" style={{ color: '#505075' }}>MBTI Personality Type Result</p>
          </div>

          <div className="rounded-2xl p-6 mb-6"
            style={{ background: '#111120', border: '1px solid #2a2a48' }}>
            <p className="text-sm leading-relaxed" style={{ color: '#9090b8' }}>{result.summary}</p>
          </div>

          <AdBanner adSlot="7187602366" adFormat="auto" className="mb-2" />

          <div>
            <h2 className="text-xl font-bold mb-2" style={{ color: '#f0eef8' }}>Full Analysis</h2>
            <DetailContent />
          </div>

          <NextTestSuggestion currentPath="/en/test/mbti" lang="en" />

          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <button onClick={handleReset} className="px-6 py-3 text-sm font-medium"
              style={{ background: 'transparent', border: '1px solid #2a2a48', color: '#505075', borderRadius: '9999px' }}>
              Retake Test
            </button>
            <a href="/en/test" className="px-6 py-3 text-sm font-medium text-center"
              style={{ background: '#111120', border: '1px solid #2a2a48', color: '#9090b8', borderRadius: '9999px' }}>
              Other Tests
            </a>
          </div>
        </div>
      </div>
    )
  }

  return null
}
