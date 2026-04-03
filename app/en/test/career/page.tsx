'use client'

import { useState, useCallback } from 'react'
import QuestionCard from '@/components/QuestionCard'
import LoadingAnimation from '@/components/LoadingAnimation'
import ResultGate from '@/components/ResultGate'
import { careerQuestions } from '@/data/en/career-questions'
import { careerResults } from '@/data/en/career-results'
import { calcCareerType } from '@/lib/test-calc'

type Step = 'quiz' | 'loading' | 'summary' | 'detail'

interface Answer {
  questionId: number
  optionIndex: number
  score: Record<string, number>
}

export default function EnglishCareerTestPage() {
  const [step, setStep] = useState<Step>('quiz')
  const [currentQ, setCurrentQ] = useState(0)
  const [answers, setAnswers] = useState<Answer[]>([])
  const [resultType, setResultType] = useState<string>('')
  const [unlocked, setUnlocked] = useState(false)

  const handleAnswer = useCallback((optionIndex: number) => {
    const question = careerQuestions[currentQ]
    const selectedOption = question.options[optionIndex]
    const newAnswer: Answer = { questionId: question.id, optionIndex, score: selectedOption.score }
    const newAnswers = [...answers.slice(0, currentQ), newAnswer]
    setAnswers(newAnswers)
    if (currentQ < careerQuestions.length - 1) {
      setCurrentQ(currentQ + 1)
    } else {
      const type = calcCareerType(newAnswers.map(a => ({ score: a.score })))
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

  const result = careerResults.find(r => r.id === resultType)

  const handleReset = () => {
    setStep('quiz')
    setCurrentQ(0)
    setAnswers([])
    setResultType('')
    setUnlocked(false)
  }

  if (step === 'quiz') {
    return (
      <div className="min-h-screen py-12">
        <div className="text-center mb-8 px-4">
          <div className="text-4xl mb-3">💼</div>
          <h1 className="text-3xl font-black mb-1" style={{ color: '#e0c97f' }}>Career Aptitude Test</h1>
          <p className="text-sm" style={{ color: '#8080a0' }}>Discover your ideal career type</p>
        </div>
        <QuestionCard
          question={careerQuestions[currentQ].question}
          options={careerQuestions[currentQ].options}
          current={currentQ + 1}
          total={careerQuestions.length}
          onAnswer={handleAnswer}
          onBack={handleBack}
          questionLabel={`Question ${currentQ + 1} of ${careerQuestions.length}`}
          prevLabel="Previous question"
        />
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
            <h4 className="font-bold mb-3" style={{ color: '#ff7070' }}>⚠️ Areas to Develop</h4>
            <Paragraphs text={result.weakness} />
          </div>
        </div>
        <div className="rounded-xl p-5" style={{ background: '#16213e', border: '1px solid #e0c97f15' }}>
          <h4 className="font-bold mb-3" style={{ color: '#4a9eff' }}>💼 Recommended Careers</h4>
          <div className="flex flex-wrap gap-2">
            {result.bestJobs.map((job) => (
              <span key={job} className="text-xs px-3 py-1.5 rounded-full"
                style={{ background: '#4a9eff20', color: '#4a9eff', border: '1px solid #4a9eff40' }}>
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
            <div className="inline-block px-4 py-1 rounded-full text-sm font-bold mb-3"
              style={{ background: '#4a9eff20', color: '#4a9eff', border: '1px solid #4a9eff40' }}>
              {result.type}
            </div>
            <h1 className="text-3xl font-black mb-2" style={{ color: '#e0c97f' }}>{result.title}</h1>
            <p className="text-sm" style={{ color: '#8080a0' }}>Career Aptitude Result</p>
          </div>

          <div className="rounded-2xl p-6 mb-6"
            style={{ background: 'linear-gradient(135deg, #16213e, #0f3460)', border: '1px solid #4a9eff40' }}>
            <p className="text-sm leading-relaxed" style={{ color: '#c0c8d8' }}>{result.summary}</p>
          </div>

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

          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
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
