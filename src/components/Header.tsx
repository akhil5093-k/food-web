
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-quickbite-orange to-quickbite-red rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">Q</span>
            </div>
            <span className="text-2xl font-bold text-gradient">QuickBite</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-gray-700 hover:text-quickbite-orange transition-colors"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('menu')}
              className="text-gray-700 hover:text-quickbite-orange transition-colors"
            >
              Menu
            </button>
            <button 
              onClick={() => scrollToSection('how-it-works')}
              className="text-gray-700 hover:text-quickbite-orange transition-colors"
            >
              How It Works
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-quickbite-orange transition-colors"
            >
              About Us
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-quickbite-orange transition-colors"
            >
              Contact
            </button>
          </nav>

          {/* Order Now Button & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <Button 
              onClick={() => scrollToSection('menu')}
              className="bg-quickbite-orange hover:bg-quickbite-orange-dark text-white px-6 py-2"
            >
              Order Now
            </Button>
            
            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-gray-100 pt-4">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-gray-700 hover:text-quickbite-orange transition-colors text-left"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('menu')}
                className="text-gray-700 hover:text-quickbite-orange transition-colors text-left"
              >
                Menu
              </button>
              <button 
                onClick={() => scrollToSection('how-it-works')}
                className="text-gray-700 hover:text-quickbite-orange transition-colors text-left"
              >
                How It Works
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-gray-700 hover:text-quickbite-orange transition-colors text-left"
              >
                About Us
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-gray-700 hover:text-quickbite-orange transition-colors text-left"
              >
                Contact
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
