import React, { useState } from 'react';
import './Contact.css';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaPaperPlane, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    Name: '',
    Email: '',
    Message: ''
  });
  const [status, setStatus] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...'); // Show sending status

    // Use environment variable for production, fallback to localhost for development
    const apiEndpoint = import.meta.env.VITE_API_URL || "http://localhost:5000/api/contact";

    try {
      const response = await fetch(apiEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          Name: formData.Name,
          Email: formData.Email,
          Message: formData.Message
        })
      });

      const data = await response.json();

      if (response.ok) {
        setIsSuccess(true);
        setStatus('Message Sent Successfully!');
        setFormData({ Name: '', Email: '', Message: '' });
      } else {
        setIsSuccess(false);
        setStatus('Failed to send message.');
        console.error("FormSubmit Warning:", data);
      }
    } catch (error) {
      console.error(error);
      setIsSuccess(false);
      setStatus(`Error: ${error.message || 'Could not connect to server'} (Target: ${apiEndpoint})`);
    }

    // Auto hide alert after 4 seconds
    setTimeout(() => {
      setStatus('');
    }, 4000);
  };


  return (
    <div className='contact' id='contact'>
      {status && (
        <div className='custom-alert' style={{ borderColor: isSuccess ? 'var(--accent-color)' : '#ff4444' }}>
          {isSuccess ? <FaCheckCircle color="var(--accent-color)" size={20} /> : <FaExclamationCircle color="#ff4444" size={20} />}
          <p style={{ margin: 0, color: '#fff' }}>{status}</p>
        </div>
      )}
      <div className='container'>
        <div className='contact-wrapper'>
          <div className='contact-left'>
            <h1 className='sub-title'>Contact Me</h1>
            <div className="contact-info">
              <p><FaEnvelope className="icon" /> cheshtapruthi2502@gmail.com</p>
              <p><FaPhone className="icon" /> +91 70115 21124</p>
              <p><FaMapMarkerAlt className="icon" /> India</p>
            </div>
            <div className='social-icons'>
              <a href="https://www.linkedin.com/in/chesta-pruthi/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
              <a href="https://github.com/cheshtapruthi" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            </div>
            <a href="/resume.pdf" download="Cheshta_Pruthi_Resume.pdf" className='btn btn-cv'>Download CV</a>
          </div>
          <div className='contact-right'>
            <form onSubmit={handleSubmit}>
              <input type="text" name="Name" placeholder="Your Name" value={formData.Name} onChange={handleChange} required />
              <input type="email" name="Email" placeholder="Your Email" value={formData.Email} onChange={handleChange} required />
              <textarea name="Message" rows="6" placeholder="Your Message" value={formData.Message} onChange={handleChange}></textarea>
              <button type="submit" className='btn btn-submit'>Submit <FaPaperPlane size={15} style={{ marginLeft: '8px' }} /></button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Contact;
