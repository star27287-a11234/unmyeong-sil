import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service | Thread of Fate',
  description: 'Terms of Service for Thread of Fate',
}

export default function EnglishTermsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-2xl font-bold mb-2" style={{ color: '#e0c97f' }}>Terms of Service</h1>
      <p className="text-xs mb-8" style={{ color: '#6b7280' }}>Last updated: April 3, 2026</p>

      <div className="space-y-8 text-sm leading-7" style={{ color: '#b0b8c8' }}>
        <section>
          <h2 className="text-base font-semibold mb-3" style={{ color: '#e8e8f0' }}>Article 1 (Purpose)</h2>
          <p>These Terms of Service govern the rights, obligations, and responsibilities between Thread of Fate (the "Service") and its users in connection with the fortune reading and psychology test services provided.</p>
        </section>

        <section>
          <h2 className="text-base font-semibold mb-3" style={{ color: '#e8e8f0' }}>Article 2 (Service Description)</h2>
          <p>The Service provides entertainment and reference content including Four Pillars of Destiny analysis, love type tests, career aptitude tests, MBTI-based fortune analysis, and wealth fortune tests.</p>
          <p className="mt-2">All analysis results provided by this Service are for entertainment and reference purposes only and should not be used as the basis for important decisions (medical, legal, financial, etc.).</p>
        </section>

        <section>
          <h2 className="text-base font-semibold mb-3" style={{ color: '#e8e8f0' }}>Article 3 (User Obligations)</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Users must not enter another person&apos;s personal information without authorization.</li>
            <li>The Service may not be reproduced, distributed, or modified for commercial purposes without permission.</li>
            <li>Users must not engage in any conduct that disrupts the normal operation of the Service.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-base font-semibold mb-3" style={{ color: '#e8e8f0' }}>Article 4 (Advertising)</h2>
          <p>The Service may display advertisements through third-party advertising services such as Google AdSense. Advertisements are provided by third parties, and the Service is not responsible for the content of such advertisements.</p>
        </section>

        <section>
          <h2 className="text-base font-semibold mb-3" style={{ color: '#e8e8f0' }}>Article 5 (Disclaimer)</h2>
          <p>The Service is not responsible for service interruptions caused by natural disasters, server failures, or user negligence. All fortune, destiny, and psychological analysis results are for reference only, and the Service is not liable for any damages resulting from such results.</p>
        </section>

        <section>
          <h2 className="text-base font-semibold mb-3" style={{ color: '#e8e8f0' }}>Article 6 (Amendments)</h2>
          <p>The Service may amend these Terms as necessary. Amended Terms take effect upon notice within the Service.</p>
        </section>

        <section>
          <h2 className="text-base font-semibold mb-3" style={{ color: '#e8e8f0' }}>Article 7 (Governing Law)</h2>
          <p>These Terms shall be interpreted and applied in accordance with the laws of the Republic of Korea.</p>
        </section>
      </div>
    </div>
  )
}
