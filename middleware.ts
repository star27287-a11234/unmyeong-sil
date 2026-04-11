import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname

  // 이미 영문 경로이면 통과
  if (pathname.startsWith('/en')) return NextResponse.next()

  // 정적 파일, API 제외
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.includes('.')
  ) {
    return NextResponse.next()
  }

  // 언어 쿠키 확인 (사용자가 명시적으로 한국어 선택한 경우 유지)
  const langCookie = request.cookies.get('preferred-lang')?.value
  if (langCookie === 'ko') return NextResponse.next()
  if (langCookie === 'en') {
    const url = request.nextUrl.clone()
    url.pathname = '/en' + (pathname === '/' ? '' : pathname)
    return NextResponse.redirect(url)
  }

  // Accept-Language로 자동 판단
  const acceptLang = request.headers.get('accept-language') || ''
  const isKorean = /^ko[\-,;]|,\s*ko[\-,;]|,\s*ko$/.test(acceptLang)

  if (!isKorean) {
    const url = request.nextUrl.clone()
    url.pathname = '/en' + (pathname === '/' ? '' : pathname)
    return NextResponse.redirect(url)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon\\.ico|.*\\..*).*)'],
}
