import React from 'react';
import './ExerciseTutorial.css';

const ExerciseTutorial = () => {
  return (
    <div className="exercise-tutorial-container">
      <h2>Exercise Tutorial</h2>
      <p>Here you can find exercise tutorials for the morning and evening.</p>

      <h3>Morning Exercise Tutorial</h3>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/watch?v=dB1x5hHZ_vg&pp=ygU7bW9ybmluZyBhbmQgZXZlbmluZyBleGVyY2lzZSB2aWRlbyBmb3Igb2xkIHBlb3BsZSA2NSsgeWVhcnM%3D"
        title="Morning Exercise Tutorial"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>

      <h3>Evening Exercise Tutorial</h3>
      <iframe
        width="560"
        height="315"
        src="https://www.dailymotion.com/video/xp9mn7"
        title="Evening Exercise Tutorial"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default ExerciseTutorial;
