import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';
import emailjs from '@emailjs/browser';
// import './Contact.css';

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
    <section id="contact" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title" style={{ textAlign: 'center' }}>
            Get In Touch
          </h2>

          <p
            className="section-subtitle"
            style={{ textAlign: 'center', margin: '0 auto 4rem auto' }}
          >
            Although I'm currently looking for new opportunities, my inbox is always open.
            Whether you have a question or just want to say hi, I'll try my best to get back to you!
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
                  fontSize: '1.5rem',
                  fontWeight: 600,
                  marginBottom: '1rem'
                }}
              >
                Contact Information
              </h3>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div
                  style={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '50%',
                    background: 'rgba(59, 130, 246, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--accent-color)'
                  }}
                >
                  <Mail size={24} />
                </div>

                <div>
                  <p
                    style={{
                      color: 'var(--text-secondary)',
                      fontSize: '0.9rem',
                      marginBottom: '0.25rem'
                    }}
                  >
                    Email
                  </p>

                  <p style={{ fontWeight: 500 }}>
                    shubhampatil5333@gmail.com
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div
                  style={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '50%',
                    background: 'rgba(59, 130, 246, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--accent-color)'
                  }}
                >
                  <Phone size={24} />
                </div>

                <div>
                  <p
                    style={{
                      color: 'var(--text-secondary)',
                      fontSize: '0.9rem',
                      marginBottom: '0.25rem'
                    }}
                  >
                    Phone
                  </p>

                  <p style={{ fontWeight: 500 }}>
                    +91 7558 8261 32
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div
                  style={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '50%',
                    background: 'rgba(59, 130, 246, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--accent-color)'
                  }}
                >
                  <MapPin size={24} />
                </div>

                <div>
                  <p
                    style={{
                      color: 'var(--text-secondary)',
                      fontSize: '0.9rem',
                      marginBottom: '0.25rem'
                    }}
                  >
                    Location
                  </p>

                  <p style={{ fontWeight: 500 }}>
                    India, Kozhikode, Kerala
                  </p>
                </div>
              </div>
            </div>

            <form
              className="glass-panel"
              id="contactForm"
              onSubmit={handleSubmit}
              style={{
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem'
              }}
            >

              <div>
                <label
                  style={{
                    display: 'block',
                    marginBottom: '0.5rem',
                    color: 'var(--text-secondary)',
                    fontSize: '0.9rem'
                  }}
                >
                  Name
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
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid var(--glass-border)',
                    borderRadius: '8px',
                    color: 'white',
                    fontFamily: 'inherit',
                    outline: 'none'
                  }}
                  onFocus={e => e.target.style.borderColor = 'var(--accent-color)'}
                  onBlur={e => e.target.style.borderColor = 'var(--glass-border)'}
                />
              </div>

              <div>
                <label
                  style={{
                    display: 'block',
                    marginBottom: '0.5rem',
                    color: 'var(--text-secondary)',
                    fontSize: '0.9rem'
                  }}
                >
                  Email
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
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid var(--glass-border)',
                    borderRadius: '8px',
                    color: 'white',
                    fontFamily: 'inherit',
                    outline: 'none'
                  }}
                  onFocus={e => e.target.style.borderColor = 'var(--accent-color)'}
                  onBlur={e => e.target.style.borderColor = 'var(--glass-border)'}
                />
              </div>

              <div>
                <label
                  style={{
                    display: 'block',
                    marginBottom: '0.5rem',
                    color: 'var(--text-secondary)',
                    fontSize: '0.9rem'
                  }}
                >
                  Message
                </label>

                <textarea
                  name="message"
                  placeholder="Your message here..."
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '1rem',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid var(--glass-border)',
                    borderRadius: '8px',
                    color: 'white',
                    fontFamily: 'inherit',
                    outline: 'none',
                    resize: 'vertical'
                  }}
                  onFocus={e => e.target.style.borderColor = 'var(--accent-color)'}
                  onBlur={e => e.target.style.borderColor = 'var(--glass-border)'}
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary"
                style={{ width: '100%', padding: '1rem' }}
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