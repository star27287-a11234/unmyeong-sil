import type { Metadata } from 'next'
import { getAllPosts } from '@/lib/posts'
import SongeumClientEn from './SongeumClientEn'

export const metadata: Metadata = {
  title: 'Palm Reading Guide | Thread of Fate',
  description: 'Discover the meaning of every line and mount on your palm. Click the numbered buttons on the hand image to explore detailed explanations.',
}

export default function SongeumEnPage() {
  const posts = getAllPosts('en').filter(p => p.category === 'Palmistry')
  return <SongeumClientEn posts={posts} />
}
