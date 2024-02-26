import React, { useState } from "react";
import "./contact.css";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSumbit = (e) => {
    e.preventDefault;
  };
  return (
    <div className="contact-container" id="contactsection">
      <div className="contact-header">
        <h3>Contact Me</h3>
        <p>Do I look like a promising Employee? Contact me now!!</p>
      </div>
      <form action="" className="contact-form">
        <div className="contact-name">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={(e) => setFormData(e.target.value)}
            placeholder="Enter your name"
          />
        </div>
        <div className="contact-email">
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            value={formData.email}
            onChange={(e) => setFormData(e.target.value)}
            placeholder="Enter your Email"
          />
        </div>
        <div className="contact-msg">
          <label htmlFor="msg">Message:</label>
          <textarea
            type="text"
            id="msg"
            placeholder="Enter your message"
            value={formData.message}
            onChange={(e) => setFormData(e.target.value)}
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
