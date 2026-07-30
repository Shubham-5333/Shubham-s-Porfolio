import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      'service_vvs3nst',
      'template_cgfy6to',
      {
        name: formData.name,
        email: formData.email,
        message: formData.message
      },
      'FEduFyovSfYnGDyNX'
    )
    .then(() => {
      alert('Message sent successfully!');

      setFormData({
        name: '',
        email: '',
        message: ''
      });
    })
    .catch((err) => {
      console.error('Email send error:', err);
      alert('Failed to send message. Please try again.');
    });
  };

  return (
    <section id="contact" className="section bg-starfield">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span style={{ color: '#4d7c0f', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.85rem', display: 'block', textAlign: 'center' }}>
            GET IN TOUCH
          </span>
          <h2 className="section-title" style={{ textAlign: 'center', marginTop: '0.3rem' }}>
            LET'S <span className="text-gradient">CONNECT</span>
          </h2>

          <p
            className="section-subtitle"
            style={{ textAlign: 'center', margin: '0 auto 4rem auto' }}
          >
            Whether you have a project in mind, a question, or just want to connect, feel free to reach out!
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '4rem',
              maxWidth: '1000px',
              margin: '0 auto'
            }}
          >

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.8rem',
                  letterSpacing: '1px',
                  color: 'var(--text-primary)',
                  marginBottom: '0.5rem'
                }}
              >
                CONTACT INFORMATION
              </h3>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div
                  style={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '50%',
                    background: 'rgba(132, 204, 22, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#4d7c0f'
                  }}
                >
                  <Mail size={24} />
                </div>

                <div>
                  <p
                    style={{
                      color: 'var(--text-muted)',
                      fontSize: '0.8rem',
                      textTransform: 'uppercase',
                      fontWeight: 700,
                      marginBottom: '0.2rem'
                    }}
                  >
                    Email
                  </p>

                  <a href="mailto:shubhampatil5333@gmail.com" style={{ fontWeight: 700, color: 'var(--text-primary)', textDecoration: 'none' }}>
                    shubhampatil5333@gmail.com
                  </a>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div
                  style={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '50%',
                    background: 'rgba(132, 204, 22, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#4d7c0f'
                  }}
                >
                  <Phone size={24} />
                </div>

                <div>
                  <p
                    style={{
                      color: 'var(--text-muted)',
                      fontSize: '0.8rem',
                      textTransform: 'uppercase',
                      fontWeight: 700,
                      marginBottom: '0.2rem'
                    }}
                  >
                    Phone
                  </p>

                  <a href="tel:+917558826132" style={{ fontWeight: 700, color: 'var(--text-primary)', textDecoration: 'none' }}>
                    +91 7558 8261 32
                  </a>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div
                  style={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '50%',
                    background: 'rgba(132, 204, 22, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#4d7c0f'
                  }}
                >
                  <MapPin size={24} />
                </div>

                <div>
                  <p
                    style={{
                      color: 'var(--text-muted)',
                      fontSize: '0.8rem',
                      textTransform: 'uppercase',
                      fontWeight: 700,
                      marginBottom: '0.2rem'
                    }}
                  >
                    Location
                  </p>

                  <p style={{ fontWeight: 700, color: 'var(--text-primary)' }}>
                    Kozhikode, Kerala, India
                  </p>
                </div>
              </div>
            </div>

            <form
              className="glass-panel"
              id="contactForm"
              onSubmit={handleSubmit}
              style={{
                padding: '2.5rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem',
                background: '#ffffff',
                border: '1px solid rgba(15, 23, 42, 0.1)',
                boxShadow: '0 10px 30px rgba(15, 23, 42, 0.05)',
                borderRadius: '20px'
              }}
            >

              <div>
                <label
                  style={{
                    display: 'block',
                    marginBottom: '0.5rem',
                    color: 'var(--text-primary)',
                    fontSize: '0.9rem',
                    fontWeight: 600
                  }}
                >
                  Your Name
                </label>

                <input
                  type="text"
                  name="name"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '1rem',
                    background: '#f8fafc',
                    border: '1px solid rgba(15, 23, 42, 0.15)',
                    borderRadius: '10px',
                    color: '#0f172a',
                    fontFamily: 'inherit',
                    fontSize: '1rem',
                    outline: 'none',
                    transition: 'all 0.2s ease'
                  }}
                  onFocus={e => { e.target.style.borderColor = '#0f172a'; e.target.style.background = '#ffffff'; }}
                  onBlur={e => { e.target.style.borderColor = 'rgba(15, 23, 42, 0.15)'; e.target.style.background = '#f8fafc'; }}
                />
              </div>

              <div>
                <label
                  style={{
                    display: 'block',
                    marginBottom: '0.5rem',
                    color: 'var(--text-primary)',
                    fontSize: '0.9rem',
                    fontWeight: 600
                  }}
                >
                  Your Email
                </label>

                <input
                  type="email"
                  name="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '1rem',
                    background: '#f8fafc',
                    border: '1px solid rgba(15, 23, 42, 0.15)',
                    borderRadius: '10px',
                    color: '#0f172a',
                    fontFamily: 'inherit',
                    fontSize: '1rem',
                    outline: 'none',
                    transition: 'all 0.2s ease'
                  }}
                  onFocus={e => { e.target.style.borderColor = '#0f172a'; e.target.style.background = '#ffffff'; }}
                  onBlur={e => { e.target.style.borderColor = 'rgba(15, 23, 42, 0.15)'; e.target.style.background = '#f8fafc'; }}
                />
              </div>

              <div>
                <label
                  style={{
                    display: 'block',
                    marginBottom: '0.5rem',
                    color: 'var(--text-primary)',
                    fontSize: '0.9rem',
                    fontWeight: 600
                  }}
                >
                  Your Message
                </label>

                <textarea
                  name="message"
                  placeholder="Write your message here..."
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '1rem',
                    background: '#f8fafc',
                    border: '1px solid rgba(15, 23, 42, 0.15)',
                    borderRadius: '10px',
                    color: '#0f172a',
                    fontFamily: 'inherit',
                    fontSize: '1rem',
                    outline: 'none',
                    resize: 'vertical',
                    transition: 'all 0.2s ease'
                  }}
                  onFocus={e => { e.target.style.borderColor = '#0f172a'; e.target.style.background = '#ffffff'; }}
                  onBlur={e => { e.target.style.borderColor = 'rgba(15, 23, 42, 0.15)'; e.target.style.background = '#f8fafc'; }}
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary"
                style={{ width: '100%', padding: '1rem', fontSize: '1.05rem' }}
              >
                Send Message <Send size={18} />
              </button>

            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;