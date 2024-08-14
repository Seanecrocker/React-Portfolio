import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate form and set errors if any
  };

  return (
    <section>
      <h2>Contact</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
          {errors.name && <p>{errors.name}</p>}
        </label>
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
          {errors.email && <p>{errors.email}</p>}
        </label>
        <label>
          Message:
          <textarea name="message" value={formData.message} onChange={handleChange}></textarea>
          {errors.message && <p>{errors.message}</p>}
        </label>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default Contact;