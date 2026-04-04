'use client'

import Link from 'next/link'
import { useState } from 'react'
import type { Post } from '@/lib/posts'

interface Props {
  posts: Post[]
}

const PALM_ITEMS = [
  { id: 'pe-life',    num: 1,  name: 'Life Line',       hanja: '生命線', type: 'line', color: '#e05050', x: 58.4, y: 58.4, summary: 'Health, vitality, family, life changes', desc: 'The arc that curves around the base of the thumb. Rather than predicting lifespan, it reflects your life energy, physical vitality, and major life transitions.', types: [{ shape: 'Deep & clear', meaning: 'Strong constitution, abundant vitality' }, { shape: 'Island shape (○)', meaning: 'Health concern or family change during that period' }, { shape: 'Double line', meaning: 'Rich energy, strong recovery ability' }, { shape: 'Break in line', meaning: 'Major life change or transition (not necessarily bad)' }] },
  { id: 'pe-head',    num: 2,  name: 'Head Line',       hanja: '頭腦線', type: 'line', color: '#5090e0', x: 64.1, y: 38.3, summary: 'Intelligence, thinking style, career aptitude', desc: 'Starts between the thumb and index finger and crosses the palm. Reveals thinking style, intellectual capacity, and career suitability.', types: [{ shape: 'Straight line', meaning: 'Logical, practical thinker — STEM aptitude' }, { shape: 'Curves downward', meaning: 'Creative, intuitive thinker — arts & humanities aptitude' }, { shape: 'Long & clear', meaning: 'Wide interests, strong analytical ability' }, { shape: 'Short & strong', meaning: 'Decisive, focused, specialist aptitude' }] },
  { id: 'pe-heart',   num: 3,  name: 'Heart Line',      hanja: '感情線', type: 'line', color: '#e060a0', x: 2.3, y: 55.8, summary: 'Personality, love life, emotional expression', desc: 'Runs from below the pinky toward the index finger. Reflects how you express emotions, your love style, and the warmth of your personality.', types: [{ shape: 'Reaches under index finger', meaning: 'Idealistic romantic — seeks perfect love' }, { shape: 'Ends under middle finger', meaning: 'Balanced realist — prefers stable relationships' }, { shape: 'Straight line', meaning: 'Rational and reserved emotional expression' }, { shape: 'Forked end', meaning: 'Complex inner emotions, artistic sensibility' }] },
  { id: 'pe-fate',    num: 4,  name: 'Fate Line',       hanja: '運命線', type: 'line', color: '#e0c050', x: 54.7, y: 65.4, summary: 'Career fortune, professional achievement', desc: 'Runs vertically from the wrist toward the middle finger. Indicates life direction, career success, and social role. Absence does not mean bad fortune.', types: [{ shape: 'Prominent from early age', meaning: 'Strong sense of purpose, early success' }, { shape: 'Starts mid-palm', meaning: 'Late-bloomer — success in mid or later life' }, { shape: 'No fate line', meaning: 'Free-spirited, flexible career path (not negative)' }, { shape: 'Multiple lines', meaning: 'Diverse careers, multi-talented' }] },
  { id: 'pe-marriage', num: 5, name: 'Marriage Line',   hanja: '結婚線', type: 'line', color: '#b080e0', x: 3, y: 31.7, summary: 'Relationship fortune, marriage timing', desc: 'Short horizontal lines below the pinky. Indicates the strength of romantic connections, marriage timing, and the nature of partnerships.', types: [{ shape: 'One clear line', meaning: 'Deep singular connection, lifetime partner' }, { shape: 'Two or more lines', meaning: 'Multiple love connections, possible remarriage' }, { shape: 'Upward curve', meaning: 'Growth and prosperity after marriage' }, { shape: 'Downward curve', meaning: 'Challenges with partner' }] },
  { id: 'pe-child',   num: 6,  name: 'Child Line',      hanja: '子息線', type: 'line', color: '#a0d080', x: 2.5, y: 45, summary: 'Bond with children, number of offspring', desc: 'Fine vertical lines rising from the Marriage Line. Traditionally interpreted to indicate the potential number and gender of children.', types: [{ shape: 'Upward lines', meaning: 'Son connection (traditional interpretation)' }, { shape: 'Downward lines', meaning: 'Daughter connection (traditional interpretation)' }, { shape: 'Many lines', meaning: 'Strong children\'s luck' }] },
  { id: 'pe-business', num: 7, name: 'Business Line',   hanja: '事業線', type: 'line', color: '#e09050', x: 2.8, y: 73.8, summary: 'Entrepreneurial spirit, leadership, drive', desc: 'Runs from the lower palm toward the Sun Mount. Reflects entrepreneurial talent, leadership ability, and perseverance.', types: [{ shape: 'Long & prominent', meaning: 'Strong entrepreneurial spirit, outstanding leadership' }, { shape: 'Short & strong', meaning: 'Focused drive, success in a specialty field' }, { shape: 'Absent', meaning: 'More suited to employment than entrepreneurship' }] },
  { id: 'pe-jupiter', num: 8,  name: 'Jupiter Mount',   hanja: '木星丘', type: 'mount', color: '#80d0a0', x: 59.9, y: 18, summary: 'Social power, prestige, ambition for authority', desc: 'The fleshy mound below the index finger. Reflects desire for social status, authority, and recognition. A developed mount indicates strong leadership and suitability for public roles.', types: [{ shape: 'Well developed', meaning: 'Strong leadership, desire for social recognition' }, { shape: 'Flat', meaning: 'Humble and cooperative personality' }] },
  { id: 'pe-saturn',  num: 9,  name: 'Saturn Mount',    hanja: '土星丘', type: 'mount', color: '#c0c080', x: 37.6, y: 11.3,  summary: 'Career diligence, patience, philosophy', desc: 'The mound below the middle finger. Reflects dedication to work, philosophical tendencies, and patience. Well developed suggests a deep, reflective personality.', types: [{ shape: 'Well developed', meaning: 'Philosophical nature, strong patience, career achievement' }, { shape: 'Flat', meaning: 'Flexible and practical mindset' }] },
  { id: 'pe-sun',     num: 10, name: 'Sun Mount',        hanja: '太陽丘', type: 'mount', color: '#e0c050', x: 8.6, y: 3, summary: 'Wealth, social popularity, artistic talent', desc: 'The mound below the ring finger. Reflects wealth luck, social popularity, and artistic sensibility. Well developed means recognition from others and financial success.', types: [{ shape: 'Well developed', meaning: 'Wealth luck, popularity, artistic talent' }, { shape: 'With Sun Line', meaning: 'Success and fame strongly indicated' }] },
  { id: 'pe-mercury', num: 11, name: 'Mercury Mount',    hanja: '水星丘', type: 'mount', color: '#60c0e0', x: 2.8, y: 18.4, summary: 'Business acumen, eloquence, health', desc: 'The mound below the pinky. Reflects business ability, communication skills, wealth drive, and general health. Well developed indicates strong commercial instincts.', types: [{ shape: 'Well developed', meaning: 'Eloquent, sharp business sense, wealth drive' }, { shape: 'Flat', meaning: 'Practical and grounded personality' }] },
  { id: 'pe-venus',   num: 12, name: 'Venus Mount',      hanja: '金星丘', type: 'mount', color: '#e0a0c0', x: 60.3, y: 76.7, summary: 'Vitality, stamina, passion, attractiveness', desc: 'The full mound inside the Life Line at the base of the thumb. Reflects physical attractiveness, stamina, and depth of affection. Well developed indicates overflowing life energy.', types: [{ shape: 'Full & firm', meaning: 'Strong vitality, attractive to others, healthy' }, { shape: 'Soft & deflated', meaning: 'Low stamina, reduced life energy — take care' }] },
  { id: 'pe-moon',    num: 13, name: 'Moon Mount',        hanja: '月丘', type: 'mount', color: '#a080d0', x: 6.6, y: 87.6, summary: 'Imagination, creativity, intuition, artistry', desc: 'The mound on the opposite side of the thumb at the lower palm. Reflects imagination, creativity, artistic sense, and intuition. Well developed suggests a strong artist, writer, or musician type.', types: [{ shape: 'Well developed', meaning: 'Rich imagination, artistic talent, strong intuition' }, { shape: 'Over-developed', meaning: 'Weak sense of reality, prone to fantasy' }] },
  { id: 'pe-mars1',   num: 14, name: '1st Mars Mount',   hanja: '第一火星丘', type: 'mount', color: '#e08060', x: 75.7, y: 49.2, summary: 'Assertiveness, courage, fighting spirit', desc: 'The mound between the thumb and index finger. Reflects assertiveness, courage, and competitive drive. Well developed indicates a bold, direct personality.', types: [{ shape: 'Well developed', meaning: 'Strong drive, courage, competitive spirit' }, { shape: 'Underdeveloped', meaning: 'Passive, conflict-avoidant' }] },
  { id: 'pe-mars2',   num: 15, name: '2nd Mars Mount',   hanja: '第二火星丘', type: 'mount', color: '#c06040', x: 20.4, y: 68.2, summary: 'Endurance, resistance, self-control', desc: 'The area between the pinky and the Moon Mount. Reflects endurance, self-control, and resistance. Well developed indicates great tenacity.', types: [{ shape: 'Well developed', meaning: 'Strong endurance, can withstand any situation' }, { shape: 'Underdeveloped', meaning: 'Tends to give up easily, lacks patience' }] },
  { id: 'pe-plain',   num: 16, name: 'Plain of Mars',    hanja: '火星平原', type: 'mount', color: '#909090', x: 43.8, y: 73.8, summary: 'Mental balance, harmony of courage and endurance', desc: 'The flat central area of the palm. A broad, even Plain of Mars indicates excellent mental balance and a stable personality.', types: [{ shape: 'Broad & even', meaning: 'Mental balance, stable character' }, { shape: 'Hollow/concave', meaning: 'Timid, prone to mental pressure' }] },
]

