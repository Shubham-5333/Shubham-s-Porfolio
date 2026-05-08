import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '80px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 2rem',
        zIndex: 100,
        transition: 'all 0.3s ease',
        background: scrolled ? 'var(--glass-bg)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--glass-border)' : '1px solid transparent',
        boxShadow: scrolled ? 'var(--glass-shadow)' : 'none'
      }}
    >
      <div style={{ fontSize: '1.5rem', fontWeight: 800, letterSpacing: '-0.5px' }}>
        {/* <span className="text-gradient"></span> */}
      </div>

      <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
        <div style={{ display: 'flex', gap: '1.5rem', display: 'none' }} className="nav-links">
          {/* For mobile, we will hide nav-links using CSS, but for desktop they show */}
        </div>
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            style={{
              color: 'var(--text-primary)',
              textDecoration: 'none',
              fontWeight: 500,
              fontSize: '0.95rem',
              transition: 'color 0.2s',
            }}
            onMouseOver={(e) => (e.currentTarget.style.color = 'var(--accent-color)')}
            onMouseOut={(e) => (e.currentTarget.style.color = 'var(--text-primary)')}
            className="desktop-only"
          >
            {link.name}
          </a>
        ))}
        <a href="/resume.pdf" download="Resume.pdf" className="btn btn-primary" style={{ padding: '0.5rem 1.2rem', fontSize: '0.9rem' }}>
          <Download size={16} /> Resume
        </a>
      </div>
      
      {/* We can add a simple style block for responsive nav */}
      <style>{`
        @media (max-width: 768px) {
          .desktop-only { display: none !important; }
        }
      `}</style>
    </motion.nav>
  );
};

export default Navbar;
