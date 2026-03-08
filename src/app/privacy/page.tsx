import Link from "next/link";
import { FadeInUp, GoldLineReveal, GoldCornerFrame } from "@/components/AnimatedSection";

export const metadata = {
  title: "Privacy Policy | Angelic Hair by Angelina Hysko",
  description: "Privacy Policy for Angelic Hair by Angelina Hysko. Learn how we collect, use and protect your personal data.",
};

export default function PrivacyPage() {
  return (
    <>
      {/* ═══ HERO ═══ */}
      <section className="bg-[#0D0D0D] pt-40 pb-24 lg:pt-48 lg:pb-32 relative overflow-hidden">
        <div className="absolute inset-6 md:inset-10 border border-[#C9A96E]/12 pointer-events-none" />
        <GoldCornerFrame className="absolute inset-0" />
        <div className="absolute inset-0 texture-overlay" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#C9A96E]/[0.03] rounded-full blur-[100px]" />

        <div className="relative z-10 max-w-3xl mx-auto px-8 text-center">
          <FadeInUp>
            <p className="font-body text-[10px] tracking-[0.35em] uppercase text-white/40 mb-5">Legal</p>
          </FadeInUp>
          <FadeInUp delay={0.05}>
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-light text-[#D4B96A] mb-6">Privacy Policy</h1>
          </FadeInUp>
          <GoldLineReveal className="w-20" />
          <FadeInUp delay={0.15}>
            <p className="font-body text-[13px] text-white/35 mt-6 max-w-md mx-auto leading-relaxed">
              How we collect, use and protect your personal information.
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* ═══ POLICY CONTENT ═══ */}
      <section className="bg-[#0D0D0D] py-24 lg:py-36">
        <div className="mx-auto max-w-3xl px-6 lg:px-10">

          <FadeInUp>
            <p className="font-body text-[13px] text-white/40 mb-12 leading-relaxed">
              Last updated: March 2026
            </p>
          </FadeInUp>

          {/* Section 1 */}
          <FadeInUp>
            <div className="mb-14">
              <h2 className="font-heading text-3xl font-light text-white/80 mb-2">1. Introduction</h2>
              <div className="w-10 h-[1px] bg-gradient-to-r from-[#C9A96E] to-transparent mb-6" />
              <p className="font-body text-[14px] text-white/80 leading-[2]">
                Angelic Hair by Angelina Hysko (&ldquo;we&rdquo;, &ldquo;us&rdquo; or &ldquo;our&rdquo;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, store and protect your personal data when you use our website (angelichair.com) and our services. We are based in the United Kingdom and comply with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.
              </p>
            </div>
          </FadeInUp>

          {/* Section 2 */}
          <FadeInUp>
            <div className="mb-14">
              <h2 className="font-heading text-3xl font-light text-white/80 mb-2">2. Data Controller</h2>
              <div className="w-10 h-[1px] bg-gradient-to-r from-[#C9A96E] to-transparent mb-6" />
              <p className="font-body text-[14px] text-white/80 leading-[2]">
                The data controller responsible for your personal data is Angelic Hair by Angelina Hysko, located at 96–98 Harrogate Road, Chapel Allerton, Leeds LS7 4LZ, United Kingdom. If you have any questions about this policy or your personal data, please contact us via our{" "}
                <Link href="/contact" className="text-[#C9A96E] hover:text-[#B8943D] underline underline-offset-4 decoration-[#C9A96E]/30 transition-colors">contact page</Link>{" "}
                or through Instagram at{" "}
                <a href="https://www.instagram.com/angelicc.hair/" target="_blank" rel="noopener noreferrer" className="text-[#C9A96E] hover:text-[#B8943D] underline underline-offset-4 decoration-[#C9A96E]/30 transition-colors">@Angelicc.hair</a>.
              </p>
            </div>
          </FadeInUp>

          {/* Section 3 */}
          <FadeInUp>
            <div className="mb-14">
              <h2 className="font-heading text-3xl font-light text-white/80 mb-2">3. Information We Collect</h2>
              <div className="w-10 h-[1px] bg-gradient-to-r from-[#C9A96E] to-transparent mb-6" />
              <p className="font-body text-[14px] text-white/80 leading-[2] mb-4">
                We may collect the following personal data:
              </p>
              <ul className="space-y-3 ml-1">
                <li className="font-body text-[14px] text-white/80 leading-[2] pl-5 relative before:content-[''] before:absolute before:left-0 before:top-[14px] before:w-1.5 before:h-[1px] before:bg-[#C9A96E]/50">
                  <span className="font-medium">Contact form data</span> &mdash; your name, email address, preferred location, service interest and any message you submit through our website contact form.
                </li>
                <li className="font-body text-[14px] text-white/80 leading-[2] pl-5 relative before:content-[''] before:absolute before:left-0 before:top-[14px] before:w-1.5 before:h-[1px] before:bg-[#C9A96E]/50">
                  <span className="font-medium">Booking data</span> &mdash; if you book an appointment through Fresha (our third-party booking platform for our Leeds salon), Fresha will collect your name, contact details, appointment preferences and payment information. Please refer to{" "}
                  <a href="https://www.fresha.com/privacy" target="_blank" rel="noopener noreferrer" className="text-[#C9A96E] hover:text-[#B8943D] underline underline-offset-4 decoration-[#C9A96E]/30 transition-colors">Fresha&apos;s Privacy Policy</a>{" "}
                  for details on how they handle your data.
                </li>
                <li className="font-body text-[14px] text-white/80 leading-[2] pl-5 relative before:content-[''] before:absolute before:left-0 before:top-[14px] before:w-1.5 before:h-[1px] before:bg-[#C9A96E]/50">
                  <span className="font-medium">Social media interactions</span> &mdash; if you contact us or interact with us via Instagram or other social media platforms, the platform may share certain information with us in accordance with their own privacy policies.
                </li>
                <li className="font-body text-[14px] text-white/80 leading-[2] pl-5 relative before:content-[''] before:absolute before:left-0 before:top-[14px] before:w-1.5 before:h-[1px] before:bg-[#C9A96E]/50">
                  <span className="font-medium">Website usage data</span> &mdash; we may collect technical data such as your IP address, browser type, pages visited and time spent on our website through cookies and similar technologies.
                </li>
              </ul>
            </div>
          </FadeInUp>

          {/* Section 4 */}
          <FadeInUp>
            <div className="mb-14">
              <h2 className="font-heading text-3xl font-light text-white/80 mb-2">4. How We Use Your Data</h2>
              <div className="w-10 h-[1px] bg-gradient-to-r from-[#C9A96E] to-transparent mb-6" />
              <p className="font-body text-[14px] text-white/80 leading-[2] mb-4">
                We use your personal data for the following purposes:
              </p>
              <ul className="space-y-3 ml-1">
                <li className="font-body text-[14px] text-white/80 leading-[2] pl-5 relative before:content-[''] before:absolute before:left-0 before:top-[14px] before:w-1.5 before:h-[1px] before:bg-[#C9A96E]/50">
                  To respond to your enquiries and provide customer service.
                </li>
                <li className="font-body text-[14px] text-white/80 leading-[2] pl-5 relative before:content-[''] before:absolute before:left-0 before:top-[14px] before:w-1.5 before:h-[1px] before:bg-[#C9A96E]/50">
                  To manage and fulfil your appointments and bookings.
                </li>
                <li className="font-body text-[14px] text-white/80 leading-[2] pl-5 relative before:content-[''] before:absolute before:left-0 before:top-[14px] before:w-1.5 before:h-[1px] before:bg-[#C9A96E]/50">
                  To improve our website, services and client experience.
                </li>
                <li className="font-body text-[14px] text-white/80 leading-[2] pl-5 relative before:content-[''] before:absolute before:left-0 before:top-[14px] before:w-1.5 before:h-[1px] before:bg-[#C9A96E]/50">
                  To comply with legal obligations.
                </li>
              </ul>
            </div>
          </FadeInUp>

          {/* Section 5 */}
          <FadeInUp>
            <div className="mb-14">
              <h2 className="font-heading text-3xl font-light text-white/80 mb-2">5. Legal Basis for Processing</h2>
              <div className="w-10 h-[1px] bg-gradient-to-r from-[#C9A96E] to-transparent mb-6" />
              <p className="font-body text-[14px] text-white/80 leading-[2] mb-4">
                Under the UK GDPR, we process your data based on the following lawful bases:
              </p>
              <ul className="space-y-3 ml-1">
                <li className="font-body text-[14px] text-white/80 leading-[2] pl-5 relative before:content-[''] before:absolute before:left-0 before:top-[14px] before:w-1.5 before:h-[1px] before:bg-[#C9A96E]/50">
                  <span className="font-medium">Consent</span> &mdash; when you submit a contact form or accept cookies on our website.
                </li>
                <li className="font-body text-[14px] text-white/80 leading-[2] pl-5 relative before:content-[''] before:absolute before:left-0 before:top-[14px] before:w-1.5 before:h-[1px] before:bg-[#C9A96E]/50">
                  <span className="font-medium">Contractual necessity</span> &mdash; to fulfil appointments and services you have requested.
                </li>
                <li className="font-body text-[14px] text-white/80 leading-[2] pl-5 relative before:content-[''] before:absolute before:left-0 before:top-[14px] before:w-1.5 before:h-[1px] before:bg-[#C9A96E]/50">
                  <span className="font-medium">Legitimate interest</span> &mdash; to improve our services and maintain our business operations.
                </li>
              </ul>
            </div>
          </FadeInUp>

          {/* Section 6 */}
          <FadeInUp>
            <div className="mb-14">
              <h2 className="font-heading text-3xl font-light text-white/80 mb-2">6. Cookies</h2>
              <div className="w-10 h-[1px] bg-gradient-to-r from-[#C9A96E] to-transparent mb-6" />
              <p className="font-body text-[14px] text-white/80 leading-[2] mb-4">
                Our website may use cookies and similar tracking technologies to enhance your browsing experience. Cookies are small text files stored on your device that help us understand how you use our site.
              </p>
              <p className="font-body text-[14px] text-white/80 leading-[2] mb-4">
                We may use the following types of cookies:
              </p>
              <ul className="space-y-3 ml-1">
                <li className="font-body text-[14px] text-white/80 leading-[2] pl-5 relative before:content-[''] before:absolute before:left-0 before:top-[14px] before:w-1.5 before:h-[1px] before:bg-[#C9A96E]/50">
                  <span className="font-medium">Essential cookies</span> &mdash; required for the website to function correctly.
                </li>
                <li className="font-body text-[14px] text-white/80 leading-[2] pl-5 relative before:content-[''] before:absolute before:left-0 before:top-[14px] before:w-1.5 before:h-[1px] before:bg-[#C9A96E]/50">
                  <span className="font-medium">Analytics cookies</span> &mdash; to help us understand website usage and improve our content.
                </li>
              </ul>
              <p className="font-body text-[14px] text-white/80 leading-[2] mt-4">
                You can control or disable cookies through your browser settings. Disabling certain cookies may affect the functionality of our website.
              </p>
            </div>
          </FadeInUp>

          {/* Section 7 */}
          <FadeInUp>
            <div className="mb-14">
              <h2 className="font-heading text-3xl font-light text-white/80 mb-2">7. Third-Party Services</h2>
              <div className="w-10 h-[1px] bg-gradient-to-r from-[#C9A96E] to-transparent mb-6" />
              <p className="font-body text-[14px] text-white/80 leading-[2] mb-4">
                Our website contains links to third-party services, including:
              </p>
              <ul className="space-y-3 ml-1">
                <li className="font-body text-[14px] text-white/80 leading-[2] pl-5 relative before:content-[''] before:absolute before:left-0 before:top-[14px] before:w-1.5 before:h-[1px] before:bg-[#C9A96E]/50">
                  <span className="font-medium">Fresha</span> &mdash; for online booking and appointment management (Leeds salon only).
                </li>
                <li className="font-body text-[14px] text-white/80 leading-[2] pl-5 relative before:content-[''] before:absolute before:left-0 before:top-[14px] before:w-1.5 before:h-[1px] before:bg-[#C9A96E]/50">
                  <span className="font-medium">Instagram</span> &mdash; for social media content and direct messaging.
                </li>
                <li className="font-body text-[14px] text-white/80 leading-[2] pl-5 relative before:content-[''] before:absolute before:left-0 before:top-[14px] before:w-1.5 before:h-[1px] before:bg-[#C9A96E]/50">
                  <span className="font-medium">Google Maps</span> &mdash; for displaying our salon location.
                </li>
              </ul>
              <p className="font-body text-[14px] text-white/80 leading-[2] mt-4">
                These third-party services have their own privacy policies and we encourage you to review them. We are not responsible for the privacy practices of external websites.
              </p>
            </div>
          </FadeInUp>

          {/* Section 8 */}
          <FadeInUp>
            <div className="mb-14">
              <h2 className="font-heading text-3xl font-light text-white/80 mb-2">8. Data Sharing</h2>
              <div className="w-10 h-[1px] bg-gradient-to-r from-[#C9A96E] to-transparent mb-6" />
              <p className="font-body text-[14px] text-white/80 leading-[2]">
                We do not sell, trade or rent your personal data to third parties. We will never share your information for marketing purposes without your explicit consent. We may share your data only in the following circumstances: with service providers who assist in operating our website and business (under appropriate data processing agreements), or where required by law or to protect our legal rights.
              </p>
            </div>
          </FadeInUp>

          {/* Section 9 */}
          <FadeInUp>
            <div className="mb-14">
              <h2 className="font-heading text-3xl font-light text-white/80 mb-2">9. Data Retention</h2>
              <div className="w-10 h-[1px] bg-gradient-to-r from-[#C9A96E] to-transparent mb-6" />
              <p className="font-body text-[14px] text-white/80 leading-[2]">
                We retain your personal data only for as long as necessary to fulfil the purposes for which it was collected, or as required by law. Contact form enquiries are retained for up to 12 months unless you request earlier deletion. Booking records managed through Fresha are subject to Fresha&apos;s own data retention policies.
              </p>
            </div>
          </FadeInUp>

          {/* Section 10 */}
          <FadeInUp>
            <div className="mb-14">
              <h2 className="font-heading text-3xl font-light text-white/80 mb-2">10. Your Rights</h2>
              <div className="w-10 h-[1px] bg-gradient-to-r from-[#C9A96E] to-transparent mb-6" />
              <p className="font-body text-[14px] text-white/80 leading-[2] mb-4">
                Under the UK GDPR, you have the following rights regarding your personal data:
              </p>
              <ul className="space-y-3 ml-1">
                <li className="font-body text-[14px] text-white/80 leading-[2] pl-5 relative before:content-[''] before:absolute before:left-0 before:top-[14px] before:w-1.5 before:h-[1px] before:bg-[#C9A96E]/50">
                  <span className="font-medium">Right of access</span> &mdash; to request a copy of the personal data we hold about you.
                </li>
                <li className="font-body text-[14px] text-white/80 leading-[2] pl-5 relative before:content-[''] before:absolute before:left-0 before:top-[14px] before:w-1.5 before:h-[1px] before:bg-[#C9A96E]/50">
                  <span className="font-medium">Right to rectification</span> &mdash; to request correction of inaccurate data.
                </li>
                <li className="font-body text-[14px] text-white/80 leading-[2] pl-5 relative before:content-[''] before:absolute before:left-0 before:top-[14px] before:w-1.5 before:h-[1px] before:bg-[#C9A96E]/50">
                  <span className="font-medium">Right to erasure</span> &mdash; to request deletion of your personal data.
                </li>
                <li className="font-body text-[14px] text-white/80 leading-[2] pl-5 relative before:content-[''] before:absolute before:left-0 before:top-[14px] before:w-1.5 before:h-[1px] before:bg-[#C9A96E]/50">
                  <span className="font-medium">Right to restrict processing</span> &mdash; to request that we limit how we use your data.
                </li>
                <li className="font-body text-[14px] text-white/80 leading-[2] pl-5 relative before:content-[''] before:absolute before:left-0 before:top-[14px] before:w-1.5 before:h-[1px] before:bg-[#C9A96E]/50">
                  <span className="font-medium">Right to data portability</span> &mdash; to receive your data in a portable format.
                </li>
                <li className="font-body text-[14px] text-white/80 leading-[2] pl-5 relative before:content-[''] before:absolute before:left-0 before:top-[14px] before:w-1.5 before:h-[1px] before:bg-[#C9A96E]/50">
                  <span className="font-medium">Right to object</span> &mdash; to object to certain types of data processing.
                </li>
                <li className="font-body text-[14px] text-white/80 leading-[2] pl-5 relative before:content-[''] before:absolute before:left-0 before:top-[14px] before:w-1.5 before:h-[1px] before:bg-[#C9A96E]/50">
                  <span className="font-medium">Right to withdraw consent</span> &mdash; where processing is based on your consent, you may withdraw it at any time.
                </li>
              </ul>
              <p className="font-body text-[14px] text-white/80 leading-[2] mt-4">
                To exercise any of these rights, please contact us via our{" "}
                <Link href="/contact" className="text-[#C9A96E] hover:text-[#B8943D] underline underline-offset-4 decoration-[#C9A96E]/30 transition-colors">contact page</Link>.
                You also have the right to lodge a complaint with the Information Commissioner&apos;s Office (ICO) at{" "}
                <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer" className="text-[#C9A96E] hover:text-[#B8943D] underline underline-offset-4 decoration-[#C9A96E]/30 transition-colors">ico.org.uk</a>.
              </p>
            </div>
          </FadeInUp>

          {/* Section 11 */}
          <FadeInUp>
            <div className="mb-14">
              <h2 className="font-heading text-3xl font-light text-white/80 mb-2">11. Data Security</h2>
              <div className="w-10 h-[1px] bg-gradient-to-r from-[#C9A96E] to-transparent mb-6" />
              <p className="font-body text-[14px] text-white/80 leading-[2]">
                We take reasonable measures to protect your personal data from unauthorised access, alteration, disclosure or destruction. However, no method of transmission over the internet is completely secure and we cannot guarantee absolute security.
              </p>
            </div>
          </FadeInUp>

          {/* Section 12 */}
          <FadeInUp>
            <div className="mb-14">
              <h2 className="font-heading text-3xl font-light text-white/80 mb-2">12. Changes to This Policy</h2>
              <div className="w-10 h-[1px] bg-gradient-to-r from-[#C9A96E] to-transparent mb-6" />
              <p className="font-body text-[14px] text-white/80 leading-[2]">
                We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date. We encourage you to review this policy periodically.
              </p>
            </div>
          </FadeInUp>

          {/* Section 13 */}
          <FadeInUp>
            <div className="mb-4">
              <h2 className="font-heading text-3xl font-light text-white/80 mb-2">13. Contact Us</h2>
              <div className="w-10 h-[1px] bg-gradient-to-r from-[#C9A96E] to-transparent mb-6" />
              <p className="font-body text-[14px] text-white/80 leading-[2] mb-4">
                If you have any questions about this Privacy Policy or wish to exercise your data rights, please get in touch:
              </p>
              <div className="bg-white/[0.04] border border-[#C9A96E]/15 p-8 relative">
                <div className="absolute top-3 left-3 w-4 h-4 border-t border-l border-[#C9A96E]/15" />
                <div className="absolute bottom-3 right-3 w-4 h-4 border-b border-r border-[#C9A96E]/15" />
                <p className="font-body text-[14px] text-white/80 leading-[2.2]">
                  <span className="font-medium">Angelic Hair by Angelina Hysko</span><br />
                  96–98 Harrogate Road<br />
                  Chapel Allerton, Leeds LS7 4LZ<br />
                  United Kingdom
                </p>
                <div className="mt-4 flex flex-col sm:flex-row gap-4">
                  <Link href="/contact" className="font-body text-[11px] tracking-[0.1em] text-[#C9A96E] hover:text-[#B8943D] underline underline-offset-4 decoration-[#C9A96E]/30 transition-colors">
                    Contact Form
                  </Link>
                  <a href="https://www.instagram.com/angelicc.hair/" target="_blank" rel="noopener noreferrer" className="font-body text-[11px] tracking-[0.1em] text-[#C9A96E] hover:text-[#B8943D] underline underline-offset-4 decoration-[#C9A96E]/30 transition-colors">
                    Instagram: @Angelicc.hair
                  </a>
                </div>
              </div>
            </div>
          </FadeInUp>

        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="bg-[#0D0D0D] py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-6 md:inset-10 border border-[#C9A96E]/8 pointer-events-none" />
        <GoldCornerFrame className="absolute inset-0" />
        <div className="absolute inset-0 texture-overlay" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[300px] bg-[#C9A96E]/[0.03] rounded-full blur-[100px]" />

        <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
          <FadeInUp>
            <p className="font-body text-[13px] text-white/35 mb-6 leading-relaxed">
              Have questions about your data or our policies?
            </p>
          </FadeInUp>
          <FadeInUp delay={0.1}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" className="font-body text-[10px] font-semibold tracking-[0.22em] uppercase px-12 py-4 bg-[#C9A96E] text-[#0D0D0D] hover:bg-[#B8943D] transition-all duration-400 btn-gold">
                Contact Us
              </Link>
              <Link href="/terms" className="font-body text-[10px] tracking-[0.22em] uppercase px-12 py-4 border border-[#C9A96E]/30 text-[#C9A96E]/80 hover:border-[#C9A96E]/60 hover:text-[#D4B96A] transition-all duration-400">
                Terms of Service
              </Link>
            </div>
          </FadeInUp>
        </div>
      </section>
    </>
  );
}
