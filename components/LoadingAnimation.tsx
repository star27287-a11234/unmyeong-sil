'use client'

import { useEffect, useState } from 'react'

interface Star {
  id: number
  x: number
  y: number
  size: number
  delay: number
  duration: number
}

export default function LoadingAnimation() {
  const [stars, setStars] = useState<Star[]>([])
  const [dots, setDots] = useState('')

  useEffect(() => {
    // 별 생성
    const newStars: Star[] = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      delay: Math.random() * 2,
      duration: Math.random() * 2 + 1.5,
    }))
    setStars(newStars)

    // 점 애니메이션
    const interval = setInterval(() => {
      setDots(prev => prev.length >= 3 ? '' : prev + '.')
    }, 500)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] relative overflow-hidden">
      {/* 별 배경 */}
      <div className="absolute inset-0">
        {stars.map((star) => (
          <div
            key={star.id}
            className="absolute rounded-full"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              background: star.id % 3 === 0 ? '#e0c97f' : star.id % 3 === 1 ? '#9c59d1' : '#ffffff',
              animation: `twinkle ${star.duration}s ease-in-out ${star.delay}s infinite`,
            }}
          />
        ))}
      </div>

      {/* 중앙 애니메이션 */}
      <div className="relative z-10 flex flex-col items-center gap-8">
        {/* 회전하는 원형 */}
        <div className="relative w-32 h-32">
          {/* 외부 링 */}
          <div
            className="absolute inset-0 rounded-full border-2"
            style={{
              borderColor: '#e0c97f40',
              borderTopColor: '#e0c97f',
              animation: 'spin-slow 3s linear infinite',
            }}
          />
          {/* 내부 링 */}
          <div
            className="absolute inset-3 rounded-full border-2"
            style={{
              borderColor: '#9c59d140',
              borderBottomColor: '#9c59d1',
              animation: 'spin-slow 2s linear infinite reverse',
            }}
          />
          {/* 중심 */}
          <div
            className="absolute inset-8 rounded-full flex items-center justify-center"
            style={{
              background: 'radial-gradient(circle, #e0c97f30, transparent)',
              animation: 'pulse 2s ease-in-out infinite',
            }}
          >
            <span className="text-2xl" style={{ animation: 'float 2s ease-in-out infinite' }}>
              ✨
            </span>
          </div>
        </div>

        {/* 텍스트 */}
        <div className="text-center">
          <p
            className="text-xl font-medium"
            style={{ color: '#e0c97f' }}
          >
            운명의 실을 읽는 중{dots}
          </p>
          <p
            className="text-sm mt-2"
            style={{ color: '#8080a0' }}
          >
            당신의 기운을 분석하고 있습니다
          </p>
        </div>

        {/* 진행 바 */}
        <div
          className="w-48 h-1 rounded-full overflow-hidden"
          style={{ background: '#e0c97f20' }}
        >
          <div
            className="h-full rounded-full"
            style={{
              background: 'linear-gradient(90deg, #e0c97f, #9c59d1)',
              animation: 'shimmer 2s linear infinite',
              backgroundSize: '200% 100%',
            }}
          />
        </div>
      </div>

      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes twinkle {
          0%, 100% { opacity: 0.2; transform: scale(0.8); }
          50% { opacity: 1; transform: scale(1.2); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-6px); }
        }
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
      `}</style>
    </div>
  )
}
