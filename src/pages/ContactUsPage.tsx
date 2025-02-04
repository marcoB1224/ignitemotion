import React, { useEffect, useState, useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Flame, Twitter, Linkedin, Mail, MessageSquare, Clock, Info } from 'lucide-react';

function ContactUsPage() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const navigate = useNavigate();

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic form validation
    if (!formData.name || !formData.email || !formData.message) {
      return;
    }

    // Here you would typically handle the form submission to your backend
    // For now, we'll just redirect to the thank you page
    navigate('/thank-you');
  };

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
              <button className="matrix-button px-4 py-2 rounded-lg" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <ButtonText>Let's Begin</ButtonText>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-[50vh] flex items-center justify-center pt-20 pb-12">
        <div className="text-center">
          <div className="relative mb-8">
            <Mail className="logo-pulse w-24 h-24 text-orange-500 mx-auto" />
          </div>
          <h1 className="text-6xl font-bold mb-4 tracking-wide">Contact Us</h1>
          <p className="text-2xl text-gray-400 mb-8 tracking-wide max-w-3xl mx-auto">
            Let's Take Your Business to the Next Level.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="feature-card bg-black/40 backdrop-blur-sm p-12 rounded-xl border border-orange-500/20 hover:border-orange-500/40 transition-colors">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full bg-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full bg-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full bg-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
                      placeholder="How can we help you?"
                      required
                    ></textarea>
                  </div>
                  <button 
                    type="submit" 
                    className="matrix-button w-full px-8 py-3 rounded-lg"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <ButtonText>Send Message</ButtonText>
                  </button>
                </form>
              </div>

              {/* Contact Info */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold mb-8">Contact Information</h2>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <MessageSquare className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold mb-1">Email us</h3>
                        <p className="text-gray-400">Our friendly team is here to help.</p>
                        <a href="mailto:Marco.b@motionignited.com" className="text-orange-500 hover:text-orange-400">
                          Marco.b@motionignited.com
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Clock className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold mb-1">Response Time</h3>
                        <p className="text-gray-400">We typically respond within 24-48 hours.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Info className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold mb-1">Additional Support</h3>
                        <p className="text-gray-400">Visit our <Link to="/faq" className="text-orange-500 hover:text-orange-400">FAQ page</Link> for quick answers to common questions.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4">Follow Us</h3>
                  <div className="flex gap-4">
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

export default ContactUsPage;