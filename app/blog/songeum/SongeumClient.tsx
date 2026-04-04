'use client'

import Link from 'next/link'
import { useState } from 'react'
import type { Post } from '@/lib/posts'

interface Props {
  posts: Post[]
}

const PALM_ITEMS = [
  // ── 선(線) ──────────────────────────────────────────
  {
    id: 's-life',
    num: 1,
    name: '생명선',
    hanja: '生命線',
    type: '선(線)',
    color: '#e05050',
    x: 58.4, y: 58.4,
    summary: '건강, 수명, 질병, 가족, 신변상황',
    desc: '엄지손가락을 감싸는 호형의 선. 수명의 길이보다는 삶의 활력·건강 상태·생명력을 나타냅니다. 가족 환경과 신변의 변화도 읽을 수 있습니다.',
    types: [
      { shape: '깊고 선명', meaning: '강한 체력과 생명력, 건강한 삶' },
      { shape: '섬(○) 모양', meaning: '해당 시기 건강 주의 또는 가족 변동' },
      { shape: '두 줄', meaning: '에너지 풍부, 강한 회복력' },
      { shape: '중간에 끊김', meaning: '큰 변화·전환기 (나쁜 것 아님)' },
    ],
  },
  {
    id: 's-head',
    num: 2,
    name: '두뇌선',
    hanja: '頭腦線',
    type: '선(線)',
    color: '#5090e0',
    x: 64.1, y: 38.3,
    summary: '지능성향, 적성유무, 사고방식',
    desc: '검지와 엄지 사이에서 시작해 손바닥을 가로지르는 선. 사고 방식, 지적 능력, 직업 적성을 나타냅니다.',
    types: [
      { shape: '직선', meaning: '논리적·현실적 사고, 이공계 적성' },
      { shape: '아래로 휨', meaning: '창의적·감성적 사고, 예술·문학 적성' },
      { shape: '길고 선명', meaning: '폭넓은 관심사, 분석력 뛰어남' },
      { shape: '짧고 강함', meaning: '결단력, 집중력, 전문직 적성' },
    ],
  },
  {
    id: 's-heart',
    num: 3,
    name: '감정선',
    hanja: '感情線',
    type: '선(線)',
    color: '#e060a0',
    x: 2.3, y: 55.8,
    summary: '성격, 애정운, 연애운',
    desc: '새끼손가락 아래에서 시작해 검지 방향으로 이어지는 선. 감정 표현 방식, 연애 스타일, 성격의 따뜻함을 나타냅니다.',
    types: [
      { shape: '검지 아래까지', meaning: '이상주의 낭만파, 완벽한 사랑 추구' },
      { shape: '중지 아래에서 끝', meaning: '현실적 균형파, 안정적 연애 선호' },
      { shape: '직선 형태', meaning: '이성적이고 냉정한 감정 표현' },
      { shape: '끝이 갈라짐', meaning: '복합적 감수성, 예술적 기질' },
    ],
  },
  {
    id: 's-fate',
    num: 4,
    name: '운명선',
    hanja: '運命線',
    type: '선(線)',
    color: '#e0c050',
    x: 54.7, y: 65.4,
    summary: '직업운, 직업유무, 사회적 성취',
    desc: '손목 아래에서 중지 방향으로 올라가는 세로선. 삶의 방향성, 직업적 성취, 사회적 역할을 나타냅니다. 없어도 나쁜 것이 아닙니다.',
    types: [
      { shape: '어릴 때부터 뚜렷', meaning: '목표 의식 강함, 이른 성공' },
      { shape: '중간부터 시작', meaning: '중·장년 이후 성공형' },
      { shape: '선이 없음', meaning: '자유롭고 다양한 삶, 유연한 직업관' },
      { shape: '여러 갈래', meaning: '다양한 직업 경험, 멀티 재능' },
    ],
  },
  {
    id: 's-marriage',
    num: 5,
    name: '결혼선',
    hanja: '結婚線',
    type: '선(線)',
    color: '#b080e0',
    x: 3, y: 31.7,
    summary: '혼인관련 운세, 인연의 강도',
    desc: '새끼손가락 아래 가로 방향의 짧은 선. 인연의 강도와 결혼 시기, 파트너와의 관계를 나타냅니다.',
    types: [
      { shape: '1개 선명', meaning: '깊은 하나의 인연, 평생 반려자' },
      { shape: '2개 이상', meaning: '여러 인연, 재혼 가능성' },
      { shape: '올라가는 선', meaning: '결혼 후 성장·번창' },
      { shape: '내려가는 선', meaning: '파트너와의 갈등' },
    ],
  },
  {
    id: 's-child',
    num: 6,
    name: '자식선',
    hanja: '子息線',
    type: '선(線)',
    color: '#a0d080',
    x: 2.5, y: 45,
    summary: '자녀 인연, 상향은 아들 하향은 딸',
    desc: '결혼선에서 위아래로 뻗는 짧은 선들. 자녀와의 인연과 자녀의 수를 나타냅니다.',
    types: [
      { shape: '위로 뻗는 선', meaning: '아들 인연 (전통적 해석)' },
      { shape: '아래로 뻗는 선', meaning: '딸 인연 (전통적 해석)' },
      { shape: '선이 많음', meaning: '자녀운 풍부' },
      { shape: '선이 없음', meaning: '자녀와 인연 약함' },
    ],
  },
  {
    id: 's-business',
    num: 7,
    name: '사업선',
    hanja: '事業線',
    type: '선(線)',
    color: '#e09050',
    x: 2.8, y: 73.8,
    summary: '사업목구, 리더십, 인내유무',
    desc: '손바닥 아래쪽에서 태양구 방향으로 이어지는 선. 사업가적 기질과 리더십, 추진력을 나타냅니다.',
    types: [
      { shape: '뚜렷하고 긺', meaning: '강한 사업가 기질, 리더십 탁월' },
      { shape: '짧고 강함', meaning: '집중된 추진력, 전문 분야 성공' },
      { shape: '선이 없음', meaning: '사업보다 직장형 기질' },
    ],
  },
  // ── 구(丘) ──────────────────────────────────────────
  {
    id: 's-jupiter',
    num: 8,
    name: '목성구',
    hanja: '木星丘',
    type: '구(丘)',
    color: '#80d0a0',
    x: 59.9, y: 18,
    summary: '사회적 권력, 명예, 관직 종사 운세',
    desc: '검지 아래 볼록한 부위. 사회적 지위·명예·권력욕을 나타냅니다. 발달할수록 리더십이 강하고 공직·정치 방면에 적합합니다.',
    types: [
      { shape: '발달함', meaning: '강한 리더십, 사회적 명예욕' },
      { shape: '평탄함', meaning: '겸손하고 협력적인 성격' },
      { shape: '과도하게 발달', meaning: '권력욕 강함, 독선적 경향' },
    ],
  },
  {
    id: 's-saturn',
    num: 9,
    name: '토성구',
    hanja: '土星丘',
    type: '구(丘)',
    color: '#c0c080',
    x: 37.6, y: 11.3,
    summary: '직업운, 성향, 종교성, 인내력',
    desc: '중지 아래 볼록한 부위. 직업에 대한 성실함, 종교적 성향, 인내력을 나타냅니다. 발달할수록 깊고 철학적인 성격입니다.',
    types: [
      { shape: '발달함', meaning: '철학적 성향, 강한 인내력, 직업 성취' },
      { shape: '평탄함', meaning: '유연하고 실용적인 사고' },
    ],
  },
  {
    id: 's-sun',
    num: 10,
    name: '태양구',
    hanja: '太陽丘',
    type: '구(丘)',
    color: '#e0c050',
    x: 8.6, y: 3,
    summary: '재물복, 사회적 인기운, 예술성',
    desc: '약지 아래 볼록한 부위. 재물복, 사회적 인기, 예술적 감각을 나타냅니다. 발달할수록 사람들에게 인정받고 재물이 따릅니다.',
    types: [
      { shape: '발달함', meaning: '재물복, 인기, 예술적 재능' },
      { shape: '태양선과 함께', meaning: '성공과 명예가 강하게 나타남' },
    ],
  },
  {
    id: 's-mercury',
    num: 11,
    name: '수성구',
    hanja: '水星丘',
    type: '구(丘)',
    color: '#60c0e0',
    x: 2.8, y: 18.4,
    summary: '사업성향, 건강, 재물욕, 언변',
    desc: '새끼손가락 아래 볼록한 부위. 사업 능력, 언변, 재물욕, 건강 상태를 나타냅니다. 발달할수록 장사 수완이 좋습니다.',
    types: [
      { shape: '발달함', meaning: '언변 좋음, 사업 수완, 재물욕 강함' },
      { shape: '평탄함', meaning: '실용적이고 현실적인 성격' },
    ],
  },
  {
    id: 's-venus',
    num: 12,
    name: '금성구',
    hanja: '金星丘',
    type: '구(丘)',
    color: '#e0a0c0',
    x: 60.3, y: 76.7,
    summary: '건강, 스태미나, 정력적 활동, 애정',
    desc: '생명선 안쪽 엄지 아래 두툼한 부위. 성적 매력, 건강한 체력, 애정의 깊이를 나타냅니다. 발달할수록 생명력이 넘칩니다.',
    types: [
      { shape: '풍만하게 발달', meaning: '강한 생명력, 이성 매력, 건강함' },
      { shape: '탄력 없이 처짐', meaning: '체력 저하, 활력 감소 주의' },
    ],
  },
  {
    id: 's-moon',
    num: 13,
    name: '월구',
    hanja: '月丘',
    type: '구(丘)',
    color: '#a080d0',
    x: 6.6, y: 87.6,
    summary: '상상력, 창의력, 예술성, 직관',
    desc: '손바닥 아래 엄지 반대쪽 부위. 상상력, 창의력, 예술적 감각, 직관력을 나타냅니다. 발달할수록 예술가·작가·음악가 기질이 강합니다.',
    types: [
      { shape: '발달함', meaning: '풍부한 상상력, 예술적 재능, 강한 직관' },
      { shape: '과도하게 발달', meaning: '현실 감각이 약하고 공상 많음' },
    ],
  },
  {
    id: 's-mars1',
    num: 14,
    name: '제1화성구',
    hanja: '第一火星丘',
    type: '구(丘)',
    color: '#e08060',
    x: 75.7, y: 49.2,
    summary: '적극성, 용기, 투쟁심',
    desc: '검지와 엄지 사이의 볼록한 부위. 적극성, 용기, 경쟁심을 나타냅니다. 발달할수록 도전적이고 직접적인 성격입니다.',
    types: [
      { shape: '발달함', meaning: '강한 추진력, 용기, 경쟁심' },
      { shape: '약함', meaning: '소극적, 갈등 회피형' },
    ],
  },
  {
    id: 's-mars2',
    num: 15,
    name: '제2화성구',
    hanja: '第二火星丘',
    type: '구(丘)',
    color: '#c06040',
    x: 20.4, y: 68.2,
    summary: '인내력, 저항력, 자기통제',
    desc: '새끼손가락 아래와 월구 사이의 부위. 인내력, 자기통제, 저항력을 나타냅니다. 발달할수록 끈기가 강합니다.',
    types: [
      { shape: '발달함', meaning: '강한 인내력, 어떤 상황도 견딤' },
      { shape: '약함', meaning: '인내심 부족, 쉽게 포기하는 경향' },
    ],
  },
  {
    id: 's-plain',
    num: 16,
    name: '화성평원',
    hanja: '火星平原',
    type: '구(丘)',
    color: '#909090',
    x: 43.8, y: 73.8,
    summary: '정신력 균형, 인내와 용기의 조화',
    desc: '손바닥 중앙의 평평한 부분. 화성평원이 넓고 평탄할수록 정신적 균형이 잡혀 있고 안정적인 성격입니다.',
    types: [
      { shape: '넓고 평탄', meaning: '정신적 균형, 안정적 성격' },
      { shape: '움푹 들어감', meaning: '소심하거나 심적 부담이 큰 상태' },
    ],
  },
]

