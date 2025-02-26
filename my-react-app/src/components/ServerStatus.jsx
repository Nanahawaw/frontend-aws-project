import React from 'react';

const ServerStatus = ({ status }) => {
  const getStatusColor = () => {
    switch (status) {
      case 'Online':
        return '#4caf50'; // Green
      case 'Offline':
        return '#f44336'; // Red
      default:
        return '#ff9800'; // Orange for checking or unknown
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.label}>Backend Server Status:</div>
      <div
        style={{
          ...styles.status,
          backgroundColor: getStatusColor(),
        }}>
        {status}
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    margin: '10px 0',
  },
  label: {
    marginRight: '10px',
    fontWeight: 500,
  },
  status: {
    padding: '5px 10px',
    borderRadius: '4px',
    color: 'white',
    fontWeight: 500,
    minWidth: '80px',
    textAlign: 'center',
  },
};

export default ServerStatus;
