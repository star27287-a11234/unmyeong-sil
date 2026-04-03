// 연애유형 계산
export function calcLoveType(answers: { score: Record<string, number> }[]): string {
  const totals: Record<string, number> = {}

  for (const answer of answers) {
    for (const [type, score] of Object.entries(answer.score)) {
      totals[type] = (totals[type] || 0) + score
    }
  }

  // 가장 높은 점수의 유형 반환
  let maxType = '감성형'
  let maxScore = -1

  for (const [type, score] of Object.entries(totals)) {
    if (score > maxScore) {
      maxScore = score
      maxType = type
    }
  }

  return maxType
}

// 직업적성 계산
export function calcCareerType(answers: { score: Record<string, number> }[]): string {
  const totals: Record<string, number> = {}

  for (const answer of answers) {
    for (const [type, score] of Object.entries(answer.score)) {
      totals[type] = (totals[type] || 0) + score
    }
  }

  let maxType = '소통형'
  let maxScore = -1

  for (const [type, score] of Object.entries(totals)) {
    if (score > maxScore) {
      maxScore = score
      maxType = type
    }
  }

  return maxType
}

// MBTI 유형 계산
export function calcMbtiType(answers: { dimension: string; value: string }[]): string {
  const counts: Record<string, Record<string, number>> = {
    EI: { E: 0, I: 0 },
    SN: { S: 0, N: 0 },
    TF: { T: 0, F: 0 },
    JP: { J: 0, P: 0 }
  }

  for (const answer of answers) {
    const { dimension, value } = answer
    if (counts[dimension] && counts[dimension][value] !== undefined) {
      counts[dimension][value]++
    }
  }

  const e_or_i = counts.EI.E >= counts.EI.I ? 'E' : 'I'
  const s_or_n = counts.SN.S >= counts.SN.N ? 'S' : 'N'
  const t_or_f = counts.TF.T >= counts.TF.F ? 'T' : 'F'
  const j_or_p = counts.JP.J >= counts.JP.P ? 'J' : 'P'

  return `${e_or_i}${s_or_n}${t_or_f}${j_or_p}`
}

// 재물운 계산
export function calcMoneyType(answers: { score: Record<string, number> }[]): string {
  const totals: Record<string, number> = {}

  for (const answer of answers) {
    for (const [type, score] of Object.entries(answer.score)) {
      totals[type] = (totals[type] || 0) + score
    }
  }

  let maxType = '꾸준형'
  let maxScore = -1

  for (const [type, score] of Object.entries(totals)) {
    if (score > maxScore) {
      maxScore = score
      maxType = type
    }
  }

  return maxType
}
