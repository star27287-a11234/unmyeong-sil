import type { Metadata } from 'next'
import Link from 'next/link'
import { getAllPosts } from '@/lib/posts'

export const metadata: Metadata = {
  title: '관상학 칼럼 | 운명의 실',
  description: '얼굴 부위별 관상 해석, 이마·눈·코·입·귀·턱으로 보는 운세와 성격. 동양 관상학의 지혜를 이미지와 함께 알기 쉽게 풀어드립니다.',
}

const FACE_PARTS = [
  {
    part: '이마',
    hanja: '額',
    zone: '상정(上停)',
    color: '#e0c97f',
    keywords: ['총명함', '부모운', '초기성공'],
    desc: '이마는 초년운을 관장합니다. 넓고 반듯한 이마는 총명함과 부모의 덕을 나타내며, 학업·직업의 초기 성공을 의미합니다. 이마가 좁거나 굴곡지면 초년에 고생이 따르지만 자수성가형 기질이 강합니다.',
    detail: [
      { label: '넓고 반듯한 이마', meaning: '총명함, 귀인의 도움, 학업 성취' },
      { label: '좁은 이마', meaning: '자수성가형, 초년 고생, 단단한 의지' },
      { label: '이마 주름', meaning: '생각이 많고 책임감이 강한 성격' },
    ],
  },
  {
    part: '눈썹 위',
    hanja: '眉上',
    zone: '상정(上停)',
    color: '#c8d8ff',
    keywords: ['성공운'],
    desc: '눈썹 바로 위 영역은 성공운과 직결됩니다. 이 부위가 평평하고 풍만할수록 사회적 성공과 명예가 따릅니다.',
    detail: [
      { label: '평탄하고 넓은 눈썹 위', meaning: '사회적 성공, 명예, 지위 획득' },
      { label: '눈썹이 올라간 경우', meaning: '진취적 기상, 도전정신' },
    ],
  },
  {
    part: '눈썹',
    hanja: '眉',
    zone: '상정(上停)',
    color: '#c8a8e0',
    keywords: ['지혜', '복덕', '성격운'],
    desc: '눈썹은 형제·친구운과 성격을 나타냅니다. 눈썹이 짙고 선명하면 의지력이 강하고, 옅으면 섬세한 성격입니다. 눈썹 끝이 올라가면 적극적, 내려가면 포용적 성격입니다.',
    detail: [
      { label: '짙고 선명한 눈썹', meaning: '강한 의지, 형제운 좋음, 리더십' },
      { label: '옅은 눈썹', meaning: '섬세함, 예술적 감각, 협력 지향' },
      { label: '눈썹 끝 올라감', meaning: '적극적, 야망, 경쟁심 강함' },
      { label: '눈썹이 긺', meaning: '장수, 복덕, 꼼꼼한 성격' },
    ],
  },
  {
    part: '귀',
    hanja: '耳',
    zone: '상정(上停)',
    color: '#80e0a0',
    keywords: ['지혜', '복덕', '성격'],
    desc: '귀는 타고난 복과 장수를 상징합니다. 귀가 얼굴보다 높이 위치할수록 지혜롭고, 귓불이 두툼할수록 복덕이 많습니다.',
    detail: [
      { label: '귀가 높이 위치', meaning: '지혜로움, 조숙한 성격' },
      { label: '두툼한 귓불', meaning: '복덕, 장수, 재물복' },
      { label: '귀가 얼굴에 붙음', meaning: '실속 있고 신중한 성격' },
      { label: '귀가 크고 두터움', meaning: '장수, 넉넉한 인품' },
    ],
  },
  {
    part: '눈',
    hanja: '眼',
    zone: '중정(中停)',
    color: '#60b8e0',
    keywords: ['지혜', '정신력', '대인운'],
    desc: '눈은 관상에서 가장 중요한 부위입니다. 눈빛이 맑고 총기 있으면 지혜롭고, 대인운이 강합니다. 눈은 현재의 정신 상태와 중년운을 나타냅니다.',
    detail: [
      { label: '맑고 빛나는 눈', meaning: '총명함, 강한 정신력, 귀인 인연' },
      { label: '큰 눈', meaning: '감수성 풍부, 인기 많음, 이상 추구' },
      { label: '가는 눈', meaning: '관찰력, 신중함, 실행력 강함' },
      { label: '눈꼬리 올라감', meaning: '적극적 성격, 강한 자존심' },
      { label: '눈꼬리 내려감', meaning: '온화함, 포용력, 인기 많음' },
    ],
  },
  {
    part: '코',
    hanja: '鼻',
    zone: '중정(中停)',
    color: '#e08040',
    keywords: ['재물운(재물궁)', '자존감'],
    desc: '코는 재물궁(財物宮)이라 불리며, 재물운과 자존감을 나타냅니다. 코끝이 둥글고 두툼하면 재물이 모이고, 콧망울이 발달하면 재물욕이 강합니다.',
    detail: [
      { label: '둥글고 두툼한 코끝', meaning: '재물운 강함, 저축 잘 함' },
      { label: '높은 콧대', meaning: '자존심 강함, 리더십, 독립적' },
      { label: '발달한 콧망울', meaning: '재물욕 강함, 사업 수완' },
      { label: '뾰족한 코', meaning: '예민한 성격, 재물이 손에서 빠져나감' },
    ],
  },
  {
    part: '인중',
    hanja: '人中',
    zone: '하정(下停)',
    color: '#60c0c0',
    keywords: ['건강', '수명', '자손운'],
    desc: '코와 입 사이의 인중은 건강, 수명, 자손운을 나타냅니다. 인중이 길고 선명할수록 수명이 길고 자손이 번성합니다.',
    detail: [
      { label: '길고 선명한 인중', meaning: '장수, 자손 번성, 강한 생명력' },
      { label: '넓은 인중', meaning: '이성 인기, 자녀운 좋음' },
      { label: '짧은 인중', meaning: '성격이 급하고 인연 변동 많음' },
    ],
  },
  {
    part: '입 / 입꼬리',
    hanja: '口',
    zone: '하정(下停)',
    color: '#e06080',
    keywords: ['말재주', '신뢰', '대인관계', '화술', '인기'],
    desc: '입은 말년운과 식복을 상징하며, 신뢰와 대인관계를 나타냅니다. 입꼬리가 올라가면 화술이 뛰어나고 인기가 많습니다.',
    detail: [
      { label: '크고 두툼한 입', meaning: '식복, 말년의 풍요, 강한 실행력' },
      { label: '올라간 입꼬리', meaning: '밝은 성격, 화술 좋음, 인기' },
      { label: '두툼한 입술', meaning: '감성이 풍부하고 의리 있음' },
      { label: '얇은 입술', meaning: '이성적이고 논리적인 성격' },
    ],
  },
  {
    part: '턱',
    hanja: '頤',
    zone: '하정(下停)',
    color: '#a080e0',
    keywords: ['말년운', '결단력', '끈기'],
    desc: '턱은 말년운과 의지력을 나타냅니다. 턱이 둥글고 풍만할수록 말년이 풍요롭고 자녀복이 있으며, 사각턱은 강한 결단력을 의미합니다.',
    detail: [
      { label: '둥글고 풍만한 턱', meaning: '말년 복, 자녀운, 사회적 안정' },
      { label: '사각 턱', meaning: '강한 의지력, 결단력, 추진력' },
      { label: '뾰족한 턱', meaning: '예민하고 감수성이 강한 성격' },
      { label: '이중 턱', meaning: '재물복, 여유로운 노후' },
    ],
  },
]

