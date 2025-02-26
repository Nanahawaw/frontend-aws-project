import React from 'react';

const Header = () => {
  return (
    <header style={styles.header}>
      <div style={styles.container}>
        <h1 style={styles.title}>DevOps Learning Project</h1>
        <p style={styles.subtitle}>Containerized React & Node.js Application</p>
      </div>
    </header>
  );
};

const styles = {
  header: {
    backgroundColor: '#2196f3',
    color: 'white',
    padding: '20px 0',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 15px',
  },
  title: {
    fontSize: '1.8rem',
    margin: 0,
  },
  subtitle: {
    fontSize: '1rem',
    margin: '5px 0 0',
    opacity: 0.9,
  },
};

export default Header;
