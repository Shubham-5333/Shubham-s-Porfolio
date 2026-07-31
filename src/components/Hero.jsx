import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDownRight, ArrowRight, Code, Globe, Sparkles } from 'lucide-react';
import profilepic from '../assets/profilepic.jpg';

const Hero = () => {
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -12;
    const rotateY = ((x - centerX) / centerX) * 12;
    setTilt({ rotateX, rotateY });
  };

  const handleMouseLeave = () => {
    setTilt({ rotateX: 0, rotateY: 0 });
  };

  return (
    <section id="hero" className="section bg-starfield" style={{ minHeight: '100vh', position: 'relative', paddingTop: '120px', paddingBottom: '60px', overflow: 'hidden' }}>
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>

        {/* Centerpiece Hero Layout: Split Display Typography & Animated Portrait Image */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr minmax(280px, 360px) 1fr', gap: '1.5rem', alignItems: 'center', margin: '2rem 0' }} className="hero-split-container">
          
          {/* Left Title Block */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            style={{ textAlign: 'right' }}
            className="hero-text-left"
          >
            <span style={{ fontSize: '0.9rem', letterSpacing: '3px', textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 700 }}>
              SHUBHAM PATIL
            </span>
            <h1 className="display-title" style={{ fontSize: 'clamp(3.5rem, 7.5vw, 6.5rem)', color: 'var(--text-primary)' }}>
              FULL STACK
            </h1>
          </motion.div>

          {/* Center Portrait Container with 3D Tilt, Floating Animation & Glowing Aura */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: [0, -10, 0] }}
            transition={{ 
              opacity: { duration: 0.8 },
              scale: { duration: 0.8 },
              y: { duration: 5, repeat: Infinity, ease: 'easeInOut' }
            }}
            className="hero-portrait-wrapper"
          >
            {/* Animated Glowing Aura Backdrop */}
            <div className="hero-portrait-aura"></div>

            {/* Interactive 3D Tilt Image Card */}
            <motion.div 
              className="hero-portrait-card"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              animate={{
                rotateX: tilt.rotateX,
                rotateY: tilt.rotateY
              }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              style={{ transformStyle: 'preserve-3d', perspective: 1000 }}
            >
              <img
                src={profilepic}
                alt="Shubham Patil"
              />
            </motion.div>

            {/* Floating Circular Action Button */}
            <motion.a 
              href="#capabilities" 
              className="hero-circle-btn"
              title="Explore Capabilities"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              whileHover={{ scale: 1.15, rotate: 18 }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowDownRight size={32} />
            </motion.a>

            {/* Floating Status Card with Gentle Motion */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: [0, 8, 0] }}
              transition={{ 
                opacity: { delay: 0.6, duration: 0.5 },
                y: { duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.2 }
              }}
              className="hero-status-card"
              whileHover={{ scale: 1.05 }}
            >
              <motion.div 
                animate={{ rotate: [0, 15, -15, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                style={{ padding: '8px', borderRadius: '10px', background: 'rgba(132, 204, 22, 0.15)', color: '#4d7c0f' }}
              >
                <Sparkles size={18} />
              </motion.div>
              <div>
                <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px', display: 'block', fontWeight: 700 }}>
                  CORE STACK
                </span>
                <span style={{ fontSize: '0.88rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                  MERN STACK
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Title Block */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            style={{ textAlign: 'left' }}
            className="hero-text-right"
          >
            <h1 className="display-title" style={{ fontSize: 'clamp(3.5rem, 7.5vw, 6.5rem)', color: '#0f172a' }}>
              DEVELOPER
            </h1>
            <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', maxWidth: '300px', marginTop: '0.5rem', lineHeight: 1.6, fontWeight: 500 }}>
              Crafting end-to-end MERN stack web applications with modern design and robust backend APIs.
            </p>
          </motion.div>
        </div>

        {/* Bottom Actions Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', alignItems: 'center', marginTop: '3rem', flexWrap: 'wrap' }}
        >
          <a href="#projects" className="btn btn-primary" style={{ padding: '0.9rem 2.2rem', fontSize: '1rem' }}>
            MY WORK <ArrowRight size={18} />
          </a>

          <a href="#contact" className="btn btn-outline" style={{ padding: '0.9rem 2rem', fontSize: '1rem' }}>
            GET IN TOUCH
          </a>

          <div style={{ display: 'flex', gap: '0.8rem', alignItems: 'center', marginLeft: '0.5rem' }}>
            <a 
              href="https://github.com/Shubham-5333" 
              target="_blank" 
              rel="noreferrer"
              style={{ color: 'var(--text-primary)', width: '42px', height: '42px', borderRadius: '50%', background: '#ffffff', border: '1px solid var(--glass-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.2s', boxShadow: '0 4px 12px rgba(0,0,0,0.04)' }}
              onMouseOver={(e) => { e.currentTarget.style.background = '#0f172a'; e.currentTarget.style.color = '#ffffff'; }}
              onMouseOut={(e) => { e.currentTarget.style.background = '#ffffff'; e.currentTarget.style.color = 'var(--text-primary)'; }}
            >
              <Code size={18} />
            </a>
            <a 
              href="#contact"
              style={{ color: 'var(--text-primary)', width: '42px', height: '42px', borderRadius: '50%', background: '#ffffff', border: '1px solid var(--glass-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.2s', boxShadow: '0 4px 12px rgba(0,0,0,0.04)' }}
              onMouseOver={(e) => { e.currentTarget.style.background = '#0f172a'; e.currentTarget.style.color = '#ffffff'; }}
              onMouseOut={(e) => { e.currentTarget.style.background = '#ffffff'; e.currentTarget.style.color = 'var(--text-primary)'; }}
            >
              <Globe size={18} />
            </a>
          </div>
        </motion.div>

      </div>

      <style>{`
        @media (max-width: 900px) {
          .hero-split-container {
            grid-template-columns: 1fr !important;
            text-align: center !important;
            gap: 1rem !important;
          }
          .hero-text-left, .hero-text-right {
            text-align: center !important;
          }
          .hero-text-right p {
            margin: 0.5rem auto 0 auto !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
