import React from 'react';
import './ContactUs.css';

const ContactUs = () => {
  return (
    <div className="contact-us-container">
      <h2>Contact Us</h2>

      <div className="address">
        <h3>New Jersey</h3>
        <p>Kratin LLC,131, Recklesstown Way,
          Chesterfield, New Jersey - 08515
          USA.
        </p>
        <p>Email:  info@kratinmobile.com</p>
        <p>Contact Number:  (+1) 817 898 1386</p>
        <a
          href="https://www.google.co.in/maps/place/Kratin+LLC/@40.226873,-74.62997,11z/data=!4m6!3m5!1s0x89c15fa2e702e601:0x2081ab56acf35f8!8m2!3d40.1405241!4d-74.6607566!16s%2Fg%2F1ptw5w0cd?hl=en&entry=ttu"
          target="_blank"
          rel="noopener noreferrer"
        >
          View on Map
        </a>
      </div>

      <div className="address">
        <h3>Nagpur </h3>
        <p>Kratin Software Solutions Pvt. Ltd., B2-First Floor,
          47, Harihar Nagar, Nagpur - 440034
           India.
        </p>
        <p>Email:  info@kratinmobile.com</p>
        <p>Contact Number:  (+91) 9545001357</p>
        <a
          href="https://www.google.co.in/maps/place/Kratin+LLC/@21.084315,79.084507,17z/data=!4m14!1m7!3m6!1s0x3bd4bf184bb2e3ef:0x5b81d619cf4d269a!2sKratin+LLC!8m2!3d21.084315!4d79.084507!16s%2Fg%2F1q67gyxbh!3m5!1s0x3bd4bf184bb2e3ef:0x5b81d619cf4d269a!8m2!3d21.084315!4d79.084507!16s%2Fg%2F1q67gyxbh?hl=en&entry=ttu"
          target="_blank"
          rel="noopener noreferrer"
        >
          View on Map
        </a>
      </div>
    </div>
  );
};

export default ContactUs;
