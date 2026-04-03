import type { NextConfig } from "next";

const securityHeaders = [
  // 클릭재킹 방지 (다른 사이트에서 iframe으로 삽입 불가)
  { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
  // MIME 타입 스니핑 방지
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  // XSS 공격 방지
  { key: 'X-XSS-Protection', value: '1; mode=block' },
  // 레퍼러 정보 최소화
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  // HTTPS 강제 (1년간)
  { key: 'Strict-Transport-Security', value: 'max-age=31536000; includeSubDomains' },
  // 불필요한 브라우저 기능 차단
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=()',
  },
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
