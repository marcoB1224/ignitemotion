import React, { useEffect, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Flame, Info, ArrowRight, Twitter, Linkedin, Target, Users, Lightbulb, Rocket } from 'lucide-react';

function AboutUsPage() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const href = this.getAttribute('href');
        if (href) {
          document.querySelector(href)?.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });

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
      <section className="min-h-[50vh] flex items-center justify-center pt-20 pb-12">
        <div className="text-center">
          <div className="relative mb-8">
            <Info className="logo-pulse w-24 h-24 text-orange-500 mx-auto" />
          </div>
          <h1 className="text-6xl font-bold mb-4 tracking-wide">About Ignite Motion</h1>
          <p className="text-2xl text-gray-400 mb-8 tracking-wide max-w-3xl mx-auto">
            Revolutionizing Business Growth Through Personalized Solutions
          </p>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Innovation Value Card */}
            <div className="feature-card bg-black/40 backdrop-blur-sm p-8 rounded-xl border border-orange-500/20 hover:border-orange-500/40 transition-colors">
              <div className="flex flex-col items-center text-center">
                <Lightbulb className="w-12 h-12 text-orange-500 mb-4" />
                <h3 className="text-xl font-bold mb-4">Innovation First</h3>
                <p className="text-gray-400 leading-relaxed">
                  We constantly push the boundaries of what's possible, ensuring our clients stay ahead of the curve.
                </p>
              </div>
            </div>

            {/* Results Value Card */}
            <div className="feature-card bg-black/40 backdrop-blur-sm p-8 rounded-xl border border-orange-500/20 hover:border-orange-500/40 transition-colors">
              <div className="flex flex-col items-center text-center">
                <Target className="w-12 h-12 text-orange-500 mb-4" />
                <h3 className="text-xl font-bold mb-4">Results Driven</h3>
                <p className="text-gray-400 leading-relaxed">
                  We measure our success by the tangible results and growth we deliver to our clients.
                </p>
              </div>
            </div>

            {/* Client Success Value Card */}
            <div className="feature-card bg-black/40 backdrop-blur-sm p-8 rounded-xl border border-orange-500/20 hover:border-orange-500/40 transition-colors">
              <div className="flex flex-col items-center text-center">
                <Users className="w-12 h-12 text-orange-500 mb-4" />
                <h3 className="text-xl font-bold mb-4">Client Partnership</h3>
                <p className="text-gray-400 leading-relaxed">
                  We're not just service providers—we're partners in our clients' journey to success.
                </p>
              </div>
            </div>

            {/* Growth Value Card */}
            <div className="feature-card bg-black/40 backdrop-blur-sm p-8 rounded-xl border border-orange-500/20 hover:border-orange-500/40 transition-colors">
              <div className="flex flex-col items-center text-center">
                <Rocket className="w-12 h-12 text-orange-500 mb-4" />
                <h3 className="text-xl font-bold mb-4">Continuous Growth</h3>
                <p className="text-gray-400 leading-relaxed">
                  We believe in constant improvement, both for ourselves and our clients.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-20 px-6 bg-black/20">
        <div className="container mx-auto">
          <div className="feature-card bg-black/40 backdrop-blur-sm p-12 rounded-xl border border-orange-500/20 hover:border-orange-500/40 transition-colors">
            <h2 className="text-3xl font-bold mb-8 text-white">Our Mission</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <p className="text-gray-400 leading-relaxed mb-6">
                  At Ignite Motion, we're revolutionizing how businesses operate through cutting-edge solutions. Our mission is to empower companies with intelligent automation that drives growth, enhances customer experiences, and maximizes operational efficiency. We believe that innovation should be accessible, practical, and results-driven.
                </p>
              </div>
              <div>
                <p className="text-gray-400 leading-relaxed mb-6">
                  We're not just another tech company—we're your partner in digital transformation. Our commitment goes beyond providing tools; we deliver comprehensive solutions that adapt to your unique business needs, ensuring measurable success and sustainable growth in today's competitive landscape.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-6 bg-black/20">
        <div className="container mx-auto">
          <div className="feature-card bg-black/40 backdrop-blur-sm p-12 rounded-xl border border-orange-500/20 hover:border-orange-500/40 transition-colors">
            <h2 className="text-3xl font-bold mb-8 text-white">Why Choose Ignite Motion?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-xl font-bold mb-4 text-orange-500">Expertise That Delivers</h3>
                <p className="text-gray-400 leading-relaxed mb-6">
                  Our team combines deep technical expertise with real-world business experience. We understand the challenges you face because we've been there. This unique perspective allows us to create solutions that don't just work technically—they drive business results.
                </p>
                <h3 className="text-xl font-bold mb-4 text-orange-500">Proven Track Record</h3>
                <p className="text-gray-400 leading-relaxed">
                  We've helped businesses across industries achieve remarkable results through our solutions. From reducing operational costs by 60% to increasing customer engagement by 300%, our solutions deliver measurable impact.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4 text-orange-500">Customized Solutions</h3>
                <p className="text-gray-400 leading-relaxed mb-6">
                  We don't believe in one-size-fits-all solutions. Every business is unique, and we take the time to understand your specific needs, challenges, and goals before crafting a solution that's perfectly tailored to your business.
                </p>
                <h3 className="text-xl font-bold mb-4 text-orange-500">Ongoing Support</h3>
                <p className="text-gray-400 leading-relaxed">
                  Our commitment doesn't end with implementation. We provide ongoing support, optimization, and updates to ensure your solutions continue to deliver value and adapt to your evolving business needs.
                </p>
              </div>
            </div>
            <div className="mt-8 text-center">
              <Link 
                to="/contact"
                className="matrix-button px-8 py-3 rounded-lg inline-flex items-center gap-2"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <ButtonText>Let's Begin</ButtonText>
                <ArrowRight className="w-5 h-5" />
              </Link>
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

export default AboutUsPage;