import React, { useState, useEffect } from 'react';
import './ActivityPlanner.css';

const ActivityPlanner = () => {
  const [activities, setActivities] = useState([]);
  const [newActivity, setNewActivity] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  useEffect(() => {
    const storedActivities = localStorage.getItem('activities');
    if (storedActivities) {
      setActivities(JSON.parse(storedActivities));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('activities', JSON.stringify(activities));
  }, [activities]);

  const handleAddActivity = () => {
    if (newActivity.trim() !== '' && selectedDate !== '' && selectedTime !== '') {
      const activity = {
        name: newActivity,
        date: selectedDate,
        time: selectedTime,
      };

      setActivities(prevActivities => [...prevActivities, activity]);
      setNewActivity('');
      setSelectedDate('');
      setSelectedTime('');
    }
  };

  const handleEditActivity = (index, updatedActivity) => {
    const updatedActivities = [...activities];
    updatedActivities[index].name = updatedActivity;
    setActivities(updatedActivities);
  };

  const handleDeleteActivity = (index) => {
    const updatedActivities = [...activities];
    updatedActivities.splice(index, 1);
    setActivities(updatedActivities);
  };

  return (
    <div className="activity-planner-container">
      <h2>Activity Planner</h2>
      <p>Plan your daily activities:</p>
      <ul>
        {activities.map((activity, index) => (
          <li key={index}>
            <input
              type="text"
              value={activity.name}
              onChange={(e) => handleEditActivity(index, e.target.value)}
            />
            <button onClick={() => handleDeleteActivity(index)}>Delete</button>
            <span>Date: {activity.date}</span>
            <span>Time: {activity.time}</span>
          </li>
        ))}
      </ul>
      <div>
        <input
          type="text"
          placeholder="Add activity"
          value={newActivity}
          onChange={(e) => setNewActivity(e.target.value)}
        />
        <input
          type="date"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
        />
        <input
          type="time"
          value={selectedTime}
          onChange={(e) => setSelectedTime(e.target.value)}
        />
        <button onClick={handleAddActivity}>Add</button>
      </div>
    </div>
  );
};

export default ActivityPlanner;
