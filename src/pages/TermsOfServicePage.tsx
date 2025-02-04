import React, { useEffect, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Flame, Twitter, Linkedin, FileText } from 'lucide-react';

function TermsOfServicePage() {
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
            <FileText className="logo-pulse w-24 h-24 text-orange-500 mx-auto" />
          </div>
          <h1 className="text-6xl font-bold mb-4 tracking-wide">Terms of Service</h1>
          <p className="text-2xl text-gray-400 mb-8 tracking-wide max-w-3xl mx-auto">
            Our commitment to you and your business
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
                Welcome to Ignite Motion. By accessing our website, purchasing our services, or engaging with any of our AI automation, digital marketing, and content creation solutions, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you should discontinue the use of our website and services immediately.
              </p>

              <h2 className="text-2xl font-bold mb-6">1. Introduction</h2>
              <p className="text-gray-400 mb-4">
                These Terms of Service ("Terms") govern your use of Ignite Motion's website, services, and products. By using our services, you confirm that you have read, understood, and agreed to these Terms. If you are accepting these Terms on behalf of a company, you represent that you have the authority to do so.
              </p>
              <p className="text-gray-400 mb-8">
                We reserve the right to update or modify these Terms at any time. We will notify users of significant changes via email or a notification on our website. Your continued use of our services after changes take effect constitutes acceptance of the updated Terms.
              </p>

              <h2 className="text-2xl font-bold mb-6">2. User Responsibilities</h2>
              <p className="text-gray-400 mb-4">When using Ignite Motion's services, you agree to:</p>
              <ul className="list-disc pl-6 text-gray-400 mb-4">
                <li>Provide accurate, current, and complete information when signing up or purchasing a service.</li>
                <li>Maintain the confidentiality and security of your account credentials.</li>
                <li>Not engage in fraudulent, misleading, or illegal activities using our services.</li>
                <li>Comply with all applicable local, state, federal, and international laws.</li>
                <li>Not copy, modify, distribute, sell, or lease any part of our services or content without written permission.</li>
                <li>Not use our services to disrupt, damage, or interfere with our website, software, or other users.</li>
              </ul>
              <p className="text-gray-400 mb-8">Failure to comply with these obligations may result in account suspension or termination.</p>

              <h2 className="text-2xl font-bold mb-6">3. Payments & Refunds</h2>
              <p className="text-gray-400 mb-4">All payments for Ignite Motion services must be made in full according to the terms outlined in the service agreement or invoice.</p>
              
              <h3 className="text-xl font-bold mb-4">A. Payment Terms</h3>
              <ul className="list-disc pl-6 text-gray-400 mb-4">
                <li>We accept payments via credit/debit cards, bank transfers, and approved online payment platforms.</li>
                <li>Payment is required before work begins, unless otherwise agreed upon in a custom contract.</li>
                <li>Late payments may result in service delays or additional fees.</li>
              </ul>

              <h3 className="text-xl font-bold mb-4">B. Refund Policy</h3>
              <ul className="list-disc pl-6 text-gray-400 mb-8">
                <li>Due to the custom nature of our services, refunds are only granted under specific conditions outlined below.</li>
                <li>Refund requests must be submitted in writing within the agreed time frame.</li>
                <li>Completed work is non-refundable unless there is a failure on our part to meet the agreed-upon scope.</li>
                <li>Refund requests will be reviewed by the team once requested.</li>
                <li>Refunds will ONLY be possible when stated in the agreement for services.</li>
              </ul>

              <h2 className="text-2xl font-bold mb-6">4. Intellectual Property</h2>
              <h3 className="text-xl font-bold mb-4">A. Ownership of Content</h3>
              <ul className="list-disc pl-6 text-gray-400 mb-4">
                <li>All AI automation tools, marketing strategies, branding materials, designs, and code created by Ignite Motion remain the intellectual property of Ignite Motion, unless explicitly transferred in a written agreement.</li>
                <li>Clients receive a license to use the content created for their business, but ownership does not transfer unless agreed upon in writing.</li>
              </ul>

              <h3 className="text-xl font-bold mb-4">B. Usage Restrictions</h3>
              <ul className="list-disc pl-6 text-gray-400 mb-8">
                <li>Clients may not resell, modify, or redistribute any materials created by Ignite Motion without express permission.</li>
                <li>Ignite Motion reserves the right to showcase non-confidential project work in portfolios or marketing materials.</li>
              </ul>

              <h2 className="text-2xl font-bold mb-6">5. Limitation of Liability</h2>
              <p className="text-gray-400 mb-4">While we strive to deliver high-quality services and accurate automation solutions, Ignite Motion is not liable for:</p>
              <ul className="list-disc pl-6 text-gray-400 mb-8">
                <li>Indirect, incidental, or consequential damages resulting from the use of our services.</li>
                <li>Loss of data, revenue, or business opportunities due to technical failures, third-party tools, or user errors.</li>
                <li>Service disruptions caused by unforeseen circumstances such as cyberattacks, server failures, or legal restrictions.</li>
              </ul>
              <p className="text-gray-400 mb-8">Our liability is limited to the total amount paid by the client for the affected service within the last 12 months.</p>

              <h2 className="text-2xl font-bold mb-6">6. Termination of Services</h2>
              <p className="text-gray-400 mb-4">Ignite Motion reserves the right to terminate or suspend services under the following conditions:</p>
              <ul className="list-disc pl-6 text-gray-400 mb-4">
                <li>Breach of Terms – If a user violates these Terms, we may immediately suspend access to services without a refund.</li>
                <li>Non-Payment – If payments are not made as agreed, we reserve the right to halt services until the balance is settled.</li>
                <li>Abuse or Misuse – Any attempt to exploit, misuse, or harm our services, systems, or reputation may result in permanent termination.</li>
                <li>Discontinuation of Service – If a service is discontinued, clients will be notified in advance and given options for transitioning.</li>
              </ul>
              <p className="text-gray-400 mb-8">Clients who wish to terminate their service agreement must provide written notice at least 30 days in advance.</p>

              <h2 className="text-2xl font-bold mb-6">7. Governing Law & Dispute Resolution</h2>
              <p className="text-gray-400 mb-8">
                These Terms of Service shall be governed by and interpreted under the laws of the State of California, USA. Any disputes shall first be attempted to be resolved through negotiation or mediation before legal action is pursued.
                <br /><br />
                If legal action is required, disputes shall be handled exclusively in the courts of San Mateo County, California, USA.
              </p>

              <h2 className="text-2xl font-bold mb-6">8. Contact Information</h2>
              <p className="text-gray-400">For any questions or concerns regarding these Terms of Service, please contact:</p>
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

export default TermsOfServicePage;