import { motion } from 'framer-motion';
import { ExternalLink, Code } from 'lucide-react';
// import HireX from '../assets/HireX.png'

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'HireX',
      description: 'A Full-stack job portal application enabling users to register, log in, post jobs, search listings, and apply for jobs.',
      image:'/projects/HireX.png',
      tech: ['React', 'Redux', 'MERN'],
      github: 'https://github.com/Shubham-5333/HireX-frontend',
      external: 'https://hire-x-frontend-96mr.vercel.app/'
    },
    {
      id: 2,
      title: 'I-Wear-Ecommerce',
      description: 'Ecommerce Website to shop spectacles',
      image: '/projects/iwear.png',
      tech: ['Node.js','Express.js','API','Mongodb','EJS'],
      github: 'https://github.com/Shubham-5333/i-wear',
      external: 'https://iwear.onrender.com/'
    },
    {
      id: 3,
      title: 'Attendance Tracking App',
      description: ' Developed frontend for an attendance tracking system using React.js with responsive and interactive UI components.',
      image: '/projects/attendace.png',
      tech: ['React.js', 'Bootstrap'],
      github: 'https://github.com/novoxedtechllp-dotcom/novox_webapp',
      external: 'https://github.com/novoxedtechllp-dotcom/novox_webapp'
    }
  ];

  return (
    <section id="projects" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Some Things I've Built</h2>
          <p className="section-subtitle">A collection of recent projects and achievements.</p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '2rem' }}>
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="glass-panel"
                style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column', height: '100%' }}
              >
                <div style={{ width: '100%', height: '200px', overflow: 'hidden' }}>
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }} 
                    onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05)'}
                    onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
                  />
                </div>
                
                <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 700 }}>{project.title}</h3>
                    <div style={{ display: 'flex', gap: '0.75rem' }}>
                      <a href={project.github} style={{ color: 'var(--text-secondary)', transition: 'color 0.2s' }} onMouseOver={e => e.target.style.color = 'var(--text-primary)'} onMouseOut={e => e.target.style.color = 'var(--text-secondary)'}><Code size={20} /></a>
                      <a href={project.external} style={{ color: 'var(--text-secondary)', transition: 'color 0.2s' }} onMouseOver={e => e.target.style.color = 'var(--accent-color)'} onMouseOut={e => e.target.style.color = 'var(--text-secondary)'}><ExternalLink size={20} /></a>
                    </div>
                  </div>
                  
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '1.5rem', flexGrow: 1 }}>
                    {project.description}
                  </p>
                  
                  <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', fontFamily: 'monospace', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                    {project.tech.map(t => (
                      <span key={t}>{t}</span>
                    ))}
                  </div>
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
