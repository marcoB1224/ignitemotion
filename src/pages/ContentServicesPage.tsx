import React, { useEffect, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { 
  Flame, ArrowRight, Twitter, Linkedin, Video,
  Scissors, Image as ImageIcon, PenTool, Megaphone,
  PlaySquare, Palette, Target, LayoutDashboard
} from 'lucide-react';

function ContentServicesPage() {
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
            <Video className="logo-pulse w-24 h-24 text-orange-500 mx-auto" />
          </div>
          <h1 className="text-6xl font-bold mb-4 tracking-wide">Content Creation Services</h1>
          <p className="text-2xl text-gray-400 mb-8 tracking-wide max-w-3xl mx-auto">
            Elevate Your Brand with Engaging Content
          </p>
        </div>
      </section>

      {/* Content Creation Button Cards */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Video Editing */}
            <button 
              className="feature-card bg-black/40 backdrop-blur-sm p-8 rounded-xl border border-orange-500/20 hover:border-orange-500/40 transition-colors text-left"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div className="flex items-start gap-4">
                <Scissors className="w-8 h-8 text-orange-500 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Video Editing</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    High-quality video edits that bring your content to life with precision and creativity.
                  </p>
                </div>
              </div>
            </button>

            {/* Thumbnail Creation */}
            <button 
              className="feature-card bg-black/40 backdrop-blur-sm p-8 rounded-xl border border-orange-500/20 hover:border-orange-500/40 transition-colors text-left"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div className="flex items-start gap-4">
                <ImageIcon className="w-8 h-8 text-orange-500 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Thumbnail Creation</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Eye-catching thumbnails that drive clicks and increase video engagement.
                  </p>
                </div>
              </div>
            </button>

            {/* Image Creation */}
            <button 
              className="feature-card bg-black/40 backdrop-blur-sm p-8 rounded-xl border border-orange-500/20 hover:border-orange-500/40 transition-colors text-left"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div className="flex items-start gap-4">
                <Palette className="w-8 h-8 text-orange-500 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Image Creation</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Custom images crafted for ads, websites, and branding to make your visuals stand out.
                  </p>
                </div>
              </div>
            </button>

            {/* Logo Creation */}
            <button 
              className="feature-card bg-black/40 backdrop-blur-sm p-8 rounded-xl border border-orange-500/20 hover:border-orange-500/40 transition-colors text-left"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div className="flex items-start gap-4">
                <PenTool className="w-8 h-8 text-orange-500 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Logo Creation</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Professional logos designed to represent your brand with impact and recognition.
                  </p>
                </div>
              </div>
            </button>

            {/* Video Ad Creation */}
            <button 
              className="feature-card bg-black/40 backdrop-blur-sm p-8 rounded-xl border border-orange-500/20 hover:border-orange-500/40 transition-colors text-left"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div className="flex items-start gap-4">
                <PlaySquare className="w-8 h-8 text-orange-500 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Video Ad Creation</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Strategic ad videos that capture attention, boost conversions, and drive business growth.
                  </p>
                </div>
              </div>
            </button>

            {/* Social Media Content */}
            <button 
              className="feature-card bg-black/40 backdrop-blur-sm p-8 rounded-xl border border-orange-500/20 hover:border-orange-500/40 transition-colors text-left"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div className="flex items-start gap-4">
                <LayoutDashboard className="w-8 h-8 text-orange-500 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Social Media Content</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Engaging, platform-specific content designed to boost interaction and brand presence.
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
            {/* Post-Production */}
            <div className="feature-card bg-black/40 backdrop-blur-sm p-8 rounded-xl border border-orange-500/20 hover:border-orange-500/40 transition-colors">
              <div className="flex flex-col items-center text-center">
                <Scissors className="w-12 h-12 text-orange-500 mb-4" />
                <h2 className="text-2xl font-bold mb-6">Post-Production</h2>
                <p className="text-gray-400 leading-relaxed">
                  Polish your raw footage with expert editing, color grading, and sound design.
                </p>
              </div>
            </div>

            {/* Video Marketing */}
            <div className="feature-card bg-black/40 backdrop-blur-sm p-8 rounded-xl border border-orange-500/20 hover:border-orange-500/40 transition-colors">
              <div className="flex flex-col items-center text-center">
                <Megaphone className="w-12 h-12 text-orange-500 mb-4" />
                <h2 className="text-2xl font-bold mb-6">Video Marketing</h2>
                <p className="text-gray-400 leading-relaxed">
                  Engage your audience with compelling video content that converts viewers into customers.
                </p>
              </div>
            </div>

            {/* Build Brand Awareness */}
            <div className="feature-card bg-black/40 backdrop-blur-sm p-8 rounded-xl border border-orange-500/20 hover:border-orange-500/40 transition-colors">
              <div className="flex flex-col items-center text-center">
                <Target className="w-12 h-12 text-orange-500 mb-4" />
                <h2 className="text-2xl font-bold mb-6">Build Brand Awareness</h2>
                <p className="text-gray-400 leading-relaxed">
                  Use custom visuals and branding to create a lasting impression and grow your influence.
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
            <h2 className="text-3xl font-bold mb-6">Ready to Create?</h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Let's work together to create content that resonates with your audience and drives results.
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

export default ContentServicesPage;