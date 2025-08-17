import React from 'react';
import './Footer.css';
import karthikImg from '../assets/karthik.jpg';
import { HiOutlineMail, HiOutlineUser, HiOutlinePhone, HiOutlineLocationMarker } from 'react-icons/hi';

export default function Footer() {
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
            <form className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input type="text" id="name" placeholder="Enter your name" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Your Email</label>
                <input type="email" id="email" placeholder="Enter your email" />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" rows="4" placeholder="Enter your message"></textarea>
              </div>
              <button type="submit" className="send-button">Send Message</button>
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
              <span className="contributor-name">Karthik M Sarma</span>
            </div>
          </div>
          <p className="footer-copyright">© 2025 E Cell IIITS. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
