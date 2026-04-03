'use client'

interface Option {
  text: string
}

interface Props {
  question: string
  options: Option[]
  current: number
  total: number
  onAnswer: (index: number) => void
  onBack: () => void
  prevLabel?: string
  questionLabel?: string
}

export default function QuestionCard({ question, options, current, total, onAnswer, onBack, prevLabel = '이전 질문으로', questionLabel }: Props) {
  const qLabel = questionLabel ?? `질문 ${current} / ${total}`
  const progress = (current / total) * 100

  return (
    <div className="w-full max-w-2xl mx-auto px-4">
      {/* 진행 상황 */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm" style={{ color: '#9090b0' }}>
            {qLabel}
          </span>
          <span className="text-sm font-medium" style={{ color: '#e0c97f' }}>
            {Math.round(progress)}%
          </span>
        </div>
        {/* 진행 바 */}
        <div
          className="w-full h-1.5 rounded-full overflow-hidden"
          style={{ background: '#e0c97f20' }}
        >
          <div
            className="h-full rounded-full transition-all duration-500"
            style={{
              width: `${progress}%`,
              background: 'linear-gradient(90deg, #e0c97f, #9c59d1)',
            }}
          />
        </div>
      </div>

      {/* 질문 카드 */}
      <div
        className="rounded-2xl p-6 mb-6"
        style={{
          background: 'linear-gradient(135deg, #16213e, #0f3460)',
          border: '1px solid #e0c97f20',
        }}
      >
        <div
          className="text-xs font-semibold mb-3 uppercase tracking-wider"
          style={{ color: '#9c59d1' }}
        >
          Question {current}
        </div>
        <p
          className="text-lg font-medium leading-relaxed"
          style={{ color: '#e8e8f0' }}
        >
          {question}
        </p>
      </div>

      {/* 선택지 */}
      <div className="flex flex-col gap-3 mb-6">
        {options.map((option, index) => (
          <button
            key={index}
            onClick={() => onAnswer(index)}
            className="w-full text-left p-4 rounded-xl transition-all duration-200 hover:scale-[1.02] active:scale-95"
            style={{
              background: '#16213e',
              border: '1px solid #e0c97f20',
              color: '#c0c0d0',
            }}
            onMouseEnter={(e) => {
              const target = e.currentTarget
              target.style.borderColor = '#e0c97f60'
              target.style.background = '#1a2a4e'
              target.style.color = '#e8e8f0'
            }}
            onMouseLeave={(e) => {
              const target = e.currentTarget
              target.style.borderColor = '#e0c97f20'
              target.style.background = '#16213e'
              target.style.color = '#c0c0d0'
            }}
          >
            <div className="flex items-start gap-3">
              <span
                className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold"
                style={{
                  background: '#e0c97f20',
                  color: '#e0c97f',
                }}
              >
                {String.fromCharCode(65 + index)}
              </span>
              <span className="pt-0.5 text-sm leading-relaxed">{option.text}</span>
            </div>
          </button>
        ))}
      </div>

      {/* 뒤로가기 */}
      {current > 1 && (
        <div className="flex justify-start">
          <button
            onClick={onBack}
            className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm transition-all duration-200"
            style={{ color: '#7070a0' }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#e0c97f'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = '#7070a0'
            }}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
              <path d="M10.5 3L5.5 8L10.5 13" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
            </svg>
            {prevLabel}
          </button>
        </div>
      )}
    </div>
  )
}
