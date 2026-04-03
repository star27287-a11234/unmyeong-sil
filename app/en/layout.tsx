import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Thread of Fate | Four Pillars & Psychology Tests',
  description: 'Discover your destiny through Four Pillars of Destiny analysis and psychology tests — personality, love, career, MBTI, and wealth fortune.',
  keywords: ['four pillars of destiny', 'psychology test', 'MBTI', 'fortune', 'personality test', 'love type', 'career aptitude'],
  openGraph: {
    title: 'Thread of Fate | Four Pillars & Psychology Tests',
    description: 'Uncover your true self through ancient wisdom and modern psychology.',
    type: 'website',
  },
  alternates: {
    languages: { ko: '/' },
  },
}

export default function EnglishLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        {children}
      </main>
      <Footer lang="en" />
    </>
  )
}
