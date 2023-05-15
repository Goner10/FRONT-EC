import React from 'react';
import './Footer.jsx'
import './Footer.scss'
import { InstagramOutlined, FacebookOutlined, TwitterOutlined } from '@ant-design/icons';

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
    </footer>
  );
}

export default Footer;
