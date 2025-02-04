import React, { useEffect, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Flame, Twitter, Linkedin, RefreshCcw } from 'lucide-react';

function RefundPolicyPage() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      requestAnimationFrame(() => {
        setCursorPosition({ x: e.clientX, y: e.clientY });
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleMouseEnter = useCallback((e: React.MouseEvent<HTMLElement>) => {
    const element = e.currentTarget;
    element.classList.add('hover-active');
    const learnMore = element.querySelector('.learn-more');
    if (learnMore) {
      learnMore.classList.add('hover-active');
    }
  }, []);

  const handleMouseLeave = useCallback((e: React.MouseEvent<HTMLElement>) => {
    const element = e.currentTarget;
    element.classList.remove('hover-active');
    const learnMore = element.querySelector('.learn-more');
    if (learnMore) {
      learnMore.classList.remove('hover-active');
    }
  }, []);

  const ButtonText = ({ children }: { children: React.ReactNode }) => (
    <span className="button-text">{children}</span>
  );

  return (
    <div className="min-h-screen bg-black text-white font-sans relative">
      <div className="grid-background" />
      <div 
        className="cursor-glow"
        style={{
          left: `${cursorPosition.x}px`,
          top: `${cursorPosition.y}px`
        }}
      />

      {/* Navigation */}
      <nav className="fixed w-full top-0 z-50 bg-black/80 backdrop-blur-sm relative">
        <div className="header-grid" />
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="text-2xl font-bold flex items-center gap-2">
              <Flame className="logo-pulse w-8 h-8 text-orange-500" />
              <span className="tracking-wide">Ignite Motion</span>
            </Link>
            <div className="flex items-center gap-8">
              <Link 
                to="/services" 
                className="footer-link text-sm"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                Services
              </Link>
              <Link 
                to="/about" 
                className="footer-link text-sm"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                About Us
              </Link>
              <Link 
                to="/reviews" 
                className="footer-link text-sm"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                Reviews
              </Link>
              <Link 
                to="/contact" 
                className="footer-link text-sm"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                Contact Us
              </Link>
              <Link 
                to="/contact"
                className="matrix-button px-4 py-2 rounded-lg"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <ButtonText>Let's Begin</ButtonText>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-[30vh] flex items-center justify-center pt-20 pb-12">
        <div className="text-center">
          <div className="relative mb-8">
            <RefreshCcw className="logo-pulse w-24 h-24 text-orange-500 mx-auto" />
          </div>
          <h1 className="text-6xl font-bold mb-4 tracking-wide">Refund Policy</h1>
          <p className="text-2xl text-gray-400 mb-8 tracking-wide max-w-3xl mx-auto">
            Our commitment to your satisfaction
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="feature-card bg-black/40 backdrop-blur-sm p-12 rounded-xl border border-orange-500/20 hover:border-orange-500/40 transition-colors">
            <div className="prose prose-invert max-w-none">
              <div className="mb-8">
                <p className="text-gray-400">Effective Date: 1/4/2025</p>
                <p className="text-gray-400">Last Updated: 2/2/2025</p>
              </div>

              <p className="text-gray-400 mb-8">
                At Ignite Motion, we are committed to providing high-quality AI automation, digital marketing, and content creation services that align with your business goals. Due to the custom nature of our services, refunds are only granted under specific conditions outlined below.
              </p>

              <h2 className="text-2xl font-bold mb-6">1. General Refund Policy</h2>
              <p className="text-gray-400 mb-4">Refunds are not automatically granted and will only be considered under the following conditions:</p>
              <ul className="list-disc pl-6 text-gray-400 mb-8">
                <li>The request must be submitted in writing within the agreed-upon time frame.</li>
                <li>Refunds are only possible if explicitly stated in the service agreement.</li>
                <li>Completed work is non-refundable unless Ignite Motion has failed to meet the agreed-upon project scope.</li>
                <li>Refund requests will be reviewed on a case-by-case basis by our team.</li>
              </ul>

              <h2 className="text-2xl font-bold mb-6">2. Non-Refundable Services</h2>
              <p className="text-gray-400 mb-4">The following services are non-refundable once work has commenced:</p>
              <ul className="list-disc pl-6 text-gray-400 mb-8">
                <li>AI Automation & CRM Development: Once the build process begins, refunds will not be issued.</li>
                <li>Content Creation Services: Custom graphics, video edits, and branding materials are non-refundable once delivered.</li>
                <li>Digital Marketing & Outreach Campaigns: Once an advertising or lead generation campaign is launched, it is considered final and non-refundable.</li>
                <li>Consultations & Strategy Sessions: Any paid consultation or strategic planning session is non-refundable after the session has taken place.</li>
              </ul>

              <h2 className="text-2xl font-bold mb-6">3. Exceptions & Refund Eligibility</h2>
              <p className="text-gray-400 mb-4">Refunds may be considered under the following conditions:</p>
              <ul className="list-disc pl-6 text-gray-400 mb-8">
                <li>Failure to Deliver – If Ignite Motion is unable to deliver the service as agreed due to internal issues, a full or partial refund may be issued.</li>
                <li>Scope Mismatch – If the final deliverable is significantly different from the agreed-upon scope and the client has made reasonable attempts to request corrections, a refund may be considered.</li>
                <li>Technical Issues Preventing Use – If a technical failure within our AI automation prevents the system from functioning and cannot be resolved, a refund may be issued at our discretion.</li>
              </ul>

              <h2 className="text-2xl font-bold mb-6">4. Refund Request Process</h2>
              <p className="text-gray-400 mb-4">To request a refund, clients must:</p>
              <ul className="list-disc pl-6 text-gray-400 mb-8">
                <li>Submit a written refund request via email to Marco.b@motionignited.com with a detailed explanation.</li>
                <li>Provide supporting documentation (contracts, emails, or evidence of the issue).</li>
                <li>Allow up to 10 business days for review.</li>
                <li>If approved, refunds will be processed within 5-10 business days to the original payment method.</li>
              </ul>

              <h2 className="text-2xl font-bold mb-6">5. Chargebacks & Payment Disputes</h2>
              <ul className="list-disc pl-6 text-gray-400 mb-8">
                <li>Clients agree to contact Ignite Motion first to resolve disputes before initiating chargebacks.</li>
                <li>Unauthorized chargebacks may result in service suspension and legal action if deemed fraudulent.</li>
                <li>If a chargeback is initiated after a completed service, Ignite Motion reserves the right to take legal action to recover owed fees.</li>
              </ul>

              <h2 className="text-2xl font-bold mb-6">6. Modifications to this Refund Policy</h2>
              <p className="text-gray-400 mb-8">
                Ignite Motion reserves the right to update or modify this Refund Policy at any time. Clients will be notified of significant changes via email or a website notification.
              </p>

              <h2 className="text-2xl font-bold mb-6">7. Contact Information</h2>
              <p className="text-gray-400">For any refund inquiries, contact:</p>
              <p className="text-gray-400">Marco.b@motionignited.com</p>
              <p className="text-gray-400">https://motionignited.com</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/50 backdrop-blur-sm py-12 relative">
        <div className="footer-grid" />
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 gap-8 mb-8">
            <div className="flex flex-wrap justify-between">
              <div className="w-[calc(100%-200px)] min-w-[200px] max-w-xl">
                <h3 className="text-xl font-bold mb-4 tracking-wide">Stay Updated</h3>
                <div className="flex flex-wrap gap-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 bg-white/10 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                  <button className="matrix-button px-6 py-2 rounded-lg" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    <ButtonText>Subscribe</ButtonText>
                  </button>
                </div>
              </div>
              <div className="flex gap-4 self-end">
                <a 
                  href="https://x.com/IgniteMotion_AI"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-orange-500 transition-colors"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <Twitter className="w-6 h-6" />
                </a>
                <a 
                  href="https://www.linkedin.com/company/ignite-motion/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-orange-500 transition-colors"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
          
          {/* Legal Links */}
          <div className="border-t border-orange-500/20 pt-8">
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
              <Link 
                to="/privacy" 
                className="footer-link text-sm"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                Privacy Policy
              </Link>
              <Link 
                to="/terms" 
                className="footer-link text-sm"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                Terms of Service
              </Link>
              <Link 
                to="/refund" 
                className="footer-link text-sm"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                Refund Policy
              </Link>
              <Link 
                to="/faq" 
                className="footer-link text-sm"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                FAQs
              </Link>
              <Link 
                to="/cookies" 
                className="footer-link text-sm"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                Cookie Policy
              </Link>
              <Link 
                to="/contact" 
                className="footer-link text-sm"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                Contact Us
              </Link>
            </div>
            <p className="text-center text-sm text-gray-500 mt-6">
              © 2024 Ignite Motion. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default RefundPolicyPage;