import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getAllPosts, getPostBySlug } from '@/lib/posts'
import AdBanner from '@/components/AdBanner'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const posts = getAllPosts('ko')
  return posts.map(p => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = await getPostBySlug(slug, 'ko')
  if (!post) return {}
  return {
    title: `${post.title} | 운명의 실`,
    description: post.description,
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = await getPostBySlug(slug, 'ko')
  if (!post) notFound()

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-2xl mx-auto">
        {/* 헤더 */}
        <div className="mb-8">
          <Link
            href="/blog"
            className="text-sm mb-4 inline-block"
            style={{ color: '#6b7280' }}
          >
            ← 칼럼 목록
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

        {/* 본문 상단 광고 */}
        <AdBanner adSlot="1122334455" adFormat="horizontal" className="mb-6" />

        {/* 본문 */}
        <article
          className="prose-custom"
          style={{ color: '#b0b8c8' }}
          dangerouslySetInnerHTML={{ __html: post.contentHtml ?? '' }}
        />

        {/* 본문 하단 광고 */}
        <AdBanner adSlot="5544332211" adFormat="auto" className="mt-8" />

        {/* 태그 */}
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

        {/* 테스트 유도 */}
        <div
          className="mt-10 rounded-2xl p-6 text-center"
          style={{
            background: 'linear-gradient(135deg, #16213e, #0f3460)',
            border: '1px solid #e0c97f20',
          }}
        >
          <p className="text-sm mb-4" style={{ color: '#9090b0' }}>
            칼럼이 재미있으셨나요? 나의 운세를 직접 확인해보세요.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link
              href="/saju"
              className="px-4 py-2 rounded-xl text-sm font-bold transition-all hover:scale-105"
              style={{ background: 'linear-gradient(135deg, #9c59d1, #6a3db8)', color: '#fff' }}
            >
              🔮 사주팔자 보기
            </Link>
            <Link
              href="/test/love"
              className="px-4 py-2 rounded-xl text-sm font-bold transition-all hover:scale-105"
              style={{ background: 'linear-gradient(135deg, #e05c7f, #b03560)', color: '#fff' }}
            >
              💘 연애유형 테스트
            </Link>
            <Link
              href="/test/mbti"
              className="px-4 py-2 rounded-xl text-sm font-bold transition-all hover:scale-105"
              style={{ background: 'linear-gradient(135deg, #00cc77, #00994d)', color: '#fff' }}
            >
              🧩 MBTI 테스트
            </Link>
          </div>
        </div>

        <div className="mt-6 text-center">
          <Link href="/blog" className="text-sm" style={{ color: '#6b7280' }}>
            ← 다른 칼럼 보기
          </Link>
        </div>
      </div>
    </div>
  )
}
