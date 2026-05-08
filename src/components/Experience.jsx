import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      role: 'MERN Stack Intern',
      company: 'Novox Core.',
      duration: 'February 2026 – present',
      description: "Developed and maintained management software applications using React.js, Node.js, Express.js, and MongoDB, Built responsive frontend interfaces for attendance tracking systems with React.js and modern UI practices, Collaborated on integrating backend APIs with frontend modules for seamless data flow.",
      skills: ['MERN','Web','Redux','JWT','Backend','Management Softwares']
    },
    {
      id: 2,
      role: 'Web Administrator',
      company: 'KM Group Private Ltd.',
      duration: 'February 2025 – Dec 2025',
      description: 'Maintained and monitored web-based reservation platform, Identified and resolved technical issues to ensure system reliability, Coordinated with development teams to enhance UI/UX functionality, Managed backend data updates and system performance monitoring',
      skills: ['UI/UX','Web']
    },
    {
      id: 3,
      role: 'Mern Stack Intern',
      company: 'Brototype',
      duration: 'August 2023 – October 2024',
      description: 'Developed full-stack web applications using MongoDB, Express.js, Node.js, etc, Built RESTful APIs and integrated third-party services.',
      skills: ['JavaScript', 'MERN', 'Figma', 'Api','Design','Hosting']
    },

  ];

  return (
    <section id="experience" className="section">
      <div className="container" style={{ maxWidth: '800px' }}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Where I've Worked</h2>
          
          <div style={{ position: 'relative', marginTop: '3rem' }}>
            {/* Timeline line */}
            <div style={{ position: 'absolute', left: '0', top: '0', bottom: '0', width: '2px', background: 'var(--glass-border)', zIndex: 0 }}></div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
              {experiences.map((exp, index) => (
                <motion.div 
                  key={exp.id}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="glass-panel"
                  style={{ position: 'relative', padding: '2rem', marginLeft: '2rem', zIndex: 1 }}
                >
                  {/* Timeline dot */}
                  <div style={{ position: 'absolute', left: '-2.75rem', top: '2.5rem', width: '16px', height: '16px', borderRadius: '50%', background: 'var(--accent-color)', border: '4px solid var(--bg-primary)' }}></div>
                  
                  <h3 style={{ fontSize: '1.3rem', fontWeight: 600, marginBottom: '0.25rem' }}>
                    {exp.role} <span style={{ color: 'var(--accent-color)' }}>@ {exp.company}</span>
                  </h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1rem', fontFamily: 'monospace' }}>
                    {exp.duration}
                  </p>
                  <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: 1.6 }}>
                    {exp.description}
                  </p>
                  
                  <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                    {exp.skills.map((skill) => (
                      <span key={skill} style={{ fontSize: '0.8rem', padding: '0.25rem 0.75rem', borderRadius: '9999px', background: 'rgba(59, 130, 246, 0.1)', color: 'var(--accent-color)', fontWeight: 500 }}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