const LINES = PALM_ITEMS.filter(i => i.type === 'line')
const MOUNTS = PALM_ITEMS.filter(i => i.type === 'mount')

export default function SongeumClientEn({ posts }: Props) {
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

        <div className="text-center mb-8">
          <Link href="/en/blog" className="text-xs mb-4 inline-block" style={{ color: '#6b7280' }}>← All Columns</Link>
          <h1 className="text-4xl font-black mb-3" style={{ color: '#80e0a0' }}>Palm Reading · 手相學</h1>
          <p style={{ color: '#809080' }}>The map of destiny drawn in your palm</p>
        </div>

        {/* Adjust button */}
        {/* Image + Overlay */}
        <div className="rounded-2xl overflow-hidden mb-3" style={{ border: '1px solid #50a06030', background: '#0a1a12' }}>
          <div className="px-4 pt-4 pb-2">
            <h2 className="text-base font-bold" style={{ color: '#80e0a0' }}>Complete Palm Reading Diagram</h2>
          </div>
          <div className="relative mx-4 mb-4">
            <img src="/images/songeum/palm-reference.jpg" alt="Palm reading diagram with lines and mounts"
              style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '10px' }} />
            {PALM_ITEMS.map(item => (
              <button key={item.id}
                onClick={() => scrollTo(item.id)}
                title={`${item.num}. ${item.name} — ${item.summary}`}
                style={{
                  position: 'absolute', left: `${item.x}%`, top: `${item.y}%`,
                  transform: 'translate(-50%, -50%)',
                  width: '22px', height: '22px', borderRadius: '50%',
                  background: item.color,
                  border: '2px solid rgba(255,255,255,0.8)',
                  cursor: 'pointer',
                  fontSize: '9px', fontWeight: '800', color: '#1a1a1a',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  boxShadow: '0 2px 5px rgba(0,0,0,0.6)',
                  transition: 'transform 0.15s ease, box-shadow 0.15s ease', zIndex: 10,
                }}
                onMouseEnter={e => { ;(e.currentTarget as HTMLButtonElement).style.transform = 'translate(-50%, -50%) scale(1.35)'; ;(e.currentTarget as HTMLButtonElement).style.boxShadow = '0 4px 12px rgba(0,0,0,0.7)' }}
                onMouseLeave={e => { ;(e.currentTarget as HTMLButtonElement).style.transform = 'translate(-50%, -50%) scale(1)'; ;(e.currentTarget as HTMLButtonElement).style.boxShadow = '0 2px 5px rgba(0,0,0,0.6)' }}
              >{item.num}</button>
            ))}
          </div>
        </div>

        {/* How to Use */}
        <div className="rounded-xl px-4 py-3 mb-6" style={{ background: '#80e0a012', border: '1px solid #80e0a030' }}>
          <p className="font-bold mb-1 text-sm" style={{ color: '#80e0a0' }}>💡 How to Use</p>
          <ol className="space-y-1 text-xs" style={{ color: '#809080' }}>
            <li>① Click the <span style={{ color: '#80e0a0' }}>numbered buttons</span> on the image to jump to that area's explanation</li>
            <li>② Use the <span style={{ color: '#80e0a0' }}>Lines / Mounts selection buttons</span> below for the same effect</li>
            <li>③ Use <span style={{ color: '#80e0a0' }}>↑ Back to Image</span> at the bottom of each section to return</li>
          </ol>
        </div>

        {/* Lines Grid */}
        <div className="rounded-2xl p-4 mb-4" style={{ background: '#0a1a0a', border: '1px solid #50a06020' }}>
          <p className="text-xs mb-3 font-bold" style={{ color: '#80e0a0' }}>Lines — Palm Lines</p>
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
            {LINES.map(item => (
              <button key={item.id} onClick={() => scrollTo(item.id)}
                className="flex items-center gap-1.5 rounded-xl px-2 py-2 text-left"
                style={{ background: `${item.color}15`, border: `1px solid ${item.color}35`, cursor: 'pointer' }}
                onMouseEnter={e => { ;(e.currentTarget as HTMLButtonElement).style.background = `${item.color}28` }}
                onMouseLeave={e => { ;(e.currentTarget as HTMLButtonElement).style.background = `${item.color}15` }}>
                <span className="shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold"
                  style={{ background: item.color, color: '#1a1a1a' }}>{item.num}</span>
                <span className="text-xs font-semibold truncate" style={{ color: item.color }}>{item.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Mounts Grid */}
        <div className="rounded-2xl p-4 mb-8" style={{ background: '#0a1a0a', border: '1px solid #50a06020' }}>
          <p className="text-xs mb-3 font-bold" style={{ color: '#80e0a0' }}>Mounts — Palm Mounds</p>
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
            {MOUNTS.map(item => (
              <button key={item.id} onClick={() => scrollTo(item.id)}
                className="flex items-center gap-1.5 rounded-xl px-2 py-2 text-left"
                style={{ background: `${item.color}15`, border: `1px solid ${item.color}35`, cursor: 'pointer' }}
                onMouseEnter={e => { ;(e.currentTarget as HTMLButtonElement).style.background = `${item.color}28` }}
                onMouseLeave={e => { ;(e.currentTarget as HTMLButtonElement).style.background = `${item.color}15` }}>
                <span className="shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold"
                  style={{ background: item.color, color: '#1a1a1a' }}>{item.num}</span>
                <span className="text-xs font-semibold truncate" style={{ color: item.color }}>{item.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Lines Detail */}
        <h2 className="text-lg font-bold mb-4" style={{ color: '#80e0a0' }}>Lines — Detailed Guide</h2>
        <div className="space-y-3 mb-8">
          {LINES.map(item => (
            <div key={item.id} id={item.id} className="rounded-2xl overflow-hidden transition-all duration-300"
              style={{ border: `1px solid ${active === item.id ? item.color : item.color + '25'}`, boxShadow: active === item.id ? `0 0 16px ${item.color}40` : 'none', scrollMarginTop: '80px' }}>
              <div className="flex items-center gap-3 px-4 py-3" style={{ background: `${item.color}14` }}>
                <div className="w-8 h-1.5 rounded-full shrink-0" style={{ background: item.color }} />
                <span className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0"
                  style={{ background: item.color, color: '#1a1a1a' }}>{item.num}</span>
                <span className="text-base font-bold flex-1" style={{ color: item.color }}>{item.name}</span>
                <span className="text-xs" style={{ color: `${item.color}70` }}>{item.hanja}</span>
              </div>
              <div className="px-4 pt-1 pb-1" style={{ background: '#0c1a0c' }}>
                <span className="text-xs px-2 py-0.5 rounded-full" style={{ background: `${item.color}18`, color: item.color }}>{item.summary}</span>
              </div>
              <div className="px-4 pb-4 pt-2" style={{ background: '#0c1a0c' }}>
                <p className="text-sm leading-relaxed mb-3" style={{ color: '#809080' }}>{item.desc}</p>
                <div className="space-y-1.5">
                  {item.types.map(t => (
                    <div key={t.shape} className="flex gap-2 text-xs items-start">
                      <span className="shrink-0 mt-0.5 px-2 py-0.5 rounded-md font-medium"
                        style={{ background: `${item.color}18`, color: item.color }}>{t.shape}</span>
                      <span style={{ color: '#607060' }}>→ {t.meaning}</span>
                    </div>
                  ))}
                </div>
                <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="mt-3 text-xs" style={{ color: '#405040', cursor: 'pointer', background: 'none', border: 'none', padding: 0 }}>
                  ↑ Back to Image
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Mounts Detail */}
        <h2 className="text-lg font-bold mb-3" style={{ color: '#80e0a0' }}>Mounts — Detailed Guide</h2>
        <p className="text-xs mb-4" style={{ color: '#506050' }}>Mounts are the fleshy raised areas of the palm. Their development level indicates the strength of the corresponding energy.</p>
        <div className="space-y-3 mb-10">
          {MOUNTS.map(item => (
            <div key={item.id} id={item.id} className="rounded-2xl overflow-hidden transition-all duration-300"
              style={{ border: `1px solid ${active === item.id ? item.color : item.color + '25'}`, boxShadow: active === item.id ? `0 0 16px ${item.color}40` : 'none', scrollMarginTop: '80px' }}>
              <div className="flex items-center gap-3 px-4 py-3" style={{ background: `${item.color}14` }}>
                <div className="w-3 h-3 rounded-full shrink-0" style={{ background: item.color }} />
                <span className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0"
                  style={{ background: item.color, color: '#1a1a1a' }}>{item.num}</span>
                <span className="text-base font-bold flex-1" style={{ color: item.color }}>{item.name}</span>
                <span className="text-xs" style={{ color: `${item.color}70` }}>{item.hanja}</span>
              </div>
              <div className="px-4 pt-1 pb-1" style={{ background: '#0c1a0c' }}>
                <span className="text-xs px-2 py-0.5 rounded-full" style={{ background: `${item.color}18`, color: item.color }}>{item.summary}</span>
              </div>
              <div className="px-4 pb-4 pt-2" style={{ background: '#0c1a0c' }}>
                <p className="text-sm leading-relaxed mb-3" style={{ color: '#809080' }}>{item.desc}</p>
                <div className="space-y-1.5">
                  {item.types.map(t => (
                    <div key={t.shape} className="flex gap-2 text-xs items-start">
                      <span className="shrink-0 mt-0.5 px-2 py-0.5 rounded-md font-medium"
                        style={{ background: `${item.color}18`, color: item.color }}>{t.shape}</span>
                      <span style={{ color: '#607060' }}>→ {t.meaning}</span>
                    </div>
                  ))}
                </div>
                <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="mt-3 text-xs" style={{ color: '#405040', cursor: 'pointer', background: 'none', border: 'none', padding: 0 }}>
                  ↑ Back to Image
                </button>
              </div>
            </div>
          ))}
        </div>

        {posts.length > 0 && (
          <div className="mb-6">
            <h2 className="text-lg font-bold mb-4" style={{ color: '#80e0a0' }}>Palm Reading Columns</h2>
            <div className="space-y-3">
              {posts.map(post => (
                <Link key={post.slug} href={`/en/blog/${post.slug}`}
                  className="block rounded-2xl p-4 transition-all hover:scale-[1.01]"
                  style={{ background: 'linear-gradient(135deg, #0f2018, #0a1a12)', border: '1px solid #50a06020' }}>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs px-2 py-0.5 rounded-full font-medium" style={{ background: '#50a06020', color: '#80e0a0' }}>Palmistry</span>
                    <span className="text-xs" style={{ color: '#6b7280' }}>{post.date}</span>
                  </div>
                  <h3 className="text-sm font-bold mb-1" style={{ color: '#e8e8f0' }}>{post.title}</h3>
                  <p className="text-xs" style={{ color: '#809080' }}>{post.description}</p>
                </Link>
              ))}
            </div>
          </div>
        )}

        <div className="rounded-2xl p-5 text-center" style={{ background: 'linear-gradient(135deg, #0f2018, #0a1a12)', border: '1px solid #50a06030' }}>
          <p className="text-sm mb-4" style={{ color: '#809080' }}>Explore more with your Four Pillars and psychology tests</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/en/saju" className="px-4 py-2 rounded-xl text-sm font-bold hover:scale-105"
              style={{ background: 'linear-gradient(135deg, #9c59d1, #6a3db8)', color: '#fff' }}>🔮 Four Pillars</Link>
            <Link href="/en/test/money" className="px-4 py-2 rounded-xl text-sm font-bold hover:scale-105"
              style={{ background: 'linear-gradient(135deg, #e0c050, #a08020)', color: '#fff' }}>💰 Wealth Test</Link>
            <Link href="/en/blog/gwansang" className="px-4 py-2 rounded-xl text-sm font-bold hover:scale-105"
              style={{ background: 'linear-gradient(135deg, #9c59d1, #7040a0)', color: '#fff' }}>👁 Face Reading</Link>
          </div>
        </div>

      </div>
    </div>
  )
}
