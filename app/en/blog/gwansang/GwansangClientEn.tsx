'use client'

import Link from 'next/link'
import { useState } from 'react'
import type { Post } from '@/lib/posts'

interface Props {
  posts: Post[]
}

const FACE_PARTS = [
  {
    id: 'ge-forehead',
    num: 1,
    part: 'Forehead',
    chinese: '額',
    zone: 'Upper Region · Early Fortune',
    color: '#e0c97f',
    x: 10, y: 8,
    keywords: ['Intelligence', 'Parental Luck', 'Early Success'],
    desc: 'The forehead governs your early fortune (ages 0–30). A wide, smooth forehead indicates intelligence and parental support, suggesting success in education and career during early life.',
    detail: [
      { shape: 'Wide & smooth', meaning: 'Intelligence, patronage, academic achievement' },
      { shape: 'Narrow forehead', meaning: 'Self-made type, hardship in youth, strong willpower' },
      { shape: 'Many forehead lines', meaning: 'Deep thinker, strong sense of responsibility' },
      { shape: 'Prominent forehead', meaning: 'Ambitious nature, leader type' },
    ],
  },
  {
    id: 'ge-brow-top',
    num: 2,
    part: 'Above the Brows',
    chinese: '眉上',
    zone: 'Upper Region · Success',
    color: '#c8d8ff',
    x: 30, y: 25,
    keywords: ['Success Fortune'],
    desc: 'The area just above the eyebrows relates directly to social success and achievement. A flat, full area here indicates greater social recognition and honor.',
    detail: [
      { shape: 'Flat & full', meaning: 'Social success, honor, status' },
      { shape: 'Raised brows', meaning: 'Ambitious, proactive spirit' },
      { shape: 'Scar or mole here', meaning: 'Ups and downs early on, but resilient type' },
    ],
  },
  {
    id: 'ge-eyebrow',
    num: 3,
    part: 'Eyebrows',
    chinese: '眉',
    zone: 'Upper Region · Siblings & Character',
    color: '#c8a8e0',
    x: 10, y: 37,
    keywords: ['Wisdom', 'Virtue', 'Character'],
    desc: 'The eyebrows reveal sibling luck, friendship, and character. Thick, well-defined brows indicate strong willpower; light brows suggest a more sensitive nature.',
    detail: [
      { shape: 'Thick & clear', meaning: 'Strong will, good sibling luck, leadership' },
      { shape: 'Light & thin', meaning: 'Delicate, artistic, collaborative' },
      { shape: 'Upward-arching ends', meaning: 'Assertive personality, strong pride, ambition' },
      { shape: 'Long brows', meaning: 'Longevity, virtue, thoroughness' },
      { shape: 'Wide gap between brows', meaning: 'Generous, forgiving nature' },
    ],
  },
  {
    id: 'ge-ear',
    num: 4,
    part: 'Ears',
    chinese: '耳',
    zone: 'Upper Region · Longevity & Virtue',
    color: '#80e0a0',
    x: 10, y: 51,
    keywords: ['Wisdom', 'Virtue', 'Character'],
    desc: 'The ears symbolize innate fortune, longevity, and early life environment. Ears positioned higher than average indicate wisdom; thick earlobes suggest abundant blessings.',
    detail: [
      { shape: 'Positioned high', meaning: 'Wisdom, precocious nature, intelligence' },
      { shape: 'Thick earlobes', meaning: 'Blessings, longevity, wealth' },
      { shape: 'Ears close to head', meaning: 'Practical and cautious personality' },
      { shape: 'Large & thick ears', meaning: 'Long life, generous character' },
    ],
  },
  {
    id: 'ge-eye',
    num: 5,
    part: 'Eyes',
    chinese: '眼',
    zone: 'Middle Region · Mid-life Fortune',
    color: '#60b8e0',
    x: 65, y: 30,
    keywords: ['Wisdom', 'Mental Strength', 'Social Luck'],
    desc: 'The eyes are the most important feature in physiognomy. Clear, bright eyes indicate wisdom and strong social luck. They reflect current mental state and mid-life fortune.',
    detail: [
      { shape: 'Clear & bright', meaning: 'Intelligence, strong mental energy, helpful connections' },
      { shape: 'Large eyes', meaning: 'Rich emotional life, popular, idealistic' },
      { shape: 'Narrow eyes', meaning: 'Observant, cautious, decisive' },
      { shape: 'Upward-slanting corners', meaning: 'Assertive, strong self-esteem' },
      { shape: 'Downward-slanting corners', meaning: 'Gentle, forgiving, well-liked' },
    ],
  },
  {
    id: 'ge-nose',
    num: 6,
    part: 'Nose',
    chinese: '鼻',
    zone: 'Middle Region · Wealth Palace',
    color: '#e08040',
    x: 65, y: 44,
    keywords: ['Wealth Fortune', 'Self-esteem'],
    desc: 'The nose is called the "Palace of Wealth." A rounded, full nose tip indicates strong wealth accumulation. Well-developed nostrils suggest strong desire for prosperity.',
    detail: [
      { shape: 'Round & full tip', meaning: 'Strong wealth fortune, good at saving' },
      { shape: 'High nose bridge', meaning: 'Strong self-esteem, leadership, independence' },
      { shape: 'Developed nostrils', meaning: 'Strong ambition for wealth, business acumen' },
      { shape: 'Pointed nose', meaning: 'Sensitive personality, wealth tends to slip away' },
    ],
  },
  {
    id: 'ge-philtrum',
    num: 7,
    part: 'Philtrum',
    chinese: '人中',
    zone: 'Lower Region · Vitality',
    color: '#60c0c0',
    x: 65, y: 56,
    keywords: ['Health', 'Longevity', 'Descendants'],
    desc: 'The philtrum (groove between nose and lips) represents health, longevity, and descendants. A long, well-defined philtrum indicates long life and flourishing offspring.',
    detail: [
      { shape: 'Long & well-defined', meaning: 'Longevity, flourishing descendants, strong vitality' },
      { shape: 'Wide philtrum', meaning: 'Attractive to opposite sex, good children\'s luck' },
      { shape: 'Short philtrum', meaning: 'Impatient nature, frequent changes in relationships' },
      { shape: 'Vertical lines in philtrum', meaning: 'Strong bond with children' },
    ],
  },
  {
    id: 'ge-mouth',
    num: 8,
    part: 'Mouth & Corners',
    chinese: '口',
    zone: 'Lower Region · Late-life Fortune',
    color: '#e06080',
    x: 65, y: 65,
    keywords: ['Eloquence', 'Trustworthiness', 'Relationships', 'Charisma'],
    desc: 'The mouth governs late-life fortune and social blessings. Upturned corners indicate excellent communication skills and widespread popularity.',
    detail: [
      { shape: 'Large & full mouth', meaning: 'Food blessings, late-life abundance, strong execution' },
      { shape: 'Upturned corners', meaning: 'Bright personality, eloquent, popular with others' },
      { shape: 'Full lips', meaning: 'Emotionally rich, loyal' },
      { shape: 'Thin lips', meaning: 'Rational, analytical personality' },
      { shape: 'Downturned corners', meaning: 'Thoughtful, meticulous personality' },
    ],
  },
  {
    id: 'ge-chin',
    num: 9,
    part: 'Chin',
    chinese: '頤',
    zone: 'Lower Region · Late-life Fortune',
    color: '#a080e0',
    x: 65, y: 77,
    keywords: ['Late-life Fortune', 'Decisiveness', 'Perseverance'],
    desc: 'The chin represents late-life fortune and willpower. A round, full chin indicates a prosperous old age with good children\'s luck. A square jaw suggests strong decisiveness.',
    detail: [
      { shape: 'Round & full chin', meaning: 'Late-life blessings, good children, social stability' },
      { shape: 'Square jaw', meaning: 'Strong willpower, decisiveness, drive' },
      { shape: 'Pointed chin', meaning: 'Sensitive, highly emotional personality' },
      { shape: 'Double chin', meaning: 'Wealth blessings, comfortable later years' },
    ],
  },
]

