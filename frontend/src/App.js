import React from "react";
import { PopupButton } from "react-calendly";
import './App.css';
import logo from "./images/Perdomo's Painting-A1.png";

function App() {
  return (
    <div className="App">
      {/* Header Section */}
      <header className="header">
        <div className="top-bar">
          <img src={logo} alt="Perdomo's Painting Logo" className="logo" />
        </div>
        <div className="hero">
        </div>
      </header>

      {/* About Us Section */}
      <section className="about-us">
        <h2>The Standard in Painting</h2>
        <p>
          With years of experience, Perdomo's Painting offers professional painting services with a commitment to excellence. Our skilled team ensures top-notch results on every project.
        </p>
        <PopupButton className="cta-button"
          url="https://calendly.com/perdomospainting/schedulecall"
          rootElement={document.getElementById("root")}
          text="Schedule a Call"
        />
      </section>

      {/* Services Section */}
      <section className="services">
        <h2>Our Services</h2>
        <div className="services-container">
          <div className="service">
            <h3>Interior Painting</h3>
            <p>Transform your home's interior with a fresh coat of paint.</p>
          </div>
          <div className="service">
            <h3>Exterior Painting</h3>
            <p>Enhance your home's exterior with durable, weather-resistant paints.</p>
          </div>
          {/* Add more services as needed */}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <h2>What Our Clients Say</h2>
        <div className="testimonial">
          <p>"Perdomo's Painting did an amazing job on our house! Highly recommend."</p>
          <h4>- Sarah, Homeowner</h4>
        </div>
        {/* Add more testimonials if needed */}
      </section>

      {/* Contact Section */}
      <section className="contact">
        <h2>Contact Us</h2>
        <p>
          Phone: (123) 456-7890 <br />
          Email: info@perdomospainting.com <br />
          Address: 123 Paint Street, Cityname, ST 12345
        </p>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2024 Perdomo's Painting. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;

      