const LINES = PALM_ITEMS.filter(i => i.type === '선(線)')
const ZONES = PALM_ITEMS.filter(i => i.type === '구(丘)')

export default function SongeumClient({ posts }: Props) {
  const [active, setActive] = useState<string | null>(null)

  const scrollTo = (id: string) => {
    setActive(id)
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 50)
    setTimeout(() => setActive(null), 2000)
  }

  return (
    <div className="min-h-screen py-10 px-4">
      <div className="max-w-3xl mx-auto">

        {/* 헤더 */}
        <div className="text-center mb-8">
          <Link href="/blog" className="text-xs mb-4 inline-block" style={{ color: '#6b7280' }}>
            ← 전체 칼럼
          </Link>
          <h1 className="text-4xl font-black mb-3" style={{ color: '#80e0a0' }}>
            손금학 · 手相學
          </h1>
          <p style={{ color: '#809080' }}>손바닥이 새겨 놓은 운명의 지도</p>
        </div>

        {/* 이미지 + 오버레이 버튼 */}
        <div
          className="rounded-2xl overflow-hidden mb-3"
          style={{ border: '1px solid #50a06030', background: '#0a1a12' }}
        >
          <div className="px-4 pt-4 pb-2">
            <h2 className="text-base font-bold" style={{ color: '#80e0a0' }}>
              손바닥 부위 및 선 전체 해설도
            </h2>
          </div>
          <div className="relative mx-4 mb-4">
            <img
              src="/images/songeum/palm-reference.jpg"
              alt="손금 손바닥 선 명칭 전체"
              style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '10px' }}
            />
            {PALM_ITEMS.map(item => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                title={`${item.num}. ${item.name} — ${item.summary}`}
                style={{
                  position: 'absolute',
                  left: `${item.x}%`,
                  top: `${item.y}%`,
                  transform: 'translate(-50%, -50%)',
                  width: '22px', height: '22px', borderRadius: '50%',
                  background: item.color,
                  border: '2px solid rgba(255,255,255,0.8)',
                  cursor: 'pointer',
                  fontSize: '9px', fontWeight: '800', color: '#1a1a1a',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  boxShadow: '0 2px 5px rgba(0,0,0,0.6)',
                  transition: 'transform 0.15s ease, box-shadow 0.15s ease',
                  zIndex: 10,
                }}
                onMouseEnter={e => {
                  ;(e.currentTarget as HTMLButtonElement).style.transform = 'translate(-50%, -50%) scale(1.35)'
                  ;(e.currentTarget as HTMLButtonElement).style.boxShadow = '0 4px 12px rgba(0,0,0,0.7)'
                }}
                onMouseLeave={e => {
                  ;(e.currentTarget as HTMLButtonElement).style.transform = 'translate(-50%, -50%) scale(1)'
                  ;(e.currentTarget as HTMLButtonElement).style.boxShadow = '0 2px 5px rgba(0,0,0,0.6)'
                }}
              >
                {item.num}
              </button>
            ))}
          </div>
        </div>

        {/* 사용 방법 */}
        <div
          className="rounded-xl px-4 py-3 mb-6 text-sm"
          style={{ background: '#80e0a012', border: '1px solid #80e0a030' }}
        >
          <p className="font-bold mb-1" style={{ color: '#80e0a0' }}>💡 사용 방법</p>
          <ol className="space-y-1 text-xs" style={{ color: '#809080' }}>
            <li>① 이미지 위의 <span style={{ color: '#80e0a0' }}>번호 버튼</span>을 클릭하면 해당 부위 설명으로 자동 이동합니다</li>
            <li>② 아래 <span style={{ color: '#80e0a0' }}>선(線) / 구(丘) 선택 버튼</span>을 눌러도 같은 방식으로 이동합니다</li>
            <li>③ 설명 하단 <span style={{ color: '#80e0a0' }}>↑ 이미지로 돌아가기</span> 버튼으로 다시 위로 올 수 있습니다</li>
          </ol>
        </div>

        {/* 선(線) 버튼 그리드 */}
        <div
          className="rounded-2xl p-4 mb-4"
          style={{ background: '#0a1a0a', border: '1px solid #50a06020' }}
        >
          <p className="text-xs mb-3 font-bold" style={{ color: '#80e0a0' }}>선(線) — 손바닥의 선</p>
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
            {LINES.map(item => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="flex items-center gap-1.5 rounded-xl px-2 py-2 text-left transition-all duration-150"
                style={{ background: `${item.color}15`, border: `1px solid ${item.color}35`, cursor: 'pointer' }}
                onMouseEnter={e => { ;(e.currentTarget as HTMLButtonElement).style.background = `${item.color}28` }}
                onMouseLeave={e => { ;(e.currentTarget as HTMLButtonElement).style.background = `${item.color}15` }}
              >
                <span className="shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold"
                  style={{ background: item.color, color: '#1a1a1a' }}>
                  {item.num}
                </span>
                <span className="text-xs font-semibold truncate" style={{ color: item.color }}>{item.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* 구(丘) 버튼 그리드 */}
        <div
          className="rounded-2xl p-4 mb-8"
          style={{ background: '#0a1a0a', border: '1px solid #50a06020' }}
        >
          <p className="text-xs mb-3 font-bold" style={{ color: '#80e0a0' }}>구(丘) — 손바닥의 볼록한 부위</p>
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
            {ZONES.map(item => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="flex items-center gap-1.5 rounded-xl px-2 py-2 text-left transition-all duration-150"
                style={{ background: `${item.color}15`, border: `1px solid ${item.color}35`, cursor: 'pointer' }}
                onMouseEnter={e => { ;(e.currentTarget as HTMLButtonElement).style.background = `${item.color}28` }}
                onMouseLeave={e => { ;(e.currentTarget as HTMLButtonElement).style.background = `${item.color}15` }}
              >
                <span className="shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold"
                  style={{ background: item.color, color: '#1a1a1a' }}>
                  {item.num}
                </span>
                <span className="text-xs font-semibold truncate" style={{ color: item.color }}>{item.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* 선(線) 상세 해설 */}
        <h2 className="text-lg font-bold mb-4" style={{ color: '#80e0a0' }}>선(線) 상세 해설</h2>
        <div className="space-y-3 mb-8">
          {LINES.map(item => (
            <div
              key={item.id}
              id={item.id}
              className="rounded-2xl overflow-hidden transition-all duration-300"
              style={{
                border: `1px solid ${active === item.id ? item.color : item.color + '25'}`,
                boxShadow: active === item.id ? `0 0 16px ${item.color}40` : 'none',
                scrollMarginTop: '80px',
              }}
            >
              <div className="flex items-center gap-3 px-4 py-3" style={{ background: `${item.color}14` }}>
                <div className="w-8 h-1.5 rounded-full shrink-0" style={{ background: item.color }} />
                <span className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0"
                  style={{ background: item.color, color: '#1a1a1a' }}>{item.num}</span>
                <div className="flex-1">
                  <span className="text-base font-bold" style={{ color: item.color }}>{item.name}</span>
                  <span className="text-xs ml-2" style={{ color: `${item.color}70` }}>{item.hanja}</span>
                </div>
              </div>
              <div className="px-4 pt-1 pb-1" style={{ background: '#0c1a0c' }}>
                <span className="text-xs px-2 py-0.5 rounded-full" style={{ background: `${item.color}18`, color: item.color }}>
                  {item.summary}
                </span>
              </div>
              <div className="px-4 pb-4 pt-2" style={{ background: '#0c1a0c' }}>
                <p className="text-sm leading-relaxed mb-3" style={{ color: '#809080' }}>{item.desc}</p>
                <div className="space-y-1.5">
                  {item.types.map(t => (
                    <div key={t.shape} className="flex gap-2 text-xs items-start">
                      <span className="shrink-0 mt-0.5 px-2 py-0.5 rounded-md font-medium"
                        style={{ background: `${item.color}18`, color: item.color }}>{t.shape}</span>
                      <span style={{ color: '#607060' }}>→ {t.meaning}</span>
                    </div>
                  ))}
                </div>
                <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="mt-3 text-xs" style={{ color: '#405040', cursor: 'pointer', background: 'none', border: 'none', padding: 0 }}>
                  ↑ 이미지로 돌아가기
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* 구(丘) 상세 해설 */}
        <h2 className="text-lg font-bold mb-4" style={{ color: '#80e0a0' }}>구(丘) 상세 해설</h2>
        <p className="text-xs mb-4" style={{ color: '#506050' }}>
          구(丘)는 손바닥의 볼록한 살집 부위로, 발달 정도에 따라 해당 영역의 에너지가 다르게 나타납니다.
        </p>
        <div className="space-y-3 mb-10">
          {ZONES.map(item => (
            <div
              key={item.id}
              id={item.id}
              className="rounded-2xl overflow-hidden transition-all duration-300"
              style={{
                border: `1px solid ${active === item.id ? item.color : item.color + '25'}`,
                boxShadow: active === item.id ? `0 0 16px ${item.color}40` : 'none',
                scrollMarginTop: '80px',
              }}
            >
              <div className="flex items-center gap-3 px-4 py-3" style={{ background: `${item.color}14` }}>
                <div className="w-3 h-3 rounded-full shrink-0" style={{ background: item.color }} />
                <span className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0"
                  style={{ background: item.color, color: '#1a1a1a' }}>{item.num}</span>
                <div className="flex-1">
                  <span className="text-base font-bold" style={{ color: item.color }}>{item.name}</span>
                  <span className="text-xs ml-2" style={{ color: `${item.color}70` }}>{item.hanja}</span>
                </div>
              </div>
              <div className="px-4 pt-1 pb-1" style={{ background: '#0c1a0c' }}>
                <span className="text-xs px-2 py-0.5 rounded-full" style={{ background: `${item.color}18`, color: item.color }}>
                  {item.summary}
                </span>
              </div>
              <div className="px-4 pb-4 pt-2" style={{ background: '#0c1a0c' }}>
                <p className="text-sm leading-relaxed mb-3" style={{ color: '#809080' }}>{item.desc}</p>
                <div className="space-y-1.5">
                  {item.types.map(t => (
                    <div key={t.shape} className="flex gap-2 text-xs items-start">
                      <span className="shrink-0 mt-0.5 px-2 py-0.5 rounded-md font-medium"
                        style={{ background: `${item.color}18`, color: item.color }}>{t.shape}</span>
                      <span style={{ color: '#607060' }}>→ {t.meaning}</span>
                    </div>
                  ))}
                </div>
                <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="mt-3 text-xs" style={{ color: '#405040', cursor: 'pointer', background: 'none', border: 'none', padding: 0 }}>
                  ↑ 이미지로 돌아가기
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* 칼럼 목록 */}
        {posts.length > 0 && (
          <div className="mb-6">
            <h2 className="text-lg font-bold mb-4" style={{ color: '#80e0a0' }}>손금 칼럼</h2>
            <div className="space-y-3">
              {posts.map(post => (
                <Link key={post.slug} href={`/blog/${post.slug}`}
                  className="block rounded-2xl p-4 transition-all duration-200 hover:scale-[1.01]"
                  style={{ background: 'linear-gradient(135deg, #0f2018, #0a1a12)', border: '1px solid #50a06020' }}>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs px-2 py-0.5 rounded-full font-medium" style={{ background: '#50a06020', color: '#80e0a0' }}>손금</span>
                    <span className="text-xs" style={{ color: '#6b7280' }}>{post.date}</span>
                  </div>
                  <h3 className="text-sm font-bold mb-1" style={{ color: '#e8e8f0' }}>{post.title}</h3>
                  <p className="text-xs" style={{ color: '#809080' }}>{post.description}</p>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* 테스트 유도 */}
        <div className="rounded-2xl p-5 text-center" style={{ background: 'linear-gradient(135deg, #0f2018, #0a1a12)', border: '1px solid #50a06030' }}>
          <p className="text-sm mb-4" style={{ color: '#809080' }}>손금에 이어 사주와 심리로 나를 더 깊게 알아보세요</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/saju" className="px-4 py-2 rounded-xl text-sm font-bold transition-all hover:scale-105"
              style={{ background: 'linear-gradient(135deg, #9c59d1, #6a3db8)', color: '#fff' }}>
              🔮 사주팔자 보기
            </Link>
            <Link href="/test/money" className="px-4 py-2 rounded-xl text-sm font-bold transition-all hover:scale-105"
              style={{ background: 'linear-gradient(135deg, #e0c050, #a08020)', color: '#fff' }}>
              💰 금전운 테스트
            </Link>
            <Link href="/blog/gwansang" className="px-4 py-2 rounded-xl text-sm font-bold transition-all hover:scale-105"
              style={{ background: 'linear-gradient(135deg, #9c59d1, #7040a0)', color: '#fff' }}>
              👁 관상 보러 가기
            </Link>
          </div>
        </div>

      </div>
    </div>
  )
}
