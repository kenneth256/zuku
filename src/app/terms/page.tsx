import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export function generateMetadata(): Metadata {
  return {
    title: 'Terms of Service | Zuku Fiber Uganda',
    description: 'Terms and Conditions regarding the use of Zuku Fiber Uganda unlimited fiber internet, installation, and network policies.',
    alternates: {
      canonical: 'https://zuku-seven.vercel.app/terms',
    },
  };
}

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main style={{ background: 'var(--bg)', paddingTop: '8rem', paddingBottom: '5rem' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h1 className="section-title" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '1rem', color: 'var(--t0)' }}>
            Terms & <span className="grad-g">Conditions</span>
          </h1>
          <p style={{ color: 'var(--t2)', marginBottom: '3rem', fontSize: '0.9rem' }}>Last Updated: March 2026</p>
          
          <div style={{ color: 'var(--t1)', lineHeight: '1.7', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <p>
              Welcome to <strong>Zuku Fiber Uganda</strong>. By subscribing to our fiber-optic broadband and digital television services, accessing our website, or utilizing our network infrastructure, you agree to be bound by the following Terms and Conditions. Please review them carefully.
            </p>

            <h2 style={{ fontSize: '1.5rem', color: 'var(--t0)', marginTop: '2rem' }}>1. Provision of Service</h2>
            <p>
              Zuku Fiber provides dedicated physical fiber-to-the-home/building (FTTH/FTTB) internet connectivity within our coverage zones in Kampala and surrounding areas.
            </p>
            <ul style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <li><strong>Installation:</strong> Standard installation and the provided Wi-Fi routing equipment remain the property of Zuku Fiber unless otherwise explicitly stated in an enterprise contract.</li>
              <li><strong>Uptime SLA:</strong> We guarantee an aggressive 99.9% uptime. Outages caused by external power failures, third-party civil works severing lines, or acts of God are exempted from the SLA metric.</li>
              <li><strong>Speeds:</strong> The speeds advertised (e.g., 25 Mbps, 50 Mbps) denote the maximum symmetrical speeds provisioned to your router. Real-world Wi-Fi performance may slightly vary depending on physical interference or device limitations.</li>
            </ul>

            <h2 style={{ fontSize: '1.5rem', color: 'var(--t0)', marginTop: '2rem' }}>2. Acceptable Use Policy (AUP)</h2>
            <p>
              While Zuku Fiber strictly adheres to an <strong>Unlimited Data and Zero-Throttling policy</strong> without volume caps, your network usage must remain lawful and not fundamentally compromise our core infrastructure:
            </p>
            <ul style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <li>You may not use residential fiber plans to illegally operate a commercial ISP operation or resell/sub-lease bandwidth to neighboring premises without our authorization.</li>
              <li>The network may not be utilized for launching Distributed Denial of Service (DDoS) attacks, distributing malware, or hosting illegal content as defined by Ugandan law.</li>
            </ul>

            <h2 style={{ fontSize: '1.5rem', color: 'var(--t0)', marginTop: '2rem' }}>3. Billing and Payments</h2>
            <p>
              Zuku Fiber operates on a prepaid 30-day billing cycle.
            </p>
            <ul style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <li>Your service will be automatically suspended if payment for the upcoming cycle is not rendered before your expiration date. No late fees are assessed.</li>
              <li>Payments can be securely fulfilled via Mobile Money (Airtel/MTN), direct bank transfer, or at an authorized Zuku agency.</li>
              <li>All published prices (UGX 75,000 to UGX 199,000) include applicable taxes unless specifically delineated.</li>
            </ul>

            <h2 style={{ fontSize: '1.5rem', color: 'var(--t0)', marginTop: '2rem' }}>4. Equipment Liability</h2>
            <p>
              The advanced optical networking equipment (ONT) installed in your home is maintained by Zuku support. In cases of malicious destruction, unauthorized tampering, or severe physical negligence by the subscriber resulting in hardware failure, a standardized replacement fee may be levied.
            </p>

            <h2 style={{ fontSize: '1.5rem', color: 'var(--t0)', marginTop: '2rem' }}>5. Account Termination</h2>
            <p>
              As we do strictly not enforce lock-in contracts for residential connections, you may cancel your subscription at the end of any billing cycle simply by electing not to recharge. Zuku Fiber reserves the right to terminate accounts immediately if the Acceptable Use Policy is violated.
            </p>

            <div style={{ background: 'var(--bg-2)', padding: '1.5rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', marginTop: '2rem', textAlign: 'center' }}>
              <p style={{ margin: 0 }}>
                For legal inquiries, contact <a href="mailto:support@zukufiber.co.ug" style={{ color: 'var(--blue)', textDecoration: 'none', fontWeight: 'bold' }}>support@zukufiber.co.ug</a> or visit us at Diamond Trust Building, Kampala.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
