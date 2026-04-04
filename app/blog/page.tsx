import type { Metadata } from 'next'
import Link from 'next/link'
import { getAllPosts } from '@/lib/posts'

export const metadata: Metadata = {
  title: '운세 칼럼 | 운명의 실',
  description: '사주, 관상, 손금, 연애 심리, MBTI 등 운세와 심리에 관한 다양한 칼럼을 읽어보세요.',
}

const categoryColors: Record<string, string> = {
  '사주운세': '#9c59d1',
  '심리분석': '#e05c7f',
  'MBTI': '#00cc77',
  '연애심리': '#e05c7f',
  '재물운': '#e0c97f',
  '직업': '#4a9eff',
  '관상': '#c8a8e0',
  '손금': '#80e0a0',
}

const SPECIAL_SECTIONS = [
  {
    href: '/blog/gwansang',
    title: '관상학 · 觀相學',
    desc: '얼굴 부위별 운세 · 이마·눈·코·입·턱',
    color: '#c8a8e0',
    bg: 'linear-gradient(135deg, #16213e, #0f1f3d)',
    border: '#9c59d130',
    icon: '👁',
  },
  {
    href: '/blog/songeum',
    title: '손금학 · 手相學',
    desc: '생명선·감정선·두뇌선·운명선 해설',
    color: '#80e0a0',
    bg: 'linear-gradient(135deg, #0f2018, #0a1a12)',
    border: '#50a06030',
    icon: '✋',
  },
]

export default function BlogPage() {
  const posts = getAllPosts('ko')

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-black mb-3" style={{ color: '#e0c97f' }}>
            운세 칼럼
          </h1>
          <p style={{ color: '#8080a0' }}>
            사주·관상·손금·심리·MBTI에 관한 깊이 있는 이야기
          </p>
        </div>

        {/* 관상 / 손금 특별 섹션 카드 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {SPECIAL_SECTIONS.map(s => (
            <Link
              key={s.href}
              href={s.href}
              className="block rounded-2xl p-7 transition-all duration-200 hover:scale-[1.02]"
              style={{ background: s.bg, border: `1px solid ${s.border}` }}
            >
              <div className="text-4xl mb-3">{s.icon}</div>
              <h2 className="text-xl font-bold mb-2" style={{ color: s.color }}>{s.title}</h2>
              <p className="text-sm" style={{ color: '#8090a8' }}>{s.desc}</p>
              <div
                className="mt-4 text-sm inline-block px-4 py-1.5 rounded-full font-medium"
                style={{ background: `${s.color}15`, color: s.color }}
              >
                자세히 보기 →
              </div>
            </Link>
          ))}
        </div>

        {/* 전체 칼럼 목록 */}
        <h2 className="text-2xl font-bold mb-5" style={{ color: '#e0c97f' }}>전체 칼럼</h2>

        {posts.length === 0 ? (
          <p className="text-center text-base" style={{ color: '#6b7280' }}>
            아직 게시된 칼럼이 없습니다.
          </p>
        ) : (
          <div className="space-y-5">
            {posts.map(post => {
              const color = categoryColors[post.category] ?? '#e0c97f'
              return (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="block rounded-2xl p-6 transition-all duration-200 hover:scale-[1.01]"
                  style={{
                    background: 'linear-gradient(135deg, #16213e, #0f3460)',
                    border: `1px solid ${color}20`,
                  }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span
                      className="text-sm px-3 py-1 rounded-full font-medium"
                      style={{ background: `${color}20`, color }}
                    >
                      {post.category}
                    </span>
                    <span className="text-sm" style={{ color: '#6b7280' }}>
                      {post.date}
                    </span>
                  </div>
                  <h2 className="text-xl font-bold mb-2" style={{ color: '#e8e8f0' }}>
                    {post.title}
                  </h2>
                  <p className="text-base leading-relaxed" style={{ color: '#8090a8' }}>
                    {post.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {post.tags.map(tag => (
                      <span key={tag} className="text-sm" style={{ color: '#606080' }}>
                        #{tag}
                      </span>
                    ))}
                  </div>
                </Link>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}
