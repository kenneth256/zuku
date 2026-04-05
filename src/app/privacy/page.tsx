import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export function generateMetadata(): Metadata {
  return {
    title: 'Privacy Policy | Zuku Fiber Uganda',
    description: 'Privacy Policy for Zuku Fiber Uganda outlining how we collect, use, and protect your personal data and network information.',
    alternates: {
      canonical: 'https://zuku-seven.vercel.app/privacy',
    },
  };
}

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main style={{ background: 'var(--bg)', paddingTop: '8rem', paddingBottom: '5rem' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h1 className="section-title" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '1rem', color: 'var(--t0)' }}>
            Privacy <span className="grad-g">Policy</span>
          </h1>
          <p style={{ color: 'var(--t2)', marginBottom: '3rem', fontSize: '0.9rem' }}>Last Updated: March 2026</p>
          
          <div style={{ color: 'var(--t1)', lineHeight: '1.7', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <p>
              At <strong>Zuku Fiber Uganda</strong>, we are deeply committed to protecting the privacy and security of our customers across Kampala. This Privacy Policy details how we collect, use, manage, and protect your personal and network data when you interact with our home and business broadband fiber services.
            </p>

            <h2 style={{ fontSize: '1.5rem', color: 'var(--t0)', marginTop: '2rem' }}>1. Information We Collect</h2>
            <p>
              To provide you with our physical FTTH (Fiber to the Home) and commercial internet services, we collect:
            </p>
            <ul style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <li><strong>Contact Information:</strong> Your name, physical Kampala address (for installation), phone number, and email address (e.g., when you email support@zukufiber.co.ug).</li>
              <li><strong>Billing Data:</strong> Transaction histories, mobile money reference numbers (MTN/Airtel), and billing cycle preferences.</li>
              <li><strong>Network Telemetry:</strong> Connection status, bandwidth utilization (for network optimization, not throttling), latency logs, and router MAC addresses strictly for providing technical support.</li>
            </ul>

            <h2 style={{ fontSize: '1.5rem', color: 'var(--t0)', marginTop: '2rem' }}>2. How We Use Your Data</h2>
            <p>
              Zuku Fiber utilizes the collected data strictly for operational, support, and service-enhancement purposes:
            </p>
            <ul style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <li>To dispatch our engineering teams to your premises for router installations and fiber line drops.</li>
              <li>To provide 24/7 technical support and network troubleshooting.</li>
              <li>To process your monthly Unlimited Fiber subscription payments.</li>
              <li>To communicate service disruptions, network maintenance windows, and account updates.</li>
            </ul>

            <h2 style={{ fontSize: '1.5rem', color: 'var(--t0)', marginTop: '2rem' }}>3. Data Sharing and Protection</h2>
            <p>
              <strong>We do not sell your data.</strong> Zuku Fiber Uganda processes your personal data locally and within secure cloud environments. We implement enterprise-grade encryption and strict access controls. Data is solely shared with necessary service partners (like mobile money aggregators for payment processing) who are strictly bound by confidentiality agreements. We may disclose data if legally mandated by Ugandan authorities or the Uganda Communications Commission (UCC).
            </p>

            <h2 style={{ fontSize: '1.5rem', color: 'var(--t0)', marginTop: '2rem' }}>4. Your Rights</h2>
            <p>
              As a user of Zuku Fiber, you hold the right to access, update, or request the deletion of your personal account data, barring what we must legally retain for tax and telecommunication compliance.
            </p>

            <h2 style={{ fontSize: '1.5rem', color: 'var(--t0)', marginTop: '2rem' }}>5. Contact Us</h2>
            <p>
              If you have any questions or concerns regarding our privacy practices, data handling, or wish to invoke your data rights, please reach out to our team at our Kampala headquarters:
            </p>
            <address style={{ fontStyle: 'normal', background: 'var(--bg-2)', padding: '1.5rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', marginTop: '1rem' }}>
              <strong>Zuku Fiber Uganda</strong><br />
              Diamond Trust Building<br />
              Kampala, Uganda<br />
              Email: <a href="mailto:support@zukufiber.co.ug" style={{ color: 'var(--blue)', textDecoration: 'none' }}>support@zukufiber.co.ug</a><br />
              WhatsApp/Phone: 0775 260 196
            </address>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
