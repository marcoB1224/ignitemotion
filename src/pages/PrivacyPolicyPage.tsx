import React, { useEffect, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Flame, Twitter, Linkedin, Shield } from 'lucide-react';

function PrivacyPolicyPage() {
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
            <Shield className="logo-pulse w-24 h-24 text-orange-500 mx-auto" />
          </div>
          <h1 className="text-6xl font-bold mb-4 tracking-wide">Privacy Policy</h1>
          <p className="text-2xl text-gray-400 mb-8 tracking-wide max-w-3xl mx-auto">
            How we protect and handle your data
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
                Ignite Motion ("we," "our," or "us") values your privacy and is committed to protecting your personal data. This Privacy Policy outlines how we collect, use, store, and protect your information when you visit our website, use our services, or interact with us.
              </p>

              <h2 className="text-2xl font-bold mb-6">1. Information We Collect</h2>
              <p className="text-gray-400 mb-4">
                We collect different types of information depending on how you interact with Ignite Motion. This includes:
              </p>

              <h3 className="text-xl font-bold mb-4">A. Information You Provide to Us:</h3>
              <ul className="list-disc pl-6 text-gray-400 mb-6">
                <li>Personal Information – Name, email address, phone number, and business details when you fill out our contact form, book a consultation, or purchase a service.</li>
                <li>Payment Information – If you purchase a service, we may collect billing details, but all payments are securely processed through third-party payment processors.</li>
                <li>Business Information – If you're using our AI automation, content creation, or digital marketing services, we may collect details related to your business to tailor our services effectively.</li>
              </ul>

              <h3 className="text-xl font-bold mb-4">B. Information We Collect Automatically:</h3>
              <ul className="list-disc pl-6 text-gray-400 mb-6">
                <li>Cookies & Tracking Data – We use cookies, tracking technologies, and analytics tools to understand how users interact with our website and improve their experience.</li>
                <li>Device & Browser Information – IP address, browser type, and device details to enhance security and optimize our platform.</li>
                <li>Usage Data – Information about your interactions with our website, including page views, clicks, and session duration.</li>
              </ul>

              <h3 className="text-xl font-bold mb-4">C. Third-Party Information:</h3>
              <p className="text-gray-400 mb-4">We may receive data from:</p>
              <ul className="list-disc pl-6 text-gray-400 mb-8">
                <li>Advertising partners who help us run targeted campaigns.</li>
                <li>Social media platforms if you engage with our content on LinkedIn, Twitter, or other networks.</li>
                <li>Third-party integrations such as CRM tools we use for lead management and automation.</li>
              </ul>

              <h2 className="text-2xl font-bold mb-6">2. How We Use Your Information</h2>
              <p className="text-gray-400 mb-4">We use the information collected to:</p>
              <ul className="list-disc pl-6 text-gray-400 mb-6">
                <li>Provide and improve services by delivering AI automation, digital marketing, and content creation solutions tailored to business needs.</li>
                <li>Communicate with you, including sending updates, responding to inquiries, and providing customer support.</li>
                <li>Conduct marketing and advertising, including running targeted ads on Twitter and LinkedIn, optimizing outreach, and sending personalized offers when applicable.</li>
                <li>Enhance security, monitor for fraudulent activity, and prevent unauthorized access.</li>
                <li>Comply with legal obligations and fulfill regulatory requirements.</li>
              </ul>
              <p className="text-gray-400 mb-8">We do not sell, rent, or trade your personal information to third parties.</p>

              <h2 className="text-2xl font-bold mb-6">3. Data Storage and Security</h2>
              <p className="text-gray-400 mb-4">We take data security seriously and implement the following measures to protect your information:</p>
              <ul className="list-disc pl-6 text-gray-400 mb-6">
                <li>Encryption & Secure Storage – Sensitive data is stored securely using industry-standard encryption methods.</li>
                <li>Limited Access – Only authorized personnel have access to stored data.</li>
                <li>Third-Party Security – We partner with reputable CRM, automation, and hosting providers that comply with data protection regulations.</li>
              </ul>
              <p className="text-gray-400 mb-8">Despite our best efforts, no system is 100% secure, and we encourage users to take precautions when sharing personal data online.</p>

              <h2 className="text-2xl font-bold mb-6">4. Your Rights</h2>
              <p className="text-gray-400 mb-4">As a user, you have the right to:</p>
              <ul className="list-disc pl-6 text-gray-400 mb-6">
                <li>Access & Update Your Information – Request a copy of your data or update inaccurate details.</li>
                <li>Opt-Out of Marketing Communications – Unsubscribe from emails or targeted ads at any time.</li>
                <li>Request Data Deletion – Ask us to delete your personal data unless legally required to retain it.</li>
                <li>Restrict Processing – Limit how we use your information under certain circumstances.</li>
              </ul>
              <p className="text-gray-400 mb-8">To exercise any of these rights, contact us at: Marco.b@motionignited.com</p>

              <h2 className="text-2xl font-bold mb-6">5. Cookies & Tracking Technologies</h2>
              <p className="text-gray-400 mb-4">We use cookies to:</p>
              <ul className="list-disc pl-6 text-gray-400 mb-6">
                <li>Enhance user experience and website functionality.</li>
                <li>Analyze site traffic and performance to optimize services.</li>
                <li>Run targeted marketing campaigns based on user behavior.</li>
              </ul>
              <p className="text-gray-400 mb-8">By using our site, you consent to our cookie policy. You can manage cookie preferences in your browser settings.</p>

              <h2 className="text-2xl font-bold mb-6">6. Third-Party Links & Services</h2>
              <p className="text-gray-400 mb-8">
                Our website may contain links to third-party platforms, such as payment processors and social media sites. We are not responsible for their privacy practices, and users should review their respective privacy policies before sharing information.
              </p>

              <h2 className="text-2xl font-bold mb-6">7. Policy Updates</h2>
              <p className="text-gray-400 mb-8">
                We may update this Privacy Policy periodically. The latest version will always be available on our website, and significant changes will be communicated via email or a site notification.
              </p>

              <h2 className="text-2xl font-bold mb-6">8. Contact Us</h2>
              <p className="text-gray-400">For any questions or concerns regarding this Privacy Policy, contact us at:</p>
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

export default PrivacyPolicyPage;