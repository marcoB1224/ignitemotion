import React from 'react';
import { Link } from 'react-router-dom';
import { Twitter, Linkedin } from 'lucide-react';

interface FooterProps {
  handleMouseEnter: (e: React.MouseEvent<HTMLElement>) => void;
  handleMouseLeave: (e: React.MouseEvent<HTMLElement>) => void;
}

const Footer: React.FC<FooterProps> = ({ handleMouseEnter, handleMouseLeave }) => {
  const ButtonText = ({ children }: { children: React.ReactNode }) => (
    <span className="button-text">{children}</span>
  );

  return (
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
  );
};

export default Footer;