import React, { useEffect, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Flame, Twitter, Linkedin, Cookie } from 'lucide-react';

function CookiePolicyPage() {
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
            <Cookie className="logo-pulse w-24 h-24 text-orange-500 mx-auto" />
          </div>
          <h1 className="text-6xl font-bold mb-4 tracking-wide">Cookie Policy</h1>
          <p className="text-2xl text-gray-400 mb-8 tracking-wide max-w-3xl mx-auto">
            How we use cookies to improve your experience
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
                Ignite Motion ("we," "our," or "us") is committed to transparency regarding how we use cookies and tracking technologies on our website. This Cookie Policy explains what cookies are, how we use them, and how you can manage your cookie preferences.
              </p>

              <h2 className="text-2xl font-bold mb-6">1. What Are Cookies?</h2>
              <p className="text-gray-400 mb-8">
                Cookies are small text files stored on your device (computer, tablet, or smartphone) when you visit a website. They help improve your experience by remembering preferences, analyzing site traffic, and enabling personalized content.
                <br /><br />
                Cookies may be session-based (deleted when you close your browser) or persistent (stored for a set period before expiring).
              </p>

              <h2 className="text-2xl font-bold mb-6">2. How We Use Cookies</h2>
              <p className="text-gray-400 mb-4">Ignite Motion uses cookies for the following purposes:</p>

              <h3 className="text-xl font-bold mb-4">A. Essential Cookies</h3>
              <ul className="list-disc pl-6 text-gray-400 mb-4">
                <li>Necessary for the website to function properly.</li>
                <li>Enable navigation, security features, and form submissions.</li>
                <li>These cookies cannot be disabled.</li>
              </ul>

              <h3 className="text-xl font-bold mb-4">B. Performance & Analytics Cookies</h3>
              <ul className="list-disc pl-6 text-gray-400 mb-4">
                <li>Help us understand how users interact with our site.</li>
                <li>Collect anonymized data on page views, session duration, and bounce rates.</li>
                <li>Used to improve website performance and user experience.</li>
              </ul>

              <h3 className="text-xl font-bold mb-4">C. Functional Cookies</h3>
              <ul className="list-disc pl-6 text-gray-400 mb-4">
                <li>Remember user preferences, such as language settings.</li>
                <li>Enhance user experience by providing personalized content.</li>
              </ul>

              <h3 className="text-xl font-bold mb-4">D. Marketing & Advertising Cookies</h3>
              <ul className="list-disc pl-6 text-gray-400 mb-8">
                <li>Used to deliver relevant advertisements on LinkedIn, Twitter, and other platforms.</li>
                <li>Track user behavior across different sites to optimize ad targeting.</li>
                <li>May be set by third-party advertising partners.</li>
              </ul>

              <h2 className="text-2xl font-bold mb-6">3. Third-Party Cookies</h2>
              <p className="text-gray-400 mb-4">
                We work with third-party services, such as analytics providers and advertising networks, which may place cookies on our website. These include but are not limited to:
              </p>
              <ul className="list-disc pl-6 text-gray-400 mb-4">
                <li>Google Analytics (for website analytics)</li>
                <li>Meta (Facebook) & Twitter Ads (for marketing purposes)</li>
                <li>LinkedIn Ads (for B2B outreach)</li>
              </ul>
              <p className="text-gray-400 mb-8">
                We do not control these third-party cookies, and their use is governed by the respective privacy policies of these providers.
              </p>

              <h2 className="text-2xl font-bold mb-6">4. How to Manage Cookies</h2>
              <p className="text-gray-400 mb-4">You can control and manage cookies in the following ways:</p>
              <ul className="list-disc pl-6 text-gray-400 mb-8">
                <li>Browser Settings: Most browsers allow you to block or delete cookies via their settings.</li>
                <li>Cookie Preferences: We provide a cookie consent banner that allows you to accept or decline non-essential cookies.</li>
                <li>Opt-Out of Tracking: You can opt out of targeted advertising through services like Google Ads Settings and YourAdChoices.</li>
              </ul>

              <h2 className="text-2xl font-bold mb-6">5. Changes to This Cookie Policy</h2>
              <p className="text-gray-400 mb-8">
                We may update this Cookie Policy periodically. Any changes will be posted on this page with a new "Last Updated" date.
              </p>

              <h2 className="text-2xl font-bold mb-6">6. Contact Information</h2>
              <p className="text-gray-400">For any questions or concerns about this Cookie Policy, contact us at:</p>
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

export default CookiePolicyPage;