'use client'

import Link from 'next/link'
import { useState, useRef } from 'react'
import type { Post } from '@/lib/posts'

interface Props {
  posts: Post[]
}

const FACE_PARTS = [
  {
    id: 'g-ima',
    num: 1,
    part: '이마',
    hanja: '額',
    zone: '상정(上停) · 초년운',
    color: '#e0c97f',
    x: 10.7, y: 14.2,
    keywords: ['총명함', '부모운', '초기성공'],
    desc: '이마는 초년운(0~30세)을 관장하는 핵심 부위입니다. 넓고 반듯한 이마는 총명함과 부모의 덕을 나타내며, 학업·직업의 초기 성공을 의미합니다.',
    detail: [
      { shape: '넓고 반듯한 이마', meaning: '총명함, 귀인의 도움, 학업 성취' },
      { shape: '좁은 이마', meaning: '자수성가형, 초년 고생, 강한 의지' },
      { shape: '이마에 주름 많음', meaning: '생각이 많고 책임감이 강한 성격' },
      { shape: '이마가 튀어나옴', meaning: '진취적 기상, 지도자형 기질' },
    ],
  },
  {
    id: 'g-eyebrow-top',
    num: 2,
    part: '눈썹 위',
    hanja: '眉上',
    zone: '상정(上停) · 성공운',
    color: '#c8d8ff',
    x: 21.2, y: 32.4,
    keywords: ['성공운'],
    desc: '눈썹 바로 위 이마 하단 영역은 사회적 성공운과 직결됩니다. 이 부위가 평평하고 풍만할수록 사회적 성공과 명예가 따릅니다.',
    detail: [
      { shape: '평탄하고 넓은 눈썹 위', meaning: '사회적 성공, 명예, 지위 획득' },
      { shape: '눈썹이 위로 올라감', meaning: '진취적 기상, 적극적 도전 정신' },
      { shape: '이 부위에 흉터·점', meaning: '초년에 부침이 있으나 극복형' },
    ],
  },
  {
    id: 'g-eyebrow',
    num: 3,
    part: '눈썹',
    hanja: '眉',
    zone: '상정(上停) · 형제·친구운',
    color: '#c8a8e0',
    x: 10.6, y: 41.7,
    keywords: ['지혜', '복덕', '성격운'],
    desc: '눈썹은 형제·친구운과 성격·기질을 나타냅니다. 눈썹이 짙고 선명하면 의지력이 강하고, 옅으면 섬세한 성격입니다.',
    detail: [
      { shape: '짙고 선명한 눈썹', meaning: '강한 의지, 형제운 좋음, 리더십' },
      { shape: '옅은 눈썹', meaning: '섬세함, 예술적 감각, 협력 지향' },
      { shape: '눈썹 끝이 올라감', meaning: '적극적 성격, 강한 자존심, 야망' },
      { shape: '긴 눈썹', meaning: '장수, 복덕, 꼼꼼한 성격' },
      { shape: '눈썹 사이가 넓음', meaning: '너그럽고 포용력 있음' },
    ],
  },
  {
    id: 'g-ear',
    num: 4,
    part: '귀',
    hanja: '耳',
    zone: '상정(上停) · 장수·복덕',
    color: '#80e0a0',
    x: 10.2, y: 59.4,
    keywords: ['지혜', '복덕', '성격'],
    desc: '귀는 타고난 복과 장수, 그리고 초년의 환경을 상징합니다. 귀가 얼굴보다 높이 위치할수록 지혜롭고, 귓불이 두툼할수록 복덕이 많습니다.',
    detail: [
      { shape: '귀가 높이 위치', meaning: '지혜로움, 조숙한 성격, 총명함' },
      { shape: '두툼한 귓불', meaning: '복덕, 장수, 재물복' },
      { shape: '귀가 얼굴에 붙음', meaning: '실속 있고 신중한 성격' },
      { shape: '크고 두터운 귀', meaning: '장수, 넉넉한 인품, 귀인의 도움' },
    ],
  },
  {
    id: 'g-eye',
    num: 5,
    part: '눈',
    hanja: '眼',
    zone: '중정(中停) · 중년운',
    color: '#60b8e0',
    x: 72.8, y: 29.8,
    keywords: ['지혜', '정신력', '대인운'],
    desc: '눈은 관상에서 가장 중요한 부위입니다. 눈빛이 맑고 총기 있으면 지혜롭고 대인운이 강합니다. 현재의 정신 상태와 중년운을 나타냅니다.',
    detail: [
      { shape: '맑고 빛나는 눈', meaning: '총명함, 강한 정신력, 귀인 인연' },
      { shape: '큰 눈', meaning: '감수성 풍부, 인기 많음, 이상 추구' },
      { shape: '가는 눈', meaning: '관찰력, 신중함, 실행력 강함' },
      { shape: '눈꼬리 올라감', meaning: '적극적 성격, 강한 자존심' },
      { shape: '눈꼬리 내려감', meaning: '온화함, 포용력, 인기 많음' },
    ],
  },
  {
    id: 'g-nose',
    num: 6,
    part: '코',
    hanja: '鼻',
    zone: '중정(中停) · 재물궁',
    color: '#e08040',
    x: 72.6, y: 42.9,
    keywords: ['재물운(재물궁)', '자존감'],
    desc: '코는 재물궁(財物宮)이라 불리며 재물운과 자존감을 나타냅니다. 코끝이 둥글고 두툼하면 재물이 모이고, 콧망울이 발달하면 재물욕이 강합니다.',
    detail: [
      { shape: '둥글고 두툼한 코끝', meaning: '재물운 강함, 저축 잘 함' },
      { shape: '높은 콧대', meaning: '자존심 강함, 리더십, 독립적' },
      { shape: '발달한 콧망울', meaning: '재물욕 강함, 사업 수완 좋음' },
      { shape: '뾰족한 코', meaning: '예민한 성격, 재물이 손에서 빠져나감' },
    ],
  },
  {
    id: 'g-philtrum',
    num: 7,
    part: '인중',
    hanja: '人中',
    zone: '하정(下停) · 생명력',
    color: '#60c0c0',
    x: 73, y: 56.1,
    keywords: ['건강', '수명', '자손운'],
    desc: '코와 입 사이의 인중은 건강·수명·자손운을 나타냅니다. 인중이 길고 선명할수록 수명이 길고 자손이 번성합니다.',
    detail: [
      { shape: '길고 선명한 인중', meaning: '장수, 자손 번성, 강한 생명력' },
      { shape: '넓은 인중', meaning: '이성 인기, 자녀운 좋음' },
      { shape: '짧은 인중', meaning: '성격이 급하고 인연 변동 많음' },
      { shape: '인중에 세로 주름', meaning: '자식운이 강함' },
    ],
  },
  {
    id: 'g-mouth',
    num: 8,
    part: '입 · 입꼬리',
    hanja: '口',
    zone: '하정(下停) · 말년운',
    color: '#e06080',
    x: 72.4, y: 66.5,
    keywords: ['말재주', '신뢰', '대인관계', '화술', '인기'],
    desc: '입은 말년운과 식복을 상징하며, 신뢰와 대인관계를 나타냅니다. 입꼬리가 올라가면 화술이 뛰어나고 인기가 많습니다.',
    detail: [
      { shape: '크고 두툼한 입', meaning: '식복, 말년의 풍요, 강한 실행력' },
      { shape: '올라간 입꼬리', meaning: '밝은 성격, 화술 좋음, 사람에게 인기' },
      { shape: '두툼한 입술', meaning: '감성 풍부하고 의리 있음' },
      { shape: '얇은 입술', meaning: '이성적이고 논리적인 성격' },
      { shape: '내려간 입꼬리', meaning: '신중하고 꼼꼼한 성격' },
    ],
  },
  {
    id: 'g-chin',
    num: 9,
    part: '턱',
    hanja: '頤',
    zone: '하정(下停) · 말년운',
    color: '#a080e0',
    x: 72.6, y: 78.9,
    keywords: ['말년운', '결단력', '끈기'],
    desc: '턱은 말년운과 의지력을 나타냅니다. 턱이 둥글고 풍만할수록 말년이 풍요롭고 자녀복이 있으며, 사각턱은 강한 결단력을 의미합니다.',
    detail: [
      { shape: '둥글고 풍만한 턱', meaning: '말년 복, 자녀운, 사회적 안정' },
      { shape: '사각 턱', meaning: '강한 의지력, 결단력, 추진력' },
      { shape: '뾰족한 턱', meaning: '예민하고 감수성이 강한 성격' },
      { shape: '이중 턱', meaning: '재물복, 여유로운 노후' },
    ],
  },
]

