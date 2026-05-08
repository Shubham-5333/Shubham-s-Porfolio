import { motion } from 'framer-motion';
import { ArrowRight, Code, Globe, MessageCircle } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="section" style={{ padding: '0', minHeight: '100vh', position: 'relative' }}>
      <div className="bg-blob blob-1"></div>
      <div className="bg-blob blob-2"></div>

      <div className="container" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%', zIndex: 1, position: 'relative' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ maxWidth: '800px' }}
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            style={{ color: 'var(--accent-color)', fontWeight: 600, letterSpacing: '2px', marginBottom: '1rem', textTransform: 'uppercase' }}
          >
            Hi, my name is
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            style={{ fontSize: 'clamp(20px, 6vw, 60px)', fontWeight: 800, lineHeight: 1.1, marginBottom: '1rem' }}
          >
            Shubham Sunil Patil.
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            style={{ fontSize: 'clamp(10px, 4vw, 40px)', fontWeight: 700, color: 'var(--text-secondary)', lineHeight: 1.1, marginBottom: '2rem' }}
          >
            I build things for the <span className="text-gradient">web.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            style={{ fontSize: '1.2rem', color: 'var(--text-muted)', maxWidth: '600px', marginBottom: '3rem', lineHeight: 1.6 }}
          >
            I’m a Full Stack Developer who builds web applications from front to back. I focus on creating simple, user-friendly, and reliable digital experiences.          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}
          >
            <a href="#projects" className="btn btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}>
              Check out my work <ArrowRight size={20} />
            </a>

            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginLeft: '1rem' }}>
              <a href="https://github.com/Shubham-5333" style={{ color: 'var(--text-secondary)', transition: 'color 0.2s' }} onMouseOver={(e) => e.target.style.color = 'white'} onMouseOut={(e) => e.target.style.color = 'var(--text-secondary)'}><Code size={24} /></a>
              {/* <a href="#" style={{ color: 'var(--text-secondary)', transition: 'color 0.2s' }} onMouseOver={(e) => e.target.style.color = 'white'} onMouseOut={(e) => e.target.style.color = 'var(--text-secondary)'}><Globe size={24} /></a> */}
              <a href="#contact" style={{ color: 'var(--text-secondary)', transition: 'color 0.2s' }} onMouseOver={(e) => e.target.style.color = 'white'} onMouseOut={(e) => e.target.style.color = 'var(--text-secondary)'}><MessageCircle size={24} /></a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
