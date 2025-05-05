import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import "./Contact.css";

const Contact = () => {
  const formRef = useRef();
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID, 
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID, 
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY 
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatus("Message Sent Successfully!");
        },
        (error) => {
          console.log(error.text);
          setStatus("Oops, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div className="contact-container">
      <h2>Contact me for any collaboration or project 
        <br /> 
        Feel free to give suggestions and feedback</h2>
      <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="user_name">Name</label>
          <input type="text" name="user_name" required />
        </div>
        <div className="form-group">
          <label htmlFor="user_email">Email</label>
          <input type="email" name="user_email" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea name="message" required />
        </div>
        <button type="submit">Send Message</button>
      </form>
      {status && <p>{status}</p>}
    </div>
  );
};

export default Contact;



