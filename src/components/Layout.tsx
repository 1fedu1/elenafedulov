import { Link, Outlet, useLocation } from 'react-router-dom';
import { ArrowRight, Menu, X, Instagram, Facebook } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function Layout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Acasă', path: '/' },
    { name: 'Despre Mine', path: '/despre' },
    { name: 'Servicii', path: '/servicii' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-brand-pastel selection:text-brand-forest">
      {/* Navigation */}
      <header className="fixed top-0 left-0 w-full z-50 bg-brand-dust/90 backdrop-blur-md border-b border-brand-forest/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full border border-brand-forest flex items-center justify-center">
                <span className="font-serif text-xl italic pt-0.5">EF</span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm tracking-wide uppercase transition-colors hover:opacity-70 ${
                    location.pathname === link.path ? 'font-semibold' : 'font-normal'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* CTA */}
            <div className="hidden md:flex items-center gap-4">
              <Link to="/portal" className="text-sm border-b pb-0.5 border-brand-forest hover:opacity-70 transition-opacity">
                Portal Pacienți
              </Link>
              <a 
                href="https://ontimeagenda.com" 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center gap-2 bg-brand-mint text-brand-forest px-5 py-2.5 rounded-full text-sm font-medium hover:bg-brand-forest hover:text-brand-dust transition-colors"
              >
                Programează-te
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-brand-dust pt-24 px-6 flex flex-col h-[100dvh]"
          >
            <nav className="flex flex-col gap-6 text-xl font-serif">
              {navLinks.map((link) => (
                <Link key={link.path} to={link.path} className="pb-2 border-b border-brand-forest/10">
                  {link.name}
                </Link>
              ))}
            </nav>
            <div className="mt-8 flex flex-col gap-4">
              <Link to="/portal" className="text-brand-forest font-medium">Portal Pacienți</Link>
              <a 
                href="https://ontimeagenda.com" 
                target="_blank" 
                rel="noreferrer"
                className="bg-brand-forest text-brand-dust px-6 py-3 rounded-full text-center"
              >
                Programează-te
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="flex-1 mt-20">
        <Outlet />
      </main>

      {/* Footer from screenshot design */}
      <footer className="mt-20">
        <div className="bg-brand-forest text-brand-mint py-32 px-6 relative overflow-hidden">
          {/* Subtle wave background representation */}
          <div className="absolute inset-0 opacity-10 pointer-events-none" 
               style={{ 
                 background: 'radial-gradient(circle at 50% 150%, var(--color-brand-mint) 0%, transparent 60%)',
               }}>
          </div>
          
          <div className="max-w-4xl mx-auto text-center relative z-10 flex flex-col items-center">
            <h2 className="text-4xl md:text-6xl font-serif mb-8 leading-tight font-light">
              Fă primul pas spre <br /> echilibrul tău mental.
            </h2>
            <p className="mb-10 text-brand-dust/80">
              Contactează-mă astăzi pentru a programa o primă ședință sau pentru a afla mai multe <br className="hidden md:block" /> despre cum te pot sprijini.
            </p>
            <Link 
              to="/contact" 
              className="flex items-center gap-2 bg-brand-mint text-brand-forest px-6 py-3 rounded-full text-sm font-medium hover:bg-white transition-colors"
            >
              Contactează-mă
              <ArrowRight className="w-4 h-4 bg-brand-forest text-brand-dust rounded-full p-0.5" />
            </Link>
          </div>
        </div>

        {/* Bottom Footer Section */}
        <div className="bg-[#223632] text-brand-mint py-12 px-6 lg:px-12 text-sm">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8 border-b border-brand-mint/20 pb-8 mb-8">
            <div className="flex items-center gap-4">
              <span className="text-lg font-serif">Urmărește-mă</span>
              <a href="https://www.instagram.com/elenafedulov_/" target="_blank" rel="noreferrer" className="hover:text-white"><Instagram className="w-5 h-5"/></a>
              <a href="https://www.facebook.com/share/1B6LkmB18g/?mibextid=wwXIfr" target="_blank" rel="noreferrer" className="hover:text-white"><Facebook className="w-5 h-5"/></a>
            </div>
            <div className="text-brand-mint/60">
              &copy; 2026 Elena Fedulov. Toate drepturile rezervate.
            </div>
            <div className="flex gap-6">
              <Link to="/confidentialitate" className="hover:text-white">Politică de Confidențialitate</Link>
              <Link to="/termeni" className="hover:text-white">Termeni și Condiții</Link>
            </div>
          </div>
          <div className="max-w-7xl mx-auto">
            <p className="text-brand-mint/80 max-w-3xl leading-relaxed text-xs">
              Recunosc și respectăm profund complexitatea și unicitatea fiecărei stări interioare. Acest spațiu este dedicat sprijinului, însă nu înlocuiește intervenția medicală de urgență.
            </p>
          </div>
        </div>
        
        {/* Emergency Banner */}
        <div className="bg-brand-mint text-brand-forest py-4 px-6 text-center text-sm font-medium">
          Dacă ești într-o situație de criză, te rog contactează 112 sau liniile naționale de urgență.
        </div>
      </footer>
    </div>
  );
}
