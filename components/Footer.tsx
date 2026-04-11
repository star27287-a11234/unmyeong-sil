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
    <footer className="mt-16 py-8 border-t" style={{ borderColor: '#1e1e38' }}>
      <div className="max-w-5xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-xs" style={{ color: '#505075' }}>
          © 2026 {siteName}. All rights reserved.
        </p>
        <div className="flex gap-6 text-xs" style={{ color: '#505075' }}>
          <Link href={`${prefix}/about`} className="hover:underline transition-colors" style={{ color: '#505075' }}>
            {aboutLabel}
          </Link>
          <Link href={`${prefix}/terms`} className="hover:underline transition-colors" style={{ color: '#505075' }}>
            {termsLabel}
          </Link>
          <Link href={`${prefix}/privacy`} className="hover:underline transition-colors" style={{ color: '#505075' }}>
            {privacyLabel}
          </Link>
        </div>
      </div>
    </footer>
  )
}
