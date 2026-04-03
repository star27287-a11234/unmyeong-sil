import type { Metadata } from 'next'
import Link from 'next/link'
import { getAllPosts } from '@/lib/posts'

export const metadata: Metadata = {
  title: 'Fortune Column | Thread of Fate',
  description: 'Explore columns on Four Pillars, love psychology, and MBTI fortune analysis.',
}

const categoryColors: Record<string, string> = {
  'Fortune': '#9c59d1',
  'Psychology': '#e05c7f',
  'MBTI': '#00cc77',
  'Love': '#e05c7f',
  'Wealth': '#e0c97f',
  'Career': '#4a9eff',
}

export default function BlogPage() {
  const posts = getAllPosts('en')

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-black mb-3" style={{ color: '#e0c97f' }}>
            Fortune Column
          </h1>
          <p style={{ color: '#8080a0' }}>
            In-depth stories about fortune & psychology
          </p>
        </div>

        {posts.length === 0 ? (
          <p className="text-center" style={{ color: '#6b7280' }}>
            No columns published yet.
          </p>
        ) : (
          <div className="space-y-5">
            {posts.map(post => {
              const color = categoryColors[post.category] ?? '#e0c97f'
              return (
                <Link
                  key={post.slug}
                  href={`/en/blog/${post.slug}`}
                  className="block rounded-2xl p-6 transition-all duration-200 hover:scale-[1.01]"
                  style={{
                    background: 'linear-gradient(135deg, #16213e, #0f3460)',
                    border: `1px solid ${color}20`,
                  }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span
                      className="text-xs px-2 py-1 rounded-full font-medium"
                      style={{ background: `${color}20`, color }}
                    >
                      {post.category}
                    </span>
                    <span className="text-xs" style={{ color: '#6b7280' }}>
                      {post.date}
                    </span>
                  </div>
                  <h2 className="text-lg font-bold mb-2" style={{ color: '#e8e8f0' }}>
                    {post.title}
                  </h2>
                  <p className="text-sm leading-relaxed" style={{ color: '#8090a8' }}>
                    {post.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {post.tags.map(tag => (
                      <span key={tag} className="text-xs" style={{ color: '#606080' }}>
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
