import type { Metadata } from 'next'
import { getAllPosts } from '@/lib/posts'
import GwansangClient from './GwansangClient'

export const metadata: Metadata = {
  title: '관상학 칼럼 | 운명의 실',
  description: '얼굴 부위별 관상 해석, 이마·눈·코·입·귀·턱으로 보는 운세와 성격. 부위를 클릭하면 상세 해설을 확인할 수 있습니다.',
}

export default function GwansangPage() {
  const posts = getAllPosts('ko').filter(p => p.category === '관상')
  return <GwansangClient posts={posts} />
}
