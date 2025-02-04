import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Flame, Twitter, Linkedin, Quote, ChevronDown } from 'lucide-react';

interface Review {
  name: string;
  review: string;
  category: 'ai' | 'content';
}

function ReviewsPage() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [filter, setFilter] = useState<'all' | 'ai' | 'content'>('all');
  const [showAll, setShowAll] = useState(false);

  const reviews: Review[] = [
    // Existing Reviews
    {
      name: "Sarah T.",
      review: "The AI automation tools have transformed our lead generation process. We've seen a 300% increase in qualified leads and our customer support team is now more efficient than ever.",
      category: 'ai'
    },
    {
      name: "Michael C.",
      review: "Their video editing service is exceptional. The team understands exactly what works for each platform, and our engagement rates have skyrocketed since working with them.",
      category: 'content'
    },
    {
      name: "David R.",
      review: "The AI outreach automation has been a game-changer. We're connecting with more prospects while maintaining a personal touch. Highly recommend!",
      category: 'ai'
    },
    {
      name: "Emma W.",
      review: "Their thumbnail designs and social media content creation are top-notch. We've seen a significant boost in click-through rates and engagement.",
      category: 'content'
    },
    {
      name: "James M.",
      review: "The AI customer support agent has reduced our response time by 80%. Our customers are happier, and our team can focus on complex issues.",
      category: 'ai'
    },
    {
      name: "Lisa Z.",
      review: "Their video editing team is incredible. They understand pacing, storytelling, and how to keep viewers engaged. My channel has grown exponentially.",
      category: 'content'
    },
    {
      name: "Alex F.",
      review: "The AI-powered CRM has streamlined our entire sales process. Lead tracking, follow-ups, and customer management are now seamless.",
      category: 'ai'
    },
    {
      name: "Rachel K.",
      review: "The quality of their image creation and branding work is outstanding. They've helped us maintain consistency across all platforms.",
      category: 'content'
    },
    // New AI Service Reviews
    {
      name: "Thomas B.",
      review: "Their AI automation has revolutionized our email marketing. Open rates increased by 45% and our team saves countless hours each week.",
      category: 'ai'
    },
    {
      name: "Jennifer P.",
      review: "The AI-driven lead qualification system is brilliant. It's like having an entire sales team working 24/7 to identify our best prospects.",
      category: 'ai'
    },
    {
      name: "Marcus L.",
      review: "Implementing their AI chatbot was a game-changer. Customer satisfaction scores improved by 60% and support tickets decreased significantly.",
      category: 'ai'
    },
    {
      name: "Sophia R.",
      review: "The automated social media management system they built has transformed our online presence. Engagement is up 200% across all platforms.",
      category: 'ai'
    },
    {
      name: "Daniel K.",
      review: "Their AI analytics dashboard provides insights we never had before. Making data-driven decisions has never been easier.",
      category: 'ai'
    },
    // New Content Creation Reviews
    {
      name: "Olivia M.",
      review: "The quality of their video production is unmatched. Each piece perfectly captures our brand's essence and resonates with our audience.",
      category: 'content'
    },
    {
      name: "Nathan S.",
      review: "Their content team transformed our brand identity. The new logo and visual assets have given us a professional edge in our market.",
      category: 'content'
    },
    {
      name: "Emily H.",
      review: "The social media content strategy they developed has doubled our following and significantly increased our brand awareness.",
      category: 'content'
    },
    {
      name: "William P.",
      review: "Their thumbnail designs consistently outperform our old content. Click-through rates have improved by 150% since working with them.",
      category: 'content'
    },
    {
      name: "Victoria C.",
      review: "The marketing videos they produce are exceptional. Our conversion rates have increased dramatically since implementing their content.",
      category: 'content'
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

  const filteredReviews = reviews.filter(review => 
    filter === 'all' ? true : review.category === filter
  );

  const visibleReviews = showAll ? filteredReviews : filteredReviews.slice(0, 6);

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
      <section className="min-h-[40vh] flex items-center justify-center pt-20 pb-12">
        <div className="text-center">
          <div className="relative mb-8">
            <Quote className="logo-pulse w-24 h-24 text-orange-500 mx-auto" />
          </div>
          <h1 className="text-6xl font-bold mb-4 tracking-wide">What Our Clients Say</h1>
          <p className="text-2xl text-gray-400 mb-8 tracking-wide max-w-3xl mx-auto">
            Real Stories from Businesses We've Helped Transform
          </p>
          
          {/* Filter Buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              className={`matrix-button px-6 py-2 rounded-lg ${filter === 'all' ? 'bg-orange-500/20' : ''}`}
              onClick={() => setFilter('all')}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <ButtonText>All Reviews</ButtonText>
            </button>
            <button
              className={`matrix-button px-6 py-2 rounded-lg ${filter === 'ai' ? 'bg-orange-500/20' : ''}`}
              onClick={() => setFilter('ai')}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <ButtonText>AI Services</ButtonText>
            </button>
            <button
              className={`matrix-button px-6 py-2 rounded-lg ${filter === 'content' ? 'bg-orange-500/20' : ''}`}
              onClick={() => setFilter('content')}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <ButtonText>Content Creation</ButtonText>
            </button>
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {visibleReviews.map((review, index) => (
              <div
                key={index}
                className="feature-card bg-black/40 backdrop-blur-sm p-8 rounded-xl border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300 opacity-0 animate-[fadeIn_0.5s_ease-out_forwards]"
                style={{ animationDelay: `${index * 0.1}s` }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <div className="flex flex-col h-full">
                  <p className="text-gray-400 mb-6 flex-grow">
                    "{review.review}"
                  </p>
                  <div className="mt-auto">
                    <p className="font-semibold">{review.name}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {filteredReviews.length > 6 && (
            <div className="text-center mt-12">
              <button
                onClick={() => setShowAll(!showAll)}
                className="matrix-button px-8 py-3 rounded-lg inline-flex items-center gap-2"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <ButtonText>
                  {showAll ? 'Show Less' : 'Read More'}
                </ButtonText>
                <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${showAll ? 'rotate-180' : ''}`} />
              </button>
            </div>
          )}
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

export default ReviewsPage;