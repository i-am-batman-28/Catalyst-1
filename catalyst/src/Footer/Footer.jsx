import React, { useState } from 'react';
import './Footer.css';
import karthikImg from '../assets/karthik.jpg';
import { HiOutlineMail, HiOutlineUser, HiOutlinePhone, HiOutlineLocationMarker } from 'react-icons/hi';

export default function Footer() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setSubmitStatus('Please fill in all fields');
      setIsSubmitting(false);
      return;
    }

    try {
      // Create mailto link with form data
      const subject = encodeURIComponent(`Catalyst Event Inquiry from ${formData.name}`);
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      );
      const mailtoLink = `mailto:ecell@iiits.in?subject=${subject}&body=${body}`;
      
      // Open email client
      window.open(mailtoLink);
      
      // Reset form
      setFormData({ name: '', email: '', message: '' });
      setSubmitStatus('Email client opened! Please send the email.');
      
    } catch (error) {
      setSubmitStatus('Error opening email client. Please contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer id="contact" className="footer-section">
      <div className="footer-container">
        <div className="footer-header">
          <h2 className="footer-title">Contact Us</h2>
          <p className="footer-description">
            Have questions or need assistance? Reach out to us using the contact information below.
          </p>
        </div>

        <div className="footer-content">
          <div className="contact-form-section">
            <h3 className="form-title">Send us a message</h3>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter your name" 
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Your Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email" 
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea 
                  id="message" 
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="4" 
                  placeholder="Enter your message"
                  required
                ></textarea>
              </div>
              {submitStatus && (
                <div className={`form-status ${submitStatus.includes('Error') ? 'error' : 'success'}`}>
                  {submitStatus}
                </div>
              )}
              <button type="submit" className="send-button" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>

          <div className="contact-info-section">
            <h3 className="info-title">Contact Information</h3>
            <div className="contact-details">
              <div className="contact-item">
                <HiOutlineMail className="contact-icon" />
                <a href="mailto:ecell@iiits.in" className="contact-link">ecell@iiits.in</a>
              </div>
              <div className="contact-item">
                <HiOutlineUser className="contact-icon" />
                <div className="contact-person">
                  <span className="contact-text">Prajwal</span>
                  <span className="contact-email">prajwal.g24@iiits.in</span>
                </div>
              </div>
              <div className="contact-item">
                <HiOutlineUser className="contact-icon" />
                <div className="contact-person">
                  <span className="contact-text">Pranav</span>
                  <span className="contact-email">venkatasaipranav.m24@iiits.in</span>
                </div>
              </div>
              <div className="contact-item">
                <HiOutlineUser className="contact-icon" />
                <div className="contact-person">
                  <span className="contact-text">Gokul</span>
                  <span className="contact-email">gokulkrishna.g24@iiits.in</span>
                  <div className="contact-phone-wrapper">
                    <HiOutlinePhone className="contact-phone" /> 
                    <span className="phone-number">+91 91103 71898</span>
                  </div>
                </div>
              </div>
              <div className="contact-item">
                <HiOutlineUser className="contact-icon" />
                <div className="contact-person">
                  <span className="contact-text">Akhil</span>
                  <span className="contact-email">venkatasaiakhil.g24@iiits.in</span>
                  <div className="contact-phone-wrapper">
                    <HiOutlinePhone className="contact-phone" /> 
                    <span className="phone-number">+91 70136 63827</span>
                  </div>
                </div>
              </div>
              <div className="contact-item">
                <HiOutlineLocationMarker className="contact-icon" />
                <span className="contact-text">IIIT Sri City, Andhra Pradesh, India</span>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="contributors-section">
            <h3 className="contributors-title">Contributors of this website</h3>
            <div className="contributor-item">
              <div className="contributor-avatar">
                <img src={karthikImg} alt="Karthik M Sarma" className="contributor-image" />
              </div>
              <div className="contributor-info">
                <span className="contributor-name">Karthik M Sarma</span>
                <span className="contributor-phone">+91 7899336201</span>
              </div>
            </div>
          </div>
          <p className="footer-copyright">© 2025 E Cell IIITS. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
