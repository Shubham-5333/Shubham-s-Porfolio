import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const Capabilities = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const capabilities = [
    {
      number: '01',
      title: 'MERN FULL STACK DEVELOPMENT',
      summary: 'Building complete web applications with React frontend interfaces and Node.js/Express backend services.',
      details: 'Crafting responsive user interfaces with React, JavaScript, HTML5, CSS3, and dynamic micro-animations paired with scalable backend server logic.'
    },
    {
      number: '02',
      title: 'EXPRESS & NODE.JS API ARCHITECTURE',
      summary: 'Engineering secure RESTful APIs, middleware authentication, and business logic.',
      details: 'Building structured backend API endpoints with Express.js and Node.js, implementing JWT authentication, data validation, rate limiting, and server management.'
    },
    {
      number: '03',
      title: 'MONGODB & DATABASE SCHEMA DESIGN',
      summary: 'Designing high-performance MongoDB document databases and data pipelines.',
      details: 'Creating optimized MongoDB collections, schema validation, performant queries, aggregation pipelines, and seamless MERN data integration.'
    },
    {
      number: '04',
      title: 'RESPONSIVE UI & PERFORMANCE',
      summary: 'Delivering ultra-fast load times, clean aesthetics, and fluid user interactions.',
      details: 'Adhering to modern visual aesthetics, clean light mode designs, responsive grid layouts, and performance tuning for fast page loads.'
    }
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="capabilities" className="section" style={{ background: 'var(--bg-secondary)', position: 'relative' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span style={{ color: '#4d7c0f', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.85rem' }}>
            CAPABILITIES & SERVICES
          </span>
          <h2 className="section-title" style={{ marginTop: '0.3rem', marginBottom: '0.8rem' }}>
            WHAT I CAN <span className="text-gradient">DO FOR YOU</span>
          </h2>
          <p className="section-subtitle">
            End-to-end MERN stack engineering solutions built for performance and scale.
          </p>

          <div className="accordion-list" style={{ marginTop: '2rem' }}>
            {capabilities.map((item, index) => {
              const isOpen = activeIndex === index;
              return (
                <div 
                  key={index} 
                  className={`accordion-item ${isOpen ? 'active' : ''}`}
                >
                  <div 
                    className="accordion-header"
                    onClick={() => toggleAccordion(index)}
                  >
                    <div className="accordion-title-group">
                      <span className="accordion-number">{item.number}.</span>
                      <span className="accordion-title">{item.title}</span>
                    </div>

                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      style={{ color: isOpen ? '#0f172a' : 'var(--text-muted)' }}
                    >
                      <ChevronDown size={24} />
                    </motion.div>
                  </div>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: "easeInOut" }}
                        style={{ overflow: 'hidden' }}
                      >
                        <div className="accordion-content">
                          <p style={{ color: 'var(--text-primary)', fontWeight: 700, marginBottom: '0.5rem' }}>
                            {item.summary}
                          </p>
                          <p>{item.details}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Capabilities;
