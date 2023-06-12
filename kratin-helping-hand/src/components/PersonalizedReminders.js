import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './personalizedReminders.css';

const PersonalizedReminders = () => {
  const [reminder, setReminder] = useState('');
  const [reminders, setReminders] = useState([]);
  const [notificationTime, setNotificationTime] = useState('09:00');
  const [currentTime, setCurrentTime] = useState('');

  const notifyReminder = (reminderText) => {
    toast.info(`Reminder: ${reminderText}`, {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 5000,
    });
  };

  useEffect(() => {
    const timer = setInterval(() => {
      const date = new Date();
      const time = `${date.getHours()}:${date.getMinutes()}`;

      setCurrentTime(time);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    const storedReminders = localStorage.getItem('reminders');
    if (storedReminders) {
      setReminders(JSON.parse(storedReminders));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('reminders', JSON.stringify(reminders));
  }, [reminders]);

  useEffect(() => {
    reminders.forEach((rem) => {
      if (currentTime === notificationTime) {
        notifyReminder(rem);
      }
    });
  }, [currentTime, notificationTime, reminders]);

  const handleReminderChange = (e) => {
    setReminder(e.target.value);
  };

  const handleAddReminder = () => {
    setReminders((prevReminders) => [...prevReminders, reminder]);
    setReminder('');
  };

  return (
    <div className="personalized-reminders-container">
      <h2>Personalized Reminders</h2>
      <p>Add your personalized reminders:</p>
      <input type="text" value={reminder} onChange={handleReminderChange} />
      <button onClick={handleAddReminder}>Add Reminder</button>

      <p>Set notification time:</p>
      <input
        type="time"
        value={notificationTime}
        onChange={(e) => setNotificationTime(e.target.value)}
      />

      <ToastContainer />
    </div>
  );
};

export default PersonalizedReminders;
