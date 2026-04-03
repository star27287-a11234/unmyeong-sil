import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '이용약관 | 운명의 실',
  description: '운명의 실 서비스 이용약관',
}

export default function TermsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-2xl font-bold mb-2" style={{ color: '#e0c97f' }}>이용약관</h1>
      <p className="text-xs mb-8" style={{ color: '#6b7280' }}>최종 수정일: 2026년 4월 3일</p>

      <div className="space-y-8 text-sm leading-7" style={{ color: '#b0b8c8' }}>
        <section>
          <h2 className="text-base font-semibold mb-3" style={{ color: '#e8e8f0' }}>제1조 (목적)</h2>
          <p>
            본 약관은 운명의 실(이하 "서비스")이 제공하는 사주분석 및 심리테스트 서비스의 이용과 관련하여
            서비스와 이용자 간의 권리, 의무 및 책임사항을 규정함을 목적으로 합니다.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold mb-3" style={{ color: '#e8e8f0' }}>제2조 (서비스 내용)</h2>
          <p>
            서비스는 사주팔자 분석, 연애유형 테스트, 직업적성 테스트, MBTI 기반 운세 분석, 재물운 테스트 등
            엔터테인먼트 및 참고 목적의 콘텐츠를 제공합니다.
          </p>
          <p className="mt-2">
            본 서비스에서 제공하는 모든 분석 결과는 오락 및 참고 목적으로만 활용되어야 하며,
            실제 중요한 의사결정(의료, 법률, 재정 등)에 근거로 사용해서는 안 됩니다.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold mb-3" style={{ color: '#e8e8f0' }}>제3조 (이용자의 의무)</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>이용자는 타인의 개인정보를 무단으로 입력해서는 안 됩니다.</li>
            <li>서비스를 상업적 목적으로 무단 복제·배포·변형하여 사용할 수 없습니다.</li>
            <li>서비스의 정상적인 운영을 방해하는 행위를 해서는 안 됩니다.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-base font-semibold mb-3" style={{ color: '#e8e8f0' }}>제4조 (광고)</h2>
          <p>
            서비스는 Google AdSense 등 제3자 광고 서비스를 통해 광고를 게재할 수 있습니다.
            광고는 제3자에 의해 제공되며, 서비스는 해당 광고의 내용에 대해 책임을 지지 않습니다.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold mb-3" style={{ color: '#e8e8f0' }}>제5조 (면책조항)</h2>
          <p>
            서비스는 천재지변, 서버 장애, 이용자의 귀책사유 등으로 인한 서비스 중단에 대해 책임을 지지 않습니다.
            서비스에서 제공하는 사주·운세·심리 분석 결과는 참고용이며, 해당 결과로 인한 어떠한 손해에 대해서도
            서비스는 책임을 지지 않습니다.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold mb-3" style={{ color: '#e8e8f0' }}>제6조 (약관 변경)</h2>
          <p>
            서비스는 필요에 따라 본 약관을 변경할 수 있으며, 변경된 약관은 서비스 내 공지를 통해 효력이 발생합니다.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold mb-3" style={{ color: '#e8e8f0' }}>제7조 (준거법)</h2>
          <p>본 약관은 대한민국 법률에 따라 해석되고 적용됩니다.</p>
        </section>
      </div>
    </div>
  )
}
