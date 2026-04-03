'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const pathname = usePathname()

  const links = [
    { href: '/saju', label: '사주분석' },
    { href: '/test', label: '심리테스트' },
  ]

  return (
    <nav
      style={{
        background: '#16213e',
        borderBottom: '1px solid #e0c97f20',
      }}
      className="sticky top-0 z-50 w-full"
    >
      <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* 로고 */}
        <Link
          href="/"
          className="text-xl font-bold text-glow-gold"
          style={{ color: '#e0c97f' }}
        >
          ✨ 운명의 실
        </Link>

        {/* 네비게이션 링크 */}
        <div className="flex items-center gap-1">
          {links.map((link) => {
            const isActive = pathname === link.href || pathname.startsWith(link.href + '/')
            return (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200"
                style={{
                  color: isActive ? '#e0c97f' : '#b0b0c0',
                  background: isActive ? '#e0c97f15' : 'transparent',
                  borderBottom: isActive ? '2px solid #e0c97f' : '2px solid transparent',
                }}
              >
                {link.label}
              </Link>
            )
          })}
        </div>
      </div>
    </nav>
  )
}
