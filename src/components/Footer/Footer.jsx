import React from 'react';
import './Footer.jsx'
import './Footer.scss'
import { InstagramOutlined, FacebookOutlined, TwitterOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="social-icons-container">
          <a href="https://www.instagram.com/nike"className="social-icon" target="_blank">
            <InstagramOutlined />
          </a>
          <a href="https://www.facebook.com/nike" className="social-icon" target="_blank">
            <FacebookOutlined />
          </a>
          <a href="https://www.twitter.com/nike" className="social-icon" target="_blank">
            <TwitterOutlined />
          </a>
        </div>
      </div>
      <div className='footer-content'>
        <div className='footer-left'>
        <h4>Customer Care</h4>
        <ul className="footer-list menu-container">
        <li className="footer-item">
                <Link to="/FAQ" className="footer-link">
                  FAQ
                </Link>
              </li>
              <li className="footer-item">
                <Link to="/Returns" className="footer-link">
                Returns Policy
                </Link>
              </li>
              <li className="footer-item">
                <Link to="/Shiping" className="footer-link">
                Shiping Policy
                </Link>
              </li>
              </ul>
              </div>
              <div className='footer-right'>
        <h4>About Gonerland</h4>
        <ul className="footer-list">
          <li>
            <Link to="/about" className="footer-link">About</Link>
          </li>
          <li>
            <Link to="/bio" className="footer-link">Blog</Link>
          </li>
          <li>
            <Link to="/privacy" className="footer-link">Privacy Policy</Link>
          </li>
        </ul>
      </div>
             
      </div>
    </footer>
  );
}

export default Footer;
