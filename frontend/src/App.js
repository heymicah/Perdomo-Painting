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
        <h2>Perdomo's Painting</h2>
        <p>
          Serving our community since 2017. Our team is dedicated to transforming your home while providing exceptional customer service. Let us bring your vision to life.
        </p>
        <PopupButton className="cta-button"
          url="https://calendly.com/perdomospainting/schedulecall"
          rootElement={document.getElementById("root")}
          text="Schedule a Call"
        />
      </section>

      {/* Pillars of Success */}
      <section className="services">
        <h2>Perdomo's Painting Pillars of Success</h2>
        <div className="services-container">
          <div className="service">
            <h3>Quality Work and Products</h3>
            <p>We promise to deliver top-notch work and only use the best products, ensuring your home looks stunning for years to come.</p>
          </div>
          <div className="service">
            <h3 styles='text-align'>Exceptional Customer Service</h3>
            <p>We prioritize your satisfaction by providing quick response times and open communication throughout the duration of the project.</p>
          </div>
          <div className="service">
            <h3 styles='text-align'>Timely Completion</h3>
            <p>We commit to completing the project on time with the least amount of disruption to your daily life.</p>
          </div>
          <div className="service">
            <h3 styles='text-align'>Transparent Pricing</h3>
            <p>What you see is what you pay. Upfront pricing and no hidden or surprise fees. We value your trust and will strive to keep it.</p>
          </div>
        </div>
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

      

