import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getAllPosts, getPostBySlug } from '@/lib/posts'
import AdBanner from '@/components/AdBanner'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const posts = getAllPosts('en')
  return posts.map(p => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = await getPostBySlug(slug, 'en')
  if (!post) return {}
  return {
    title: `${post.title} | Thread of Fate`,
    description: post.description,
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = await getPostBySlug(slug, 'en')
  if (!post) notFound()

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <Link
            href="/en/blog"
            className="text-sm mb-4 inline-block"
            style={{ color: '#6b7280' }}
          >
            ← Column List
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <span
              className="text-xs px-2 py-1 rounded-full font-medium"
              style={{ background: '#9c59d120', color: '#9c59d1' }}
            >
              {post.category}
            </span>
            <span className="text-xs" style={{ color: '#6b7280' }}>
              {post.date}
            </span>
          </div>
          <h1 className="text-2xl font-black mb-3" style={{ color: '#e0c97f' }}>
            {post.title}
          </h1>
          <p className="text-sm" style={{ color: '#8090a8' }}>
            {post.description}
          </p>
        </div>

        {/* Top Banner Ad */}
        <AdBanner adSlot="6677889900" adFormat="horizontal" className="mb-6" />

        {/* Content */}
        <article
          className="prose-custom"
          style={{ color: '#b0b8c8' }}
          dangerouslySetInnerHTML={{ __html: post.contentHtml ?? '' }}
        />

        {/* Bottom Banner Ad */}
        <AdBanner adSlot="0099887766" adFormat="auto" className="mt-8" />

        {/* Tags */}
        {post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-8">
            {post.tags.map(tag => (
              <span
                key={tag}
                className="text-xs px-3 py-1 rounded-full"
                style={{ background: '#1a1a2e', color: '#6b7280', border: '1px solid #2a2a4a' }}
              >
                #{tag}
              </span>
            ))}
          </div>
        )}

        {/* CTA Section */}
        <div
          className="mt-10 rounded-2xl p-6 text-center"
          style={{
            background: 'linear-gradient(135deg, #16213e, #0f3460)',
            border: '1px solid #e0c97f20',
          }}
        >
          <p className="text-sm mb-4" style={{ color: '#9090b0' }}>
            Enjoyed the column? Check your own fortune.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link
              href="/en/saju"
              className="px-4 py-2 rounded-xl text-sm font-bold transition-all hover:scale-105"
              style={{ background: 'linear-gradient(135deg, #9c59d1, #6a3db8)', color: '#fff' }}
            >
              🔮 Four Pillars
            </Link>
            <Link
              href="/en/test/love"
              className="px-4 py-2 rounded-xl text-sm font-bold transition-all hover:scale-105"
              style={{ background: 'linear-gradient(135deg, #e05c7f, #b03560)', color: '#fff' }}
            >
              💘 Love Type Test
            </Link>
            <Link
              href="/en/test/mbti"
              className="px-4 py-2 rounded-xl text-sm font-bold transition-all hover:scale-105"
              style={{ background: 'linear-gradient(135deg, #00cc77, #00994d)', color: '#fff' }}
            >
              🧩 MBTI Test
            </Link>
          </div>
        </div>

        <div className="mt-6 text-center">
          <Link href="/en/blog" className="text-sm" style={{ color: '#6b7280' }}>
            ← More Columns
          </Link>
        </div>
      </div>
    </div>
  )
}
