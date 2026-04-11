'use client'

import { useState, useCallback } from 'react'
import QuestionCard from '@/components/QuestionCard'
import LoadingAnimation from '@/components/LoadingAnimation'
import AdBanner from '@/components/AdBanner'
import NextTestSuggestion from '@/components/NextTestSuggestion'
import { moneyQuestions } from '@/data/en/money-questions'
import { moneyResults } from '@/data/en/money-results'
import { calcMoneyType } from '@/lib/test-calc'

type Step = 'quiz' | 'loading' | 'result'

interface Answer {
  questionId: number
  optionIndex: number
  score: Record<string, number>
}

export default function EnglishMoneyTestPage() {
  const [step, setStep] = useState<Step>('quiz')
  const [currentQ, setCurrentQ] = useState(0)
  const [answers, setAnswers] = useState<Answer[]>([])
  const [resultType, setResultType] = useState<string>('')

  const handleAnswer = useCallback((optionIndex: number) => {
    const question = moneyQuestions[currentQ]
    const selectedOption = question.options[optionIndex]
    const newAnswer: Answer = { questionId: question.id, optionIndex, score: selectedOption.score }
    const newAnswers = [...answers.slice(0, currentQ), newAnswer]
    setAnswers(newAnswers)
    if (currentQ < moneyQuestions.length - 1) {
      setCurrentQ(currentQ + 1)
    } else {
      const type = calcMoneyType(newAnswers.map(a => ({ score: a.score })))
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

  const result = moneyResults.find(r => r.id === resultType)

  const handleReset = () => {
    setStep('quiz')
    setCurrentQ(0)
    setAnswers([])
    setResultType('')
  }

  if (step === 'quiz') {
    return (
      <div className="min-h-screen py-12">
        <div className="text-center mb-8 px-4">
          <div className="text-4xl mb-3">💰</div>
          <h1 className="text-3xl font-black mb-1" style={{ color: '#f0eef8' }}>Wealth Fortune Test</h1>
          <p className="text-sm" style={{ color: '#505075' }}>Discover your money personality and wealth style</p>
        </div>
        <QuestionCard
          question={moneyQuestions[currentQ].question}
          options={moneyQuestions[currentQ].options}
          current={currentQ + 1}
          total={moneyQuestions.length}
          onAnswer={handleAnswer}
          onBack={handleBack}
          questionLabel={`Question ${currentQ + 1} of ${moneyQuestions.length}`}
          prevLabel="Previous question"
        />
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
          <h4 className="font-bold mb-3" style={{ color: '#f0eef8' }}>💰 Detailed Analysis</h4>
          <Paragraphs text={result.detail} />
        </div>
        <div className="rounded-xl p-5" style={{ background: '#111120', border: '1px solid #1e1e38' }}>
          <h4 className="font-bold mb-3" style={{ color: '#2db8a0' }}>💡 Wealth Management Tips</h4>
          <ul className="space-y-2">
            {result.moneyTips.map((tip, i) => (
              <li key={i} className="flex items-start gap-2 text-sm" style={{ color: '#9090b8' }}>
                <span className="flex-shrink-0 mt-0.5" style={{ color: '#2db8a0' }}>✓</span>
                <span>{tip}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-xl p-5" style={{ background: '#111120', border: '1px solid #1e1e38' }}>
          <h4 className="font-bold mb-3" style={{ color: '#d4951e' }}>🍀 Lucky Items</h4>
          <div className="flex flex-wrap gap-2">
            {result.luckyItems.map((item) => (
              <span key={item} className="text-xs px-3 py-1.5 rounded-full"
                style={{ background: '#d4951e20', color: '#d4951e', border: '1px solid #d4951e40' }}>
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    )

    return (
      <div className="min-h-screen py-12 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <div className="text-6xl mb-4">{result.icon}</div>
            <div className="inline-block px-4 py-1 rounded-full text-sm font-bold mb-3"
              style={{ background: '#c9444420', color: '#c94444', border: '1px solid #c9444440' }}>
              {result.type}
            </div>
            <h1 className="text-3xl font-black mb-2" style={{ color: '#f0eef8' }}>{result.title}</h1>
            <p className="text-sm" style={{ color: '#505075' }}>Wealth Fortune Result</p>
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

          <NextTestSuggestion currentPath="/en/test/money" lang="en" />

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
