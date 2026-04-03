'use client'

const plans = [
  {
    id: 'single',
    name: '단건 이용',
    price: '₩2,900',
    period: '1회',
    description: '한 번만 이용하고 싶을 때',
    features: [
      '원하는 테스트 1개 광고 없이 이용',
      '전체 상세 분석 결과 확인',
      '결과 이미지 다운로드',
      '유효기간 7일',
    ],
    color: '#9c59d1',
    popular: false,
  },
  {
    id: 'monthly',
    name: '월정액',
    price: '₩9,900',
    period: '/ 월',
    description: '모든 서비스 무제한 이용',
    features: [
      '사주팔자 + 심리테스트 전체 무제한',
      '광고 없이 모든 결과 즉시 확인',
      '결과 이미지/PDF 다운로드',
      '새로운 콘텐츠 우선 이용',
      '월 1회 사주 운세 업데이트',
      '고객 우선 지원',
    ],
    color: '#e0c97f',
    popular: true,
  },
]

const benefits = [
  { icon: '🚫', title: '광고 완전 제거', desc: '모든 테스트에서 광고 없이 즉시 결과를 확인합니다.' },
  { icon: '📊', title: '전체 상세 분석', desc: '요약이 아닌 완전한 심층 분석 결과를 제공합니다.' },
  { icon: '♾️', title: '무제한 이용', desc: '사주팔자, 연애유형, 직업적성, MBTI, 재물운 모두 무제한으로 이용하세요.' },
  { icon: '🔄', title: '월별 운세 업데이트', desc: '매월 사주 기운을 분석한 이달의 운세를 제공합니다.' },
  { icon: '📥', title: '결과 저장', desc: '분석 결과를 이미지나 PDF로 저장하여 언제든 다시 볼 수 있습니다.' },
  { icon: '⚡', title: '즉시 이용', desc: '결제 즉시 모든 PRO 기능이 활성화됩니다.' },
]

export default function ProPage() {
  const handlePayment = (planId: string) => {
    const planName = planId === 'single' ? '단건(₩2,900)' : '월정액(₩9,900)'
    alert(`${planName} 결제하기\n\n준비 중입니다. 곧 오픈됩니다! 🙏\n\n런치 오픈 시 알림을 받으시려면 아래 이메일로 문의해 주세요.\ncontact@unmyung.kr`)
  }

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* 헤더 */}
        <div className="text-center mb-12">
          <div className="text-5xl mb-4">⭐</div>
          <h1 className="text-4xl font-black mb-3" style={{ color: '#e0c97f' }}>
            PRO 멤버십
          </h1>
          <p className="text-lg" style={{ color: '#c0c0d0' }}>
            광고 없이, 제한 없이, 모든 운명을 읽다
          </p>
          <p style={{ color: '#8080a0' }}>
            사주팔자부터 심리테스트까지 전체 서비스를 무제한으로 이용하세요
          </p>
        </div>

        {/* 요금제 카드 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16 max-w-2xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className="relative rounded-2xl p-7"
              style={{
                background: 'linear-gradient(135deg, #16213e, #0f3460)',
                border: `2px solid ${plan.popular ? plan.color + '60' : plan.color + '30'}`,
                boxShadow: plan.popular ? `0 0 40px ${plan.color}20` : 'none',
              }}
            >
              {/* 인기 배지 */}
              {plan.popular && (
                <div
                  className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold"
                  style={{
                    background: 'linear-gradient(135deg, #e0c97f, #c4a84f)',
                    color: '#1a1a2e',
                  }}
                >
                  ✨ 가장 인기있는
                </div>
              )}

              {/* 플랜 이름 */}
              <h2 className="text-lg font-bold mb-1" style={{ color: '#e8e8f0' }}>
                {plan.name}
              </h2>
              <p className="text-sm mb-4" style={{ color: '#8090a8' }}>
                {plan.description}
              </p>

              {/* 가격 */}
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-4xl font-black" style={{ color: plan.color }}>
                  {plan.price}
                </span>
                <span className="text-sm" style={{ color: '#8090a8' }}>{plan.period}</span>
              </div>

              {/* 혜택 목록 */}
              <ul className="space-y-2.5 mb-7">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-sm" style={{ color: '#c0c8d8' }}>
                    <span className="flex-shrink-0 mt-0.5" style={{ color: plan.color }}>✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* 결제 버튼 */}
              <button
                onClick={() => handlePayment(plan.id)}
                className="w-full py-4 rounded-xl font-bold transition-all duration-300 hover:scale-[1.02] active:scale-95"
                style={{
                  background: plan.popular
                    ? `linear-gradient(135deg, ${plan.color}, #c4a84f)`
                    : 'transparent',
                  border: plan.popular ? 'none' : `2px solid ${plan.color}60`,
                  color: plan.popular ? '#1a1a2e' : plan.color,
                  boxShadow: plan.popular ? `0 8px 25px ${plan.color}40` : 'none',
                }}
              >
                결제하기
              </button>
            </div>
          ))}
        </div>

        {/* 혜택 섹션 */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-center mb-8" style={{ color: '#e8e8f0' }}>
            PRO 멤버십 혜택
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="rounded-xl p-5"
                style={{ background: '#16213e', border: '1px solid #e0c97f15' }}
              >
                <div className="text-2xl mb-3">{benefit.icon}</div>
                <h3 className="font-bold mb-1" style={{ color: '#e0c97f' }}>{benefit.title}</h3>
                <p className="text-sm" style={{ color: '#8090a8' }}>{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div
          className="rounded-2xl p-8"
          style={{ background: '#16213e', border: '1px solid #e0c97f20' }}
        >
          <h2 className="text-xl font-bold mb-6 text-center" style={{ color: '#e8e8f0' }}>
            자주 묻는 질문
          </h2>
          <div className="space-y-5">
            {[
              {
                q: '결제 후 언제부터 이용할 수 있나요?',
                a: '결제 완료 즉시 PRO 기능이 활성화되어 바로 이용하실 수 있습니다.'
              },
              {
                q: '월정액은 언제든지 해지할 수 있나요?',
                a: '언제든지 자유롭게 해지하실 수 있습니다. 해지 후에도 결제한 기간까지는 PRO 기능을 이용하실 수 있습니다.'
              },
              {
                q: '개인정보가 안전하게 보호되나요?',
                a: '네, 모든 입력 정보는 분석에만 사용되며 암호화되어 안전하게 처리됩니다. 제3자에게 제공되지 않습니다.'
              },
            ].map((faq, i) => (
              <div key={i} className="py-4 border-b" style={{ borderColor: '#e0c97f15' }}>
                <p className="font-medium mb-2" style={{ color: '#e8e8f0' }}>Q. {faq.q}</p>
                <p className="text-sm" style={{ color: '#8090a8' }}>A. {faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 오픈 예정 안내 */}
        <div className="mt-8 text-center">
          <div
            className="inline-block px-6 py-3 rounded-xl text-sm"
            style={{ background: '#e0c97f15', color: '#e0c97f', border: '1px solid #e0c97f30' }}
          >
            🚀 PRO 멤버십은 현재 오픈 준비 중입니다. 곧 만나보실 수 있어요!
          </div>
        </div>
      </div>
    </div>
  )
}
