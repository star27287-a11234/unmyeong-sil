'use client'

import { useEffect, useRef } from 'react'

export default function CosmicBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()

    // 별 생성
    const stars = Array.from({ length: 180 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.2 + 0.2,
      base: Math.random() * 0.5 + 0.1,
      opacity: Math.random() * 0.5 + 0.1,
      delta: (Math.random() - 0.5) * 0.008,
    }))

    // 유성
    const shootingStars: { x: number; y: number; len: number; speed: number; opacity: number; angle: number; active: boolean }[] = []
    const spawnShootingStar = () => {
      shootingStars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height * 0.4,
        len: Math.random() * 100 + 60,
        speed: Math.random() * 6 + 4,
        opacity: 1,
        angle: Math.PI / 5,
        active: true,
      })
    }

    let frame = 0
    let animId: number

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // 별 그리기
      stars.forEach(s => {
        s.opacity += s.delta
        if (s.opacity > s.base + 0.4 || s.opacity < s.base - 0.1) s.delta *= -1
        s.opacity = Math.max(0.05, Math.min(0.9, s.opacity))

        ctx.beginPath()
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(220,215,255,${s.opacity})`
        ctx.fill()
      })

      // 유성 그리기
      shootingStars.forEach((ss, i) => {
        if (!ss.active) return
        const grad = ctx.createLinearGradient(
          ss.x, ss.y,
          ss.x - Math.cos(ss.angle) * ss.len,
          ss.y - Math.sin(ss.angle) * ss.len
        )
        grad.addColorStop(0, `rgba(255,255,255,${ss.opacity})`)
        grad.addColorStop(1, 'rgba(255,255,255,0)')
        ctx.beginPath()
        ctx.strokeStyle = grad
        ctx.lineWidth = 1.5
        ctx.moveTo(ss.x, ss.y)
        ctx.lineTo(ss.x - Math.cos(ss.angle) * ss.len, ss.y - Math.sin(ss.angle) * ss.len)
        ctx.stroke()

        ss.x += Math.cos(ss.angle) * ss.speed
        ss.y += Math.sin(ss.angle) * ss.speed
        ss.opacity -= 0.015

        if (ss.opacity <= 0) shootingStars.splice(i, 1)
      })

      // 15초마다 유성
      if (frame % 900 === 0) spawnShootingStar()
      frame++

      animId = requestAnimationFrame(draw)
    }

    draw()
    window.addEventListener('resize', resize)
    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none',
      }}
    />
  )
}
