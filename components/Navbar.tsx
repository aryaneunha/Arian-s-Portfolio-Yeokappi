import React, { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { SectionId } from '../types';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    setIsMenuOpen(false);
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: id } });
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const navLinks = [
    { label: 'Work', id: SectionId.WORK },
    { label: 'About', id: SectionId.ABOUT },
    { label: 'Contact', id: SectionId.CONTACT },
  ];

  const RESUME_LINK = "https://drive.google.com/file/d/1tflWmJkv79d5yZDDlLzgoslKLhTi7HS0/view?usp=sharing";

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-surface/80 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div 
          className="text-2xl font-bold tracking-tighter cursor-pointer text-white hover:text-primary transition-colors"
          onClick={() => handleNavClick(SectionId.HERO)}
        >
          AN<span className="text-primary">.</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className="text-sm font-medium text-textMuted hover:text-primary transition-colors uppercase tracking-widest"
            >
              {link.label}
            </button>
          ))}
          <a 
            href={RESUME_LINK}
            target="_blank" 
            rel="noopener noreferrer"
            className="px-4 py-2 text-sm font-bold bg-white text-black rounded hover:bg-primary hover:text-white transition-colors flex items-center gap-2"
          >
            <Download size={16} /> Resume
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white">
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-surface border-b border-white/10 flex flex-col p-6 space-y-4 md:hidden shadow-2xl">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className="text-left text-lg font-medium text-white hover:text-primary"
            >
              {link.label}
            </button>
          ))}
             <a 
            href={RESUME_LINK}
            target="_blank" 
            rel="noopener noreferrer"
            className="text-left text-lg font-medium text-primary flex items-center gap-2"
          >
            <Download size={18} /> Download Resume
          </a>
        </div>
      )}
    </nav>
  );
};