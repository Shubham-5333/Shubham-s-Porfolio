const Footer = () => {
  return (
    <footer style={{ padding: '2rem 0', textAlign: 'center', borderTop: '1px solid var(--glass-border)', marginTop: '4rem' }}>
      <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', fontFamily: 'monospace' }}>
        Designed & Built by Shubham
      </p>
      <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', marginTop: '0.5rem' }}>
        &copy; {new Date().getFullYear()} All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
