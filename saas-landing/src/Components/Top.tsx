import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/top.css";

const Top: React.FC = () => {
  return (
    <div className="top-container">
      <nav className="navbar navbar-light navbar-expand-md navigation-clean">
        <div className="container">
          <a className="navbar-brand" href="/">
            <b>Biccas</b>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navcol-1"
            aria-controls="navcol-1"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navcol-1">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <a className="nav-link active" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/product">
                  Product
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/faq">
                  FAQ
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/blog">
                  Blog
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about">
                  About Us
                </a>
              </li>
            </ul>
            <div className="d-flex align-items-center gap-3">
              <a href="/login" className="login-link">
                Login
              </a>
              <button className="btn btn-primary btn-signup">Sign Up</button>
            </div>
          </div>
        </div>
      </nav>

      <div className="container mt-5">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h1 className="headline">
              <strong>We’re here to Increase your Productivity</strong>
            </h1>
            <h5 className="subtext mt-3">
              Let’s make your work more organized and easier using the Taskio Dashboard with many of the latest features in managing work every day.
            </h5>
            <div className="d-flex align-items-center gap-3 mt-4">
              <button className="btn btn-primary btn-trial">Try Free Trial</button>
              <div className="view-demo">
                <div className="circle">
                  <span className="arrow"></span>
                </div>
                <span className="demo-text">View Demo</span>
              </div>
            </div>
          </div>
          <div className="col-md-6 text-center">
            <img
              src="/assets/Images/Group 138.png"
              alt="Dashboard illustration"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Top;