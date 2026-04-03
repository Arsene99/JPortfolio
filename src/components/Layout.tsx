import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Linkedin, Mail, Database, ChevronDown, BarChart3, MapPin, Phone } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { usePortfolioData } from '../hooks/usePortfolioData';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { profile, contact } = usePortfolioData();
  const location = useLocation();

  const navLinks = [
    { name: 'À propos', href: '/' },
    { name: 'Projets', href: '/projets' },
    { name: 'Compétences', href: '/competences' },
    { name: 'Analyses', href: '/analyses' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 font-sans selection:bg-emerald-500/30 overflow-x-hidden">
      {/* Grid Background Effect */}
      <div className="fixed inset-0 z-0 opacity-10 pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#10b981 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }}>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-neutral-950/80 backdrop-blur-md border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-2"
            >
              <Link to="/" className="flex items-center gap-2">
                <div className="w-10 h-10 bg-emerald-500 rounded-lg flex items-center justify-center font-bold text-neutral-950">
                  {profile.name.split(' ').map(n => n[0]).join('')}
                </div>
                <span className="text-xl font-bold tracking-tight">{profile.name}</span>
              </Link>
            </motion.div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`text-sm font-medium transition-colors ${
                    isActive(link.href) ? 'text-emerald-400' : 'text-neutral-400 hover:text-emerald-400'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <a 
                href="#" 
                className="px-4 py-1.5 bg-emerald-500 text-neutral-950 rounded-full text-sm font-bold hover:bg-emerald-400 transition-colors"
              >
                CV
              </a>
              <Link to="/admin" className="p-2 text-neutral-400 hover:text-white transition-colors" title="Administration">
                <Database size={20} />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-4">
              <a 
                href="#" 
                className="px-4 py-1.5 bg-emerald-500 text-neutral-950 rounded-full text-sm font-bold"
              >
                CV
              </a>
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 text-neutral-400">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-neutral-900 border-b border-neutral-800 overflow-hidden"
            >
              <div className="px-4 pt-2 pb-6 space-y-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block text-lg font-medium ${
                      isActive(link.href) ? 'text-emerald-400' : 'text-neutral-400 hover:text-emerald-400'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
                <Link to="/admin" className="block text-lg font-medium text-blue-400">
                  Panel Admin
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Main Content */}
      <main className="relative z-10 pt-16 min-h-[calc(100vh-200px)]">
        {children}
      </main>

      {/* Footer */}
      <footer className="relative z-10 py-20 border-t border-neutral-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-emerald-500 rounded-xl flex items-center justify-center font-bold text-neutral-950 text-xl">
                {profile.name.split(' ').map(n => n[0]).join('')}
              </div>
              <div>
                <div className="font-bold text-xl">{profile.name}</div>
                <div className="text-xs text-neutral-500 font-bold uppercase tracking-widest">{profile.title}</div>
              </div>
            </div>
            
            <div className="flex gap-8">
              <a href={contact.github} target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-emerald-500 transition-colors flex items-center gap-2 font-bold">
                <Database size={20} /> Données
              </a>
              <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-emerald-500 transition-colors flex items-center gap-2 font-bold">
                <Linkedin size={20} /> LinkedIn
              </a>
              <a href={`mailto:${contact.email}`} className="text-neutral-400 hover:text-emerald-500 transition-colors flex items-center gap-2 font-bold">
                <Mail size={20} /> Email
              </a>
            </div>
          </div>
          
          <div className="mt-20 pt-8 border-t border-neutral-900 flex flex-col md:flex-row justify-between items-center gap-4 text-neutral-600 text-sm font-medium">
            <div>© {new Date().getFullYear()} {profile.name}. Tous droits réservés.</div>
            <div className="flex gap-6">
              <span className="text-neutral-500 flex items-center gap-1"><MapPin size={14} /> {contact.address}</span>
              <span className="text-neutral-500 flex items-center gap-1"><Phone size={14} /> {contact.phone}</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
