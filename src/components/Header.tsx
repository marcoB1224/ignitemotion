import React from 'react';
import { Link } from 'react-router-dom';
import { Flame } from 'lucide-react';

interface HeaderProps {
  handleMouseEnter: (e: React.MouseEvent<HTMLElement>) => void;
  handleMouseLeave: (e: React.MouseEvent<HTMLElement>) => void;
}

const Header: React.FC<HeaderProps> = ({ handleMouseEnter, handleMouseLeave }) => {
  const ButtonText = ({ children }: { children: React.ReactNode }) => (
    <span className="button-text">{children}</span>
  );

  return (
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
  );
};

export default Header;