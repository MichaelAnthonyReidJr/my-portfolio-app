import "./FormStyles.css"
import React, { useState } from 'react'
import emailjs from '@emailjs/browser'

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const sendEmail = (e) => {
    e.preventDefault();

    const emailData = {
      to: "EfficiencyMarriesEfficacy@gmail.com",
      from: formData.email,
      subject: "Contact Form Submisiion",
      text: formData.message,
    };
    emailjs.sendForm("service_9z66dz8", "template_py7fg2", e.target, emailData);
  }; 

  return (
    <div className = "form">
        <form onSubmit = {sendEmail} >
            <input 
            type = "text"
            name = "name"
            placeholder = "Your name"
            value = {formData.name}
            onChange={(e) => setFormData({ ...formData, name:e.target.value })}
            />
            <input 
            type = "email"
            name = "email"
            placeholder = "Your email"
            value = {formData.email}
            onChange={(e) => setFormData({ ...formData, email:e.target.value })}
            />
            <textarea rows = "7"
            name = "message"
            placeholder = "Your message"
            value = {formData.message}
            onChange={(e) => setFormData({ ...formData, message:e.target.value })}
            />
            <button className = "btn">Submit</button>
        </form>

    </div>
  )
}

export default Form;