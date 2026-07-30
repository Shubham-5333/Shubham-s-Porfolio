import { motion } from 'framer-motion';
import { Code, ArrowUpRight } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'HireX Job Portal',
      description: 'A Full-stack MERN job portal application enabling users to register, post jobs, search listings, and manage applications seamlessly.',
      image:'/projects/HireX.png',
      tech: ['React', 'Redux', 'Node.js', 'Express', 'MongoDB'],
      github: 'https://github.com/Shubham-5333/HireX-frontend',
      external: 'https://hire-x-frontend-96mr.vercel.app/'
    },
    {
      id: 2,
      title: 'I-Wear E-Commerce',
      description: 'Full stack eyewear e-commerce platform featuring product catalogs, cart management, and MongoDB backend logic.',
      image: '/projects/iwear.png',
      tech: ['Node.js', 'Express.js', 'MongoDB', 'EJS'],
      github: 'https://github.com/Shubham-5333/i-wear',
      external: 'https://iwear.onrender.com/'
    },
    {
      id: 3,
      title: 'Attendance Tracking Platform',
      description: 'Interactive web platform for managing and tracking attendance with responsive React.js UI components.',
      image: '/projects/attendace.png',
      tech: ['React.js', 'Bootstrap', 'REST APIs'],
      github: 'https://github.com/novoxedtechllp-dotcom/novox_webapp',
      external: 'https://github.com/novoxedtechllp-dotcom/novox_webapp'
    }
  ];

  return (
    <section id="projects" className="section bg-starfield">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span style={{ color: '#4d7c0f', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.85rem' }}>
            SELECTED WORKS
          </span>
          <h2 className="section-title" style={{ marginTop: '0.3rem', marginBottom: '0.8rem' }}>
            FEATURED <span className="text-gradient">PROJECTS</span>
          </h2>
          <p className="section-subtitle">
            A showcase of web applications engineered with MERN stack architecture and modern user experience.
          </p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '2rem', marginTop: '2rem' }}>
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-panel"
                style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column', height: '100%', background: '#ffffff', border: '1px solid rgba(15, 23, 42, 0.08)', boxShadow: '0 8px 25px rgba(15, 23, 42, 0.04)', transition: 'all 0.3s ease' }}
                onMouseOver={e => { e.currentTarget.style.borderColor = '#0f172a'; e.currentTarget.style.boxShadow = '0 12px 35px rgba(15, 23, 42, 0.08)'; }}
                onMouseOut={e => { e.currentTarget.style.borderColor = 'rgba(15, 23, 42, 0.08)'; e.currentTarget.style.boxShadow = '0 8px 25px rgba(15, 23, 42, 0.04)'; }}
              >
                <div style={{ width: '100%', height: '220px', overflow: 'hidden', position: 'relative' }}>
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }} 
                    onMouseOver={e => e.currentTarget.style.transform = 'scale(1.06)'}
                    onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
                  />
                </div>
                
                <div style={{ padding: '1.8rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  {/* Tech Badges */}
                  <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
                    {project.tech.map(t => (
                      <span key={t} style={{
                        background: 'rgba(132, 204, 22, 0.12)',
                        border: '1px solid rgba(132, 204, 22, 0.3)',
                        color: '#3f6212',
                        fontSize: '0.75rem',
                        fontWeight: 700,
                        padding: '3px 10px',
                        borderRadius: '9999px',
                        letterSpacing: '0.5px'
                      }}>
                        {t}
                      </span>
                    ))}
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.8rem' }}>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.7rem', letterSpacing: '1px', color: '#0f172a' }}>
                      {project.title}
                    </h3>
                    <div style={{ display: 'flex', gap: '0.75rem' }}>
                      <a href={project.github} target="_blank" rel="noreferrer" style={{ color: 'var(--text-secondary)', transition: 'color 0.2s' }} onMouseOver={e => e.target.style.color = '#0f172a'} onMouseOut={e => e.target.style.color = 'var(--text-secondary)'}><Code size={20} /></a>
                      <a href={project.external} target="_blank" rel="noreferrer" style={{ color: 'var(--text-secondary)', transition: 'color 0.2s' }} onMouseOver={e => e.target.style.color = '#0f172a'} onMouseOut={e => e.target.style.color = 'var(--text-secondary)'}><ArrowUpRight size={22} /></a>
                    </div>
                  </div>
                  
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6, flexGrow: 1 }}>
                    {project.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
