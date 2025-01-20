import React from "react";
import '../styles/body5.css';
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const Body5 = () => {
  return (
    <div className="body5-container">
      <Container>
        <Row>
          <Col md={6} className="testimonial-section">
            <h2>People are Saying About DoWhith</h2>
            <p>
              Everything you need to accept payment and grow your money or
              manage anywhere on the planet
            </p>
            <img src="/assets/icons/Group 212.png" alt="Analytics Icon" />
         
              <p>
                "I am very helped by this E-wallet application, my days are very
                easy to use this application and it’s very helpful in my life,
                even I can pay a short time! 😍"
              </p>
              <footer>— Aria Zinanrio</footer>
          
            <div className="testimonial-images">
              <img src="/assets/avatars/Ellipse 54.png" alt="User 1" className="testimonial-avatar" />
              <img src="/assets/avatars/Ellipse 55.png" alt="User 2" className="testimonial-avatar" />
              <img src="/assets/avatars/Ellipse 56.png" alt="User 3" className="testimonial-avatar" />
              <img src="/assets/avatars/Ellipse 57.png" alt="User 4" className="testimonial-avatar" />
              <img src="/assets/avatars/Group 215.png" alt="User 4" className="testimonial-avatar" />

            </div>
          </Col>
          <Col md={6} className="form-section">
            <div className="form-wrapper">
                <img src="/assets/icons/Group.png" alt="Collaboration Teams" />
                <h2>Get Started</h2>
                <Form>
                <Form.Group controlId="formEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter your email" />
                </Form.Group>
                <Form.Group controlId="formMessage">
                    <Form.Label>Message</Form.Label>
                    <Form.Control as="textarea" rows={3} placeholder="What are you say?" />
                </Form.Group>
                <Button variant="success" type="submit" className="request-demo-button">
                    Request Demo
                </Button>
                </Form>
                <p className="free-trial-link">
                  or <button className="link-button">Start Free Trial</button>
                </p>           
            </div>
          </Col>

        </Row>
      </Container>
    </div>
  );
};

export default Body5;
