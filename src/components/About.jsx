import { motion } from 'framer-motion';
import { Mail, MapPin, Download, ArrowUpRight } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section" style={{ position: 'relative' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="about-grid">
            {/* Left Column: About Bio & Huge Stats */}
            <div>
              <span style={{ color: '#4d7c0f', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.85rem' }}>
                BIOGRAPHY & EXPERIENCE
              </span>
              <h2 className="section-title" style={{ marginTop: '0.3rem', marginBottom: '1rem' }}>
                ABOUT <span className="text-gradient">ME</span>
              </h2>

              <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '2.5rem', maxWidth: '540px' }}>
                Hi, I'm <strong style={{ color: '#0f172a' }}>Shubham Sunil Patil</strong>—a full-stack developer building fast, responsive, and scalable web applications strictly focused on the <strong style={{ color: '#0f172a' }}>MERN Stack</strong> (MongoDB, Express.js, React, Node.js).
              </p>

              {/* Huge Numeric Counter Bar */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', marginBottom: '2.5rem' }}>
                <div>
                  <div className="stat-huge">3+</div>
                  <div className="stat-label-large">YEARS EXPERIENCE</div>
                </div>
                <div>
                  <div className="stat-huge">15+</div>
                  <div className="stat-label-large">COMPLETED PROJECTS</div>
                </div>
                <div>
                  <div className="stat-huge">100%</div>
                  <div className="stat-label-large">DEDICATION</div>
                </div>
              </div>

              {/* Action Button */}
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <a href="https://drive.google.com/file/d/1NYPyj-0uDNC3fuYersXUFf2-iQ6DQp7q/view?usp=sharing" target="_blank" rel="noreferrer" className="btn btn-primary" style={{ padding: '0.9rem 2rem' }}>
                  <Download size={18} /> MY RESUME
                </a>
              </div>
            </div>

            {/* Right Column: Quick Contact & Tech Summary Card */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div className="glass-panel" style={{ padding: '2.5rem', background: '#ffffff', border: '1px solid rgba(15, 23, 42, 0.1)', boxShadow: '0 10px 30px rgba(15, 23, 42, 0.05)' }}>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', letterSpacing: '1px', marginBottom: '1.5rem', color: '#0f172a' }}>
                  CONTACT METADATA
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', marginBottom: '2rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div style={{ padding: '10px', borderRadius: '50%', background: 'rgba(132, 204, 22, 0.15)', color: '#4d7c0f' }}>
                      <MapPin size={20} />
                    </div>
                    <div>
                      <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', display: 'block', fontWeight: 700 }}>LOCATION</span>
                      <span style={{ fontSize: '1rem', fontWeight: 700, color: '#0f172a' }}>Kozhikode, Kerala, India</span>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div style={{ padding: '10px', borderRadius: '50%', background: 'rgba(132, 204, 22, 0.15)', color: '#4d7c0f' }}>
                      <Mail size={20} />
                    </div>
                    <div>
                      <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', display: 'block', fontWeight: 700 }}>EMAIL</span>
                      <a href="mailto:shubhampatil5333@gmail.com" style={{ fontSize: '1rem', fontWeight: 700, color: '#0f172a', textDecoration: 'none' }}>
                        shubhampatil5333@gmail.com
                      </a>
                    </div>
                  </div>
                </div>

                <div style={{ borderTop: '1px solid var(--glass-border)', paddingTop: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', fontWeight: 600 }}>Connect via Github</span>
                  <a 
                    href="https://github.com/Shubham-5333" 
                    target="_blank" 
                    rel="noreferrer"
                    style={{ color: '#0f172a', display: 'flex', alignItems: 'center', gap: '4px', textDecoration: 'none', fontWeight: 800 }}
                  >
                    GITHUB <ArrowUpRight size={18} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
