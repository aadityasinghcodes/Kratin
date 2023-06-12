import React from 'react';
import { Link } from 'react-router-dom';
import '../components/Functionality.css';
import backgroundPhoto from '../components/helping-hands.jpg';


const Functionality = () => {
  const containerStyle = {
    backgroundImage: `url(${backgroundPhoto})`,
  };

  return (
    <div className="container" style={containerStyle}>
      <h2 className="button" class="title">
        Welcome User to Helping Hand
      </h2>
      <ul>
        <li class="subtitle">
          <Link to="/hydration-reminder">Hydration Reminder</Link>
        </li>
        <li class="subtitle">
          <Link to="/exercise-tutorial">Exercise Tutorial</Link>
        </li>
        <li class="subtitle">
          <Link to="/medication-alert">Medication Alert</Link>
        </li>
        <li class="subtitle">
          <Link to="/emergency-contacts">Emergency Contacts</Link>
        </li>
        <li class="subtitle">
          <Link to="/activity-planner">Activity Planner</Link>
        </li>
        <li class="subtitle">
          <Link to="/personalized-reminders">Personalized Reminders</Link>
        </li>
        <li class="subtitle">
          <Link to="/add-contact">Add Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default Functionality;
