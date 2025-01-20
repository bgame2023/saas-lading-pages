import React from "react";
import "../styles/body2.css";

const Body2: React.FC = () => {
  return (
    <div className="bdoy2-container py-5">
      <div className="container">
        <div className="row text-center mb-4">
          <div className="col-12">
            <div className="bdoy2-header">
              <div className="header-item">
                <h1>Our Features you can get</h1>
              </div>
              <div className="header-item">
                <p><strong>We offer a variety of interesting features that can help increase your productivity at work and manage your project easily.</strong></p>
              </div>
              <div className="header-item">
                <button className="get-started-btn">Get Started</button>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-6 col-12 mb-4">
            <div className="card text-center">
              <img src="/assets/imageCards/imgCard1.png" alt="Collaboration Teams" />
              <h2>Collaboration Teams</h2>
              <p><strong>Here you can handle projects together with team virtually.</strong></p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12 mb-4">
            <div className="card text-center">
              <img src="/assets/imageCards/imgCard2.png" alt="Cloud Storage" />
              <h2>Cloud Storage</h2>
              <p><strong>No need to worry about storage because we provide storage up to 2 TB.</strong></p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12 mb-4">
            <div className="card text-center">
              <img src="/assets/imageCards/imgCard3.png" alt="Daily Analytics" />
              <h2>Daily Analytics</h2>
              <p><strong>We always provide useful information to make it easier for you every day.</strong></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body2;
