import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Flame, Twitter, Linkedin, HelpCircle, ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  summary: string;
}

function FAQPage() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [showAll, setShowAll] = useState(false);

  const faqItems: FAQItem[] = [
    {
      question: "What services does Ignite Motion offer?",
      summary: "We provide AI automation, digital marketing, and content creation to help businesses grow efficiently."
    },
    {
      question: "Do you provide outreach solutions for businesses?",
      summary: "Yes, we offer lead capture systems, CRM solutions, and automated outreach for fitness coaches and other businesses."
    },
    {
      question: "What makes Ignite Motion different from other agencies?",
      summary: "Unlike most agencies that just collect a paycheck, we focus on real, measurable results with personalized, fast solutions."
    },
    {
      question: "How quickly can I expect results?",
      summary: "We prioritize speed and efficiency, delivering improvements as soon as your automation or marketing system is implemented."
    },
    {
      question: "What kind of AI automation services do you offer?",
      summary: "We build AI-powered customer support agents, lead generation systems, CRMs, and automated outreach solutions."
    },
    {
      question: "What kind of businesses benefit the most?",
      summary: "Any business looking to scale operations, reduce manual workload, and increase efficiency through automation and marketing."
    },
    {
      question: "How does the onboarding process work?",
      summary: "We start with consultation, create a proposal, build your solution, and ensure smooth implementation with ongoing optimization."
    },
    {
      question: "What content creation services do you offer?",
      summary: "We provide video editing, thumbnail creation, custom images, logos, video ads, and social media content optimization."
    },
    {
      question: "Who can benefit from your content creation services?",
      summary: "Business owners, content creators, e-commerce brands, and coaches looking to improve their branding and marketing."
    },
    {
      question: "Why should I choose Ignite Motion for content creation?",
      summary: "We craft strategic, high-converting visuals with fast turnaround times and creative strategies aligned with your goals."
    },
    {
      question: "What type of videos do you edit?",
      summary: "We edit short-form content, long-form content, video ads, and promotional brand videos for all major platforms."
    },
    {
      question: "What's included in your video editing service?",
      summary: "Professional cuts, color grading, sound design, on-screen text, captions, and custom animations."
    },
    {
      question: "How do I send my video files?",
      summary: "We accept files via Google Drive, WeTransfer, or Dropbox with a dedicated upload link for your footage."
    },
    {
      question: "How long does video editing take?",
      summary: "48-72 hours for short-form, 5-7 days for long-form, and 3-5 days for video ads."
    },
    {
      question: "Why are thumbnails important for videos?",
      summary: "Well-designed thumbnails increase click-through rates and help your content stand out against competitors."
    },
    {
      question: "What type of images can you create?",
      summary: "We design custom visuals for social media, websites, e-commerce products, and marketing materials."
    },
    {
      question: "Do you create custom logos?",
      summary: "Yes, we design original, high-quality logos based on your brand's identity using AI technology."
    },
    {
      question: "How long does logo creation take?",
      summary: "Typically 5-10 business days, depending on complexity and revision requests."
    },
    {
      question: "How often should I post on social media?",
      summary: "We recommend daily posts for Twitter/Instagram, 2-3 times weekly for LinkedIn, and consistent video content for YouTube/TikTok."
    },
    {
      question: "Why is marketing important for my business?",
      summary: "Marketing drives awareness, attracts customers, builds brand recognition, and helps you stay ahead of competitors."
    },
    {
      question: "Why should I streamline my business with AI automation?",
      summary: "AI automation saves time, reduces costs, and improves efficiency by handling repetitive tasks automatically."
    },
    {
      question: "Why should I choose Ignite Motion?",
      summary: "We're 100% results-driven with proven strategies, fast turnaround, and personalized solutions for long-term value."
    },
    {
      question: "How do I get started?",
      summary: "Fill out our contact form for a needs assessment, and we'll determine the best solution for your business."
    }
  ];

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

  const visibleFAQs = showAll ? faqItems : faqItems.slice(0, 10);

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
      <section className="min-h-[30vh] flex items-center justify-center pt-20 pb-6">
        <div className="text-center">
          <div className="relative mb-4">
            <HelpCircle className="logo-pulse w-16 h-16 text-orange-500 mx-auto" />
          </div>
          <h1 className="text-4xl font-bold mb-2 tracking-wide">Frequently Asked Questions</h1>
          <p className="text-lg text-gray-400 tracking-wide max-w-3xl mx-auto">
            Find answers to common questions about our services and solutions.
          </p>
        </div>
      </section>

      {/* FAQ Cards Section */}
      <section className="py-8 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {visibleFAQs.map((item, index) => (
              <div
                key={index}
                className="feature-card bg-black/40 backdrop-blur-sm rounded-lg border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300 p-6 hover:transform hover:scale-[1.02] hover:shadow-lg opacity-0 animate-[fadeIn_0.5s_ease-out_forwards]"
                style={{ animationDelay: `${index * 0.1}s` }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <h3 className="text-lg font-semibold mb-3">{item.question}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.summary}</p>
              </div>
            ))}
          </div>
          
          {faqItems.length > 10 && (
            <div className="text-center mt-8">
              <button
                onClick={() => setShowAll(!showAll)}
                className="matrix-button px-8 py-3 rounded-lg inline-flex items-center gap-2"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <ButtonText>
                  {showAll ? 'Show Less' : 'Learn More'}
                </ButtonText>
                <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${showAll ? 'rotate-180' : ''}`} />
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/50 backdrop-blur-sm py-12 relative mt-12">
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

export default FAQPage;