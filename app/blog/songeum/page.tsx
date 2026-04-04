import type { Metadata } from 'next'
import { getAllPosts } from '@/lib/posts'
import SongeumClient from './SongeumClient'

export const metadata: Metadata = {
  title: '손금학 칼럼 | 운명의 실',
  description: '생명선·감정선·두뇌선·운명선과 태양구·금성구·월구 등 손금 전체를 이미지 위 버튼으로 쉽게 확인하세요.',
}

export default function SongeumPage() {
  const posts = getAllPosts('ko').filter(p => p.category === '손금')
  return <SongeumClient posts={posts} />
}
