import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="mt-16 py-8 border-t" style={{ borderColor: '#2a2a4a' }}>
      <div className="max-w-5xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-xs" style={{ color: '#4b5563' }}>
          © 2026 운명의 실. All rights reserved.
        </p>
        <div className="flex gap-6 text-xs" style={{ color: '#6b7280' }}>
          <Link href="/terms" className="hover:underline transition-colors" style={{ color: '#6b7280' }}>
            이용약관
          </Link>
          <Link href="/privacy" className="hover:underline transition-colors" style={{ color: '#6b7280' }}>
            개인정보처리방침
          </Link>
        </div>
      </div>
    </footer>
  )
}
