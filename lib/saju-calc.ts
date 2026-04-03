// 월별 주기운 배정
// 1-2월→목, 3-4월→화, 5-6월→토, 7-8월→금, 9-10월→수, 11-12월→목
function getMainElementByMonth(month: number): string {
  if (month === 1 || month === 2) return '목'
  if (month === 3 || month === 4) return '화'
  if (month === 5 || month === 6) return '토'
  if (month === 7 || month === 8) return '금'
  if (month === 9 || month === 10) return '수'
  if (month === 11 || month === 12) return '목'
  return '토'
}

// 시간별 보조기운 배정
// 0-5시→수, 6-11시→목, 12-17시→화, 18-23시→금, null→토
function getSubElementByHour(hour: number | null): string {
  if (hour === null) return '토'
  if (hour >= 0 && hour <= 5) return '수'
  if (hour >= 6 && hour <= 11) return '목'
  if (hour >= 12 && hour <= 17) return '화'
  if (hour >= 18 && hour <= 23) return '금'
  return '토'
}

export function calcSaju(
  year: number,
  month: number,
  day: number,
  hour: number | null,
  gender: 'male' | 'female'
): {
  mainElement: string
  subElement: string
  resultKey: string
} {
  // 생년으로 약간의 변형 (년도의 천간 기반 보정)
  // 천간 10진법 사이클로 보정값 계산
  const yearGanIndex = (year - 4) % 10

  // 오행 배열
  const elements = ['목', '화', '토', '금', '수']

  // 기본 주기운 계산
  let mainElement = getMainElementByMonth(month)

  // 년도 천간에 의한 보조 보정 (선택적)
  // 갑(0)→목, 을(1)→목, 병(2)→화, 정(3)→화, 무(4)→토
  // 기(5)→토, 경(6)→금, 신(7)→금, 임(8)→수, 계(9)→수
  const yearElement = elements[Math.floor(yearGanIndex / 2)]

  // 일(日)에 따른 미세 조정 - 일 수를 5로 나눠 오행 결정
  const dayElementIndex = (day % 5)
  const dayElement = elements[dayElementIndex]

  // gender에 따른 보정 (음양 원리)
  // 남성: 년도 기운을 우선, 여성: 월 기운을 우선
  if (gender === 'male') {
    // 남성은 년도 오행과 월 오행의 조합을 고려
    const combinedIndex = (elements.indexOf(mainElement) + elements.indexOf(yearElement)) % 5
    mainElement = elements[combinedIndex]
  }
  // 여성은 기본 월 기운 그대로 사용

  // 보조기운 계산
  const subElement = getSubElementByHour(hour)

  // 결과 키 생성
  const resultKey = `${mainElement}_${subElement}`

  return {
    mainElement,
    subElement,
    resultKey
  }
}

// 오행 한자 변환
export function elementToHanja(element: string): string {
  const map: Record<string, string> = {
    '목': '木',
    '화': '火',
    '토': '土',
    '금': '金',
    '수': '水'
  }
  return map[element] || element
}

// 오행 영문 변환
export function elementToEnglish(element: string): string {
  const map: Record<string, string> = {
    '목': 'Wood',
    '화': 'Fire',
    '토': 'Earth',
    '금': 'Metal',
    '수': 'Water'
  }
  return map[element] || element
}

// 오행 색상 반환 (Tailwind 클래스)
export function elementToColor(element: string): string {
  const map: Record<string, string> = {
    '목': '#4ade80',   // 초록
    '화': '#f87171',   // 빨강
    '토': '#fbbf24',   // 황토
    '금': '#e0c97f',   // 금색
    '수': '#60a5fa'    // 파랑
  }
  return map[element] || '#e8e8f0'
}

// 오행 이모지 반환
export function elementToEmoji(element: string): string {
  const map: Record<string, string> = {
    '목': '🌿',
    '화': '🔥',
    '토': '🪨',
    '금': '⚜️',
    '수': '💧'
  }
  return map[element] || '✨'
}
