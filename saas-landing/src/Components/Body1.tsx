import React from "react";
import "../styles/body1.css";

const Body1: React.FC = () => {
  return (
    <div className="body1-container">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 col-12 body1-left">
            <h1>How we support our partner all over the world</h1>
            <p>
              SaaS become a common delivery model for many business applications, including
              office software, messaging software, payroll processing software, DBMS software,
              management software.
            </p>
            <div className="body1-ratings d-flex gap-3">
              <div className="rating">
                <span>⭐⭐⭐⭐⭐</span>
                <p>4.9 / 5 rating</p>
                <p>databricks</p>
              </div>
              <div className="rating">
                <span>⭐⭐⭐⭐</span>
                <p>4.8 / 5 rating</p>
                <p>Chainalysis</p>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-12 body1-right">
            <div className="body1-section d-flex">
              <div className="icon">
                <img src="/assets/icons/icon6.png" alt="Analytics Icon" />
              </div>
              <div className="text">
                <h3>Analytics</h3>
                <p>Analyze your performance and create gorgeous reports.</p>
              </div>
            </div>
            <div className="body1-section d-flex">
              <div className="icon">
                <img src="/assets/icons/icon7.png" alt="Analytics Icon" />
              </div>
              <div className="text">
                <h3>Analytics</h3>
                <p>Analyze your performance and create gorgeous reports.</p>
              </div>
            </div>
            <div className="body1-section d-flex">
              <div className="icon">
                <img src="/assets/icons/icon8.png" alt="Engagement Icon" />
              </div>
              <div className="text">
                <h3>Engagement</h3>
                <p>Quickly navigate and engage with your audience.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body1;