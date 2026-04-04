import type { Metadata } from 'next'
import Link from 'next/link'
import { getAllPosts } from '@/lib/posts'

export const metadata: Metadata = {
  title: '손금학 칼럼 | 운명의 실',
  description: '생명선·감정선·두뇌선·운명선으로 보는 나의 운세. 손금학의 기초부터 심화까지, 손바닥이 말하는 운명을 읽어보세요.',
}

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

        {/* SVG 일러스트 카드 */}
        <div
          className="rounded-2xl p-6 mb-10"
          style={{
            background: 'linear-gradient(135deg, #0f2018, #0a1a12)',
            border: '1px solid #50a06030',
          }}
        >
          <h2 className="text-lg font-bold mb-4 text-center" style={{ color: '#80e0a0' }}>
            손바닥 선 해설도
          </h2>
          <div className="flex justify-center mb-4">
            <img
              src="/images/songeum/palm-diagram.svg"
              alt="손금학 손바닥 선 설명도"
              width={560}
              height={620}
              style={{ maxWidth: '100%', height: 'auto', borderRadius: '12px' }}
            />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-4">
            {[
              { line: '생명선', meaning: '건강·활력·수명', color: '#e05050' },
              { line: '두뇌선', meaning: '지능·사고력·판단', color: '#5090e0' },
              { line: '감정선', meaning: '연애운·감성·인간관계', color: '#e060a0' },
              { line: '운명선', meaning: '사업운·성공·직업', color: '#e0c050' },
              { line: '태양선', meaning: '명예·재물운·행운', color: '#e09030' },
              { line: '결혼선', meaning: '인연·결혼운·파트너', color: '#b080e0' },
            ].map(item => (
              <div
                key={item.line}
                className="rounded-xl p-3 text-center"
                style={{ background: '#0a1a0a', border: `1px solid ${item.color}30` }}
              >
                <div className="text-sm font-bold mb-1" style={{ color: item.color }}>
                  {item.line}
                </div>
                <div className="text-xs" style={{ color: '#607060' }}>
                  {item.meaning}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 손금 기초 설명 */}
        <div
          className="rounded-2xl p-6 mb-10"
          style={{
            background: 'linear-gradient(135deg, #0c1a0c, #0a150a)',
            border: '1px solid #50a06020',
          }}
        >
          <h2 className="text-xl font-bold mb-4" style={{ color: '#e0c97f' }}>
            손금학이란?
          </h2>
          <div className="space-y-3 text-sm leading-relaxed" style={{ color: '#809080' }}>
            <p>
              손금학(手相學)은 손바닥의 선과 형태, 피부의 질감, 손가락의 길이와 모양을 통해 <strong style={{ color: '#80e0a0' }}>성격, 건강, 운세의 흐름</strong>을 읽는 동양과 서양 모두에 뿌리를 둔 고대 학문입니다.
            </p>
            <p>
              손의 선은 고정된 것이 아닙니다. <strong style={{ color: '#80e0a0' }}>삶의 방식과 마음가짐에 따라 변화</strong>하며, 이는 손금이 운명을 결정하는 것이 아니라 현재의 삶을 반영한다는 것을 의미합니다.
            </p>
            <p>
              <span style={{ color: '#e0c97f' }}>3대 주선(생명선·두뇌선·감정선)</span>은 누구에게나 존재하며, 운명선·태양선·결혼선은 사람마다 다르게 나타납니다.
            </p>
          </div>

          {/* 손금 보는 법 팁 */}
          <div
            className="mt-5 rounded-xl p-4"
            style={{ background: '#0a2a0a', border: '1px solid #50a06020' }}
          >
            <h3 className="text-sm font-bold mb-3" style={{ color: '#80e0a0' }}>✋ 손금 보는 기본 원칙</h3>
            <div className="space-y-2 text-xs" style={{ color: '#708070' }}>
              <div className="flex gap-2">
                <span style={{ color: '#e0c97f' }}>→</span>
                <span><strong style={{ color: '#a0c0a0' }}>주로 사용하는 손</strong>이 현재와 미래를, <strong style={{ color: '#a0c0a0' }}>반대 손</strong>이 타고난 잠재력을 보여줍니다</span>
              </div>
              <div className="flex gap-2">
                <span style={{ color: '#e0c97f' }}>→</span>
                <span>선이 <strong style={{ color: '#a0c0a0' }}>깊고 뚜렷</strong>할수록 해당 영역의 에너지가 강하고, <strong style={{ color: '#a0c0a0' }}>흐리거나 끊긴 선</strong>은 그 에너지의 불안정을 나타냅니다</span>
              </div>
              <div className="flex gap-2">
                <span style={{ color: '#e0c97f' }}>→</span>
                <span>선의 길이뿐만 아니라 <strong style={{ color: '#a0c0a0' }}>방향, 곡률, 분기점</strong>도 중요한 의미를 가집니다</span>
              </div>
            </div>
          </div>
        </div>

        {/* 손금 선별 상세 의미 */}
        <div className="mb-10">
          <h2 className="text-xl font-bold mb-5" style={{ color: '#80e0a0' }}>주요 손금 선 해설</h2>
          <div className="space-y-4">
            {[
              {
                line: '생명선 (生命線)',
                color: '#e05050',
                desc: '엄지손가락 아래를 감싸는 호형(弧形)의 선. 수명보다는 삶의 활력과 건강, 생명력을 나타냅니다. 선이 길고 깊을수록 에너지가 풍부하며, 중간에 섬 모양이 있으면 해당 시기의 건강 주의를 의미합니다.',
                tips: ['선이 길수록: 건강한 체력', '선이 넓은 호: 활동적 성격', '섬(○): 건강 주의 시기'],
              },
              {
                line: '감정선 (感情線)',
                color: '#e060a0',
                desc: '새끼손가락 아래에서 시작해 검지 방향으로 이어지는 가로선. 감정 표현 방식과 연애 패턴, 인간관계를 나타냅니다. 선이 검지 아래까지 올라오면 이상주의적 연애형.',
                tips: ['검지 아래 도달: 이상주의형', '중지 아래 끝: 현실주의형', '끝이 갈라짐: 다양한 감정'],
              },
              {
                line: '두뇌선 (頭腦線)',
                color: '#5090e0',
                desc: '엄지와 검지 사이에서 시작해 손바닥을 가로지르는 선. 사고 방식과 지적 능력, 의사결정 패턴을 나타냅니다. 선이 길고 직선이면 논리적이고, 아래로 휘면 창의적.',
                tips: ['직선: 논리적·현실적', '아래로 휨: 창의적·직관적', '짧고 강함: 결단력 있음'],
              },
              {
                line: '운명선 (運命線)',
                color: '#e0c050',
                desc: '손목 아래에서 중지 방향으로 올라가는 세로선. 삶의 방향성과 목표, 직업적 성취를 나타냅니다. 없는 사람도 많으며, 없다고 해서 나쁜 것은 아닙니다.',
                tips: ['선이 뚜렷: 목표 의식 강함', '중간에 시작: 중반 성공형', '선이 없음: 자유로운 삶'],
              },
            ].map(item => (
              <div
                key={item.line}
                className="rounded-2xl p-5"
                style={{
                  background: 'linear-gradient(135deg, #0c1a0c, #0a150a)',
                  border: `1px solid ${item.color}25`,
                }}
              >
                <h3 className="text-base font-bold mb-2" style={{ color: item.color }}>{item.line}</h3>
                <p className="text-sm mb-3 leading-relaxed" style={{ color: '#809080' }}>{item.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {item.tips.map(tip => (
                    <span
                      key={tip}
                      className="text-xs px-2 py-1 rounded-lg"
                      style={{ background: `${item.color}12`, color: item.color, border: `1px solid ${item.color}20` }}
                    >
                      {tip}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
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
              <p className="text-sm mt-2" style={{ color: '#405040' }}>곧 새로운 칼럼이 업로드됩니다!</p>
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
          className="rounded-2xl p-6 text-center mt-8"
          style={{
            background: 'linear-gradient(135deg, #0f2018, #0a1a12)',
            border: '1px solid #50a06030',
          }}
        >
          <p className="text-sm mb-4" style={{ color: '#809080' }}>
            손금에 이어 사주와 심리로 나를 더 깊게 알아보세요
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
              href="/test/money"
              className="px-4 py-2 rounded-xl text-sm font-bold transition-all hover:scale-105"
              style={{ background: 'linear-gradient(135deg, #e0c050, #a08020)', color: '#fff' }}
            >
              💰 금전운 테스트
            </Link>
            <Link
              href="/blog/gwansang"
              className="px-4 py-2 rounded-xl text-sm font-bold transition-all hover:scale-105"
              style={{ background: 'linear-gradient(135deg, #9c59d1, #7040a0)', color: '#fff' }}
            >
              👁 관상 보러 가기
            </Link>
          </div>
        </div>

      </div>
    </div>
  )
}
