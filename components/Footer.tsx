import Link from 'next/link'

interface FooterProps {
  lang?: 'ko' | 'en'
}

export default function Footer({ lang = 'ko' }: FooterProps) {
  const prefix = lang === 'en' ? '/en' : ''
  const siteName = lang === 'en' ? 'Thread of Fate' : '운명의 실'
  const termsLabel = lang === 'en' ? 'Terms of Service' : '이용약관'
  const privacyLabel = lang === 'en' ? 'Privacy Policy' : '개인정보처리방침'
  const aboutLabel = lang === 'en' ? 'About' : '서비스 소개'

  return (
    <footer className="mt-16 py-8 border-t" style={{ borderColor: '#2a2a4a' }}>
      <div className="max-w-5xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-xs" style={{ color: '#4b5563' }}>
          © 2026 {siteName}. All rights reserved.
        </p>
        <div className="flex gap-6 text-xs" style={{ color: '#6b7280' }}>
          <Link href={`${prefix}/about`} className="hover:underline transition-colors" style={{ color: '#6b7280' }}>
            {aboutLabel}
          </Link>
          <Link href={`${prefix}/terms`} className="hover:underline transition-colors" style={{ color: '#6b7280' }}>
            {termsLabel}
          </Link>
          <Link href={`${prefix}/privacy`} className="hover:underline transition-colors" style={{ color: '#6b7280' }}>
            {privacyLabel}
          </Link>
        </div>
      </div>
    </footer>
  )
}
