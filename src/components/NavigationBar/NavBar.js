import React from 'react';
import { NavLink } from "react-router-dom"; 

import './NavBar.css';

import logo from '../asset/Group 220.png';
import secondlogo from '../asset/Group 228.png';
import thirdlogo from '../asset/Group 195.png';
import fourthlogo from '../asset/Group 114.png';
import fifthlogo from '../asset/Group 207.png';
import sixthlogo from '../asset/Group 205.png';
import seventhlogo from '../asset/Group 39.png';
import eighthlogo from '../asset/Group 64.png';
import ninethlogo from '../asset/Group 55.png';
import tenthlogo from '../asset/Group 86.png';
import eleventhlogo from '../asset/woman.jpg';
import twelvethlogo from '../asset/Group 134.png';
import blog from '../asset/blog1.png';
import blog1 from '../asset/blog2.png';
import blog2 from '../asset/blog3.png';
import fourteenlogo from '../asset/Group 225.png';
import facebooklogo from '../asset/Group 99.png';
import linkedinlogo from '../asset/Group 100.png';
import instagramlogo from '../asset/Group 105.png';


const NavBar = () => {
    return (
        <>
          <header className="main-header">
              <nav>
                  <div className="logo">
                    <img src={logo} alt="logo"/>
                    <h1>Organic</h1>
                  </div>
                  <div className="menu-bar">
                     <ul>
                     <li>
                       <NavLink activeClassName="menu-active" exact to="/">Home</NavLink>
                     </li>
                        <li>Products</li>
                        <li>Blog</li>
                        <li>About Us</li>
                        <li className="contact">Contact</li>
                     </ul>
                  </div>
              </nav>
          </header>
          <section className="container">
              <div className="container-info">
                  <h6>Healthy life with</h6>
                  <h2>Nature Organic</h2>
                  <p>Vegetables are the edible parts of a plant<br/>that is used in cooking or can be eaten now.</p>
                  <button>Explore Now</button>
              </div>
              <div className="container-logo">
              <img className="second-img" src={secondlogo} alt="second-logo" />
              <img className="third-img" src={thirdlogo} alt="third-logo" />
              </div>
          </section>

          <section>
              <div className="fourth">
                  <img src={fourthlogo} alt="fourth-logo" />
                  <h1>Welcome to Nature</h1>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                  <p>incididunt ut labore et dolore magna aliqua.</p>
              </div>
              <div className="all-info">
                 <img src={fifthlogo} alt="fifth-logo" />
                 <img src={sixthlogo} alt="sixth-logo" />
                 <img src={fifthlogo} alt="fifth-logo" />
                 <img src={fifthlogo} alt="fifth-logo" />
              </div>
          </section>

            <section className="all-summary">
                <div className="fifth">
                    <h1>Proudly Presented by</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                  <p>incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div className="all-infos">
                    <img src={seventhlogo} alt="seventh-logo"/>
                    <img src={eighthlogo} alt="eighth-logo"/>
                    <img src={ninethlogo} alt="nineth-logo"/>
                    <img src={eighthlogo} alt="eighth-logo"/>
                    <img src={seventhlogo} alt="seventh-logo"/>
                </div>
                <div className="iframes-tags">
                <i class="fa fa-circle" aria-hidden="true"></i>
                <span className="circle-color"><i class="fa fa-circle" aria-hidden="true"></i></span>
                <i class="fa fa-circle" aria-hidden="true"></i>
                <i class="fa fa-circle" aria-hidden="true"></i>
                </div>
            </section>
           
           <div className="grid-container-box">
           <section>
           <img className="leaf-img" src={twelvethlogo} alt="tweleveth-logo" />
       </section>
        
        <section className="double-quotes">
            <img src={tenthlogo} alt="tenth-logo" />
            <img className="peson-image" src={eleventhlogo} alt="eleventh-logo" />
            <h1>Jane Doe</h1>
            <div className="stars-logo">
            <i class="fa fa-star" aria-hidden="true"></i>
            <i class="fa fa-star" aria-hidden="true"></i>
            <i class="fa fa-star" aria-hidden="true"></i>
            <i class="fa fa-star" aria-hidden="true"></i>
            <i class="fa fa-star" aria-hidden="true"></i>
            </div>
            <p>Thank You for all the amazing produce and products you deliver each week....</p>
            <p>You make my life so easy an bring goodness into our family eating.</p>
            <p>I've been roasting a lot of brussel sprouts and</p>
            <div className="iframes-tags">
            <span className="circle-color"><i class="fa fa-circle" aria-hidden="true"></i></span>
            <i class="fa fa-circle" aria-hidden="true"></i>
            <i class="fa fa-circle" aria-hidden="true"></i>
            <i class="fa fa-circle" aria-hidden="true"></i>
            </div>
            <section className="subscribe">
                <h1>Subscribe to Our Newsletter</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                  <p>incididunt ut labore et dolore magna aliqua.</p>
                  <div className="email-section">
                      <p>Enter your email address</p>
                      <button>Subscribe</button>
                  </div>
            </section>
        </section>
       </div>
           
        <section className="blog-section">
            <img src={fourthlogo} alt="fourth-logo" />
            <h1>Read Our Blog</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                  <p>incididunt ut labore et dolore magna aliqua.</p>
                  <div className="blog-info">
                  <div className="blog-para">
                  <img src={blog} alt="blog-logo" />
                  <h1>Blog Post One</h1>
                  <p>Lorem ipsum dolor sit amet,</p>
                  <p>consectetur adipiscing elit, sed</p>
                  <p>do eiusmod</p>
                  <h4>Read More</h4>
                  </div>
                  <div className="blog-para">
                  <img src={blog1} alt="blog-logo1" />
                  <h1>Blog Post One</h1>
                  <p>Lorem ipsum dolor sit amet,</p>
                  <p>consectetur adipiscing elit, sed</p>
                  <p>do eiusmod</p>
                  <h4>Read More</h4>
                  </div>
                  <div className="blog-para">
                  <img src={blog2} alt="blog-logo2" />
                  <h1>Blog Post One</h1>
                  <p>Lorem ipsum dolor sit amet,</p>
                  <p>consectetur adipiscing elit, sed</p>
                  <p>do eiusmod</p>
                  <h4>Read More</h4>
                  </div>
                  </div>
        </section>
        
        <footer>
            <div className="footer-info">
                <img src={fourteenlogo} alt="organic-logo" />
                <p>Lorem ipsum dolor sit amet,consectetur adipiscing</p>
                <p>elit, sed eiusmod tempor.</p>
                <hr className="line-width"/>
                <p className="copyright">&copy; Copyright 2020 Nature</p>
            </div>
            <div className="footer-description">
              <h6>Information</h6>
              <hr className="line-width"/>
              <p>About Us</p>
              <p>Products</p>
              <p>Contact Us</p>
              <p>Terms of Service</p>
            </div>
            <div className="about-us">
              <p>About Us</p>
              <p>Products</p>
            </div>
            <div className="follow-us">
              <h6>Follow Us</h6>
              <hr className="line-width"/>
              <div className="social-media-logo">
               <img src={facebooklogo} alt="facebook-logo" />
               <img src={linkedinlogo} alt="linked-logo" />
               <img src={instagramlogo} alt="instagram-logo"/>
               </div>
             </div>
        </footer>
  </>    
 );
};

export default NavBar;