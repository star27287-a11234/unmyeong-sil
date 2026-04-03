import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | Thread of Fate',
  description: 'Privacy Policy for Thread of Fate',
}

export default function EnglishPrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-2xl font-bold mb-2" style={{ color: '#e0c97f' }}>Privacy Policy</h1>
      <p className="text-xs mb-8" style={{ color: '#6b7280' }}>Last updated: April 3, 2026</p>

      <div className="space-y-8 text-sm leading-7" style={{ color: '#b0b8c8' }}>
        <section>
          <h2 className="text-base font-semibold mb-3" style={{ color: '#e8e8f0' }}>1. Information We Collect</h2>
          <p>Thread of Fate may collect the following information when you use our Service:</p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Fortune reading inputs: date of birth, gender, birth time (not stored on our servers)</li>
            <li>Psychology test responses (not stored on our servers)</li>
            <li>Visit logs, IP address, browser information (automatically collected via Google Analytics)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-base font-semibold mb-3" style={{ color: '#e8e8f0' }}>2. Purpose of Collection and Use</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Providing fortune reading and psychology test results</li>
            <li>Service quality improvement and statistical analysis</li>
            <li>Advertising services (Google AdSense)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-base font-semibold mb-3" style={{ color: '#e8e8f0' }}>3. Retention Period</h2>
          <p>Fortune reading and psychology test inputs are stored temporarily within your browser session only and are automatically deleted when the session ends. No server-side storage occurs.</p>
        </section>

        <section>
          <h2 className="text-base font-semibold mb-3" style={{ color: '#e8e8f0' }}>4. Third-Party Disclosure</h2>
          <p>The Service does not provide your personal information to third parties without your consent, except as required by law.</p>
        </section>

        <section>
          <h2 className="text-base font-semibold mb-3" style={{ color: '#e8e8f0' }}>5. Cookies and Advertising</h2>
          <p>This Service displays advertisements through Google AdSense. Google may use cookies to show interest-based advertisements.</p>
          <p className="mt-2">
            You can learn more about Google&apos;s use of advertising cookies at{' '}
            <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer"
              className="underline" style={{ color: '#e0c97f' }}>
              Google Advertising Policies
            </a>
            , and you can opt out of personalized ads via{' '}
            <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer"
              className="underline" style={{ color: '#e0c97f' }}>
              Google Ad Settings
            </a>.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold mb-3" style={{ color: '#e8e8f0' }}>6. Your Rights</h2>
          <p>You may request information, correction, or deletion regarding the processing of your personal information at any time.</p>
        </section>

        <section>
          <h2 className="text-base font-semibold mb-3" style={{ color: '#e8e8f0' }}>7. Privacy Officer</h2>
          <p>For questions regarding personal information, please contact us through the inquiry channel within the Service.</p>
        </section>
      </div>
    </div>
  )
}
