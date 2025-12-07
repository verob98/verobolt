import { useState, useEffect } from 'react';
import { Menu, X, Monitor } from 'lucide-react';

interface HeaderProps {
  onNavigate: (section: string) => void;
  currentSection: string;
}

export default function Header({ onNavigate, currentSection }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'inicio', label: 'Inicio' },
    { id: 'servicios', label: 'Servicios' },
    { id: 'tips', label: 'Tips' },
    { id: 'contacto', label: 'Contacto' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-slate-900 shadow-lg py-3' : 'bg-gradient-to-b from-slate-900 to-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div
            className={`flex items-center gap-3 transition-all duration-500 ${
              isScrolled ? 'scale-75' : 'scale-100'
            }`}
          >
            <Monitor className={`transition-all duration-500 ${isScrolled ? 'w-8 h-8' : 'w-12 h-12'} text-cyan-400`} />
            {!isScrolled && (
              <div className="flex flex-col">
                <h1 className="text-2xl font-bold text-white">TechServices</h1>
                <p className="text-sm text-cyan-400">Soluciones Informáticas</p>
              </div>
            )}
          </div>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`text-sm font-medium transition-colors relative ${
                  currentSection === item.id ? 'text-cyan-400' : 'text-white hover:text-cyan-400'
                }`}
              >
                {item.label}
                {currentSection === item.id && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-cyan-400 animate-pulse" />
                )}
              </button>
            ))}
          </nav>

          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 flex flex-col gap-4 animate-in slide-in-from-top">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id);
                  setIsMobileMenuOpen(false);
                }}
                className={`text-left px-4 py-2 rounded-lg transition-colors ${
                  currentSection === item.id
                    ? 'bg-cyan-400 text-slate-900 font-semibold'
                    : 'text-white hover:bg-slate-800'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
