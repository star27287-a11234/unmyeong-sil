'use client'

import { useState, useCallback } from 'react'
import QuestionCard from '@/components/QuestionCard'
import LoadingAnimation from '@/components/LoadingAnimation'
import AdBanner from '@/components/AdBanner'
import NextTestSuggestion from '@/components/NextTestSuggestion'
import { careerQuestions } from '@/data/career-questions'
import { careerResults } from '@/data/career-results'
import { calcCareerType } from '@/lib/test-calc'

type Step = 'quiz' | 'loading' | 'result'

interface Answer {
  questionId: number
  optionIndex: number
  score: Record<string, number>
}

export default function CareerTestPage() {
  const [step, setStep] = useState<Step>('quiz')
  const [currentQ, setCurrentQ] = useState(0)
  const [answers, setAnswers] = useState<Answer[]>([])
  const [resultType, setResultType] = useState<string>('')

  const handleAnswer = useCallback((optionIndex: number) => {
    const question = careerQuestions[currentQ]
    const selectedOption = question.options[optionIndex]

    const newAnswer: Answer = {
      questionId: question.id,
      optionIndex,
      score: selectedOption.score,
    }

    const newAnswers = [...answers.slice(0, currentQ), newAnswer]
    setAnswers(newAnswers)

    if (currentQ < careerQuestions.length - 1) {
      setCurrentQ(currentQ + 1)
    } else {
      const type = calcCareerType(newAnswers.map(a => ({ score: a.score })))
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

  const result = careerResults.find(r => r.id === resultType)

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
          <div className="text-4xl mb-3">💼</div>
          <h1 className="text-3xl font-black mb-1" style={{ color: '#f0eef8' }}>직업적성 테스트</h1>
          <p className="text-sm" style={{ color: '#505075' }}>나에게 맞는 직업 유형을 찾아보세요</p>
        </div>
        <QuestionCard
          question={careerQuestions[currentQ].question}
          options={careerQuestions[currentQ].options}
          current={currentQ + 1}
          total={careerQuestions.length}
          onAnswer={handleAnswer}
          onBack={handleBack}
        />
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
          <h4 className="font-bold mb-3" style={{ color: '#4a90e2' }}>🔍 상세 분석</h4>
          <Paragraphs text={result.detail} />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="rounded-xl p-5" style={{ background: '#111120', border: '1px solid #2db8a020' }}>
            <h4 className="font-bold mb-3" style={{ color: '#2db8a0' }}>💪 강점</h4>
            <Paragraphs text={result.strength} />
          </div>
          <div className="rounded-xl p-5" style={{ background: '#111120', border: '1px solid #e0525220' }}>
            <h4 className="font-bold mb-3" style={{ color: '#e05252' }}>⚠️ 개발할 점</h4>
            <Paragraphs text={result.weakness} />
          </div>
        </div>
        <div className="rounded-xl p-5" style={{ background: '#111120', border: '1px solid #1e1e38' }}>
          <h4 className="font-bold mb-3" style={{ color: '#4a90e2' }}>💼 추천 직업</h4>
          <div className="flex flex-wrap gap-2">
            {result.bestJobs.map((job) => (
              <span
                key={job}
                className="text-xs px-3 py-1.5 rounded-full"
                style={{ background: '#4a90e220', color: '#4a90e2', border: '1px solid #4a90e240' }}
              >
                {job}
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
            <div
              className="inline-block px-4 py-1 rounded-full text-sm font-bold mb-3"
              style={{ background: '#c9444420', color: '#c94444', border: '1px solid #c9444440' }}
            >
              {result.type}
            </div>
            <h1 className="text-3xl font-black mb-2" style={{ color: '#f0eef8' }}>{result.title}</h1>
            <p className="text-sm" style={{ color: '#505075' }}>직업적성 분석 결과</p>
          </div>

          <div
            className="rounded-xl p-6 mb-6"
            style={{ background: '#111120', border: '1px solid #2a2a48' }}
          >
            <p className="text-sm leading-relaxed" style={{ color: '#9090b8' }}>{result.summary}</p>
          </div>

          {/* 요약 아래 광고 */}
          <AdBanner adSlot="7187602366" adFormat="auto" className="mb-2" />

          <div>
            <h2 className="text-xl font-bold mb-2" style={{ color: '#f0eef8' }}>상세 분석</h2>
            <DetailContent />
          </div>

          {/* 다음 테스트 추천 */}
          <NextTestSuggestion currentPath="/test/career" />

          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={handleReset}
              className="px-6 py-3 rounded-full text-sm font-medium"
              style={{ background: 'transparent', border: '1px solid #2a2a48', color: '#9090b8' }}
            >
              다시 테스트하기
            </button>
            <a
              href="/test"
              className="px-6 py-3 rounded-full text-sm font-medium text-center"
              style={{ background: '#c94444', color: '#fff' }}
            >
              다른 테스트 보기
            </a>
          </div>
        </div>
      </div>
    )
  }

  return null
}
