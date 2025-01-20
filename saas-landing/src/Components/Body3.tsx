import React from 'react';
import '../styles/body3.css';

const Body3 = () => {
  return (
    <div className="container py-5 body3-container">
      <div className="row align-items-center">
        {/* Content Section */}
        <div className="col-lg-6 col-md-12 body3-content">
          <h2>What Benefit Will You Get</h2>
          <ul className="benefit-list">
            <li>
              <img src="/assets/icons/icon9.png" alt="check" className="icon" />
              Free Consulting With Expert Saving Money
            </li>
            <li>
              <img src="/assets/icons/icon9.png" alt="check" className="icon" />
              Online Banking
            </li>
            <li>
              <img src="/assets/icons/icon9.png" alt="check" className="icon" />
              Investment Report Every Month
            </li>
            <li>
              <img src="/assets/icons/icon9.png" alt="check" className="icon" />
              Saving Money For The Future
            </li>
            <li>
              <img src="/assets/icons/icon9.png" alt="check" className="icon" />
              Online Transaction
            </li>
          </ul>
        </div>
        {/* Image Section */}
        <div className="col-lg-6 col-md-12 body3-image">
          <img
            src="/assets/Images/What Benifit Will You Get.png"
            alt="Benefits"
            className="img-fluid"
          />
        </div>
      </div>
    </div>
  );
};

export default Body3;
