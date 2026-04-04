import type { Metadata } from 'next'
import Link from 'next/link'
import { getAllPosts } from '@/lib/posts'

export const metadata: Metadata = {
  title: '손금학 칼럼 | 운명의 실',
  description: '생명선·감정선·두뇌선·운명선·자식선·결혼선과 태양구·수성구·금성구·월구 등 손금의 모든 것을 이미지와 함께 자세히 설명합니다.',
}

const PALM_LINES = [
  {
    name: '생명선',
    hanja: '生命線',
    color: '#e05050',
    summary: '본인의 건강, 수명, 질병, 가족, 신변상황',
    desc: '엄지손가락을 둘러싸는 호형의 선으로, 수명보다는 삶의 활력·건강 상태·생명력을 나타냅니다. 가족 환경과 신변의 변화도 읽을 수 있습니다.',
    types: [
      { shape: '깊고 선명', meaning: '강한 체력과 생명력, 건강한 삶' },
      { shape: '섬(○) 모양', meaning: '해당 시기 건강 주의 또는 가족 변동' },
      { shape: '두 줄', meaning: '에너지 풍부, 강한 회복력' },
      { shape: '중간에 끊김', meaning: '큰 변화·전환기' },
    ],
  },
  {
    name: '두뇌선',
    hanja: '頭腦線',
    color: '#5090e0',
    summary: '뇌의 성향판단, 지능성향, 적성유무',
    desc: '검지와 엄지 사이에서 시작해 손바닥을 가로지르는 선입니다. 사고 방식, 지적 능력, 직업 적성을 나타냅니다.',
    types: [
      { shape: '직선', meaning: '논리적·현실적 사고, 이공계 적성' },
      { shape: '아래로 휨', meaning: '창의적·감성적 사고, 예술·문학 적성' },
      { shape: '길고 선명', meaning: '폭넓은 관심사, 분석력 뛰어남' },
      { shape: '짧고 강함', meaning: '결단력, 집중력, 전문직 적성' },
    ],
  },
  {
    name: '감정선',
    hanja: '感情線',
    color: '#e060a0',
    summary: '성격, 애정운 판단, 연애운 등',
    desc: '새끼손가락 아래에서 시작해 검지 방향으로 이어지는 선입니다. 감정 표현 방식, 연애 스타일, 성격의 따뜻함을 나타냅니다.',
    types: [
      { shape: '검지 아래까지', meaning: '이상주의 낭만파, 완벽한 사랑 추구' },
      { shape: '중지 아래에서 끝', meaning: '현실적 균형파, 안정적 연애 선호' },
      { shape: '직선 형태', meaning: '이성적이고 냉정한 감정 표현' },
      { shape: '끝이 갈라짐', meaning: '복합적 감수성, 예술적 기질' },
    ],
  },
  {
    name: '운명선',
    hanja: '運命線',
    color: '#e0c050',
    summary: '직업운, 직업유무, 없을 경우 있음',
    desc: '손목 아래에서 중지 방향으로 올라가는 세로선입니다. 삶의 방향성, 직업적 성취, 사회적 역할을 나타냅니다. 없어도 나쁜 것이 아닙니다.',
    types: [
      { shape: '어릴 때부터 뚜렷', meaning: '목표 의식 강함, 일찍 성공' },
      { shape: '중간부터 시작', meaning: '중·장년 이후 성공형' },
      { shape: '선이 없음', meaning: '자유롭고 다양한 삶, 유연한 직업관' },
      { shape: '여러 갈래', meaning: '다양한 직업 경험, 멀티 재능' },
    ],
  },
  {
    name: '결혼선',
    hanja: '結婚線',
    color: '#b080e0',
    summary: '혼인관련 운세',
    desc: '새끼손가락 아래 가로 방향의 짧은 선입니다. 인연의 강도와 결혼 시기, 파트너와의 관계를 나타냅니다.',
    types: [
      { shape: '1개 선명', meaning: '깊은 하나의 인연, 평생 반려자' },
      { shape: '2개 이상', meaning: '여러 인연, 재혼 가능성' },
      { shape: '올라가는 선', meaning: '결혼 후 성장·번창' },
      { shape: '내려가는 선', meaning: '파트너와의 어려움' },
    ],
  },
  {
    name: '자식선',
    hanja: '子息線',
    color: '#a0d080',
    summary: '선이 상향은 아들, 하향은 딸',
    desc: '결혼선에서 위아래로 뻗는 짧은 선들로 자녀와의 인연을 나타냅니다. 선의 방향으로 자녀의 성별을 전통적으로 해석했습니다.',
    types: [
      { shape: '위로 뻗는 선', meaning: '아들 인연 (전통적 해석)' },
      { shape: '아래로 뻗는 선', meaning: '딸 인연 (전통적 해석)' },
      { shape: '선이 많음', meaning: '자녀운 풍부' },
    ],
  },
  {
    name: '사업선',
    hanja: '事業線',
    color: '#e09050',
    summary: '사업목구, 사업성향, 리더십, 인내유무',
    desc: '손바닥 아래쪽에서 태양구 방향으로 이어지는 선으로, 사업가적 기질과 리더십, 추진력을 나타냅니다.',
    types: [
      { shape: '뚜렷하고 긺', meaning: '강한 사업가 기질, 리더십' },
      { shape: '짧고 강함', meaning: '집중된 추진력, 전문 분야 성공' },
      { shape: '여러 갈래', meaning: '다양한 사업 시도' },
    ],
  },
]

