import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      skills: ['React', 'Tailwind CSS', 'Framer Motion', 'Redux', 'HTML/CSS']
    },
    {
      title: 'Backend Development',
      skills: ['Node.js', 'Express', 'MySQL', 'MongoDB', 'REST APIs']
    },
    {
      title: 'Tools & Concepts',
      skills: ["Git", "GitHub", "Postman", "Figma", " REST APIs", "MVC Architecture","JWT", "Deployment"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="skills" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Technical Skills</h2>
          <p className="section-subtitle">A comprehensive list of my technical toolkit.</p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {skillCategories.map((category, idx) => (
              <div key={idx} className="glass-panel" style={{ padding: '2rem' }}>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: '1.5rem', color: 'var(--accent-color)' }}>
                  {category.title}
                </h3>
                
                <motion.div 
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}
                >
                  {category.skills.map((skill, index) => (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      whileHover={{ scale: 1.05, backgroundColor: 'rgba(59, 130, 246, 0.2)' }}
                      style={{ 
                        padding: '0.5rem 1rem', 
                        backgroundColor: 'var(--glass-bg)', 
                        border: '1px solid var(--glass-border)',
                        borderRadius: '8px',
                        fontSize: '0.9rem',
                        fontWeight: 500,
                        cursor: 'default',
                        transition: 'background-color 0.2s'
                      }}
                    >
                      {skill}
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
