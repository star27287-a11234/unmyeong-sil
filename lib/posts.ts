import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import remarkHtml from 'remark-html'

export interface Post {
  slug: string
  title: string
  description: string
  date: string
  category: string
  tags: string[]
  contentHtml?: string
}

function getPostsDir(lang: 'ko' | 'en' = 'ko') {
  const dir = lang === 'en' ? 'en-posts' : 'posts'
  return path.join(process.cwd(), 'content', dir)
}

export function getAllPosts(lang: 'ko' | 'en' = 'ko'): Post[] {
  const postsDir = getPostsDir(lang)
  if (!fs.existsSync(postsDir)) return []

  const fileNames = fs.readdirSync(postsDir).filter(f => f.endsWith('.md'))

  const posts = fileNames.map(fileName => {
    const slug = fileName.replace(/\.md$/, '')
    const fullPath = path.join(postsDir, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data } = matter(fileContents)

    return {
      slug,
      title: data.title as string,
      description: data.description as string,
      date: data.date as string,
      category: data.category as string,
      tags: (data.tags as string[]) ?? [],
    }
  })

  return posts.sort((a, b) => (a.date > b.date ? -1 : 1))
}

export async function getPostBySlug(slug: string, lang: 'ko' | 'en' = 'ko'): Promise<Post | null> {
  const postsDir = getPostsDir(lang)
  const fullPath = path.join(postsDir, `${slug}.md`)
  if (!fs.existsSync(fullPath)) return null

  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  const processed = await remark().use(remarkHtml).process(content)
  const contentHtml = processed.toString()

  return {
    slug,
    title: data.title as string,
    description: data.description as string,
    date: data.date as string,
    category: data.category as string,
    tags: (data.tags as string[]) ?? [],
    contentHtml,
  }
}
