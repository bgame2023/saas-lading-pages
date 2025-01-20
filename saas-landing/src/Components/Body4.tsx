import React from 'react';
import '../styles/body4.css';

const Body4 = () => {
  return (
    <div className="pricing-container">
      <h2>Choose Plan</h2>
      <h2>That’s Right For You</h2>
      <p>Choose a plan that works best for you, feel free to contact us</p>
      <div className="billing-toggle">
        <button className="billing-option active">Bill Monthly</button>
        <button className="billing-option">Bill Yearly</button>
      </div>
      <div className="plans">
        {/* Free Plan */}
        <div className="plan-card">
          <h3>Free</h3>
          <p>Have a go and test your superpowers</p>
          <h1>$0</h1>
          <ul>
            <li>✅ 2 Users</li>
            <li>✅ 2 Files</li>
            <li>✅ Public Share & Comments</li>
            <li>✅ Chat Support</li>
            <li>✅ New income apps</li>
            <button className="plan-button ">Signup for free</button>
          </ul>
         
        </div>

        {/* Pro Plan */}
        <div className="plan-card card-center highlighted">
          <h3>Pro</h3>
          <p>Experiment the power of infinite possibilities</p>
          <button className="plan-button-center">Save $50 a year</button>
          <ul>
            <li>✅ 4 Users</li>
            <li>✅ All apps</li>
            <li>✅ Unlimited editable exports</li>
            <li>✅ Folders and collaboration</li>
            <li>✅ All incoming apps</li>
            <button className="plan-button-center-bot">Go to pro</button>
          </ul>
         
        </div>

        {/* Business Plan */}
        <div className="plan-card">
          <h3>Business</h3>
          <p>Unveil new superpowers and join the Design League</p>
          <h1>$16</h1>
          <ul>
            <li>✅ All the features of pro plan</li>
            <li>✅ Account success Manager</li>
            <li>✅ Single Sign-On (SSO)</li>
            <li>✅ Co-conception program</li>
            <li>✅ Collaboration - Soon</li>
            <button className="plan-button">Goto Business</button>
          </ul>
          
        </div>
      </div>
    </div>
  );
};

export default Body4;
