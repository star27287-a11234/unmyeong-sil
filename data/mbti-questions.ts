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
  // ─── EI (7문항) ───
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
    question: "모르는 사람과 단둘이 기다려야 하는 상황에서 나는?",
    dimension: 'EI',
    options: [
      { text: "자연스럽게 말을 먼저 건네고 대화를 이어간다.", value: 'E' },
      { text: "폰을 보거나 조용히 각자 기다리는 게 더 편하다.", value: 'I' }
    ]
  },
  {
    id: 5,
    question: "SNS에서 나의 활동 방식은?",
    dimension: 'EI',
    options: [
      { text: "일상을 자주 올리고, 댓글과 반응을 주고받는 것을 즐긴다.", value: 'E' },
      { text: "주로 구경하는 편이고, 직접 올리거나 댓글 다는 건 거의 안 한다.", value: 'I' }
    ]
  },
  {
    id: 6,
    question: "친구 관계의 특성을 표현하면?",
    dimension: 'EI',
    options: [
      { text: "다양한 친구들이 많고, 여러 그룹에 두루 잘 어울린다.", value: 'E' },
      { text: "깊게 신뢰하는 소수의 친구들과 오래 관계를 이어간다.", value: 'I' }
    ]
  },
  {
    id: 7,
    question: "오랜 시간 사람들과 함께한 후 나는?",
    dimension: 'EI',
    options: [
      { text: "더 기운이 넘치고 즐거운 상태가 된다.", value: 'E' },
      { text: "혼자만의 시간이 필요해진다. 혼자서 에너지를 회복한다.", value: 'I' }
    ]
  },

  // ─── SN (6문항) ───
  {
    id: 8,
    question: "여행지에서 관심 있는 것은?",
    dimension: 'SN',
    options: [
      { text: "유명한 맛집, 관광 명소, 로컬 마켓 등 실제로 경험할 수 있는 것들", value: 'S' },
      { text: "그 지역의 역사, 문화적 의미, 사람들의 삶과 철학 같은 것들", value: 'N' }
    ]
  },
  {
    id: 9,
    question: "문제를 해결할 때 나는?",
    dimension: 'SN',
    options: [
      { text: "지금까지 해온 방식, 검증된 방법으로 해결한다.", value: 'S' },
      { text: "새로운 접근법을 시도하고, 혁신적인 방법을 찾으려 한다.", value: 'N' }
    ]
  },
  {
    id: 10,
    question: "책이나 영화를 선택할 때 끌리는 것은?",
    dimension: 'SN',
    options: [
      { text: "현실적이고 구체적인 이야기, 실제로 일어날 수 있는 이야기", value: 'S' },
      { text: "상상력을 자극하는 이야기, 가능성과 미래를 탐구하는 이야기", value: 'N' }
    ]
  },
  {
    id: 11,
    question: "대화할 때 자연스럽게 주로 이야기하는 것은?",
    dimension: 'SN',
    options: [
      { text: "최근에 있었던 일, 본 것, 들은 것 등 구체적인 경험", value: 'S' },
      { text: "아이디어, 가능성, 미래에 대한 생각 등 추상적인 이야기", value: 'N' }
    ]
  },
  {
    id: 12,
    question: "처음 가보는 음식점을 선택할 때?",
    dimension: 'SN',
    options: [
      { text: "리뷰와 별점, 메뉴 사진을 꼼꼼히 보고 검증된 곳으로 간다.", value: 'S' },
      { text: "분위기나 콘셉트가 독특해 보이면 도전해본다.", value: 'N' }
    ]
  },
  {
    id: 13,
    question: "5년 후 미래를 생각할 때 나는?",
    dimension: 'SN',
    options: [
      { text: "지금의 연장선에서 현실적으로 이룰 수 있는 것을 구체적으로 계획한다.", value: 'S' },
      { text: "아직 어떻게 될지 모르는 다양한 가능성을 상상하며 설렌다.", value: 'N' }
    ]
  },

  // ─── TF (6문항) ───
  {
    id: 14,
    question: "친구가 힘든 상황을 털어놓을 때 나는?",
    dimension: 'TF',
    options: [
      { text: "상황을 분석하고 실질적인 해결책을 제시한다.", value: 'T' },
      { text: "먼저 공감하고 감정을 나누며 위로한다.", value: 'F' }
    ]
  },
  {
    id: 15,
    question: "결정을 내릴 때 더 중요하게 생각하는 것은?",
    dimension: 'TF',
    options: [
      { text: "논리적 분석, 객관적 사실, 효율성", value: 'T' },
      { text: "나와 관련된 사람들의 감정, 가치관, 화합", value: 'F' }
    ]
  },
  {
    id: 16,
    question: "누군가의 행동이 잘못되었다고 생각될 때 나는?",
    dimension: 'TF',
    options: [
      { text: "직접적으로 솔직하게 문제를 지적한다. 진실이 중요하다.", value: 'T' },
      { text: "상대방의 감정을 고려하여 부드럽게 접근한다. 관계가 중요하다.", value: 'F' }
    ]
  },
  {
    id: 17,
    question: "영화나 드라마를 보고 난 후 더 인상 깊게 남는 것은?",
    dimension: 'TF',
    options: [
      { text: "스토리 구성의 논리성, 반전 요소, 개연성이 맞는지 여부", value: 'T' },
      { text: "캐릭터들의 감정선, 공감 가는 관계, 마음을 울리는 장면", value: 'F' }
    ]
  },
  {
    id: 18,
    question: "팀에서 갈등이 생겼을 때 나는?",
    dimension: 'TF',
    options: [
      { text: "감정은 제쳐두고 문제의 원인과 합리적인 해결책을 찾는다.", value: 'T' },
      { text: "각자의 감정을 먼저 이해하고 모두가 편안한 방향을 찾는다.", value: 'F' }
    ]
  },
  {
    id: 19,
    question: "누군가를 설득해야 할 때 주로 쓰는 방법은?",
    dimension: 'TF',
    options: [
      { text: "데이터와 근거를 제시하며 논리적으로 설명한다.", value: 'T' },
      { text: "공감을 유도하고 감정적으로 호소하며 설득한다.", value: 'F' }
    ]
  },

  // ─── JP (6문항) ───
  {
    id: 20,
    question: "여행 계획을 세울 때 나는?",
    dimension: 'JP',
    options: [
      { text: "숙소, 일정, 식당까지 꼼꼼하게 미리 계획한다.", value: 'J' },
      { text: "큰 틀만 정하고 현지에서 즉흥적으로 결정한다.", value: 'P' }
    ]
  },
  {
    id: 21,
    question: "마감 기한이 있는 일을 할 때 나는?",
    dimension: 'JP',
    options: [
      { text: "일찍 시작해서 여유 있게 마무리한다.", value: 'J' },
      { text: "마감이 가까워질수록 집중력이 높아져서 그때 한 번에 한다.", value: 'P' }
    ]
  },
  {
    id: 22,
    question: "집이나 업무 공간의 모습은?",
    dimension: 'JP',
    options: [
      { text: "항상 정리정돈이 되어 있고, 물건마다 자리가 정해져 있다.", value: 'J' },
      { text: "약간 어수선하지만 나는 어디에 뭐가 있는지 안다.", value: 'P' }
    ]
  },
  {
    id: 23,
    question: "갑자기 일정이 바뀌었을 때 나는?",
    dimension: 'JP',
    options: [
      { text: "예상치 못한 변화에 당황하고 불편함을 느낀다.", value: 'J' },
      { text: "유연하게 받아들이고 새 상황에 맞게 빠르게 조정한다.", value: 'P' }
    ]
  },
  {
    id: 24,
    question: "선택지가 너무 많을 때 나는?",
    dimension: 'JP',
    options: [
      { text: "기준을 세우고 체계적으로 비교하여 빠르게 결정한다.", value: 'J' },
      { text: "여러 가지를 계속 탐색하며 결정을 미루는 편이다.", value: 'P' }
    ]
  },
  {
    id: 25,
    question: "오늘 할 일을 관리하는 방식은?",
    dimension: 'JP',
    options: [
      { text: "할 일 목록을 미리 작성하고 순서대로 처리한다.", value: 'J' },
      { text: "그때그때 하고 싶은 것, 떠오르는 것 위주로 처리한다.", value: 'P' }
    ]
  },
]
