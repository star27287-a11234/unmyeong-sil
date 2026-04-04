'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const pathname = usePathname()
  const isEnglish = pathname.startsWith('/en')

  const links = isEnglish
    ? [
        { href: '/en/saju', label: 'Fortune Reading' },
        { href: '/en/test', label: 'Psychology Tests' },
        { href: '/en/blog', label: 'Column' },
        { href: '/en/blog/gwansang', label: 'Face' },
        { href: '/en/blog/songeum', label: 'Palm' },
      ]
    : [
        { href: '/saju', label: '사주분석' },
        { href: '/test', label: '심리테스트' },
        { href: '/blog', label: '칼럼' },
        { href: '/blog/gwansang', label: '관상' },
        { href: '/blog/songeum', label: '손금' },
      ]

  // 언어 전환 링크
  const langSwitchHref = isEnglish
    ? pathname.replace(/^\/en/, '') || '/'
    : `/en${pathname}`

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
          href={isEnglish ? '/en' : '/'}
          className="text-xl font-bold"
          style={{ color: '#e0c97f' }}
        >
          ✨ {isEnglish ? 'Thread of Fate' : '운명의 실'}
        </Link>

        <div className="flex items-center gap-1">
          {/* 네비게이션 링크 */}
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

          {/* 언어 전환 버튼 */}
          <Link
            href={langSwitchHref}
            className="ml-2 px-3 py-1.5 rounded-lg text-xs font-bold transition-all duration-200 border"
            style={{
              color: '#e0c97f',
              borderColor: '#e0c97f40',
              background: '#e0c97f10',
            }}
          >
            {isEnglish ? '한국어' : 'EN'}
          </Link>
        </div>
      </div>
    </nav>
  )
}
