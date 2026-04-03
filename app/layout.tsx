import type { Metadata } from "next"
import { Noto_Sans_KR } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

const notoSansKR = Noto_Sans_KR({
  weight: ['300', '400', '500', '700', '900'],
  subsets: ['latin'],
  variable: '--font-noto-sans-kr',
  display: 'swap',
})

export const metadata: Metadata = {
  title: "운명의 실 | 사주·심리테스트",
  description: "사주팔자 분석, 연애유형, 직업적성, MBTI, 재물운까지 — 당신의 운명을 읽어드립니다.",
  keywords: ["사주", "심리테스트", "MBTI", "운세", "연애유형", "직업적성", "재물운"],
  openGraph: {
    title: "운명의 실 | 사주·심리테스트",
    description: "당신의 운명을 읽다 — 사주팔자와 심리테스트로 나를 이해하세요",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko" className={notoSansKR.variable}>
      <body
        className="min-h-screen flex flex-col antialiased"
        style={{
          background: '#1a1a2e',
          color: '#e8e8f0',
          fontFamily: "'Noto Sans KR', sans-serif",
        }}
      >
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
