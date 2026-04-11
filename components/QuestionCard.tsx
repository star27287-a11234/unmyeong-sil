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
      <div className="mb-8">
        <div className="flex justify-between items-center mb-2">
          <span className="text-xs font-medium tracking-wide" style={{ color: '#505075' }}>
            {qLabel}
          </span>
          <span className="text-xs font-bold" style={{ color: '#c94444' }}>
            {Math.round(progress)}%
          </span>
        </div>
        <div className="w-full h-0.5 rounded-full overflow-hidden" style={{ background: '#1e1e38' }}>
          <div
            className="h-full transition-all duration-500"
            style={{ width: `${progress}%`, background: '#c94444' }}
          />
        </div>
      </div>

      {/* 질문 */}
      <div
        className="rounded-xl p-6 mb-5"
        style={{
          background: '#111120',
          border: '1px solid #1e1e38',
        }}
      >
        <div className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: '#505075' }}>
          Q{current}
        </div>
        <p className="text-lg font-medium leading-relaxed" style={{ color: '#f0eef8' }}>
          {question}
        </p>
      </div>

      {/* 선택지 */}
      <div className="flex flex-col gap-2.5 mb-6">
        {options.map((option, index) => (
          <button
            key={index}
            onClick={() => onAnswer(index)}
            className="w-full text-left p-4 rounded-xl transition-all duration-150 active:scale-[0.99]"
            style={{
              background: '#111120',
              border: '1px solid #1e1e38',
              color: '#9090b8',
            }}
            onMouseEnter={(e) => {
              const t = e.currentTarget
              t.style.borderColor = '#c9444440'
              t.style.background = '#1a0f1f'
              t.style.color = '#f0eef8'
            }}
            onMouseLeave={(e) => {
              const t = e.currentTarget
              t.style.borderColor = '#1e1e38'
              t.style.background = '#111120'
              t.style.color = '#9090b8'
            }}
          >
            <div className="flex items-start gap-3">
              <span
                className="flex-shrink-0 w-6 h-6 rounded-md flex items-center justify-center text-xs font-bold mt-0.5"
                style={{
                  background: '#1e1e38',
                  color: '#505075',
                }}
              >
                {String.fromCharCode(65 + index)}
              </span>
              <span className="text-sm leading-relaxed">{option.text}</span>
            </div>
          </button>
        ))}
      </div>

      {/* 뒤로가기 */}
      {current > 1 && (
        <button
          onClick={onBack}
          className="flex items-center gap-1.5 text-xs transition-colors duration-150"
          style={{ color: '#505075' }}
          onMouseEnter={(e) => { e.currentTarget.style.color = '#9090b8' }}
          onMouseLeave={(e) => { e.currentTarget.style.color = '#505075' }}
        >
          ← {prevLabel}
        </button>
      )}
    </div>
  )
}
