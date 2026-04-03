'use client'

import { useState, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import QuestionCard from '@/components/QuestionCard'
import LoadingAnimation from '@/components/LoadingAnimation'
import ResultGate from '@/components/ResultGate'
import { loveQuestions } from '@/data/love-questions'
import { loveResults } from '@/data/love-results'
import { calcLoveType } from '@/lib/test-calc'

type Step = 'quiz' | 'loading' | 'summary' | 'detail'

interface Answer {
  questionId: number
  optionIndex: number
  score: Record<string, number>
}

export default function LoveTestPage() {
  const router = useRouter()
  const [step, setStep] = useState<Step>('quiz')
  const [currentQ, setCurrentQ] = useState(0)
  const [answers, setAnswers] = useState<Answer[]>([])
  const [resultType, setResultType] = useState<string>('')
  const [unlocked, setUnlocked] = useState(false)

  const handleAnswer = useCallback((optionIndex: number) => {
    const question = loveQuestions[currentQ]
    const selectedOption = question.options[optionIndex]

    const newAnswer: Answer = {
      questionId: question.id,
      optionIndex,
      score: selectedOption.score,
    }

    const newAnswers = [...answers.slice(0, currentQ), newAnswer]
    setAnswers(newAnswers)

    if (currentQ < loveQuestions.length - 1) {
      setCurrentQ(currentQ + 1)
    } else {
      // 마지막 질문 완료
      const type = calcLoveType(newAnswers.map(a => ({ score: a.score })))
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
    alert('광고를 시청했습니다! 전체 결과를 볼 수 있습니다. 🎉')
    setUnlocked(true)
    setStep('detail')
  }, [])

  const handleProClick = useCallback(() => {
    router.push('/pro')
  }, [router])

  const result = loveResults.find(r => r.id === resultType)

  const handleReset = () => {
    setStep('quiz')
    setCurrentQ(0)
    setAnswers([])
    setResultType('')
    setUnlocked(false)
  }

  // 퀴즈 화면
  if (step === 'quiz') {
    return (
      <div className="min-h-screen py-12">
        <div className="text-center mb-8 px-4">
          <div className="text-4xl mb-3">💘</div>
          <h1 className="text-3xl font-black mb-1" style={{ color: '#e0c97f' }}>
            연애유형 테스트
          </h1>
          <p className="text-sm" style={{ color: '#8080a0' }}>
            나의 연애 스타일을 알아보세요
          </p>
        </div>
        <QuestionCard
          question={loveQuestions[currentQ].question}
          options={loveQuestions[currentQ].options}
          current={currentQ + 1}
          total={loveQuestions.length}
          onAnswer={handleAnswer}
          onBack={handleBack}
        />
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

  // 결과 화면
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
          <h4 className="font-bold mb-3" style={{ color: '#e0c97f' }}>💕 상세 분석</h4>
          <Paragraphs text={result.detail} />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="rounded-xl p-5" style={{ background: '#16213e', border: '1px solid #00ff8820' }}>
            <h4 className="font-bold mb-3" style={{ color: '#00ff88' }}>💪 연애 강점</h4>
            <Paragraphs text={result.strength} />
          </div>
          <div className="rounded-xl p-5" style={{ background: '#16213e', border: '1px solid #ff707020' }}>
            <h4 className="font-bold mb-3" style={{ color: '#ff7070' }}>⚠️ 주의할 점</h4>
            <Paragraphs text={result.weakness} />
          </div>
        </div>
        <div className="rounded-xl p-5" style={{ background: '#16213e', border: '1px solid #9c59d120' }}>
          <h4 className="font-bold mb-3" style={{ color: '#9c59d1' }}>💞 나와 잘 맞는 유형</h4>
          <Paragraphs text={result.compatibility} />
        </div>
      </div>
    )

    return (
      <div className="min-h-screen py-12 px-4">
        <div className="max-w-2xl mx-auto">
          {/* 결과 헤더 */}
          <div className="text-center mb-8">
            <div className="text-6xl mb-4">{result.icon}</div>
            <div
              className="inline-block px-4 py-1 rounded-full text-sm font-bold mb-3"
              style={{ background: '#e05c7f20', color: '#e05c7f', border: '1px solid #e05c7f40' }}
            >
              {result.type}
            </div>
            <h1 className="text-3xl font-black mb-2" style={{ color: '#e0c97f' }}>
              {result.title}
            </h1>
            <p className="text-sm" style={{ color: '#8080a0' }}>연애유형 분석 결과</p>
          </div>

          {/* 요약 카드 */}
          <div
            className="rounded-2xl p-6 mb-6"
            style={{
              background: 'linear-gradient(135deg, #16213e, #0f3460)',
              border: '1px solid #e05c7f40',
            }}
          >
            <p className="text-sm leading-relaxed" style={{ color: '#c0c8d8' }}>
              {result.summary}
            </p>
          </div>

          {/* 상세 결과 */}
          {step === 'detail' || unlocked ? (
            <div>
              <h2 className="text-xl font-bold mb-2" style={{ color: '#e8e8f0' }}>상세 분석</h2>
              <DetailContent />
            </div>
          ) : (
            <ResultGate
              onAdWatch={handleAdWatch}
              onProClick={handleProClick}
              blurContent={<DetailContent />}
            />
          )}

          {/* 다시 하기 / 다른 테스트 */}
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={handleReset}
              className="px-6 py-3 rounded-xl text-sm font-medium transition-all"
              style={{ background: 'transparent', border: '1px solid #e0c97f30', color: '#8090a8' }}
            >
              다시 테스트하기
            </button>
            <a
              href="/test"
              className="px-6 py-3 rounded-xl text-sm font-medium text-center transition-all"
              style={{ background: '#16213e', border: '1px solid #e0c97f30', color: '#e0c97f' }}
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
