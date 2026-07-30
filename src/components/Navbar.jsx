import { motion } from 'framer-motion';
import { MessageSquare, FileText } from 'lucide-react';
import { useState, useEffect } from 'react';
import profilepic from '../assets/profilepic.jpg';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#capabilities' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
    { name: 'Resume', href: 'https://drive.google.com/file/d/1NYPyj-0uDNC3fuYersXUFf2-iQ6DQp7q/view?usp=sharing', external: true },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        position: 'fixed',
        top: '20px',
        left: 0,
        right: 0,
        display: 'flex',
        justifyContent: 'center',
        zIndex: 100,
        padding: '0 1rem'
      }}
    >
      <nav
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0.6rem 1.2rem',
          width: '100%',
          maxWidth: '900px',
          background: 'rgba(255, 255, 255, 0.9)',
          backdropFilter: 'blur(16px)',
          border: '1px solid rgba(15, 23, 42, 0.1)',
          borderRadius: '9999px',
          boxShadow: '0 10px 30px rgba(15, 23, 42, 0.08)',
          transition: 'all 0.3s ease'
        }}
      >
        {/* Left: Avatar Thumbnail & Brand */}
        <a href="#hero" style={{ display: 'flex', alignItems: 'center', gap: '0.7rem', textDecoration: 'none' }}>
          <img
            src={profilepic}
            alt="Shubham"
            style={{ width: '36px', height: '36px', borderRadius: '50%', objectFit: 'cover', border: '2px solid #0f172a' }}
          />
          <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', color: '#0f172a', letterSpacing: '1px' }}>
            SHUBHAM
          </span>
        </a>

        {/* Center: Nav Links */}
        <div style={{ display: 'flex', gap: '1.4rem', alignItems: 'center' }} className="nav-links-container">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noreferrer" : undefined}
              style={{
                color: 'var(--text-secondary)',
                textDecoration: 'none',
                fontWeight: 600,
                fontSize: '0.88rem',
                transition: 'all 0.2s ease',
              }}
              onMouseOver={(e) => { e.currentTarget.style.color = '#0f172a'; }}
              onMouseOut={(e) => { e.currentTarget.style.color = 'var(--text-secondary)'; }}
              className="nav-link-item"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Right: Action Button */}
        <a href="#contact" className="btn btn-primary" style={{ padding: '0.5rem 1.2rem', fontSize: '0.85rem' }}>
          <MessageSquare size={15} /> Let's Talk
        </a>
      </nav>

      <style>{`
        @media (max-width: 640px) {
          .nav-links-container { display: none !important; }
        }
      `}</style>
    </motion.header>
  );
};

export default Navbar;
