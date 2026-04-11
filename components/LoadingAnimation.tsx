'use client'

import { useEffect, useState } from 'react'
import AdBanner from '@/components/AdBanner'

export default function LoadingAnimation() {
  const [dots, setDots] = useState('')

  useEffect(() => {
    const interval = setInterval(() => {
      setDots(prev => prev.length >= 3 ? '' : prev + '.')
    }, 500)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex flex-col items-center justify-center min-h-[400px]">
      {/* 중앙 애니메이션 */}
      <div className="flex flex-col items-center gap-8">
        {/* 단순 스피너 */}
        <div className="relative w-20 h-20">
          <div
            className="absolute inset-0 rounded-full border-4"
            style={{
              borderColor: '#1e1e38',
              borderTopColor: '#c94444',
              animation: 'spin 1s linear infinite',
            }}
          />
        </div>

        {/* 텍스트 */}
        <div className="text-center">
          <p
            className="text-xl font-medium"
            style={{ color: '#f0eef8' }}
          >
            운명의 실을 읽는 중{dots}
          </p>
          <p
            className="text-sm mt-2"
            style={{ color: '#505075' }}
          >
            당신의 기운을 분석하고 있습니다
          </p>
        </div>

        {/* 진행 바 */}
        <div
          className="w-48 h-1 rounded-full overflow-hidden"
          style={{ background: '#1e1e38' }}
        >
          <div
            className="h-full rounded-full"
            style={{
              background: '#c94444',
              animation: 'loading-bar 2s ease-in-out infinite',
            }}
          />
        </div>

        {/* 로딩 중 광고 */}
        <div className="w-full max-w-sm mt-6">
          <AdBanner adSlot="1234567890" adFormat="rectangle" />
        </div>
      </div>

      <style jsx>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes loading-bar {
          0% { width: 0%; }
          50% { width: 80%; }
          100% { width: 100%; }
        }
      `}</style>
    </div>
  )
}
