import Link from 'next/link'

interface Test {
  href: string
  icon: string
  title: string
  color: string
}

const KO_TESTS: Test[] = [
  { href: '/saju',       icon: '🔮', title: '사주팔자',    color: '#9c59d1' },
  { href: '/test/love',  icon: '💘', title: '연애유형',    color: '#e05c7f' },
  { href: '/test/career',icon: '💼', title: '직업적성',    color: '#4a9eff' },
  { href: '/test/mbti',  icon: '🧩', title: 'MBTI',        color: '#00cc77' },
  { href: '/test/money', icon: '💰', title: '재물운',      color: '#e0c97f' },
]

const EN_TESTS: Test[] = [
  { href: '/en/saju',        icon: '🔮', title: 'Four Pillars', color: '#9c59d1' },
  { href: '/en/test/love',   icon: '💘', title: 'Love Type',    color: '#e05c7f' },
  { href: '/en/test/career', icon: '💼', title: 'Career',       color: '#4a9eff' },
  { href: '/en/test/mbti',   icon: '🧩', title: 'MBTI',         color: '#00cc77' },
  { href: '/en/test/money',  icon: '💰', title: 'Money',        color: '#e0c97f' },
]

interface Props {
  currentPath: string
  lang?: 'ko' | 'en'
}

export default function NextTestSuggestion({ currentPath, lang = 'ko' }: Props) {
  const tests = lang === 'en' ? EN_TESTS : KO_TESTS
  const others = tests.filter(t => t.href !== currentPath).slice(0, 3)
  const label = lang === 'en' ? 'Try More Tests' : '다른 테스트도 해보세요'
  const btnLabel = lang === 'en' ? 'Start' : '시작하기'

  return (
    <div className="mt-10">
      <h3
        className="text-base font-bold text-center mb-4"
        style={{ color: '#8080a0' }}
      >
        {label}
      </h3>
      <div className="grid grid-cols-3 gap-3">
        {others.map(t => (
          <Link
            key={t.href}
            href={t.href}
            className="flex flex-col items-center gap-2 rounded-2xl p-4 transition-all duration-200 hover:scale-[1.03]"
            style={{
              background: 'linear-gradient(135deg, #16213e, #0f3460)',
              border: `1px solid ${t.color}25`,
            }}
          >
            <span className="text-3xl">{t.icon}</span>
            <span className="text-xs font-semibold text-center" style={{ color: t.color }}>
              {t.title}
            </span>
            <span
              className="text-xs px-3 py-1 rounded-full font-medium"
              style={{ background: `${t.color}20`, color: t.color }}
            >
              {btnLabel}
            </span>
          </Link>
        ))}
      </div>
    </div>
  )
}
