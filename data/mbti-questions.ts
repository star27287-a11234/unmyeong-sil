export interface MbtiOption {
  text: string
  value: 'E' | 'I' | 'S' | 'N' | 'T' | 'F' | 'J' | 'P'
}

export interface MbtiQuestion {
  id: number
  question: string
  dimension: 'EI' | 'SN' | 'TF' | 'JP'
  options: [MbtiOption, MbtiOption]
}

export const mbtiQuestions: MbtiQuestion[] = [
  {
    id: 1,
    question: "파티나 모임에 참석했을 때 나는?",
    dimension: 'EI',
    options: [
      { text: "활기차게 어울리며 새로운 사람들과 대화한다. 사람이 많을수록 에너지가 충전된다.", value: 'E' },
      { text: "아는 사람 몇 명과 깊은 대화를 나누다가 조용히 자리를 뜬다. 사람이 많으면 지친다.", value: 'I' }
    ]
  },
  {
    id: 2,
    question: "주말에 아무 계획이 없을 때 나는?",
    dimension: 'EI',
    options: [
      { text: "친구에게 연락해서 즉흥적으로 뭔가를 함께 한다. 혼자 있는 건 심심하다.", value: 'E' },
      { text: "혼자만의 시간을 즐기며 재충전한다. 혼자 있는 것이 오히려 편하다.", value: 'I' }
    ]
  },
  {
    id: 3,
    question: "새로운 환경에 들어갔을 때 나는?",
    dimension: 'EI',
    options: [
      { text: "먼저 다가가서 인사하고 빠르게 적응한다.", value: 'E' },
      { text: "천천히 관찰하며 상황을 파악한 후 적응한다.", value: 'I' }
    ]
  },
  {
    id: 4,
    question: "여행지에서 관심 있는 것은?",
    dimension: 'SN',
    options: [
      { text: "유명한 맛집, 관광 명소, 로컬 마켓 등 실제로 경험할 수 있는 것들", value: 'S' },
      { text: "그 지역의 역사, 문화적 의미, 사람들의 삶과 철학 같은 것들", value: 'N' }
    ]
  },
  {
    id: 5,
    question: "문제를 해결할 때 나는?",
    dimension: 'SN',
    options: [
      { text: "지금까지 해온 방식, 검증된 방법으로 해결한다.", value: 'S' },
      { text: "새로운 접근법을 시도하고, 혁신적인 방법을 찾으려 한다.", value: 'N' }
    ]
  },
  {
    id: 6,
    question: "책이나 영화를 선택할 때 끌리는 것은?",
    dimension: 'SN',
    options: [
      { text: "현실적이고 구체적인 이야기, 실제로 일어날 수 있는 이야기", value: 'S' },
      { text: "상상력을 자극하는 이야기, 가능성과 미래를 탐구하는 이야기", value: 'N' }
    ]
  },
  {
    id: 7,
    question: "친구가 힘든 상황을 털어놓을 때 나는?",
    dimension: 'TF',
    options: [
      { text: "상황을 분석하고 실질적인 해결책을 제시한다.", value: 'T' },
      { text: "먼저 공감하고 감정을 나누며 위로한다.", value: 'F' }
    ]
  },
  {
    id: 8,
    question: "결정을 내릴 때 더 중요하게 생각하는 것은?",
    dimension: 'TF',
    options: [
      { text: "논리적 분석, 객관적 사실, 효율성", value: 'T' },
      { text: "나와 관련된 사람들의 감정, 가치관, 화합", value: 'F' }
    ]
  },
  {
    id: 9,
    question: "누군가의 행동이 잘못되었다고 생각될 때 나는?",
    dimension: 'TF',
    options: [
      { text: "직접적으로 솔직하게 문제를 지적한다. 진실이 중요하다.", value: 'T' },
      { text: "상대방의 감정을 고려하여 부드럽게 접근한다. 관계가 중요하다.", value: 'F' }
    ]
  },
  {
    id: 10,
    question: "여행 계획을 세울 때 나는?",
    dimension: 'JP',
    options: [
      { text: "숙소, 일정, 식당까지 꼼꼼하게 미리 계획한다.", value: 'J' },
      { text: "큰 틀만 정하고 현지에서 즉흥적으로 결정한다.", value: 'P' }
    ]
  },
  {
    id: 11,
    question: "마감 기한이 있는 일을 할 때 나는?",
    dimension: 'JP',
    options: [
      { text: "일찍 시작해서 여유 있게 마무리한다.", value: 'J' },
      { text: "마감이 가까워질수록 집중력이 높아져서 그때 한 번에 한다.", value: 'P' }
    ]
  },
  {
    id: 12,
    question: "집이나 업무 공간의 모습은?",
    dimension: 'JP',
    options: [
      { text: "항상 정리정돈이 되어 있고, 물건마다 자리가 정해져 있다.", value: 'J' },
      { text: "약간 어수선하지만 나는 어디에 뭐가 있는지 안다.", value: 'P' }
    ]
  }
]