export default function GwansangClient({ posts }: Props) {
  const [active, setActive] = useState<string | null>(null)
  const [editMode, setEditMode] = useState(false)
  const [positions, setPositions] = useState<Record<string, { x: number; y: number }>>({})
  const draggingId = useRef<string | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const getPos = (item: (typeof FACE_PARTS)[0]) => positions[item.id] ?? { x: item.x, y: item.y }

  const handlePointerDown = (e: React.PointerEvent, id: string) => {
    if (!editMode) return
    e.preventDefault()
    e.stopPropagation()
    draggingId.current = id
    ;(e.currentTarget as HTMLElement).setPointerCapture(e.pointerId)
  }

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!draggingId.current || !containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = Math.round(((e.clientX - rect.left) / rect.width) * 1000) / 10
    const y = Math.round(((e.clientY - rect.top) / rect.height) * 1000) / 10
    setPositions(prev => ({ ...prev, [draggingId.current!]: { x, y } }))
  }

  const handlePointerUp = () => { draggingId.current = null }

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
          <h1 className="text-4xl font-black mb-3" style={{ color: '#c8a8e0' }}>
            관상학 · 觀相學
          </h1>
          <p style={{ color: '#8080a0' }}>얼굴이 담고 있는 운명의 이야기</p>
        </div>

        {/* 위치조정 버튼 */}
        <div className="flex justify-end mb-2">
          <button
            onClick={() => setEditMode(v => !v)}
            style={{
              background: editMode ? '#e0c97f' : '#3a3a5a',
              border: 'none',
              color: editMode ? '#1a1a2e' : '#e0c97f',
              padding: '8px 16px', borderRadius: '8px', fontSize: '13px',
              cursor: 'pointer', fontWeight: 'bold',
            }}
          >{editMode ? '✓ 편집 완료' : '📍 버튼 위치 조정'}</button>
        </div>

        {/* 이미지 + 오버레이 버튼 */}
        <div
          className="rounded-2xl overflow-hidden mb-3"
          style={{ border: `2px solid ${editMode ? '#e0c97f60' : '#9c59d130'}`, background: '#0e0e24' }}
        >
          <div className="px-4 pt-4 pb-2">
            <h2 className="text-base font-bold" style={{ color: '#c8a8e0' }}>
              얼굴 부위별 관상 해설도
            </h2>
          </div>
          {editMode && (
            <div className="mx-4 mb-2 rounded-xl px-3 py-2" style={{ background: '#e0c97f0a', border: '1px solid #e0c97f25' }}>
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-xs font-bold" style={{ color: '#e0c97f' }}>드래그로 버튼 이동 · 현재 좌표</span>
                <button
                  onClick={() => {
                    const output = FACE_PARTS.map(p => {
                      const pos = getPos(p)
                      return `    x: ${pos.x}, y: ${pos.y},  // ${p.part}`
                    }).join('\n')
                    navigator.clipboard.writeText(output)
                  }}
                  style={{ background: '#e0c97f20', border: '1px solid #e0c97f50', color: '#e0c97f', padding: '2px 8px', borderRadius: '5px', fontSize: '10px', cursor: 'pointer' }}
                >📋 복사</button>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {FACE_PARTS.map(p => {
                  const pos = getPos(p)
                  return (
                    <span key={p.id} style={{ background: `${p.color}20`, border: `1px solid ${p.color}40`, padding: '2px 7px', borderRadius: '5px', fontSize: '10px', color: '#c0c0d0', fontFamily: 'monospace' }}>
                      {p.num}.{p.part} ({pos.x}, {pos.y})
                    </span>
                  )
                })}
              </div>
            </div>
          )}
          <div
            ref={containerRef}
            className="relative mx-4 mb-4"
            style={{ userSelect: 'none' }}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
          >
            <img
              src="/images/gwansang/face-reference.png"
              alt="관상학 얼굴 부위별 운세"
              style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '10px', pointerEvents: 'none' }}
            />
            {FACE_PARTS.map(part => {
              const pos = getPos(part)
              return (
                <button
                  key={part.id}
                  onClick={() => { if (!editMode) scrollTo(part.id) }}
                  onPointerDown={e => handlePointerDown(e, part.id)}
                  title={`${part.num}. ${part.part} — ${part.keywords.join(', ')}`}
                  style={{
                    position: 'absolute',
                    left: `${pos.x}%`,
                    top: `${pos.y}%`,
                    transform: 'translate(-50%, -50%)',
                    width: '26px', height: '26px', borderRadius: '50%',
                    background: part.color,
                    border: editMode ? '2px solid #ffffff' : '2px solid rgba(255,255,255,0.85)',
                    cursor: editMode ? 'grab' : 'pointer',
                    fontSize: '11px', fontWeight: '800', color: '#1a1a1a',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    boxShadow: editMode ? '0 0 0 3px rgba(255,255,255,0.3), 0 2px 6px rgba(0,0,0,0.5)' : '0 2px 6px rgba(0,0,0,0.5)',
                    transition: editMode ? 'none' : 'transform 0.15s ease, box-shadow 0.15s ease',
                    zIndex: 10,
                  }}
                  onMouseEnter={e => {
                    if (editMode) return
                    ;(e.currentTarget as HTMLButtonElement).style.transform = 'translate(-50%, -50%) scale(1.3)'
                    ;(e.currentTarget as HTMLButtonElement).style.boxShadow = '0 4px 12px rgba(0,0,0,0.7)'
                  }}
                  onMouseLeave={e => {
                    if (editMode) return
                    ;(e.currentTarget as HTMLButtonElement).style.transform = 'translate(-50%, -50%) scale(1)'
                    ;(e.currentTarget as HTMLButtonElement).style.boxShadow = '0 2px 6px rgba(0,0,0,0.5)'
                  }}
                >
                  {part.num}
                </button>
              )
            })}
          </div>
        </div>

        {/* 사용 방법 */}
        <div
          className="rounded-xl px-4 py-3 mb-6 text-sm"
          style={{ background: '#e0c97f12', border: '1px solid #e0c97f30' }}
        >
          <p className="font-bold mb-1" style={{ color: '#e0c97f' }}>💡 사용 방법</p>
          <ol className="space-y-1 text-xs" style={{ color: '#9090a8' }}>
            <li>① 이미지 위의 <span style={{ color: '#e0c97f' }}>번호 버튼</span>을 클릭하면 해당 부위 설명으로 자동 이동합니다</li>
            <li>② 아래 <span style={{ color: '#e0c97f' }}>부위 선택 버튼</span>을 눌러도 같은 방식으로 이동합니다</li>
            <li>③ 설명을 읽은 뒤 브라우저 뒤로 가기 또는 스크롤로 돌아오세요</li>
          </ol>
        </div>

        {/* 부위 선택 버튼 그리드 */}
        <div
          className="rounded-2xl p-4 mb-8"
          style={{ background: '#0e0e24', border: '1px solid #9c59d120' }}
        >
          <p className="text-xs mb-3 font-medium" style={{ color: '#6060a0' }}>부위를 선택하세요 →</p>
          <div className="grid grid-cols-3 gap-2">
            {FACE_PARTS.map(part => (
              <button
                key={part.id}
                onClick={() => scrollTo(part.id)}
                className="flex items-center gap-2 rounded-xl px-3 py-2 text-left transition-all duration-150"
                style={{
                  background: `${part.color}15`,
                  border: `1px solid ${part.color}35`,
                  cursor: 'pointer',
                }}
                onMouseEnter={e => {
                  ;(e.currentTarget as HTMLButtonElement).style.background = `${part.color}28`
                }}
                onMouseLeave={e => {
                  ;(e.currentTarget as HTMLButtonElement).style.background = `${part.color}15`
                }}
              >
                <span
                  className="shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold"
                  style={{ background: part.color, color: '#1a1a1a' }}
                >
                  {part.num}
                </span>
                <span className="text-xs font-semibold truncate" style={{ color: part.color }}>
                  {part.part}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* 삼정 요약 */}
        <div
          className="rounded-2xl p-5 mb-6"
          style={{ background: 'linear-gradient(135deg, #12122e, #0e0e28)', border: '1px solid #9c59d120' }}
        >
          <h2 className="text-base font-bold mb-3" style={{ color: '#e0c97f' }}>삼정(三停) — 얼굴의 3구역</h2>
          <div className="grid grid-cols-3 gap-2">
            {[
              { zone: '상정(上停)', parts: '이마·눈썹·눈·귀', period: '초년 0~30세', color: '#e0c97f' },
              { zone: '중정(中停)', parts: '눈·코·광대', period: '중년 30~50세', color: '#c8a8e0' },
              { zone: '하정(下停)', parts: '입·인중·턱', period: '말년 50세~', color: '#80e0a0' },
            ].map(z => (
              <div key={z.zone} className="rounded-xl p-3 text-center" style={{ background: '#0d0d2b', border: `1px solid ${z.color}25` }}>
                <div className="text-xs font-bold mb-1" style={{ color: z.color }}>{z.zone}</div>
                <div className="text-xs mb-1" style={{ color: '#a0a0c0' }}>{z.parts}</div>
                <div className="text-xs" style={{ color: '#606080' }}>{z.period}</div>
              </div>
            ))}
          </div>
        </div>

        {/* 부위별 상세 해설 */}
        <h2 className="text-lg font-bold mb-4" style={{ color: '#c8a8e0' }}>부위별 상세 해설</h2>
        <div className="space-y-3 mb-10">
          {FACE_PARTS.map(part => (
            <div
              key={part.id}
              id={part.id}
              className="rounded-2xl overflow-hidden transition-all duration-300"
              style={{
                border: `1px solid ${active === part.id ? part.color : part.color + '25'}`,
                boxShadow: active === part.id ? `0 0 16px ${part.color}40` : 'none',
                scrollMarginTop: '80px',
              }}
            >
              {/* 섹션 헤더 */}
              <div
                className="flex items-center gap-3 px-4 py-3"
                style={{ background: `${part.color}14` }}
              >
                <span
                  className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold shrink-0"
                  style={{ background: part.color, color: '#1a1a1a' }}
                >
                  {part.num}
                </span>
                <div className="flex-1">
                  <span className="text-base font-bold" style={{ color: part.color }}>{part.part}</span>
                  <span className="text-xs ml-2" style={{ color: `${part.color}70` }}>{part.hanja}</span>
                </div>
                <span className="text-xs px-2 py-0.5 rounded-full" style={{ background: `${part.color}20`, color: part.color }}>
                  {part.zone}
                </span>
              </div>

              {/* 키워드 뱃지 */}
              <div className="flex flex-wrap gap-1.5 px-4 pt-3" style={{ background: '#0e0e22' }}>
                {part.keywords.map(kw => (
                  <span key={kw} className="text-xs px-2 py-0.5 rounded-full font-medium"
                    style={{ background: `${part.color}20`, color: part.color }}>
                    {kw}
                  </span>
                ))}
              </div>

              {/* 설명 */}
              <div className="px-4 pb-4 pt-2" style={{ background: '#0e0e22' }}>
                <p className="text-sm leading-relaxed mb-3" style={{ color: '#9090b0' }}>
                  {part.desc}
                </p>
                <div className="space-y-1.5">
                  {part.detail.map(d => (
                    <div key={d.shape} className="flex gap-2 text-xs items-start">
                      <span className="shrink-0 mt-0.5 px-2 py-0.5 rounded-md font-medium"
                        style={{ background: `${part.color}18`, color: part.color }}>
                        {d.shape}
                      </span>
                      <span style={{ color: '#70708a' }}>→ {d.meaning}</span>
                    </div>
                  ))}
                </div>
                <button
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="mt-3 text-xs"
                  style={{ color: '#505070', cursor: 'pointer', background: 'none', border: 'none', padding: 0 }}
                >
                  ↑ 이미지로 돌아가기
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* 칼럼 목록 */}
        {posts.length > 0 && (
          <div className="mb-6">
            <h2 className="text-lg font-bold mb-4" style={{ color: '#c8a8e0' }}>관상 칼럼</h2>
            <div className="space-y-3">
              {posts.map(post => (
                <Link key={post.slug} href={`/blog/${post.slug}`}
                  className="block rounded-2xl p-4 transition-all duration-200 hover:scale-[1.01]"
                  style={{ background: 'linear-gradient(135deg, #16213e, #0f3460)', border: '1px solid #9c59d120' }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs px-2 py-0.5 rounded-full font-medium" style={{ background: '#9c59d120', color: '#c8a8e0' }}>관상</span>
                    <span className="text-xs" style={{ color: '#6b7280' }}>{post.date}</span>
                  </div>
                  <h3 className="text-sm font-bold mb-1" style={{ color: '#e8e8f0' }}>{post.title}</h3>
                  <p className="text-xs" style={{ color: '#8090a8' }}>{post.description}</p>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* 테스트 유도 */}
        <div className="rounded-2xl p-5 text-center" style={{ background: 'linear-gradient(135deg, #1a1040, #0f0f2e)', border: '1px solid #9c59d130' }}>
          <p className="text-sm mb-4" style={{ color: '#9090b0' }}>관상이 궁금하다면, 사주로 더 깊이 들여다보세요</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/saju" className="px-4 py-2 rounded-xl text-sm font-bold transition-all hover:scale-105"
              style={{ background: 'linear-gradient(135deg, #9c59d1, #6a3db8)', color: '#fff' }}>
              🔮 사주팔자 보기
            </Link>
            <Link href="/test/love" className="px-4 py-2 rounded-xl text-sm font-bold transition-all hover:scale-105"
              style={{ background: 'linear-gradient(135deg, #e05c7f, #b03560)', color: '#fff' }}>
              💘 연애유형 테스트
            </Link>
            <Link href="/blog/songeum" className="px-4 py-2 rounded-xl text-sm font-bold transition-all hover:scale-105"
              style={{ background: 'linear-gradient(135deg, #50a060, #307040)', color: '#fff' }}>
              ✋ 손금 보러 가기
            </Link>
          </div>
        </div>

      </div>
    </div>
  )
}
