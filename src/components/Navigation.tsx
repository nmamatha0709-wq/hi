/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Link, useLocation } from 'react-router-dom';
import { Search, Menu } from 'lucide-react';
import { PrismButton } from './UI';

export const Navbar = () => {
  const location = useLocation();

  const navLinks = [
    { name: 'Services', path: '/services' },
    { name: 'Find a Doctor', path: '/specialists' },
    { name: 'Telehealth', path: '#' },
    { name: 'Facilities', path: '/facilities' },
    { name: 'About', path: '#' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-2xl border-b border-white/20 shadow-[0_4px_30px_rgba(0,0,0,0.05)]">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center w-full">
        <Link to="/" className="text-xl font-black tracking-tighter text-slate-900">
          Spectral Health
        </Link>
        
        <nav className="hidden md:flex items-center space-x-8 font-medium tracking-tight">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              className={`${
                isActive(link.path) 
                  ? 'text-primary border-b-2 border-primary pb-1' 
                  : 'text-slate-600 hover:text-primary transition-colors'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center space-x-6">
          <div className="hidden lg:flex items-center bg-surface-container-low px-4 py-2 rounded-full border border-outline-variant/30">
            <Search className="w-4 h-4 text-outline" />
            <input 
              className="bg-transparent border-none focus:ring-0 text-sm ml-2 w-32 placeholder:text-outline/50" 
              placeholder="Global Search" 
              type="text"
            />
          </div>
          <Link to="/booking">
            <PrismButton className="!py-2.5 !px-6 text-sm">
              Book Appointment
            </PrismButton>
          </Link>
          <button className="md:hidden">
            <Menu className="w-6 h-6 text-slate-900" />
          </button>
        </div>
      </div>
    </header>
  );
};

export const Footer = () => {
  return (
    <footer class="w-full border-t border-slate-200 bg-slate-50 mt-32">
      <div class="max-w-7xl mx-auto px-8 pt-12 pb-8">
        <div class="flex flex-col md:flex-row justify-between items-start md:items-center space-y-8 md:space-y-0 mb-12">
          <div>
            <div class="text-lg font-bold text-on-surface mb-2">Spectral Health</div>
            <p class="text-on-surface-variant max-w-xs text-sm">
              Clinical Precision, Spectral Warmth. Redefining modern medicine through light and clarity.
            </p>
          </div>
          <nav class="flex flex-wrap gap-8 text-sm">
            <a class="text-on-surface-variant hover:text-on-surface hover:underline transition-all" href="#">Privacy Policy</a>
            <a class="text-on-surface-variant hover:text-on-surface hover:underline transition-all" href="#">Terms of Service</a>
            <a class="text-on-surface-variant hover:text-on-surface hover:underline transition-all" href="#">Patient Rights</a>
            <a class="text-on-surface-variant hover:text-on-surface hover:underline transition-all" href="#">Careers</a>
            <a class="text-on-surface-variant hover:text-on-surface hover:underline transition-all" href="#">Contact</a>
          </nav>
        </div>
        <div class="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center text-on-surface-variant text-xs">
          <div>© 2024 Spectral Health. Clinical Precision, Spectral Warmth.</div>
          <div class="flex space-x-6 mt-4 md:mt-0">
            <span class="hover:text-primary transition-colors cursor-pointer">LinkedIn</span>
            <span class="hover:text-primary transition-colors cursor-pointer">Instagram</span>
            <span class="hover:text-primary transition-colors cursor-pointer">Twitter</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
