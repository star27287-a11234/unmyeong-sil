import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { getAllPosts } from '@/lib/posts'

export const metadata: Metadata = {
  title: '관상학 칼럼 | 운명의 실',
  description: '얼굴 부위별 관상 해석, 이마·눈·코·입·귀·턱으로 보는 운세와 성격. 동양 관상학의 지혜를 쉽게 풀어드립니다.',
}

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

        {/* SVG 일러스트 카드 */}
        <div
          className="rounded-2xl p-6 mb-10"
          style={{
            background: 'linear-gradient(135deg, #16213e, #0f1f3d)',
            border: '1px solid #9c59d130',
          }}
        >
          <h2 className="text-lg font-bold mb-4 text-center" style={{ color: '#c8a8e0' }}>
            얼굴 부위별 운세 해설도
          </h2>
          <div className="flex justify-center mb-4">
            <img
              src="/images/gwansang/face-diagram.svg"
              alt="관상학 얼굴 부위 설명도"
              width={560}
              height={620}
              style={{ maxWidth: '100%', height: 'auto', borderRadius: '12px' }}
            />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-4">
            {[
              { part: '이마', meaning: '초년운·지성', color: '#e0c97f' },
              { part: '눈·눈썹', meaning: '감성·중년운', color: '#60b8e0' },
              { part: '코', meaning: '재물운·건강', color: '#e08040' },
              { part: '귀', meaning: '초년운·장수', color: '#80e0a0' },
              { part: '광대뼈', meaning: '권력·리더십', color: '#e0c060' },
              { part: '인중', meaning: '생명력·자녀운', color: '#60c0c0' },
              { part: '입', meaning: '말년운·식복', color: '#e06080' },
              { part: '턱', meaning: '의지력·만년운', color: '#a080e0' },
            ].map(item => (
              <div
                key={item.part}
                className="rounded-xl p-3 text-center"
                style={{ background: '#0d0d2b', border: `1px solid ${item.color}30` }}
              >
                <div className="text-sm font-bold mb-1" style={{ color: item.color }}>
                  {item.part}
                </div>
                <div className="text-xs" style={{ color: '#6b7280' }}>
                  {item.meaning}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 관상 기초 설명 */}
        <div
          className="rounded-2xl p-6 mb-10"
          style={{
            background: 'linear-gradient(135deg, #12122e, #0e0e28)',
            border: '1px solid #9c59d120',
          }}
        >
          <h2 className="text-xl font-bold mb-4" style={{ color: '#e0c97f' }}>
            관상학이란?
          </h2>
          <div className="space-y-3 text-sm leading-relaxed" style={{ color: '#9090b0' }}>
            <p>
              관상학(觀相學)은 얼굴의 생김새와 골격, 피부색, 이목구비의 형태를 통해 그 사람의 <strong style={{ color: '#c8a8e0' }}>성격, 기질, 운명의 흐름</strong>을 읽는 동양의 전통 학문입니다.
            </p>
            <p>
              중국의 <strong style={{ color: '#c8a8e0' }}>오행(五行) 철학</strong>과 결합하여 체계화된 관상학은 단순한 점술을 넘어, 사람을 이해하는 깊은 통찰의 도구로 활용되어 왔습니다.
            </p>
            <p>
              얼굴은 <span style={{ color: '#e0c97f' }}>초년운(이마)·중년운(코)·말년운(턱)</span>의 세 구역으로 나뉘며, 각 부위는 삶의 서로 다른 시기와 영역에 대응합니다.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-3 mt-5">
            {[
              { zone: '상정 (上停)', parts: '이마·눈썹·눈', period: '초년 (0~30세)', color: '#e0c97f' },
              { zone: '중정 (中停)', parts: '코·귀·광대', period: '중년 (30~50세)', color: '#c8a8e0' },
              { zone: '하정 (下停)', parts: '입·인중·턱', period: '말년 (50세~)', color: '#80e0a0' },
            ].map(z => (
              <div
                key={z.zone}
                className="rounded-xl p-3 text-center"
                style={{ background: '#0d0d2b', border: `1px solid ${z.color}30` }}
              >
                <div className="text-xs font-bold mb-1" style={{ color: z.color }}>{z.zone}</div>
                <div className="text-xs mb-1" style={{ color: '#a0a0c0' }}>{z.parts}</div>
                <div className="text-xs" style={{ color: '#606080' }}>{z.period}</div>
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
              <p className="text-sm mt-2" style={{ color: '#4a4a6a' }}>곧 새로운 칼럼이 업로드됩니다!</p>
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
          className="rounded-2xl p-6 text-center mt-8"
          style={{
            background: 'linear-gradient(135deg, #1a1040, #0f0f2e)',
            border: '1px solid #9c59d130',
          }}
        >
          <p className="text-sm mb-4" style={{ color: '#9090b0' }}>
            관상이 궁금하다면, 사주로 더 깊이 들여다보세요
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
              href="/blog/songeum"
              className="px-4 py-2 rounded-xl text-sm font-bold transition-all hover:scale-105"
              style={{ background: 'linear-gradient(135deg, #50a060, #307040)', color: '#fff' }}
            >
              ✋ 손금 보러 가기
            </Link>
          </div>
        </div>

      </div>
    </div>
  )
}