const PALM_ZONES = [
  {
    name: '목성구',
    hanja: '木星丘',
    finger: '검지 아래',
    color: '#80d0a0',
    meaning: '사회적 권력 명예유무, 정치, 관직 종사 운세',
    desc: '검지 아래 볼록한 부위. 사회적 지위·명예·권력욕을 나타냅니다. 발달할수록 리더십이 강하고 공직·정치 방면에 적합합니다.',
  },
  {
    name: '토성구',
    hanja: '土星丘',
    finger: '중지 아래',
    color: '#c0c080',
    meaning: '직업운, 성향, 종교성',
    desc: '중지 아래 볼록한 부위. 직업에 대한 성실함, 종교적 성향, 인내력을 나타냅니다. 발달할수록 깊고 철학적인 성격입니다.',
  },
  {
    name: '태양구',
    hanja: '太陽丘',
    finger: '약지 아래',
    color: '#e0c050',
    meaning: '재물복과 사회적 인기운 판단',
    desc: '약지 아래 볼록한 부위. 재물복, 사회적 인기, 예술적 감각을 나타냅니다. 발달할수록 사람들에게 인정받고 재물이 따릅니다.',
  },
  {
    name: '수성구',
    hanja: '水星丘',
    finger: '새끼손가락 아래',
    color: '#60c0e0',
    meaning: '사업성향, 건강, 재물욕',
    desc: '새끼손가락 아래 볼록한 부위. 사업 능력, 언변, 재물욕, 건강 상태를 나타냅니다. 발달할수록 장사 수완이 좋습니다.',
  },
  {
    name: '제1화성구',
    hanja: '第一火星丘',
    finger: '검지·엄지 사이',
    color: '#e08060',
    meaning: '적극성, 용기, 투쟁심',
    desc: '검지와 엄지 사이의 볼록한 부위. 적극성, 용기, 경쟁심을 나타냅니다. 발달할수록 도전적이고 직접적인 성격입니다.',
  },
  {
    name: '제2화성구',
    hanja: '第二火星丘',
    finger: '새끼손가락·손목 사이',
    color: '#c06040',
    meaning: '인내력, 저항력, 자기통제',
    desc: '새끼손가락 아래와 월구 사이의 부위. 인내력, 자기통제, 저항력을 나타냅니다. 발달할수록 끈기가 강합니다.',
  },
  {
    name: '금성구',
    hanja: '金星丘',
    finger: '엄지 아래 (생명선 안쪽)',
    color: '#e0a0c0',
    meaning: '탄력-건강, 스테미너, 정력적 활동 유무, 인정유무',
    desc: '생명선 안쪽 엄지 아래의 두툼한 부위. 성적 매력, 건강한 체력, 애정의 깊이를 나타냅니다. 발달할수록 생명력이 넘칩니다.',
  },
  {
    name: '월구',
    hanja: '月丘',
    finger: '손바닥 아래 새끼손가락 반대쪽',
    color: '#a080d0',
    meaning: '상상력, 창의력, 예술성',
    desc: '손바닥 아래 엄지 반대쪽 부위. 상상력, 창의력, 예술적 감각, 직관력을 나타냅니다. 발달할수록 예술가·작가·음악가 기질이 강합니다.',
  },
  {
    name: '화성평원',
    hanja: '火星平原',
    finger: '손바닥 중앙 움푹한 부위',
    color: '#808080',
    meaning: '정신력의 균형, 인내와 용기의 조화',
    desc: '손바닥 중앙의 평평한 부분. 화성평원이 넓고 평탄할수록 정신적 균형이 잡혀 있고 안정적인 성격입니다.',
  },
]

