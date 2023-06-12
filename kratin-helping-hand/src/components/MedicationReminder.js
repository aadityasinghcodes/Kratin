import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './medicationReminder.css';

const MedicationReminder = () => {
  const [medicationTime, setMedicationTime] = useState('09:00');
  const [medicines, setMedicines] = useState([]);
  const [newMedicine, setNewMedicine] = useState({
    name: '',
    type: 'tablet',
    interval: '4',
    days: [],
  });
  const [currentTime, setCurrentTime] = useState('');

  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  const notifyMedicine = (medicineName) => {
    toast.info(`It's time to take your ${medicineName}!`, {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 5000, // Close the notification after 5 seconds
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
    const storedMedicines = localStorage.getItem('medicines');
    if (storedMedicines) {
      setMedicines(JSON.parse(storedMedicines));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('medicines', JSON.stringify(medicines));
  }, [medicines]);

  useEffect(() => {
    medicines.forEach((medicine) => {
      const { interval, days } = medicine;

      if (currentTime === medicationTime && days.includes(daysOfWeek[new Date().getDay()])) {
        notifyMedicine(medicine.name);
      }

      const intervalMilliseconds = interval * 60 * 60 * 1000;
      const lastMedicationTime = new Date(medicine.lastTakenTime).getTime();
      const currentTimestamp = new Date().getTime();

      if (currentTimestamp - lastMedicationTime >= intervalMilliseconds && days.includes(daysOfWeek[new Date().getDay()])) {
        notifyMedicine(medicine.name);
      }
    });
  }, [currentTime, medicationTime, medicines]);

  const handleAddMedicine = () => {
    setMedicines((prevMedicines) => [...prevMedicines, newMedicine]);
    setNewMedicine({
      name: '',
      type: 'tablet',
      interval: '4',
      days: [],
    });
  };

  const handleDeleteMedicine = (index) => {
    setMedicines((prevMedicines) => {
      const updatedMedicines = [...prevMedicines];
      updatedMedicines.splice(index, 1);
      return updatedMedicines;
    });
  };

  const handleEditMedicine = (index) => {
    const medicineToEdit = medicines[index];
    setNewMedicine({ ...medicineToEdit });
    handleDeleteMedicine(index);
  };

  const handleDownloadReport = () => {
    const reportData = JSON.stringify(medicines, null, 2);
    const blob = new Blob([reportData], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'medication_report.json');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="medication-reminder-container">
      <h2>Medication Reminder</h2>
      <p>Set your medication time:</p>
      <input
        type="time"
        value={medicationTime}
        onChange={(e) => setMedicationTime(e.target.value)}
      />

      <h3>Add Medicine</h3>
      <div>
        <label htmlFor="medicineName">Medicine Name:</label>
        <input
          type="text"
          id="medicineName"
          value={newMedicine.name}
          onChange={(e) => setNewMedicine({ ...newMedicine, name: e.target.value })}
        />
      </div>
      <div>
        <label htmlFor="medicineType">Medicine Type:</label>
        <select
          id="medicineType"
          value={newMedicine.type}
          onChange={(e) => setNewMedicine({ ...newMedicine, type: e.target.value })}
        >
          <option value="tablet">Tablet</option>
          <option value="syrup">Syrup</option>
          <option value="capsule">Capsule</option>
          <option value="oral">Oral</option>
        </select>
      </div>
      <div>
        <label htmlFor="medicineInterval">Interval (in hours):</label>
        <input
          type="number"
          id="medicineInterval"
          value={newMedicine.interval}
          onChange={(e) => setNewMedicine({ ...newMedicine, interval: e.target.value })}
        />
      </div>
      <div>
        <p>Days to take:</p>
        {daysOfWeek.map((day, index) => (
          <label key={index} htmlFor={`dayCheckbox${index}`}>
            <input
              type="checkbox"
              id={`dayCheckbox${index}`}
              checked={newMedicine.days.includes(day)}
              onChange={(e) => {
                const updatedDays = e.target.checked
                  ? [...newMedicine.days, day]
                  : newMedicine.days.filter((selectedDay) => selectedDay !== day);

                setNewMedicine({ ...newMedicine, days: updatedDays });
              }}
            />
            {day}
          </label>
        ))}
      </div>
      <button onClick={handleAddMedicine}>Add Medicine</button>

      <h3>Medicine List</h3>
      <ul>
        {medicines.map((medicine, index) => (
          <li key={index}>
            <strong>{medicine.name}</strong> - Type: {medicine.type}, Interval: {medicine.interval} hours
            <button className="edit-button" onClick={() => handleEditMedicine(index)}>Edit</button>
            <button className="delete-button" onClick={() => handleDeleteMedicine(index)}>Delete</button>
          </li>
        ))}
      </ul>

      <button onClick={handleDownloadReport}>Download Report</button>

      <ToastContainer />
    </div>
  );
};

export default MedicationReminder;
