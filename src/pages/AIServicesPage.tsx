import React, { useEffect, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { 
  Flame, ArrowRight, Twitter, Linkedin, Bot, 
  Mail, LayoutDashboard, Headphones, Calendar, 
  Database, Globe, Brain, Target, Clock
} from 'lucide-react';

function AIServicesPage() {
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
            <Bot className="logo-pulse w-24 h-24 text-orange-500 mx-auto" />
          </div>
          <h1 className="text-6xl font-bold mb-4 tracking-wide">AI Services</h1>
          <p className="text-2xl text-gray-400 mb-8 tracking-wide max-w-3xl mx-auto">
            Automate Your Business with Powerful AI Solutions
          </p>
        </div>
      </section>

      {/* AI Services Button Cards */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* AI Automated Outreach */}
            <button 
              className="feature-card bg-black/40 backdrop-blur-sm p-8 rounded-xl border border-orange-500/20 hover:border-orange-500/40 transition-colors text-left"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div className="flex items-start gap-4">
                <Mail className="w-8 h-8 text-orange-500 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2">AI Automated Outreach</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    AI-driven outreach that personalizes and automates prospect engagement at scale.
                  </p>
                </div>
              </div>
            </button>

            {/* AI Automated Social Media */}
            <button 
              className="feature-card bg-black/40 backdrop-blur-sm p-8 rounded-xl border border-orange-500/20 hover:border-orange-500/40 transition-colors text-left"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div className="flex items-start gap-4">
                <LayoutDashboard className="w-8 h-8 text-orange-500 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2">AI Automated Social Media</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    AI-powered scheduling and engagement tools to grow your social presence automatically.
                  </p>
                </div>
              </div>
            </button>

            {/* AI Customer Support Agent */}
            <button 
              className="feature-card bg-black/40 backdrop-blur-sm p-8 rounded-xl border border-orange-500/20 hover:border-orange-500/40 transition-colors text-left"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div className="flex items-start gap-4">
                <Headphones className="w-8 h-8 text-orange-500 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2">AI Customer Support Agent</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    24/7 AI-driven support to answer customer inquiries and resolve issues instantly.
                  </p>
                </div>
              </div>
            </button>

            {/* AI Appointment Scheduling */}
            <button 
              className="feature-card bg-black/40 backdrop-blur-sm p-8 rounded-xl border border-orange-500/20 hover:border-orange-500/40 transition-colors text-left"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div className="flex items-start gap-4">
                <Calendar className="w-8 h-8 text-orange-500 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2">AI Appointment Scheduling</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Seamlessly automate bookings, reminders, and rescheduling for effortless scheduling.
                  </p>
                </div>
              </div>
            </button>

            {/* AI Lead Capture + CRM */}
            <button 
              className="feature-card bg-black/40 backdrop-blur-sm p-8 rounded-xl border border-orange-500/20 hover:border-orange-500/40 transition-colors text-left"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div className="flex items-start gap-4">
                <Database className="w-8 h-8 text-orange-500 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2">AI Lead Capture + CRM</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    AI-powered lead tracking and CRM automation to streamline sales and follow-ups.
                  </p>
                </div>
              </div>
            </button>

            {/* AI Website Creation */}
            <button 
              className="feature-card bg-black/40 backdrop-blur-sm p-8 rounded-xl border border-orange-500/20 hover:border-orange-500/40 transition-colors text-left"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div className="flex items-start gap-4">
                <Globe className="w-8 h-8 text-orange-500 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2">AI Website Creation</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Automated website generation that builds high-performing, fully responsive websites tailored to your brand.
                  </p>
                </div>
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Streamlined Solutions */}
            <div className="feature-card bg-black/40 backdrop-blur-sm p-8 rounded-xl border border-orange-500/20 hover:border-orange-500/40 transition-colors">
              <div className="flex flex-col items-center text-center">
                <Brain className="w-12 h-12 text-orange-500 mb-4" />
                <h2 className="text-2xl font-bold mb-6">Streamlined Solutions</h2>
                <p className="text-gray-400 leading-relaxed">
                  Automate time-consuming tasks so you can focus on what truly matters—growth.
                </p>
              </div>
            </div>

            {/* Advanced Results */}
            <div className="feature-card bg-black/40 backdrop-blur-sm p-8 rounded-xl border border-orange-500/20 hover:border-orange-500/40 transition-colors">
              <div className="flex flex-col items-center text-center">
                <Target className="w-12 h-12 text-orange-500 mb-4" />
                <h2 className="text-2xl font-bold mb-6">Advanced Results</h2>
                <p className="text-gray-400 leading-relaxed">
                  Harness AI to optimize operations, reduce errors, and make data-driven decisions.
                </p>
              </div>
            </div>

            {/* ROI on Time */}
            <div className="feature-card bg-black/40 backdrop-blur-sm p-8 rounded-xl border border-orange-500/20 hover:border-orange-500/40 transition-colors">
              <div className="flex flex-col items-center text-center">
                <Clock className="w-12 h-12 text-orange-500 mb-4" />
                <h2 className="text-2xl font-bold mb-6">ROI on Time</h2>
                <p className="text-gray-400 leading-relaxed">
                  Boost efficiency and maximize returns with intelligent automation built for speed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6 bg-black/20">
        <div className="container mx-auto">
          <div className="feature-card bg-black/40 backdrop-blur-sm p-12 rounded-xl border border-orange-500/20 hover:border-orange-500/40 transition-colors text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Become Automated?</h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Transform your business with our AI solutions. Contact us to learn how we can help you achieve your goals.
            </p>
            <Link 
              to="/contact"
              className="matrix-button px-8 py-3 rounded-lg inline-flex items-center gap-2"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <ButtonText>Contact Us</ButtonText>
              <ArrowRight className="w-5 h-5" />
            </Link>
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

export default AIServicesPage;