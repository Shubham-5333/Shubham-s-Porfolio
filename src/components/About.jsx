import { motion } from 'framer-motion';
import profilepic from '../assets/profilepic.jpg'

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container"> 
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">A brief introduction to who I am and what I do.</p>

          <div style={{ display: 'grid', gridTemplateColumns: 'minmax(300px, 1fr) minmax(250px, 300px)', gap: '4rem', alignItems: 'center' }}>
            <div style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: 1.8 }}>
              <p style={{ marginBottom: '1.5rem' }}>
                Hello! My name is Shubham Sunil Patil, and I enjoy building web applications that live on the internet. My interest in web development started back in 2020 when I began experimenting with HTML and CSS, which eventually led me to explore full stack development.              </p>
              <p style={{ marginBottom: '1.5rem' }}>
                Fast-forward to today, I’ve had the opportunity to work with different teams and projects, gaining experience in building modern web applications. I mainly work with the MERN stack (MongoDB, Express, React, Node.js) to create fast, scalable, and user-friendly applications.              </p>
              <p>
                These days, my focus is on building clean, efficient, and responsive full stack applications that provide a smooth user experience.              </p>
            </div>

            <div style={{ position: 'relative', width: '100%', aspectRatio: '1/1', borderRadius: '16px', zIndex: 1 }}>
              <div style={{ position: 'absolute', top: '20px', left: '20px', width: '100%', height: '100%', border: '2px solid var(--accent-color)', borderRadius: '16px', zIndex: -1, transition: 'all 0.3s ease' }} className="img-backdrop"></div>
              <img
                src={profilepic}
                alt="Profile"
                style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '16px', filter: 'grayscale(100%) brightness(0.8)', transition: 'all 0.3s ease', cursor: 'pointer' }}
                onMouseOver={(e) => { e.currentTarget.style.filter = 'none'; e.currentTarget.previousSibling.style.top = '10px'; e.currentTarget.previousSibling.style.left = '10px'; }}
                onMouseOut={(e) => { e.currentTarget.style.filter = 'grayscale(100%) brightness(0.8)'; e.currentTarget.previousSibling.style.top = '20px'; e.currentTarget.previousSibling.style.left = '20px'; }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
