import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import pfp from "./assets/pgfp1.png";
import ig from "./assets/Ig.png";
import fb from "./assets/Fb.png";
import lin from "./assets/Lin.png";
import twt from "./assets/Twt.png";
import uiux from "./assets/uiux.png";
import webd from "./assets/webd.png";
import appd from "./assets/appd.png";
import project1 from "./assets/project1.png"
import project2 from "./assets/project2.png"
import project3 from "./assets/project3.png"
import './App.css';

function App() {

  return (
    <div className="homepage">
      {/* Navbar */}
      <header className='header position-relative d-flex justify-content-center'>
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
              <form className="d-flex">
              <a href="https://www.example.com" target="_blank" rel="noopener noreferrer" className="btn">
                Download CV
              </a>
              </form>
            </div>
          </div>
        </nav>
      </header>

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
          <div className="img col rounded-circle image-fluid mx-5">
            <img src={pfp} alt="" srcset="" className="pfp mx-5 p-1" />
              <div className="sosmed mx-auto ">
                <img src={ig} alt="" srcset="" />
                <img src={fb} alt="" srcset="" />
                <img src={lin} alt="" srcset="" />
                <img src={twt} alt="" srcset="" />
              </div>
          </div>
        </div>
      </div>

      {/* Services */}
      <div className="container-fluid" style={{backgroundColor: "#fff6e7"}}>
        <div className="services" >
          <div className="text">
            <h1 className="d-flex justify-content-xl-center py-4 pt-5 fw-bolder" >Services</h1>
            <p className="px-5 mx-5 py-2 text-center fw-medium">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat eius ipsam adipisci eos aspernatur blanditiis sint, repellendus similique ad qui! Aperiam temporibus eligendi enim repellat vitae distinctio qui ut tempora.</p>
          </div>

          <div class="container py-5">
            <div class="row">
              <div class="col-lg-3 col-md-6 mb-4">
                <div class="card p-3 border-0 shadow-sm">
                  <div class="icon mb-3">
                    <img src={uiux} alt="UI/UX" class="img-fluid" style={{width: "93%"}} />
                  </div>              
                </div>
              </div>
              <div class="col-lg-3 col-md-6 mb-4">
                <div class="card p-3 border-0 shadow-sm">
                  <div class="icon mb-3">
                    <img src={webd} alt="Web Design" class="img-fluid" />
                  </div>
                  <h5 class="fw-bold">Web Design</h5>
                  <p>Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum.</p>
                </div>
              </div>
              <div class="col-lg-3 col-md-6 mb-4">
                <div class="card p-3 border-0 shadow-sm">
                  <div class="icon mb-3">
                    <img src={appd} alt="App Design" class="img-fluid" />
                  </div>
                  <h5 class="fw-bold">App Design</h5>
                  <p>Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum.</p>
                </div>
              </div>
              <div class="col-lg-3 col-md-6 mb-4">
                <div class="card p-3 border-0 shadow-sm">
                  <div class="icon mb-3">
                    <img src={webd} alt="Graphic Design" class="img-fluid" />
                  </div>
                  <h5 class="fw-bold">Graphic Design</h5>
                  <p>Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    {/* My Projects */}
    <div className="myprojects">
      <div className="text">
        <h1 className="d-flex justify-content-xl-center py-4 pt-5 fw-bolder" >My Projects</h1>
        <p className="px-5 mx-5 py-2 text-center fw-medium">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat eius ipsam adipisci eos aspernatur blanditiis sint, repellendus similique ad qui! Aperiam temporibus eligendi enim repellat vitae distinctio qui ut tempora.</p>
      </div>

      <div className="container">
        <div className="row gx-2 gy-2">
          <div className="col-6 col-md-2">
            <button className="btn w-100 btn-secondary" style={{backgroundColor: "#d3d3d3", color: "black"}}>All</button>
          </div>
          <div className="col-6 col-md-2">
            <button className="btn w-100 btn-secondary" style={{backgroundColor: "#f17b1a"}}>UI/UX</button>
          </div>
          <div className="col-6 col-md-2">
            <button className="btn w-100 btn-secondary " style={{backgroundColor: "#d3d3d3", color: "black"}}>Web Design</button>
          </div>
          <div className="col-6 col-md-2">
            <button className="btn w-100 btn-secondary" style={{backgroundColor: "#d3d3d3", color: "black"}}> App Design</button>
          </div>
          <div className="col-6 col-md-2">
            <button className="btn w-100 btn-secondary" style={{backgroundColor: "#d3d3d3", color: "black"}}>Graphic Design</button>
          </div>
        </div>
      </div>


      <div className="container py-5">
        <div className="projects row gx-3 gy-2">
          <div className="col-4 col-lg-4 justify-content-center">
            <img src={project1} alt="" style={{width: "100%"}} />
            <p style={{color: "#0A3981", fontWeight:"bold"}}>Web Design</p>
            <h5 className="fw-bolder">AirCalling Landing Page Design</h5>
            <button className="btn" id="detail">Details</button>
          </div>
          <div className="col-4 col-lg-4 justify-content-center">
            <img src={project2} alt="" style={{width: "100%"}} />
            <p style={{color: "#0A3981", fontWeight: "bold"}}>Web Design</p>
            <h5 className="fw-bolder">Business Landing Page Design</h5>
            <button className="btn" id="detail">Details</button>
          </div>
          <div className="col-4 col-lg-4 justify-content-center">
            <img src={project3} alt="" style={{width: "100%"}} />
            <p style={{color: "#0A3981", fontWeight:"bold"}}>Web Design</p>
            <h5 className="fw-bolder">Ecom Web Page Design</h5>
            <button className="btn" id="detail">Details</button>
          </div>
        </div>
      </div>
    </div>



    {/* Email input */}
    <div className="container-fluid" style={{backgroundColor: "#fff6e7"}}>
      <div className="emailInp">
        <div>
          <h1 className="text-center fw-bolder pt-3">Get in Touch</h1>
          <p className="container d-flex text-center pt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea architecto iste autem delectus veniam reprehenderit minima labore itaque, velit dignissimos omnis ipsum nostrum corrupti rem!</p>
          <div className="container justify-content-center d-flex pb-5">
            <input type="email" placeholder="Enter your email address" id="email" />
            <button className="btn">Submit</button>  
          </div>
        </div>
      </div>
    </div>



    {/* Footer */}
    <div className="container-fluid" style={{backgroundColor: "#f8f9fa"}}>
      <div className="footer">
        <div className="brand">
          <h2 className="text-center fw-bolder pt-5" style={{fontFamily: "Neue Regrade"}}>SKYFAL</h2>
        </div>
        <div className="foot-item row justify-content-center align-items-center py-4" id="foot-items">
          <a href="/home" className=" col-2 col-sm-1 justify-content-center">Home</a>
          <a href="/aboutme" className="col-2 col-sm-1 justify-content-center">About me</a>
          <a href="/services" className="col-2 col-sm-1 justify-content-center">Services</a>
          <a href="/projects" className="col-2 col-sm-1 justify-content-center">Projects</a>
          <a href="/testimonials" className="col-2 col-sm-1 justify-content-center">Testimonials</a>
          <a href="/contact" className="col-2 col-sm-1 justify-content-center">Contact</a>
        </div>

        <div className="socials">
          <div className="row justify-content-center py-4">
            <div className="d-flex justify-content-center gap-3">
              <a href="/ig">
                <img
                  src={ig}
                  alt="Clickable Image"
                  style={{ width: '30px' }}
                />
              </a>
              <a href="/fb">
                <img
                  src={fb}
                  alt="Clickable Image"
                  style={{ width: '30px' }}
                />
              </a>
              <a href="/lin">
                <img
                  src={lin}
                  alt="Clickable Image"
                  style={{ width: '30px' }}
                />
              </a>
              <a href="/twt">
                <img
                  src={twt}
                  alt="Clickable Image"
                  style={{ width: '30px' }}
                />
              </a>
            </div>
          </div>
        </div>
        
      </div>
    </div>
    
    <div className="copyright" style={{backgroundColor: "rgb(38, 38, 38)", color:"#fefefe"}}>
      <div className="container">
        <div className="row justify-content-center py-4">
          <div className="col-12 col-sm-3 ms-5">
            <p>&copy; <span style={{color: "#0f6bf6", fontFamily: "Neue Regrade", fontWeight: "bold"}}>SKYFAL</span> 2024. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>

    </div>
  )
}

export default App
