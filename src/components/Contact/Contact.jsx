import React from 'react'
import { useState } from 'react';
import './Contact.css'

const Contact = () => {
  
  const [formData, setFormData] = useState({name: "",email: "",subject: "", message: ""});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Name: ${formData.name}, Email: ${formData.email}, Message: ${formData.message}`
    );
  }
  return (
    <>
     <div className="containerr">
      <div className="left">
      <form onSubmit={handleSubmit}>
        <h3>Contact Form</h3><br />
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" name="name" value={formData.name} onChange={handleChange}/>

      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" value={formData.email} onChange={handleChange}/>

      <label htmlFor="subject">Subject:</label>
      <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange}/>

      <label htmlFor="message">Message:</label>
      <textarea id="message" name="message" value={formData.message} onChange={handleChange}/><br />

      <button type="submit">Submit</button>
    </form>
      </div>

      <div className='right'>
        <address>
        Address: "Springdale Public School, 123 Education Lane, Cityville, State, ZIP Code"<br />
         Phone: "+1 (123) 456-7890"<br />
         Email: "info@springdale.edu"
        </address>
        <div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3725.
        1029789858026!2d77.75472547436642!3d20.988508780650797!2m3!1f0!2f0!3f0!3m2!
        1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd6a2d9fa6ebb73%3A0x551505482a0be8f6!2sXQQ4%2B
        CPG%20Pote%20Estate%2C%20Gajanan%20Twp%20Rd%2C%20Kathora%2C%20Amravati%2C%20Maharasht
        ra%20444602!5e0!3m2!1sen!2sin!4v1721899127900!5m2!1sen!2sin" width="500" height="300" 
         allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
     </div>
    </>
  )
}

export default Contact