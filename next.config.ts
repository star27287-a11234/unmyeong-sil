import type { NextConfig } from "next";

// Google AdSense 허용 도메인
const adSenseDomains = [
  'https://pagead2.googlesyndication.com',
  'https://partner.googleadservices.com',
  'https://tpc.googlesyndication.com',
  'https://www.gstatic.com',
  'https://adservice.google.com',
  'https://googleads.g.doubleclick.net',
  'https://www.googletagservices.com',
].join(' ')

// Content Security Policy
const csp = [
  // 기본: 자기 도메인만 허용
  "default-src 'self'",
  // 스크립트: Next.js 인라인 + AdSense
  `script-src 'self' 'unsafe-inline' ${adSenseDomains}`,
  // 스타일: 인라인(Tailwind) + Google Fonts
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  // 폰트: Google Fonts
  "font-src 'self' https://fonts.gstatic.com data:",
  // 이미지: HTTPS 전체 허용 (AdSense 광고 이미지)
  "img-src 'self' data: https:",
  // iframe: AdSense 광고 iframe
  "frame-src https://googleads.g.doubleclick.net https://tpc.googlesyndication.com https://www.google.com",
  // 네트워크 요청
  `connect-src 'self' ${adSenseDomains}`,
  // 플러그인 완전 차단
  "object-src 'none'",
  // base URL 자기 도메인만
  "base-uri 'self'",
  // 폼 전송 자기 도메인만
  "form-action 'self'",
  // iframe 삽입 차단 (X-Frame-Options 대체)
  "frame-ancestors 'none'",
].join('; ')

const securityHeaders = [
  // Content Security Policy (XSS·인젝션 핵심 방어)
  { key: 'Content-Security-Policy', value: csp },
  // 클릭재킹 방지
  { key: 'X-Frame-Options', value: 'DENY' },
  // MIME 타입 스니핑 방지
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  // XSS 필터 강제 활성화
  { key: 'X-XSS-Protection', value: '1; mode=block' },
  // 레퍼러 정보 최소화
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  // HTTPS 강제 (2년간, 서브도메인 포함)
  { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
  // 불필요한 브라우저 기능 차단
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(), payment=(), usb=()' },
  // 크로스오리진 정책
  { key: 'Cross-Origin-Opener-Policy', value: 'same-origin-allow-popups' },
  { key: 'Cross-Origin-Resource-Policy', value: 'cross-origin' },
]

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
    ]
  },
}

export default nextConfig;
