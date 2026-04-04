/**
 * 운세/심리 칼럼 자동 생성 스크립트
 *
 * 사용법:
 *   ANTHROPIC_API_KEY=sk-... node scripts/generate-post.mjs
 *   ANTHROPIC_API_KEY=sk-... node scripts/generate-post.mjs --lang en
 *   ANTHROPIC_API_KEY=sk-... node scripts/generate-post.mjs --topic "MBTI와 재물운"
 */

import Anthropic from '@anthropic-ai/sdk'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const rootDir = path.join(__dirname, '..')

const lang = process.argv.includes('--lang')
  ? process.argv[process.argv.indexOf('--lang') + 1]
  : 'ko'

const topicArg = process.argv.includes('--topic')
  ? process.argv[process.argv.indexOf('--topic') + 1]
  : null

// 주제 풀 (랜덤 선택)
const KO_TOPICS = [
  '봄철 오행 에너지와 사주 운세',
  'MBTI별 연애 성공 전략',
  '2026년 재물운 극대화하는 법',
  '직업 적성과 사주의 연관성',
  '연애유형별 이상적인 파트너',
  '금전운을 높이는 생활 습관',
  '사주로 보는 나의 숨겨진 재능',
  'MBTI와 직업 적성의 상관관계',
  '여름 운세: 화(火)의 기운 활용법',
  '스트레스 유형과 심리 유형의 관계',
  '관상으로 보는 나의 재물운 — 코와 광대뼈의 비밀',
  '손금 생명선 완전 해석 — 길이보다 중요한 것은?',
  '관상학으로 보는 직업운 — 이마와 눈썹이 말하는 적성',
  '감정선으로 읽는 연애 스타일 — 내 손금 속 사랑의 패턴',
]

const EN_TOPICS = [
  'How Your Birth Season Shapes Your Four Pillars Fortune',
  'MBTI and Love Compatibility: What the Research Says',
  'Five Elements Guide to Building Wealth in 2026',
  'Career Success According to Your Four Pillars',
  'Understanding Attachment Styles Through an Eastern Lens',
  'The Psychology Behind Money Personalities',
  'Hidden Talents Revealed by Your Four Pillars',
  'MBTI Career Paths: Which Type Thrives Where',
  'Summer Fortune: Harnessing Fire Energy',
  'Stress Patterns Across 16 MBTI Types',
  'Face Reading: What Your Nose Says About Your Wealth Fortune',
  'Palm Reading Guide: The Life Line and What It Really Means',
  'Physiognomy and Career: What Your Forehead Reveals About Success',
  'Heart Line in Palmistry: Decoding Your Love and Emotion Style',
]

const KO_CATEGORIES = ['사주운세', '심리분석', 'MBTI', '연애심리', '재물운', '직업', '관상', '손금']
const EN_CATEGORIES = ['Fortune', 'Psychology', 'MBTI', 'Love', 'Wealth', 'Career', 'Physiognomy', 'Palmistry']

function getTodaySlug() {
  return new Date().toISOString().slice(0, 10)
}

function randomPick(arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}

async function generatePost(topic, lang) {
  const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY })

  const isKo = lang === 'ko'
  const categories = isKo ? KO_CATEGORIES : EN_CATEGORIES

  const systemPrompt = isKo
    ? `당신은 사주·심리·MBTI 전문 칼럼니스트입니다.
독자는 20-40대 한국인으로, 운세와 심리에 관심이 많습니다.
마크다운 형식으로 작성하되, 실용적이고 흥미로운 내용을 담아주세요.
글 말미에는 반드시 사이트의 테스트(/saju, /test/love, /test/mbti, /test/career, /test/money)로 유도하는 자연스러운 문장을 포함해주세요.`
    : `You are an expert columnist specializing in Four Pillars, psychology, and MBTI.
Your readers are English-speaking adults aged 20-40 interested in personality and fortune.
Write in Markdown format with engaging, practical content.
Always end with a natural call-to-action linking to the site's tests (/en/saju, /en/test/love, /en/test/mbti, /en/test/career, /en/test/money).`

  const userPrompt = isKo
    ? `다음 주제로 SEO에 최적화된 칼럼을 작성해주세요: "${topic}"

반드시 아래 YAML frontmatter로 시작해주세요:
---
title: "제목"
description: "설명 (150자 이내)"
date: "${getTodaySlug()}"
category: "${randomPick(categories)}"
tags: ["태그1", "태그2", "태그3", "태그4"]
---

본문은 700-1000자 분량으로, h2/h3 헤더와 구조화된 내용으로 작성해주세요.`
    : `Write an SEO-optimized column on: "${topic}"

Start with this YAML frontmatter:
---
title: "Title"
description: "Description (under 150 chars)"
date: "${getTodaySlug()}"
category: "${randomPick(categories)}"
tags: ["tag1", "tag2", "tag3", "tag4"]
---

Write 500-800 words with h2/h3 headers and structured content.`

  console.log(`[generate-post] 주제: ${topic} (${lang})`)
  console.log('[generate-post] Claude API 호출 중...')

  const message = await client.messages.create({
    model: 'claude-haiku-4-5-20251001',
    max_tokens: 2048,
    messages: [{ role: 'user', content: userPrompt }],
    system: systemPrompt,
  })

  const content = message.content[0].type === 'text' ? message.content[0].text : ''

  // frontmatter에서 title 추출해서 슬러그 생성
  const titleMatch = content.match(/title:\s*"(.+)"/)
  const title = titleMatch ? titleMatch[1] : topic
  const slugTitle = title
    .toLowerCase()
    .replace(/[^a-z0-9가-힣\s]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .slice(0, 50)

  const slug = `${getTodaySlug()}-${slugTitle}`
  const dir = isKo ? 'posts' : 'en-posts'
  const filePath = path.join(rootDir, 'content', dir, `${slug}.md`)

  fs.writeFileSync(filePath, content, 'utf8')
  console.log(`[generate-post] 저장 완료: content/${dir}/${slug}.md`)

  return { slug, filePath }
}

async function main() {
  if (!process.env.ANTHROPIC_API_KEY) {
    console.error('[generate-post] ANTHROPIC_API_KEY 환경변수가 필요합니다.')
    process.exit(1)
  }

  const topics = lang === 'ko' ? KO_TOPICS : EN_TOPICS
  const topic = topicArg ?? randomPick(topics)

  try {
    const { slug } = await generatePost(topic, lang)
    console.log(`[generate-post] 완료! 슬러그: ${slug}`)
  } catch (err) {
    console.error('[generate-post] 오류:', err.message)
    process.exit(1)
  }
}

main()
