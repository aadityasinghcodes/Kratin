import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Signup.css';

const Signup = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();

    if (
      !name ||
      !age ||
      !weight ||
      !height ||
      !phoneNumber ||
      !email ||
      !username ||
      !password ||
      !confirmPassword
    ) {
      setErrorMessage('All fields are required.');
      return;
    }

    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match.');
      return;
    }

    const signupData = {
      name,
      age,
      weight,
      height,
      phoneNumber,
      email,
      username,
      password,
    };
    sessionStorage.setItem('signupData', JSON.stringify(signupData));

    navigate('/login');
  };

  return (
    <div className="signup-container">
      <h2>Signup</h2>
      <form onSubmit={handleSignup}>
        <table className="signup-table">
          <tbody>
            <tr>
              <td>
                <label htmlFor="name">Name:</label>
              </td>
              <td>
                <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="age">Age:</label>
              </td>
              <td>
                <input type="text" id="age" value={age} onChange={(e) => setAge(e.target.value)} />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="weight">Weight:</label>
              </td>
              <td>
                <input type="text" id="weight" value={weight} onChange={(e) => setWeight(e.target.value)} />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="height">Height:</label>
              </td>
              <td>
                <input type="text" id="height" value={height} onChange={(e) => setHeight(e.target.value)} />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="phoneNumber">Phone Number:</label>
              </td>
              <td>
                <input
                  type="text"
                  id="phoneNumber"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="email">Email:</label>
              </td>
              <td>
                <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="username">Username:</label>
              </td>
              <td>
                <input
                  type="text"
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="password">Password:</label>
              </td>
              <td>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="confirmPassword">Confirm Password:</label>
              </td>
              <td>
                <input
                  type="password"
                  id="confirmPassword"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </td>
            </tr>
          </tbody>
        </table>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <div>
          <button type="submit">Signup</button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
