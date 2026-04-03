'use client'

import { usePathname } from 'next/navigation'
import Footer from '@/components/Footer'

export default function FooterWrapper() {
  const pathname = usePathname()
  const lang = pathname.startsWith('/en') ? 'en' : 'ko'
  return <Footer lang={lang} />
}