export default function SongeumPage() {
  const allPosts = getAllPosts('ko')
  const posts = allPosts.filter(p => p.category === '손금')

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

        {/* 손금 이미지 카드 */}
        <div
          className="rounded-2xl p-5 mb-8"
          style={{
            background: 'linear-gradient(135deg, #0f2018, #0a1a12)',
            border: '1px solid #50a06030',
          }}
        >
          <h2 className="text-lg font-bold mb-4 text-center" style={{ color: '#80e0a0' }}>
            손바닥 부위 및 선 전체 해설
          </h2>
          <div className="flex justify-center">
            <img
              src="/images/songeum/palm-reference.jpg"
              alt="손금 손바닥 선 명칭 - 생명선, 두뇌선, 감정선, 운명선, 태양구, 수성구, 목성구, 금성구, 월구"
              style={{
                maxWidth: '100%',
                height: 'auto',
                borderRadius: '12px',
                border: '1px solid #50a06020',
              }}
            />
          </div>
          <p className="text-xs text-center mt-3" style={{ color: '#405040' }}>
            ※ 아래에서 각 선과 부위별 상세 의미를 확인하세요
          </p>
        </div>

        {/* 손금 기초 안내 */}
        <div
          className="rounded-2xl p-5 mb-8"
          style={{
            background: 'linear-gradient(135deg, #0c1a0c, #0a150a)',
            border: '1px solid #50a06020',
          }}
        >
          <h2 className="text-xl font-bold mb-4" style={{ color: '#e0c97f' }}>손금 보기 전 기본 원칙</h2>
          <div className="space-y-3 text-sm leading-relaxed" style={{ color: '#809080' }}>
            <div className="flex gap-3">
              <span className="shrink-0 text-lg">✋</span>
              <div>
                <strong style={{ color: '#80e0a0' }}>주손 vs 비주손</strong><br/>
                주로 쓰는 손은 현재와 미래, 반대 손은 타고난 잠재력을 나타냅니다. 두 손을 함께 보면 더 정확합니다.
              </div>
            </div>
            <div className="flex gap-3">
              <span className="shrink-0 text-lg">📏</span>
              <div>
                <strong style={{ color: '#80e0a0' }}>선의 깊이와 선명도</strong><br/>
                선이 깊고 뚜렷할수록 해당 영역의 에너지가 강합니다. 길이보다 선명도가 더 중요합니다.
              </div>
            </div>
            <div className="flex gap-3">
              <span className="shrink-0 text-lg">🔄</span>
              <div>
                <strong style={{ color: '#80e0a0' }}>손금은 변한다</strong><br/>
                삶의 방식과 마음가짐에 따라 손금은 실제로 달라집니다. 운명을 결정하는 것이 아니라 현재를 반영합니다.
              </div>
            </div>
          </div>
        </div>

        {/* 선(線) 상세 해설 */}
        <h2 className="text-xl font-bold mb-5" style={{ color: '#80e0a0' }}>
          손금 선(線) 상세 해설
        </h2>
        <div className="space-y-4 mb-10">
          {PALM_LINES.map(line => (
            <div
              key={line.name}
              className="rounded-2xl overflow-hidden"
              style={{ border: `1px solid ${line.color}25` }}
            >
              <div
                className="flex items-center gap-3 px-5 py-3"
                style={{ background: `${line.color}12` }}
              >
                <div
                  className="w-8 h-1 rounded-full shrink-0"
                  style={{ background: line.color }}
                />
                <div>
                  <span className="text-base font-bold" style={{ color: line.color }}>
                    {line.name}
                  </span>
                  <span className="text-xs ml-2" style={{ color: `${line.color}80` }}>
                    {line.hanja}
                  </span>
                </div>
                <span
                  className="ml-auto text-xs px-2 py-0.5 rounded-full"
                  style={{ background: `${line.color}20`, color: line.color }}
                >
                  {line.summary}
                </span>
              </div>
              <div
                className="px-5 py-4"
                style={{ background: 'linear-gradient(135deg, #0c1a0c, #0a150a)' }}
              >
                <p className="text-sm leading-relaxed mb-4" style={{ color: '#809080' }}>
                  {line.desc}
                </p>
                <div className="space-y-2">
                  {line.types.map(t => (
                    <div key={t.shape} className="flex gap-2 text-xs">
                      <span
                        className="shrink-0 px-2 py-0.5 rounded-md font-medium"
                        style={{ background: `${line.color}15`, color: line.color }}
                      >
                        {t.shape}
                      </span>
                      <span style={{ color: '#607060' }}>→ {t.meaning}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 구(丘) 상세 해설 */}
        <h2 className="text-xl font-bold mb-3" style={{ color: '#80e0a0' }}>
          손바닥 구(丘) 상세 해설
        </h2>
        <p className="text-sm mb-5" style={{ color: '#607060' }}>
          구(丘)는 손바닥의 볼록한 살집 부위로, 발달 정도에 따라 해당 영역의 에너지가 다르게 나타납니다.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {PALM_ZONES.map(zone => (
            <div
              key={zone.name}
              className="rounded-2xl p-4"
              style={{
                background: 'linear-gradient(135deg, #0c1a0c, #0a150a)',
                border: `1px solid ${zone.color}25`,
              }}
            >
              <div className="flex items-center gap-2 mb-2">
                <div
                  className="w-3 h-3 rounded-full shrink-0"
                  style={{ background: zone.color }}
                />
                <span className="text-sm font-bold" style={{ color: zone.color }}>
                  {zone.name}
                </span>
                <span className="text-xs" style={{ color: `${zone.color}70` }}>
                  {zone.hanja}
                </span>
              </div>
              <div
                className="text-xs px-2 py-1 rounded-lg mb-2 inline-block"
                style={{ background: `${zone.color}15`, color: zone.color }}
              >
                {zone.finger}
              </div>
              <p className="text-xs font-medium mb-1" style={{ color: zone.color, opacity: 0.9 }}>
                {zone.meaning}
              </p>
              <p className="text-xs leading-relaxed" style={{ color: '#607060' }}>
                {zone.desc}
              </p>
            </div>
          ))}
        </div>

        {/* 칼럼 목록 */}
        <div className="mb-6">
          <h2 className="text-xl font-bold mb-5" style={{ color: '#80e0a0' }}>손금 칼럼</h2>
          {posts.length === 0 ? (
            <div
              className="rounded-2xl p-8 text-center"
              style={{ background: '#0c1a0c', border: '1px solid #50a06020' }}
            >
              <p style={{ color: '#607060' }}>손금 칼럼이 준비 중입니다.</p>
            </div>
          ) : (
            <div className="space-y-4">
              {posts.map(post => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="block rounded-2xl p-5 transition-all duration-200 hover:scale-[1.01]"
                  style={{
                    background: 'linear-gradient(135deg, #0f2018, #0a1a12)',
                    border: '1px solid #50a06020',
                  }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs px-2 py-1 rounded-full font-medium" style={{ background: '#50a06020', color: '#80e0a0' }}>
                      손금
                    </span>
                    <span className="text-xs" style={{ color: '#6b7280' }}>{post.date}</span>
                  </div>
                  <h3 className="text-base font-bold mb-1" style={{ color: '#e8e8f0' }}>{post.title}</h3>
                  <p className="text-sm" style={{ color: '#809080' }}>{post.description}</p>
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* 테스트 유도 */}
        <div
          className="rounded-2xl p-6 text-center"
          style={{
            background: 'linear-gradient(135deg, #0f2018, #0a1a12)',
            border: '1px solid #50a06030',
          }}
        >
          <p className="text-sm mb-4" style={{ color: '#809080' }}>
            손금에 이어 사주와 심리로 나를 더 깊게 알아보세요
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/saju" className="px-4 py-2 rounded-xl text-sm font-bold transition-all hover:scale-105" style={{ background: 'linear-gradient(135deg, #9c59d1, #6a3db8)', color: '#fff' }}>
              🔮 사주팔자 보기
            </Link>
            <Link href="/test/money" className="px-4 py-2 rounded-xl text-sm font-bold transition-all hover:scale-105" style={{ background: 'linear-gradient(135deg, #e0c050, #a08020)', color: '#fff' }}>
              💰 금전운 테스트
            </Link>
            <Link href="/blog/gwansang" className="px-4 py-2 rounded-xl text-sm font-bold transition-all hover:scale-105" style={{ background: 'linear-gradient(135deg, #9c59d1, #7040a0)', color: '#fff' }}>
              👁 관상 보러 가기
            </Link>
          </div>
        </div>

      </div>
    </div>
  )
}