export default function GwansangClientEn({ posts }: Props) {
  const [active, setActive] = useState<string | null>(null)

  const scrollTo = (id: string) => {
    setActive(id)
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 50)
    setTimeout(() => setActive(null), 2000)
  }

  return (
    <div className="min-h-screen py-10 px-4">
      <div className="max-w-3xl mx-auto">

        {/* Header */}
        <div className="text-center mb-8">
          <Link href="/en/blog" className="text-xs mb-4 inline-block" style={{ color: '#6b7280' }}>
            ← All Columns
          </Link>
          <h1 className="text-4xl font-black mb-3" style={{ color: '#c8a8e0' }}>
            Physiognomy · 觀相學
          </h1>
          <p style={{ color: '#8080a0' }}>The story of destiny written in your face</p>
        </div>

        {/* Image + Overlay Buttons */}
        <div
          className="rounded-2xl overflow-hidden mb-3"
          style={{ border: '1px solid #9c59d130', background: '#0e0e24' }}
        >
          <div className="px-4 pt-4 pb-2 text-center">
            <h2 className="text-base font-bold" style={{ color: '#c8a8e0' }}>
              Facial Feature Fortune Guide
            </h2>
          </div>
          <div className="relative mx-4 mb-4">
            <img
              src="/images/gwansang/face-reference.png"
              alt="Physiognomy facial feature fortune guide"
              style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '10px' }}
            />
            {FACE_PARTS.map(part => (
              <button
                key={part.id}
                onClick={() => scrollTo(part.id)}
                title={`${part.num}. ${part.part} — ${part.keywords.join(', ')}`}
                style={{
                  position: 'absolute',
                  left: `${part.x}%`,
                  top: `${part.y}%`,
                  transform: 'translate(-50%, -50%)',
                  width: '26px',
                  height: '26px',
                  borderRadius: '50%',
                  background: part.color,
                  border: '2px solid rgba(255,255,255,0.85)',
                  cursor: 'pointer',
                  fontSize: '11px',
                  fontWeight: '800',
                  color: '#1a1a1a',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 2px 6px rgba(0,0,0,0.5)',
                  transition: 'transform 0.15s ease, box-shadow 0.15s ease',
                  zIndex: 10,
                }}
                onMouseEnter={e => {
                  ;(e.currentTarget as HTMLButtonElement).style.transform = 'translate(-50%, -50%) scale(1.3)'
                  ;(e.currentTarget as HTMLButtonElement).style.boxShadow = '0 4px 12px rgba(0,0,0,0.7)'
                }}
                onMouseLeave={e => {
                  ;(e.currentTarget as HTMLButtonElement).style.transform = 'translate(-50%, -50%) scale(1)'
                  ;(e.currentTarget as HTMLButtonElement).style.boxShadow = '0 2px 6px rgba(0,0,0,0.5)'
                }}
              >
                {part.num}
              </button>
            ))}
          </div>
        </div>

        {/* How to Use */}
        <div
          className="rounded-xl px-4 py-3 mb-6 text-sm"
          style={{ background: '#e0c97f12', border: '1px solid #e0c97f30' }}
        >
          <p className="font-bold mb-1" style={{ color: '#e0c97f' }}>💡 How to Use</p>
          <ol className="space-y-1 text-xs" style={{ color: '#9090a8' }}>
            <li>① Click the <span style={{ color: '#e0c97f' }}>numbered buttons</span> on the image to jump to that feature's explanation</li>
            <li>② Use the <span style={{ color: '#e0c97f' }}>feature selection buttons</span> below for the same effect</li>
            <li>③ Use the <span style={{ color: '#e0c97f' }}>↑ Back to Image</span> button at the bottom of each section to return</li>
          </ol>
        </div>

        {/* Feature Selection Grid */}
        <div
          className="rounded-2xl p-4 mb-8"
          style={{ background: '#0e0e24', border: '1px solid #9c59d120' }}
        >
          <p className="text-xs mb-3 font-medium" style={{ color: '#6060a0' }}>Select a feature →</p>
          <div className="grid grid-cols-3 gap-2">
            {FACE_PARTS.map(part => (
              <button
                key={part.id}
                onClick={() => scrollTo(part.id)}
                className="flex items-center gap-2 rounded-xl px-3 py-2 text-left transition-all duration-150"
                style={{ background: `${part.color}15`, border: `1px solid ${part.color}35`, cursor: 'pointer' }}
                onMouseEnter={e => { ;(e.currentTarget as HTMLButtonElement).style.background = `${part.color}28` }}
                onMouseLeave={e => { ;(e.currentTarget as HTMLButtonElement).style.background = `${part.color}15` }}
              >
                <span
                  className="shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold"
                  style={{ background: part.color, color: '#1a1a1a' }}
                >
                  {part.num}
                </span>
                <span className="text-xs font-semibold truncate" style={{ color: part.color }}>
                  {part.part}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Three Regions Summary */}
        <div
          className="rounded-2xl p-5 mb-6"
          style={{ background: 'linear-gradient(135deg, #12122e, #0e0e28)', border: '1px solid #9c59d120' }}
        >
          <h2 className="text-base font-bold mb-3" style={{ color: '#e0c97f' }}>Three Facial Regions (三停)</h2>
          <div className="grid grid-cols-3 gap-2">
            {[
              { zone: 'Upper (上停)', parts: 'Forehead · Brows · Eyes · Ears', period: 'Early Life 0–30', color: '#e0c97f' },
              { zone: 'Middle (中停)', parts: 'Eyes · Nose · Cheeks', period: 'Mid Life 30–50', color: '#c8a8e0' },
              { zone: 'Lower (下停)', parts: 'Mouth · Philtrum · Chin', period: 'Later Life 50+', color: '#80e0a0' },
            ].map(z => (
              <div key={z.zone} className="rounded-xl p-3 text-center" style={{ background: '#0d0d2b', border: `1px solid ${z.color}25` }}>
                <div className="text-xs font-bold mb-1" style={{ color: z.color }}>{z.zone}</div>
                <div className="text-xs mb-1" style={{ color: '#a0a0c0' }}>{z.parts}</div>
                <div className="text-xs" style={{ color: '#606080' }}>{z.period}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Detailed Sections */}
        <h2 className="text-lg font-bold mb-4" style={{ color: '#c8a8e0' }}>Feature-by-Feature Guide</h2>
        <div className="space-y-3 mb-10">
          {FACE_PARTS.map(part => (
            <div
              key={part.id}
              id={part.id}
              className="rounded-2xl overflow-hidden transition-all duration-300"
              style={{
                border: `1px solid ${active === part.id ? part.color : part.color + '25'}`,
                boxShadow: active === part.id ? `0 0 16px ${part.color}40` : 'none',
                scrollMarginTop: '80px',
              }}
            >
              <div className="flex items-center gap-3 px-4 py-3" style={{ background: `${part.color}14` }}>
                <span className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold shrink-0"
                  style={{ background: part.color, color: '#1a1a1a' }}>{part.num}</span>
                <div className="flex-1">
                  <span className="text-base font-bold" style={{ color: part.color }}>{part.part}</span>
                  <span className="text-xs ml-2" style={{ color: `${part.color}70` }}>{part.chinese}</span>
                </div>
                <span className="text-xs px-2 py-0.5 rounded-full" style={{ background: `${part.color}20`, color: part.color }}>
                  {part.zone}
                </span>
              </div>
              <div className="flex flex-wrap gap-1.5 px-4 pt-3" style={{ background: '#0e0e22' }}>
                {part.keywords.map(kw => (
                  <span key={kw} className="text-xs px-2 py-0.5 rounded-full font-medium"
                    style={{ background: `${part.color}20`, color: part.color }}>{kw}</span>
                ))}
              </div>
              <div className="px-4 pb-4 pt-2" style={{ background: '#0e0e22' }}>
                <p className="text-sm leading-relaxed mb-3" style={{ color: '#9090b0' }}>{part.desc}</p>
                <div className="space-y-1.5">
                  {part.detail.map(d => (
                    <div key={d.shape} className="flex gap-2 text-xs items-start">
                      <span className="shrink-0 mt-0.5 px-2 py-0.5 rounded-md font-medium"
                        style={{ background: `${part.color}18`, color: part.color }}>{d.shape}</span>
                      <span style={{ color: '#70708a' }}>→ {d.meaning}</span>
                    </div>
                  ))}
                </div>
                <button
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="mt-3 text-xs"
                  style={{ color: '#505070', cursor: 'pointer', background: 'none', border: 'none', padding: 0 }}
                >
                  ↑ Back to Image
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Posts */}
        {posts.length > 0 && (
          <div className="mb-6">
            <h2 className="text-lg font-bold mb-4" style={{ color: '#c8a8e0' }}>Physiognomy Columns</h2>
            <div className="space-y-3">
              {posts.map(post => (
                <Link key={post.slug} href={`/en/blog/${post.slug}`}
                  className="block rounded-2xl p-4 transition-all hover:scale-[1.01]"
                  style={{ background: 'linear-gradient(135deg, #16213e, #0f3460)', border: '1px solid #9c59d120' }}>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs px-2 py-0.5 rounded-full font-medium" style={{ background: '#9c59d120', color: '#c8a8e0' }}>Physiognomy</span>
                    <span className="text-xs" style={{ color: '#6b7280' }}>{post.date}</span>
                  </div>
                  <h3 className="text-sm font-bold mb-1" style={{ color: '#e8e8f0' }}>{post.title}</h3>
                  <p className="text-xs" style={{ color: '#8090a8' }}>{post.description}</p>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="rounded-2xl p-5 text-center" style={{ background: 'linear-gradient(135deg, #1a1040, #0f0f2e)', border: '1px solid #9c59d130' }}>
          <p className="text-sm mb-4" style={{ color: '#9090b0' }}>Want to go deeper? Explore your Four Pillars reading.</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/en/saju" className="px-4 py-2 rounded-xl text-sm font-bold transition-all hover:scale-105"
              style={{ background: 'linear-gradient(135deg, #9c59d1, #6a3db8)', color: '#fff' }}>
              🔮 Four Pillars Reading
            </Link>
            <Link href="/en/test/love" className="px-4 py-2 rounded-xl text-sm font-bold transition-all hover:scale-105"
              style={{ background: 'linear-gradient(135deg, #e05c7f, #b03560)', color: '#fff' }}>
              💘 Love Type Test
            </Link>
            <Link href="/en/blog/songeum" className="px-4 py-2 rounded-xl text-sm font-bold transition-all hover:scale-105"
              style={{ background: 'linear-gradient(135deg, #50a060, #307040)', color: '#fff' }}>
              ✋ Palm Reading
            </Link>
          </div>
        </div>

      </div>
    </div>
  )
}
