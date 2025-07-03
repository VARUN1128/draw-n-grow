import React, { useEffect } from 'react';
import '../styles/NotificationPopup.css';

const NotificationPopup = ({ message, show, onClose }) => {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  if (!show) return null;

  return (
    <div className="notification-popup">
      <div className="notification-content">
        <span>{message}</span>
        <button className="close-button" onClick={onClose}>×</button>
      </div>
    </div>
  );
};

export default NotificationPopup; 