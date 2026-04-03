import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '개인정보처리방침 | 운명의 실',
  description: '운명의 실 서비스 개인정보처리방침',
}

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-2xl font-bold mb-2" style={{ color: '#e0c97f' }}>개인정보처리방침</h1>
      <p className="text-xs mb-8" style={{ color: '#6b7280' }}>최종 수정일: 2026년 4월 3일</p>

      <div className="space-y-8 text-sm leading-7" style={{ color: '#b0b8c8' }}>
        <section>
          <h2 className="text-base font-semibold mb-3" style={{ color: '#e8e8f0' }}>1. 수집하는 개인정보</h2>
          <p>
            운명의 실은 서비스 이용 시 아래와 같은 정보를 수집할 수 있습니다.
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>사주 분석 입력값: 생년월일, 성별, 태어난 시간 (서버에 저장되지 않음)</li>
            <li>심리테스트 응답값 (서버에 저장되지 않음)</li>
            <li>방문 기록, 접속 IP, 브라우저 정보 (Google Analytics를 통한 자동 수집)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-base font-semibold mb-3" style={{ color: '#e8e8f0' }}>2. 개인정보 수집 및 이용 목적</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>사주·심리테스트 결과 제공</li>
            <li>서비스 품질 개선 및 통계 분석</li>
            <li>광고 서비스 제공 (Google AdSense)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-base font-semibold mb-3" style={{ color: '#e8e8f0' }}>3. 개인정보 보유 및 이용 기간</h2>
          <p>
            사주·심리테스트 입력값은 결과 표시 후 브라우저 세션 내에서만 임시 저장되며,
            세션 종료 시 자동으로 삭제됩니다. 별도의 서버 저장은 이루어지지 않습니다.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold mb-3" style={{ color: '#e8e8f0' }}>4. 제3자 제공</h2>
          <p>
            서비스는 이용자의 동의 없이 개인정보를 제3자에게 제공하지 않습니다.
            단, 법령에 의해 요청되는 경우는 예외입니다.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold mb-3" style={{ color: '#e8e8f0' }}>5. 쿠키 및 광고</h2>
          <p>
            본 서비스는 Google AdSense를 통해 광고를 게재합니다. Google은 쿠키를 사용하여
            이용자의 관심사에 기반한 광고를 표시할 수 있습니다.
          </p>
          <p className="mt-2">
            Google의 광고 쿠키 사용은{' '}
            <a
              href="https://policies.google.com/technologies/ads"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
              style={{ color: '#e0c97f' }}
            >
              Google 광고 정책
            </a>
            에서 확인하실 수 있으며, 이용자는{' '}
            <a
              href="https://www.google.com/settings/ads"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
              style={{ color: '#e0c97f' }}
            >
              Google 광고 설정
            </a>
            에서 맞춤 광고를 비활성화할 수 있습니다.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold mb-3" style={{ color: '#e8e8f0' }}>6. 이용자의 권리</h2>
          <p>
            이용자는 언제든지 개인정보 처리에 관한 문의, 열람, 정정, 삭제를 요청할 수 있습니다.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold mb-3" style={{ color: '#e8e8f0' }}>7. 개인정보 보호책임자</h2>
          <p>개인정보 관련 문의사항은 서비스 내 문의 채널을 통해 연락해 주시기 바랍니다.</p>
        </section>
      </div>
    </div>
  )
}
