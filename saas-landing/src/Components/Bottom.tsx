import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap styles
import '../styles/bottom.css';

const Bottom = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row footer-container">
          <div className="col-md-6 footer-brand">
            <h3>Biccas</h3>
            <p>Get started now try our product</p>
            <div className="footer-input">
              <input type="email" placeholder="Enter your email here" />
              <button>&rarr;</button>
            </div>
          </div>
          <div className="col-md-6 footer-links">
            <div className="row">
              <div className="col-md-4 footer-column">
                <h4>Support</h4>
                <ul>
                  <li>Help centre</li>
                  <li>Account information</li>
                  <li>About</li>
                  <li>Contact us</li>
                </ul>
              </div>
              <div className="col-md-4 footer-column">
                <h4>Help and Solution</h4>
                <ul>
                  <li>Talk to support</li>
                  <li>Support docs</li>
                  <li>System status</li>
                  <li>Covid response</li>
                </ul>
              </div>
              <div className="col-md-4 footer-column">
                <h4>Product</h4>
                <ul>
                  <li>Update</li>
                  <li>Security</li>
                  <li>Beta test</li>
                  <li>Pricing product</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2022 Biccas Inc. Copyright and rights reserved</p>
          <div className="footer-terms">
            <span>Terms and Conditions</span>
            <span>Privacy Policy</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Bottom;
