import React from "react";
import { PopupButton } from "react-calendly";
import './App.css';
import logo from "./images/Perdomo's Painting-A1.png";

function App() {
  return (
    <div className="App">
      {/* Header Section */}
      <header className="header">
        <img src={logo} alt="Perdomo's Painting Logo" className="logo" />
        <h1>Perdomo's Painting</h1>
        <p>Professional Painting Services for Your Home and Business</p>
      </header>

      {/* About Us Section */}
      <section className="about-us">
        <h2>About Us</h2>
        <p>
          At Perdomo's Painting, we specialize in delivering top-quality
          painting services. With over 10 years of experience, our skilled
          painters provide reliable and efficient service to meet your unique
          needs. We pride ourselves on transforming homes and businesses with a
          fresh coat of paint.
        </p>
      </section>

      {/* Services Section */}
      <section className="services">
        <h2>Our Services</h2>
        <ul>
          <li>Interior Painting</li>
          <li>Exterior Painting</li>
          <li>Commercial Painting</li>
          <li>Wallpaper Removal</li>
          <li>Deck and Fence Staining</li>
        </ul>
      </section>

      {/* Contact Section */}
      <section className="contact">
        <h2>Contact Us</h2>
        <p>
          Phone: (123) 456-7890 <br />
          Email: info@perdomospainting.com <br />
          Address: 123 Paint Street, Cityname, ST 12345
        </p>
        <PopupButton
          url="https://calendly.com/perdomospainting/schedulecall"
          rootElement={document.getElementById("root")}
          text="Click here to schedule!"
        />
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2024 BrightCoat Painting. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;

      

