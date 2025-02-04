import React, { useEffect, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Flame, Bot, Video, ArrowRight } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

function HomePage() {
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

      <Header handleMouseEnter={handleMouseEnter} handleMouseLeave={handleMouseLeave} />

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center pt-20">
        <div className="text-center mb-12">
          <div className="relative mb-8">
            <Flame className="logo-pulse w-24 h-24 text-orange-500 mx-auto" />
          </div>
          <h1 className="text-6xl font-bold mb-4 tracking-wide">Ignite Motion</h1>
          <p className="text-2xl text-gray-400 mb-8 tracking-wide">Transforming Businesses with Personalized Solutions</p>
          <div className="flex justify-center gap-4">
            <Link 
              to="/cc"
              className="matrix-button px-6 py-2 rounded-lg inline-block"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <span className="button-text">CC Landing Page</span>
            </Link>
            <Link 
              to="/ai"
              className="matrix-button px-6 py-2 rounded-lg inline-block"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <span className="button-text">AI Landing Page</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Info Cards Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Why Choose Us Card */}
            <div className="feature-card bg-black/40 backdrop-blur-sm p-12 rounded-xl border border-orange-500/20 hover:border-orange-500/40 transition-colors">
              <h2 className="text-3xl font-bold mb-6">Why Choose Ignite Motion?</h2>
              <p className="text-gray-400 leading-relaxed">
                Ignite Motion isn't just another agency—we're a results-driven powerhouse that prioritizes real impact. We build AI automation and content solutions that don't just look good but move the needle for your business. With fast turnaround times, proven strategies, and tailored solutions, we ensure you get measurable growth, not just promises.
              </p>
            </div>

            {/* What We Offer Card */}
            <div className="feature-card bg-black/40 backdrop-blur-sm p-12 rounded-xl border border-orange-500/20 hover:border-orange-500/40 transition-colors">
              <h2 className="text-3xl font-bold mb-6">What We Offer</h2>
              <p className="text-gray-400 leading-relaxed">
                Our solutions streamline your business, drive revenue, and boost engagement. From AI-powered customer support and automated lead capture to high-impact content creation, every service is engineered to get you results. Whether you need increased conversions, better branding, or hands-free automation, we deliver systems that work for you—24/7.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
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
            <Link 
              to="/about" 
              className="learn-more mission-learn-more mt-8 inline-flex items-center gap-1 text-sm font-medium"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              Learn More <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* AI Services Card */}
            <div className="feature-card bg-black/40 backdrop-blur-sm p-8 rounded-xl border border-orange-500/20 hover:border-orange-500/40 transition-colors">
              <div className="flex flex-col items-center text-center">
                <Bot className="w-12 h-12 text-orange-500 mb-4" />
                <h2 className="text-2xl font-bold mb-6">AI Services</h2>
                <p className="text-gray-400 leading-relaxed mb-8">
                  Automate your business with AI solutions that handle the heavy lifting for you.
                </p>
                <Link 
                  to="/services/ai"
                  className="learn-more mission-learn-more inline-flex items-center gap-1 text-sm font-medium"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Content Creation Services Card */}
            <div className="feature-card bg-black/40 backdrop-blur-sm p-8 rounded-xl border border-orange-500/20 hover:border-orange-500/40 transition-colors">
              <div className="flex flex-col items-center text-center">
                <Video className="w-12 h-12 text-orange-500 mb-4" />
                <h2 className="text-2xl font-bold mb-6">Content Creation Services</h2>
                <p className="text-gray-400 leading-relaxed mb-8">
                  Level up your content for better performance, engagement, and brand growth.
                </p>
                <Link 
                  to="/services/content"
                  className="learn-more mission-learn-more inline-flex items-center gap-1 text-sm font-medium"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer handleMouseEnter={handleMouseEnter} handleMouseLeave={handleMouseLeave} />
    </div>
  );
}

export default HomePage;