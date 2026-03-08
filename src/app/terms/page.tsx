import Link from "next/link";
import { FadeInUp, GoldLineReveal, GoldCornerFrame } from "@/components/AnimatedSection";

export const metadata = {
  title: "Terms of Service | Angelic Hair by Angelina Hysko",
  description: "Terms of Service for Angelic Hair by Angelina Hysko. Please read these terms carefully before using our website or booking our services.",
};

export default function TermsPage() {
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
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-light text-[#D4B96A] mb-6">Terms of Service</h1>
          </FadeInUp>
          <GoldLineReveal className="w-20" />
          <FadeInUp delay={0.15}>
            <p className="font-body text-[13px] text-white/35 mt-6 max-w-md mx-auto leading-relaxed">
              Please read these terms carefully before using our website or services.
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* ═══ TERMS CONTENT ═══ */}
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
                These Terms of Service (&ldquo;Terms&rdquo;) govern your use of the Angelic Hair website (angelicchair.com) and the hairdressing services provided by Angelic Hair by Angelina Hysko (&ldquo;we&rdquo;, &ldquo;us&rdquo; or &ldquo;our&rdquo;). By accessing our website or booking our services, you agree to be bound by these Terms. If you do not agree with any part of these Terms, please do not use our website or services.
              </p>
            </div>
          </FadeInUp>

          {/* Section 2 */}
          <FadeInUp>
            <div className="mb-14">
              <h2 className="font-heading text-3xl font-light text-white/80 mb-2">2. About Us</h2>
              <div className="w-10 h-[1px] bg-gradient-to-r from-[#C9A96E] to-transparent mb-6" />
              <p className="font-body text-[14px] text-white/80 leading-[2]">
                Angelic Hair by Angelina Hysko is a luxury hairdressing service operating from 96–98 Harrogate Road, Chapel Allerton, Leeds LS7 4LZ, United Kingdom, and as a mobile hairdressing service in Dubai, UAE. We specialise in colour services, hair extensions, bridal styling, treatments and luxury blow-dries.
              </p>
            </div>
          </FadeInUp>

          {/* Section 3 */}
          <FadeInUp>
            <div className="mb-14">
              <h2 className="font-heading text-3xl font-light text-white/80 mb-2">3. Use of Website</h2>
              <div className="w-10 h-[1px] bg-gradient-to-r from-[#C9A96E] to-transparent mb-6" />
              <p className="font-body text-[14px] text-white/80 leading-[2] mb-4">
                By using our website, you agree that:
              </p>
              <ul className="space-y-3 ml-1">
                <li className="font-body text-[14px] text-white/80 leading-[2] pl-5 relative before:content-[''] before:absolute before:left-0 before:top-[14px] before:w-1.5 before:h-[1px] before:bg-[#C9A96E]/50">
                  You will use the website for lawful purposes only.
                </li>
                <li className="font-body text-[14px] text-white/80 leading-[2] pl-5 relative before:content-[''] before:absolute before:left-0 before:top-[14px] before:w-1.5 before:h-[1px] before:bg-[#C9A96E]/50">
                  You will not attempt to interfere with the security or functionality of the website.
                </li>
                <li className="font-body text-[14px] text-white/80 leading-[2] pl-5 relative before:content-[''] before:absolute before:left-0 before:top-[14px] before:w-1.5 before:h-[1px] before:bg-[#C9A96E]/50">
                  You will not reproduce, duplicate or exploit any part of the website without our express permission.
                </li>
                <li className="font-body text-[14px] text-white/80 leading-[2] pl-5 relative before:content-[''] before:absolute before:left-0 before:top-[14px] before:w-1.5 before:h-[1px] before:bg-[#C9A96E]/50">
                  Any information you provide through the website (including contact forms) is accurate and truthful.
                </li>
              </ul>
              <p className="font-body text-[14px] text-white/80 leading-[2] mt-4">
                We reserve the right to restrict access to our website at any time without notice.
              </p>
            </div>
          </FadeInUp>

          {/* Section 4 */}
          <FadeInUp>
            <div className="mb-14">
              <h2 className="font-heading text-3xl font-light text-white/80 mb-2">4. Booking Terms</h2>
              <div className="w-10 h-[1px] bg-gradient-to-r from-[#C9A96E] to-transparent mb-6" />
              <p className="font-body text-[14px] text-white/80 leading-[2] mb-4">
                Appointments at our Leeds salon are booked through Fresha, our third-party booking platform. Dubai appointments are arranged directly via Instagram or our contact form. By booking an appointment, you agree to the following:
              </p>
              <ul className="space-y-3 ml-1">
                <li className="font-body text-[14px] text-white/80 leading-[2] pl-5 relative before:content-[''] before:absolute before:left-0 before:top-[14px] before:w-1.5 before:h-[1px] before:bg-[#C9A96E]/50">
                  A deposit may be required to secure your booking, depending on the service.
                </li>
                <li className="font-body text-[14px] text-white/80 leading-[2] pl-5 relative before:content-[''] before:absolute before:left-0 before:top-[14px] before:w-1.5 before:h-[1px] before:bg-[#C9A96E]/50">
                  Please arrive on time for your appointment. Late arrivals may result in a shortened service or rescheduling.
                </li>
                <li className="font-body text-[14px] text-white/80 leading-[2] pl-5 relative before:content-[''] before:absolute before:left-0 before:top-[14px] before:w-1.5 before:h-[1px] before:bg-[#C9A96E]/50">
                  A consultation may be required before certain services (e.g., colour correction, extensions) to assess suitability and agree on the treatment plan.
                </li>
                <li className="font-body text-[14px] text-white/80 leading-[2] pl-5 relative before:content-[''] before:absolute before:left-0 before:top-[14px] before:w-1.5 before:h-[1px] before:bg-[#C9A96E]/50">
                  Final pricing may vary from estimates based on the condition and length of your hair, time required, and products used. Any changes will be discussed with you before proceeding.
                </li>
              </ul>
            </div>
          </FadeInUp>

          {/* Section 5 */}
          <FadeInUp>
            <div className="mb-14">
              <h2 className="font-heading text-3xl font-light text-white/80 mb-2">5. Cancellation Policy</h2>
              <div className="w-10 h-[1px] bg-gradient-to-r from-[#C9A96E] to-transparent mb-6" />
              <div className="bg-white/[0.04] border border-[#C9A96E]/15 p-8 relative mb-6">
                <div className="absolute top-3 left-3 w-4 h-4 border-t border-l border-[#C9A96E]/15" />
                <div className="absolute bottom-3 right-3 w-4 h-4 border-b border-r border-[#C9A96E]/15" />
                <p className="font-body text-[14px] text-white/80 leading-[2] font-medium">
                  We require a minimum of 24 hours&apos; notice for all cancellations and rescheduling.
                </p>
              </div>
              <ul className="space-y-3 ml-1">
                <li className="font-body text-[14px] text-white/80 leading-[2] pl-5 relative before:content-[''] before:absolute before:left-0 before:top-[14px] before:w-1.5 before:h-[1px] before:bg-[#C9A96E]/50">
                  Cancellations made with less than 24 hours&apos; notice may result in the loss of your deposit.
                </li>
                <li className="font-body text-[14px] text-white/80 leading-[2] pl-5 relative before:content-[''] before:absolute before:left-0 before:top-[14px] before:w-1.5 before:h-[1px] before:bg-[#C9A96E]/50">
                  No-shows (failure to attend without notice) will forfeit the full deposit.
                </li>
                <li className="font-body text-[14px] text-white/80 leading-[2] pl-5 relative before:content-[''] before:absolute before:left-0 before:top-[14px] before:w-1.5 before:h-[1px] before:bg-[#C9A96E]/50">
                  We understand that emergencies happen. If you need to cancel due to unforeseen circumstances, please contact us as soon as possible and we will do our best to accommodate you.
                </li>
                <li className="font-body text-[14px] text-white/80 leading-[2] pl-5 relative before:content-[''] before:absolute before:left-0 before:top-[14px] before:w-1.5 before:h-[1px] before:bg-[#C9A96E]/50">
                  We reserve the right to cancel or reschedule appointments due to illness, emergency or unforeseen circumstances. In such cases, a full refund of any deposit will be provided.
                </li>
              </ul>
            </div>
          </FadeInUp>

          {/* Section 6 */}
          <FadeInUp>
            <div className="mb-14">
              <h2 className="font-heading text-3xl font-light text-white/80 mb-2">6. Payment Terms</h2>
              <div className="w-10 h-[1px] bg-gradient-to-r from-[#C9A96E] to-transparent mb-6" />
              <ul className="space-y-3 ml-1">
                <li className="font-body text-[14px] text-white/80 leading-[2] pl-5 relative before:content-[''] before:absolute before:left-0 before:top-[14px] before:w-1.5 before:h-[1px] before:bg-[#C9A96E]/50">
                  Full payment is due upon completion of the service unless otherwise agreed in advance.
                </li>
                <li className="font-body text-[14px] text-white/80 leading-[2] pl-5 relative before:content-[''] before:absolute before:left-0 before:top-[14px] before:w-1.5 before:h-[1px] before:bg-[#C9A96E]/50">
                  We accept payment via bank transfer, card payment and cash. Accepted payment methods may vary by location.
                </li>
                <li className="font-body text-[14px] text-white/80 leading-[2] pl-5 relative before:content-[''] before:absolute before:left-0 before:top-[14px] before:w-1.5 before:h-[1px] before:bg-[#C9A96E]/50">
                  Deposits paid through Fresha are subject to Fresha&apos;s payment terms and conditions.
                </li>
                <li className="font-body text-[14px] text-white/80 leading-[2] pl-5 relative before:content-[''] before:absolute before:left-0 before:top-[14px] before:w-1.5 before:h-[1px] before:bg-[#C9A96E]/50">
                  Prices listed on our website are indicative and may vary based on individual requirements. Final pricing will be confirmed during your consultation.
                </li>
              </ul>
            </div>
          </FadeInUp>

          {/* Section 7 */}
          <FadeInUp>
            <div className="mb-14">
              <h2 className="font-heading text-3xl font-light text-white/80 mb-2">7. Service Disclaimer</h2>
              <div className="w-10 h-[1px] bg-gradient-to-r from-[#C9A96E] to-transparent mb-6" />
              <p className="font-body text-[14px] text-white/80 leading-[2] mb-4">
                While we strive for the highest quality results on every service, please note:
              </p>
              <ul className="space-y-3 ml-1">
                <li className="font-body text-[14px] text-white/80 leading-[2] pl-5 relative before:content-[''] before:absolute before:left-0 before:top-[14px] before:w-1.5 before:h-[1px] before:bg-[#C9A96E]/50">
                  Hair results depend on many factors including your hair&apos;s current condition, history and natural characteristics. Outcomes may differ from reference images.
                </li>
                <li className="font-body text-[14px] text-white/80 leading-[2] pl-5 relative before:content-[''] before:absolute before:left-0 before:top-[14px] before:w-1.5 before:h-[1px] before:bg-[#C9A96E]/50">
                  Angelina will always discuss realistic expectations during your consultation and prioritise the health and integrity of your hair.
                </li>
                <li className="font-body text-[14px] text-white/80 leading-[2] pl-5 relative before:content-[''] before:absolute before:left-0 before:top-[14px] before:w-1.5 before:h-[1px] before:bg-[#C9A96E]/50">
                  Aftercare instructions must be followed to maintain your results. We cannot be held responsible for damage resulting from improper aftercare.
                </li>
                <li className="font-body text-[14px] text-white/80 leading-[2] pl-5 relative before:content-[''] before:absolute before:left-0 before:top-[14px] before:w-1.5 before:h-[1px] before:bg-[#C9A96E]/50">
                  If you are not satisfied with your service, please contact us within 7 days so we can discuss a resolution.
                </li>
              </ul>
            </div>
          </FadeInUp>

          {/* Section 8 */}
          <FadeInUp>
            <div className="mb-14">
              <h2 className="font-heading text-3xl font-light text-white/80 mb-2">8. Intellectual Property</h2>
              <div className="w-10 h-[1px] bg-gradient-to-r from-[#C9A96E] to-transparent mb-6" />
              <p className="font-body text-[14px] text-white/80 leading-[2] mb-4">
                All content on our website, including but not limited to text, images, logos, graphics, design elements and photography, is the intellectual property of Angelic Hair by Angelina Hysko unless otherwise stated.
              </p>
              <ul className="space-y-3 ml-1">
                <li className="font-body text-[14px] text-white/80 leading-[2] pl-5 relative before:content-[''] before:absolute before:left-0 before:top-[14px] before:w-1.5 before:h-[1px] before:bg-[#C9A96E]/50">
                  You may not copy, reproduce, distribute or create derivative works from our content without prior written consent.
                </li>
                <li className="font-body text-[14px] text-white/80 leading-[2] pl-5 relative before:content-[''] before:absolute before:left-0 before:top-[14px] before:w-1.5 before:h-[1px] before:bg-[#C9A96E]/50">
                  Photography of our work may be shared on our website and social media. If you prefer your images not to be used, please inform us at the time of your appointment.
                </li>
              </ul>
            </div>
          </FadeInUp>

          {/* Section 9 */}
          <FadeInUp>
            <div className="mb-14">
              <h2 className="font-heading text-3xl font-light text-white/80 mb-2">9. Limitation of Liability</h2>
              <div className="w-10 h-[1px] bg-gradient-to-r from-[#C9A96E] to-transparent mb-6" />
              <p className="font-body text-[14px] text-white/80 leading-[2] mb-4">
                To the fullest extent permitted by law:
              </p>
              <ul className="space-y-3 ml-1">
                <li className="font-body text-[14px] text-white/80 leading-[2] pl-5 relative before:content-[''] before:absolute before:left-0 before:top-[14px] before:w-1.5 before:h-[1px] before:bg-[#C9A96E]/50">
                  Our website is provided on an &ldquo;as is&rdquo; basis. We make no warranties regarding the accuracy, completeness or reliability of the content.
                </li>
                <li className="font-body text-[14px] text-white/80 leading-[2] pl-5 relative before:content-[''] before:absolute before:left-0 before:top-[14px] before:w-1.5 before:h-[1px] before:bg-[#C9A96E]/50">
                  We shall not be liable for any indirect, incidental or consequential damages arising from your use of our website or services.
                </li>
                <li className="font-body text-[14px] text-white/80 leading-[2] pl-5 relative before:content-[''] before:absolute before:left-0 before:top-[14px] before:w-1.5 before:h-[1px] before:bg-[#C9A96E]/50">
                  Our total liability for any claim relating to our services shall not exceed the amount paid for the specific service in question.
                </li>
                <li className="font-body text-[14px] text-white/80 leading-[2] pl-5 relative before:content-[''] before:absolute before:left-0 before:top-[14px] before:w-1.5 before:h-[1px] before:bg-[#C9A96E]/50">
                  Nothing in these Terms excludes or limits our liability for death or personal injury caused by negligence, fraud, or any other liability that cannot be excluded under applicable law.
                </li>
              </ul>
            </div>
          </FadeInUp>

          {/* Section 10 */}
          <FadeInUp>
            <div className="mb-14">
              <h2 className="font-heading text-3xl font-light text-white/80 mb-2">10. Third-Party Links</h2>
              <div className="w-10 h-[1px] bg-gradient-to-r from-[#C9A96E] to-transparent mb-6" />
              <p className="font-body text-[14px] text-white/80 leading-[2]">
                Our website may contain links to third-party websites and services, including Fresha, Instagram and Google Maps. These links are provided for your convenience. We have no control over and accept no responsibility for the content, privacy policies or practices of third-party websites.
              </p>
            </div>
          </FadeInUp>

          {/* Section 11 */}
          <FadeInUp>
            <div className="mb-14">
              <h2 className="font-heading text-3xl font-light text-white/80 mb-2">11. Governing Law</h2>
              <div className="w-10 h-[1px] bg-gradient-to-r from-[#C9A96E] to-transparent mb-6" />
              <p className="font-body text-[14px] text-white/80 leading-[2]">
                These Terms are governed by and construed in accordance with the laws of England and Wales. Any disputes arising from these Terms or your use of our website or services shall be subject to the exclusive jurisdiction of the courts of England and Wales.
              </p>
            </div>
          </FadeInUp>

          {/* Section 12 */}
          <FadeInUp>
            <div className="mb-14">
              <h2 className="font-heading text-3xl font-light text-white/80 mb-2">12. Changes to These Terms</h2>
              <div className="w-10 h-[1px] bg-gradient-to-r from-[#C9A96E] to-transparent mb-6" />
              <p className="font-body text-[14px] text-white/80 leading-[2]">
                We reserve the right to update or modify these Terms at any time. Changes will be posted on this page with an updated revision date. Your continued use of our website or services after any changes constitutes your acceptance of the revised Terms.
              </p>
            </div>
          </FadeInUp>

          {/* Section 13 */}
          <FadeInUp>
            <div className="mb-4">
              <h2 className="font-heading text-3xl font-light text-white/80 mb-2">13. Contact Us</h2>
              <div className="w-10 h-[1px] bg-gradient-to-r from-[#C9A96E] to-transparent mb-6" />
              <p className="font-body text-[14px] text-white/80 leading-[2] mb-4">
                If you have any questions about these Terms of Service, please get in touch:
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
              Have questions about our terms or policies?
            </p>
          </FadeInUp>
          <FadeInUp delay={0.1}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" className="font-body text-[10px] font-semibold tracking-[0.22em] uppercase px-12 py-4 bg-[#C9A96E] text-[#0D0D0D] hover:bg-[#B8943D] transition-all duration-400 btn-gold">
                Contact Us
              </Link>
              <Link href="/privacy" className="font-body text-[10px] tracking-[0.22em] uppercase px-12 py-4 border border-[#C9A96E]/30 text-[#C9A96E]/80 hover:border-[#C9A96E]/60 hover:text-[#D4B96A] transition-all duration-400">
                Privacy Policy
              </Link>
            </div>
          </FadeInUp>
        </div>
      </section>
    </>
  );
}
