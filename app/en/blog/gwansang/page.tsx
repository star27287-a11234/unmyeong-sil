import type { Metadata } from 'next'
import { getAllPosts } from '@/lib/posts'
import GwansangClientEn from './GwansangClientEn'

export const metadata: Metadata = {
  title: 'Physiognomy Guide | Thread of Fate',
  description: 'Learn what each facial feature reveals about your fortune and personality. Click any numbered button on the face image to jump to detailed explanations.',
}

export default function GwansangEnPage() {
  const posts = getAllPosts('en').filter(p => p.category === 'Physiognomy')
  return <GwansangClientEn posts={posts} />
}
