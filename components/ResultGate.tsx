'use client'

import { ReactNode } from 'react'

interface Props {
  onAdWatch: () => void
  onProClick: () => void
  blurContent: ReactNode
}

export default function ResultGate({ onAdWatch, onProClick, blurContent }: Props) {
  return (
    <div className="relative">
      {/* 블러 처리된 콘텐츠 */}
      <div
        className="pointer-events-none select-none"
        style={{ filter: 'blur(6px)', opacity: 0.7 }}
      >
        {blurContent}
      </div>

      {/* 오버레이 */}
      <div
        className="absolute inset-0 flex flex-col items-center justify-center gap-4 rounded-2xl"
        style={{
          background: 'linear-gradient(to bottom, transparent 0%, #1a1a2e90 30%, #1a1a2e 60%)',
        }}
      >
        <div
          className="rounded-2xl p-8 text-center max-w-sm mx-4"
          style={{
            background: 'linear-gradient(135deg, #16213e, #0f3460)',
            border: '1px solid #e0c97f40',
            boxShadow: '0 20px 60px #00000080',
          }}
        >
          <div className="text-4xl mb-3">🔮</div>
          <h3
            className="text-xl font-bold mb-2"
            style={{ color: '#e0c97f' }}
          >
            상세 분석 보기
          </h3>
          <p
            className="text-sm mb-6"
            style={{ color: '#9090b0' }}
          >
            전체 결과를 확인하려면 아래 중 하나를 선택하세요
          </p>

          <div className="flex flex-col gap-3">
            {/* 광고 시청 버튼 */}
            <button
              onClick={onAdWatch}
              className="w-full py-3 px-6 rounded-xl font-medium text-sm transition-all duration-200 hover:scale-105 active:scale-95"
              style={{
                background: 'transparent',
                border: '2px solid #e0c97f',
                color: '#e0c97f',
              }}
            >
              📺 광고 시청하고 무료로 보기
            </button>

            {/* PRO 결제 버튼 */}
            <button
              onClick={onProClick}
              className="w-full py-3 px-6 rounded-xl font-bold text-sm transition-all duration-200 hover:scale-105 active:scale-95"
              style={{
                background: 'linear-gradient(135deg, #e0c97f, #c4a84f)',
                color: '#1a1a2e',
                boxShadow: '0 4px 15px #e0c97f40',
              }}
            >
              ⭐ PRO 결제 — 광고 없이 전체 보기
            </button>
          </div>

          <p
            className="text-xs mt-4"
            style={{ color: '#6060808' }}
          >
            광고 1회 시청 시 무료로 상세 분석을 볼 수 있습니다
          </p>
        </div>
      </div>
    </div>
  )
}
