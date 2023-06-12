import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';

import Home from './components/Home';
import Login from './components/Login';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Signup from './components/Signup';
import Functionality from './components/Functionality';
import HydrationReminder from './components/HydrationReminder';
import ExerciseTutorial from './components/ExerciseTutorial';
import MedicationReminder from './components/MedicationReminder';
import EmergencyContacts from './components/EmergencyContacts';
import AddContact from './components/AddContact';
import ActivityPlanner from './components/ActivityPlanner';
import PersonalizedReminders from './components/PersonalizedReminders';


const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    
      <Routes>
        <Route path="/" element={<Home isLoggedIn={isLoggedIn} />} />
        <Route path="/about" element={<AboutUs isLoggedIn={isLoggedIn} />} />
        <Route path="/contact" element={<ContactUs isLoggedIn={isLoggedIn} />} />
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/signup" element={<Signup setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/functionality" element={<Functionality />} isLoggedIn={isLoggedIn} />
        <Route
          path="/hydration-reminder"
          element={<HydrationReminder />}
          isLoggedIn={isLoggedIn}
        />
        <Route
          path="/exercise-tutorial"
          element={<ExerciseTutorial />}
          isLoggedIn={isLoggedIn}
        />
        <Route
          path="/medication-alert"
          element={<MedicationReminder />}
          isLoggedIn={isLoggedIn}
        />
        <Route
          path="/emergency-contacts"
          element={<EmergencyContacts />}
          isLoggedIn={isLoggedIn}
        />
        <Route
          path="/add-contact"
          element={<AddContact />}
          isLoggedIn={isLoggedIn}
        />
        <Route
          path="/activity-planner"
          element={<ActivityPlanner />}
          isLoggedIn={isLoggedIn}
        />
        <Route
          path="/personalized-reminders"
          element={<PersonalizedReminders />}
          isLoggedIn={isLoggedIn}
        />
      </Routes>
  
  );
};


export default App;
