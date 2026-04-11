import { MetadataRoute } from 'next'

const BASE_URL = 'https://unmyeong-sil.vercel.app'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${BASE_URL}/`, changeFrequency: 'daily', priority: 1.0 },
    { url: `${BASE_URL}/fortune`, changeFrequency: 'daily', priority: 0.9 },
    { url: `${BASE_URL}/saju`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/lotto`, changeFrequency: 'daily', priority: 0.8 },
    { url: `${BASE_URL}/test`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/test/mbti`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/test/love`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/test/career`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/test/money`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/blog`, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${BASE_URL}/blog/gwansang`, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE_URL}/blog/songeum`, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE_URL}/blog/2026-04-11-12-zodiac-fortune-2026`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/blog/2026-04-11-mbti-complete-guide`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/blog/2026-04-11-saju-ohaeng-basics`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/blog/2026-04-11-money-types`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/blog/2026-04-04-gwansang-basics`, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE_URL}/blog/2026-04-04-saju-spring-fortune`, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE_URL}/blog/2026-04-04-songeum-basics`, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE_URL}/blog/2026-04-03-love-type-psychology`, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE_URL}/en`, changeFrequency: 'daily', priority: 0.9 },
    { url: `${BASE_URL}/en/fortune`, changeFrequency: 'daily', priority: 0.8 },
    { url: `${BASE_URL}/en/saju`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/en/lotto`, changeFrequency: 'daily', priority: 0.7 },
    { url: `${BASE_URL}/en/test`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/en/test/mbti`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/en/test/love`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/en/test/career`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/en/test/money`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/en/blog`, changeFrequency: 'weekly', priority: 0.6 },
    { url: `${BASE_URL}/en/blog/gwansang`, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${BASE_URL}/en/blog/songeum`, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${BASE_URL}/about`, changeFrequency: 'yearly', priority: 0.4 },
    { url: `${BASE_URL}/privacy`, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${BASE_URL}/terms`, changeFrequency: 'yearly', priority: 0.3 },
  ]
}