export default function GwansangPage() {
  const allPosts = getAllPosts('ko')
  const posts = allPosts.filter(p => p.category === '관상')

  return (
    <div className="min-h-screen py-10 px-4">
      <div className="max-w-3xl mx-auto">

        {/* 헤더 */}
        <div className="text-center mb-8">
          <Link href="/blog" className="text-xs mb-4 inline-block" style={{ color: '#6b7280' }}>
            ← 전체 칼럼
          </Link>
          <h1 className="text-4xl font-black mb-3" style={{ color: '#c8a8e0' }}>
            관상학 · 觀相學
          </h1>
          <p style={{ color: '#8080a0' }}>얼굴이 담고 있는 운명의 이야기</p>
        </div>

        {/* 관상 이미지 카드 */}
        <div
          className="rounded-2xl p-5 mb-8"
          style={{
            background: 'linear-gradient(135deg, #16213e, #0f1f3d)',
            border: '1px solid #9c59d130',
          }}
        >
          <h2 className="text-lg font-bold mb-4 text-center" style={{ color: '#c8a8e0' }}>
            얼굴 부위별 관상 해설
          </h2>
          <div className="flex justify-center">
            <img
              src="/images/gwansang/face-reference.png"
              alt="관상학 얼굴 부위별 운세 해설 - 이마, 눈썹, 눈, 코, 입, 귀, 턱"
              style={{
                maxWidth: '100%',
                height: 'auto',
                borderRadius: '12px',
                border: '1px solid #9c59d120',
              }}
            />
          </div>
          <p className="text-xs text-center mt-3" style={{ color: '#505070' }}>
            ※ 각 부위를 클릭하면 아래 상세 설명을 확인하세요
          </p>
        </div>

        {/* 삼정(三停) 설명 */}
        <div
          className="rounded-2xl p-5 mb-8"
          style={{
            background: 'linear-gradient(135deg, #12122e, #0e0e28)',
            border: '1px solid #9c59d120',
          }}
        >
          <h2 className="text-xl font-bold mb-4" style={{ color: '#e0c97f' }}>
            삼정(三停) — 얼굴의 3구역
          </h2>
          <p className="text-sm mb-4 leading-relaxed" style={{ color: '#9090b0' }}>
            관상학에서 얼굴은 <strong style={{ color: '#c8a8e0' }}>상정·중정·하정</strong>으로 나뉘며, 각각 인생의 시기와 운세의 영역에 대응합니다.
          </p>
          <div className="grid grid-cols-3 gap-3">
            {[
              { zone: '상정 (上停)', parts: '이마·눈썹·눈·귀', period: '초년 (0~30세)', meaning: '지성·부모운·학업·초기 성공', color: '#e0c97f' },
              { zone: '중정 (中停)', parts: '눈·코·광대', period: '중년 (30~50세)', meaning: '재물운·사회운·건강·사업', color: '#c8a8e0' },
              { zone: '하정 (下停)', parts: '입·인중·턱', period: '말년 (50세~)', meaning: '말년운·자녀운·의지력', color: '#80e0a0' },
            ].map(z => (
              <div
                key={z.zone}
                className="rounded-xl p-3"
                style={{ background: '#0d0d2b', border: `1px solid ${z.color}30` }}
              >
                <div className="text-xs font-bold mb-1" style={{ color: z.color }}>{z.zone}</div>
                <div className="text-xs mb-1" style={{ color: '#a0a0c0' }}>{z.parts}</div>
                <div className="text-xs mb-2" style={{ color: '#606080' }}>{z.period}</div>
                <div className="text-xs" style={{ color: z.color, opacity: 0.8 }}>{z.meaning}</div>
              </div>
            ))}
          </div>
        </div>

        {/* 부위별 상세 해설 */}
        <h2 className="text-xl font-bold mb-5" style={{ color: '#c8a8e0' }}>
          부위별 상세 해설
        </h2>
        <div className="space-y-4 mb-10">
          {FACE_PARTS.map(item => (
            <div
              key={item.part}
              className="rounded-2xl overflow-hidden"
              style={{ border: `1px solid ${item.color}25` }}
            >
              {/* 부위 헤더 */}
              <div
                className="flex items-center gap-3 px-5 py-3"
                style={{ background: `${item.color}12` }}
              >
                <div>
                  <span className="text-base font-bold" style={{ color: item.color }}>
                    {item.part}
                  </span>
                  <span className="text-xs ml-2" style={{ color: `${item.color}80` }}>
                    {item.hanja} · {item.zone}
                  </span>
                </div>
                <div className="flex flex-wrap gap-1 ml-auto">
                  {item.keywords.map(kw => (
                    <span
                      key={kw}
                      className="text-xs px-2 py-0.5 rounded-full"
                      style={{ background: `${item.color}20`, color: item.color }}
                    >
                      {kw}
                    </span>
                  ))}
                </div>
              </div>

              {/* 설명 */}
              <div
                className="px-5 py-4"
                style={{ background: 'linear-gradient(135deg, #0e0e24, #0a0a1e)' }}
              >
                <p className="text-sm leading-relaxed mb-4" style={{ color: '#9090b0' }}>
                  {item.desc}
                </p>
                <div className="space-y-2">
                  {item.detail.map(d => (
                    <div key={d.label} className="flex gap-2 text-xs">
                      <span
                        className="shrink-0 px-2 py-0.5 rounded-md font-medium"
                        style={{ background: `${item.color}15`, color: item.color }}
                      >
                        {d.label}
                      </span>
                      <span style={{ color: '#707090' }}>→ {d.meaning}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 오행 관상 요약 */}
        <div
          className="rounded-2xl p-5 mb-8"
          style={{
            background: 'linear-gradient(135deg, #12122e, #0e0e28)',
            border: '1px solid #e0c97f20',
          }}
        >
          <h2 className="text-xl font-bold mb-4" style={{ color: '#e0c97f' }}>
            오행(五行) 관상 타입
          </h2>
          <p className="text-sm mb-4" style={{ color: '#9090b0' }}>
            동양 관상학에서는 얼굴형을 오행에 대입하여 성격과 운명을 분류합니다.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { type: '목형(木型)', shape: '긴 얼굴, 높은 이마', trait: '지성적, 인내력, 리더십', color: '#80e0a0' },
              { type: '화형(火型)', shape: '역삼각형, 날카로운 눈빛', trait: '열정적, 카리스마, 직설적', color: '#e05050' },
              { type: '토형(土型)', shape: '사각형, 넓은 광대', trait: '안정적, 신뢰감, 책임감', color: '#e0c97f' },
              { type: '금형(金型)', shape: '둥근 얼굴, 넓은 이마', trait: '결단력, 원칙주의, 의리', color: '#b0c0e0' },
              { type: '수형(水型)', shape: '둥글고 부드러운 얼굴', trait: '사교적, 유연함, 공감능력', color: '#60b8e0' },
            ].map(t => (
              <div
                key={t.type}
                className="rounded-xl p-3"
                style={{ background: '#0d0d2b', border: `1px solid ${t.color}25` }}
              >
                <div className="text-sm font-bold mb-1" style={{ color: t.color }}>{t.type}</div>
                <div className="text-xs mb-1" style={{ color: '#808098' }}>{t.shape}</div>
                <div className="text-xs" style={{ color: '#606078' }}>{t.trait}</div>
              </div>
            ))}
          </div>
        </div>

        {/* 칼럼 목록 */}
        <div className="mb-6">
          <h2 className="text-xl font-bold mb-5" style={{ color: '#c8a8e0' }}>관상 칼럼</h2>
          {posts.length === 0 ? (
            <div
              className="rounded-2xl p-8 text-center"
              style={{ background: '#12122e', border: '1px solid #9c59d120' }}
            >
              <p style={{ color: '#6b7280' }}>관상 칼럼이 준비 중입니다.</p>
            </div>
          ) : (
            <div className="space-y-4">
              {posts.map(post => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="block rounded-2xl p-5 transition-all duration-200 hover:scale-[1.01]"
                  style={{
                    background: 'linear-gradient(135deg, #16213e, #0f3460)',
                    border: '1px solid #9c59d120',
                  }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs px-2 py-1 rounded-full font-medium" style={{ background: '#9c59d120', color: '#c8a8e0' }}>
                      관상
                    </span>
                    <span className="text-xs" style={{ color: '#6b7280' }}>{post.date}</span>
                  </div>
                  <h3 className="text-base font-bold mb-1" style={{ color: '#e8e8f0' }}>{post.title}</h3>
                  <p className="text-sm" style={{ color: '#8090a8' }}>{post.description}</p>
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* 테스트 유도 */}
        <div
          className="rounded-2xl p-6 text-center"
          style={{
            background: 'linear-gradient(135deg, #1a1040, #0f0f2e)',
            border: '1px solid #9c59d130',
          }}
        >
          <p className="text-sm mb-4" style={{ color: '#9090b0' }}>
            관상이 궁금하다면, 사주로 더 깊이 들여다보세요
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/saju" className="px-4 py-2 rounded-xl text-sm font-bold transition-all hover:scale-105" style={{ background: 'linear-gradient(135deg, #9c59d1, #6a3db8)', color: '#fff' }}>
              🔮 사주팔자 보기
            </Link>
            <Link href="/test/love" className="px-4 py-2 rounded-xl text-sm font-bold transition-all hover:scale-105" style={{ background: 'linear-gradient(135deg, #e05c7f, #b03560)', color: '#fff' }}>
              💘 연애유형 테스트
            </Link>
            <Link href="/blog/songeum" className="px-4 py-2 rounded-xl text-sm font-bold transition-all hover:scale-105" style={{ background: 'linear-gradient(135deg, #50a060, #307040)', color: '#fff' }}>
              ✋ 손금 보러 가기
            </Link>
          </div>
        </div>

      </div>
    </div>
  )
}
