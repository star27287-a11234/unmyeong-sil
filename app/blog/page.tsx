import type { Metadata } from 'next'
import Link from 'next/link'
import { getAllPosts } from '@/lib/posts'

export const metadata: Metadata = {
  title: '운세 칼럼 | 사주·관상·손금·MBTI — 운명의 실',
  description: '사주팔자, 관상학, 손금학, MBTI, 연애심리, 재물운에 관한 깊이 있는 칼럼을 읽어보세요. 동양 철학과 현대 심리학을 결합한 자기 이해의 여정.',
}

const categoryColors: Record<string, string> = {
  '사주운세': '#a78bfa',
  '심리분석': '#e879a0',
  'MBTI': '#2db8a0',
  '연애심리': '#e879a0',
  '재물운': '#f59e0b',
  '직업': '#60a5fa',
  '관상': '#c4b5fd',
  '손금': '#6ee7b7',
}

const SPECIAL_SECTIONS = [
  {
    href: '/blog/gwansang',
    title: '관상학 · 觀相學',
    desc: '얼굴 부위별 운세 · 이마·눈·코·입·턱으로 보는 운명의 단서',
    color: '#c4b5fd',
    icon: '👁',
  },
  {
    href: '/blog/songeum',
    title: '손금학 · 手相學',
    desc: '생명선·감정선·두뇌선·운명선 — 손바닥이 말해주는 이야기',
    color: '#6ee7b7',
    icon: '✋',
  },
]

export default function BlogPage() {
  const posts = getAllPosts('ko')

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-3xl mx-auto">

        {/* 헤더 */}
        <div className="text-center mb-12">
          <p className="text-xs tracking-widest uppercase mb-2" style={{ color: '#4a4570' }}>Column</p>
          <h1 className="text-3xl font-black mb-3 text-gradient">운세 칼럼</h1>
          <p className="text-base leading-relaxed max-w-xl mx-auto" style={{ color: '#a89dc7' }}>
            사주·관상·손금·심리·MBTI에 관한 깊이 있는 이야기.<br />
            동양의 지혜와 현대 심리학이 만나는 공간.
          </p>
        </div>

        {/* 관상 / 손금 특별 섹션 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {SPECIAL_SECTIONS.map(s => (
            <Link
              key={s.href}
              href={s.href}
              className="glass-card p-7 block transition-all duration-200 hover:border-violet-400"
            >
              <div className="text-4xl mb-3">{s.icon}</div>
              <h2 className="text-xl font-bold mb-2" style={{ color: s.color }}>{s.title}</h2>
              <p className="text-sm leading-relaxed" style={{ color: '#a89dc7' }}>{s.desc}</p>
              <div
                className="mt-4 text-xs inline-block px-3 py-1.5 rounded-full font-medium"
                style={{ background: `${s.color}20`, color: s.color }}
              >
                자세히 보기 →
              </div>
            </Link>
          ))}
        </div>

        {/* 전체 칼럼 목록 */}
        <h2 className="text-xl font-bold mb-5" style={{ color: '#ede9fe' }}>전체 칼럼</h2>

        {posts.length === 0 ? (
          <p className="text-center text-base glass-card p-8" style={{ color: '#4a4570' }}>
            아직 게시된 칼럼이 없습니다.
          </p>
        ) : (
          <div className="space-y-4">
            {posts.map(post => {
              const color = categoryColors[post.category] ?? '#a78bfa'
              return (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="glass-card p-6 block transition-all duration-200 hover:border-violet-400"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span
                      className="text-xs px-3 py-1 rounded-full font-medium"
                      style={{ background: `${color}20`, color }}
                    >
                      {post.category}
                    </span>
                    <span className="text-xs" style={{ color: '#4a4570' }}>
                      {post.date}
                    </span>
                  </div>
                  <h2 className="text-lg font-bold mb-2" style={{ color: '#ede9fe' }}>
                    {post.title}
                  </h2>
                  <p className="text-sm leading-relaxed" style={{ color: '#a89dc7' }}>
                    {post.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {post.tags.map(tag => (
                      <span key={tag} className="text-xs" style={{ color: '#4a4570' }}>
                        #{tag}
                      </span>
                    ))}
                  </div>
                </Link>
              )
            })}
          </div>
        )}

        {/* 칼럼 소개 섹션 */}
        <div className="glass-card p-8 mt-10">
          <h2 className="text-lg font-bold mb-4" style={{ color: '#a78bfa' }}>
            📚 운명의 실 칼럼에 대하여
          </h2>
          <div className="space-y-3 text-sm leading-7" style={{ color: '#a89dc7' }}>
            <p>
              운명의 실 칼럼은 수천 년의 역사를 가진 동양 철학 — 사주팔자, 관상학, 손금학 —
              과 현대 심리학의 연구 결과를 접목하여, 자기 자신을 더 깊이 이해할 수 있도록 돕는
              콘텐츠를 제공합니다.
            </p>
            <p>
              단순한 흥미를 넘어 실생활에 적용할 수 있는 통찰을 전달하고,
              다양한 주제를 통해 자신만의 삶의 지혜를 발견하시기 바랍니다.
            </p>
          </div>
        </div>

      </div>
    </div>
  )
}
