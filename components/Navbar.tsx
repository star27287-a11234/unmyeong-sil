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
        { href: '/en/fortune', label: 'Daily Fortune' },
        { href: '/en/lotto', label: 'Lucky Numbers' },
        { href: '/en/blog', label: 'Column' },
        { href: '/en/blog/gwansang', label: 'Face' },
        { href: '/en/blog/songeum', label: 'Palm' },
      ]
    : [
        { href: '/saju', label: '사주분석' },
        { href: '/test', label: '심리테스트' },
        { href: '/fortune', label: '오늘의운세' },
        { href: '/lotto', label: '로또번호' },
        { href: '/blog', label: '칼럼' },
        { href: '/blog/gwansang', label: '관상' },
        { href: '/blog/songeum', label: '손금' },
      ]

  const langSwitchHref = isEnglish
    ? pathname.replace(/^\/en/, '') || '/'
    : `/en${pathname}`

  return (
    <nav
      style={{
        background: 'rgba(4,4,15,0.85)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: '1px solid rgba(120,80,220,0.15)',
      }}
      className="sticky top-0 z-50 w-full"
    >
      <div className="max-w-5xl mx-auto px-4 flex items-center justify-between h-12">
        {/* 로고 */}
        <Link
          href={isEnglish ? '/en' : '/'}
          className="flex items-center gap-2 text-base font-bold flex-shrink-0"
          style={{ color: '#ede9fe' }}
        >
          <span
            className="w-2 h-2 rounded-full flex-shrink-0 animate-pulse-glow"
            style={{ background: '#7c3aed' }}
          />
          {isEnglish ? 'Thread of Fate' : '운명의 실'}
        </Link>

        {/* 메뉴 */}
        <div
          className="flex items-center gap-1 overflow-x-auto ml-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {links.map((link) => {
            const isActive = pathname === link.href || pathname.startsWith(link.href + '/')
            return (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-1 text-sm font-medium whitespace-nowrap flex-shrink-0 transition-colors duration-150"
                style={{
                  color: isActive ? '#ede9fe' : '#9d8ec7',
                  borderBottom: isActive ? '2px solid #7c3aed' : '2px solid transparent',
                  paddingBottom: isActive ? '2px' : '4px',
                }}
              >
                {link.label}
              </Link>
            )
          })}

          <a
            href={langSwitchHref}
            onClick={() => {
              document.cookie = `preferred-lang=${isEnglish ? 'ko' : 'en'}; path=/; max-age=31536000`
            }}
            className="ml-3 px-3 py-1 text-sm font-bold whitespace-nowrap flex-shrink-0 transition-colors duration-150 cursor-pointer"
            style={{ color: '#9d8ec7', borderLeft: '1px solid rgba(100,80,200,0.2)' }}
          >
            {isEnglish ? '한국어' : 'EN'}
          </a>
        </div>
      </div>
    </nav>
  )
}
