import React, { useState, useEffect } from 'react';
import './EmergencyContacts.css';

const EmergencyContacts = () => {
  const [emergencyContacts, setEmergencyContacts] = useState([]);

  useEffect(() => {
    const storedContacts = localStorage.getItem('contacts');
    if (storedContacts) {
      setEmergencyContacts(JSON.parse(storedContacts));
    }
  }, []);

  return (
    <div className="emergency-contacts-container">
      <h2>Emergency Contacts</h2>
      <ul>
        {emergencyContacts.map((contact, index) => (
          <li key={index}>
            {contact.name}: {contact.number}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmergencyContacts;
