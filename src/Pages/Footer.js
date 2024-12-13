import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footerStyle">
      <div className="containerStyle">
        {/* About Section */}
        <div className="sectionStyle">
          <h3>About</h3>
          <ul className="listStyle">
            <li>About Bizview</li>
            <li>Careers</li>
            <li>Press</li>
            <li>Investor Relations</li>
            <li>Trust & Safety</li>
            <li>Contents Guidelines</li>
            <li>Accessibility Statement</li>
            <li>Terms of Services</li>
            <li>Privacy Policy</li>
            <li>Ad Choices</li>
            <li>Your Privacy Choices</li>
          </ul>
        </div>

        {/* Discover Section */}
        <div className="sectionStyle">
          <h3>Discover</h3>
          <ul className="listStyle">
            <li>Bizview Project Cost Guides</li>
            <li>Collections</li>
            <li>Events</li>
            <li>Support</li>
            <li>Developers</li>
          </ul>
        </div>

        {/* Bizview for Business Section */}
        <div className="sectionStyle">
          <h3>Bizview for Business</h3>
          <ul className="listStyle">
            <li>Bizview for Business</li>
            <li>Advertise on Bizview</li>
            <li>Bizview for restaurant owners</li>
            <li>Business Success Stories</li>
            <li>Business Support</li>
          </ul>
        </div>

        {/* Languages and Social Media Section */}
        <div className="sectionStyle" id='shift'>
          <h3>Languages</h3>
          <ul className="listStyle">
          <select className="dropdownStyle">
            <option value="English">English</option>
            <option value="Spanish">Spanish</option>
            <option value="French">French</option>
          </select>
            <h3 style={{color:'black'}}>Cities</h3>
            <select className="dropdownStyle">
            <option value="New York">New York</option>
            <option value="London">London</option>
            <option value="Tokyo">Tokyo</option>
            <option value="Paris">Paris</option>
          </select>
            <h3 style={{color:'black'}}>FOLLOW US</h3>
            <li>
              <FontAwesomeIcon icon={faFacebook} size="2x"  style={{color:'#74C0FC', marginRight:'5px'}}/> 
              <FontAwesomeIcon icon={faLinkedin}  size="2x" color='#74C0FC'/>
            </li>
            <li><FontAwesomeIcon icon={faTwitter}  size="2x" color='black'/></li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <p>© 2024 Company Name. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
