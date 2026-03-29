import { useState } from "react";
import FormField from "../FormField/FormField";
import "./ContactForm.css";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [formMessage, setFormMessage] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    setFormMessage("Your message has been sent successfully.");

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <FormField
        label="Name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Enter your name"
      />

      <FormField
        label="Email"
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Enter your email"
      />

      <FormField
        label="Subject"
        name="subject"
        value={formData.subject}
        onChange={handleChange}
        placeholder="Enter a subject"
      />

      <FormField
        label="Message"
        type="textarea"
        name="message"
        value={formData.message}
        onChange={handleChange}
        placeholder="Write your message here"
        rows={6}
      />

      <button type="submit" className="primary-btn">
        Send Message
      </button>

      <p className="form-message">{formMessage}</p>
    </form>
  );
}

export default ContactForm;