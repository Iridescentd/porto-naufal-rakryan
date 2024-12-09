import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import pfp from "./assets/pgfp1.png";
import ig from "./assets/Ig.png";
import fb from "./assets/Fb.png";
import lin from "./assets/Lin.png";
import twt from "./assets/Twt.png";
import './App.css';

function App() {

  return (
    <div className="homepage">
      {/* Navbar */}
      <div className='header position-relative d-flex justify-content-center'>
        <nav class="navbar navbar-expand-lg bg-body-tertiary ">
          <div className="container-fluid">
            <div className="logo h4 fw-bold">SKYFAL</div>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" href="/Home">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="/Aboutme">About me</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href='/Services'>Services</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href='/Projects'>Projects</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href='/Testimonials'>Testimonials</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href='/Contact'>Contact</a>
                </li>
              </ul>
              <form className="d-flex" role="search">
                <button className="btn" type="submit">Download CV</button>
              </form>
            </div>
          </div>
        </nav>
      </div>

      {/* Hero*/}
      <div className="hero container justify-content-center">
        <div className="row">
          <div className="text col">
            <h5>Hi I am</h5>
            <h4>Muhammad Naufal Pratama</h4>
            <p className="web fs-1 fw-bold">Website <br />Developer</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis natus quia ea at quae quisquam impedit odio quas dolor molestias explicabo corrupti ex maiores nisi illum repellat laborum, repellendus perferendis.</p>
            <button className="btn">Hire me</button>
          </div>
          <div className="img col">
            <img src={pfp} alt="" srcset="" />
              <div className="sosmed">
                <img src={ig} alt="" srcset="" />
                <img src={fb} alt="" srcset="" />
                <img src={lin} alt="" srcset="" />
                <img src={twt} alt="" srcset="" />
              </div>
          </div>
        </div>
      </div>

      
    </div>
  )
}

export default App
