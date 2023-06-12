import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = ({ isLoggedIn }) => {
  const navigate = useNavigate();

  const handleAboutUs = () => {
    navigate('/about');
  };

  const handleContactUs = () => {
    navigate('/contact');
  };

  return (
    <>
      <div className="container">
      <h1 className="title">Welcome to KRATIN HELPING HAND</h1>
      <div className="buttons">
        {isLoggedIn ? (
          <>
            <button onClick={handleAboutUs}>About Us</button>
            <button onClick={handleContactUs}>Contact Us</button>
            <button onClick={() => navigate('/functionality')}>Go to Functionality Page</button>
          </>
        ) : (
          <>
            
            <button onClick={() => navigate('/login')}>Login</button>
            <button onClick={() => navigate('/signup')}>Signup</button>
            <button onClick={() => navigate('/contact')}>Contact US</button>
            <button onClick={() => navigate('/about')}>ABout US</button>
          </>
        )}
      </div>
    </div>
    </>
  );
};

export default Home;
