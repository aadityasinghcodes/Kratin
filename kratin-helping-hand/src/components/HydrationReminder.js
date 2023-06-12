import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './HydrationReminder.css';

const HydrationReminder = () => {
  const [hydrationCount, setHydrationCount] = useState(0);

  const notifyHydrationReminder = () => {
    toast.info("It's time to drink water!", {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 5000, 
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setHydrationCount((prevCount) => prevCount + 1);
      notifyHydrationReminder();
    }, 3 * 60 * 60 );

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="hydration-reminder-container">
      <h2>Hydration Reminder</h2>
      <p>Number of Hydration Reminders: {hydrationCount}</p>
      <ToastContainer />
    </div>
  );
};

export default HydrationReminder;
