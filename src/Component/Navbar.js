import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";
import {BrowserRouter} from 'react-router-dom'

function Navbar() {
  const navigate = useNavigate();

  function handleHomeNavigation()
  {
    navigate('/')
  }
  function handleTicketNavigation()
  {
    navigate('/BookTickets')
  }
  function handleTouristNavigation()
  {
    navigate('/Tourist')
  }
  function handleStayNavigation()
  {
      navigate('/Stay')
  }
  return (
    <>
      {/* <BrowserRouter> */}
          <div className="container-fluid nav_bg">
            <div className="row">
              <div className="col-10 mx-auto">
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                  <div className="container-fluid logo_text_Adjuster">
                    <Link className="navbar-brand" to="/">
                      <img
                        src="http://www.soutickets.in/assets/images/sou2.png"
                        alt=""
                        width="20%"
                        id="MyLogo"
                      />
                    </Link>
                    <button
                      className="navbar-toggler"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#navbarSupportedContent"
                      aria-controls="navbarSupportedContent"
                      aria-expanded="false"
                      aria-label="Toggle navigation"
                    >
                      <span className="navbar-toggler-icon"></span>
                    </button>
                    <div
                      className="collapse navbar-collapse"
                      id="navbarSupportedContent"
                    >
                      <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                          <Link
                            className="nav-Link active"
                            aria-current="page"
                            to="/"
                          >
                            <p onClick={handleHomeNavigation}>
                              <i class="fa-solid fa-house Animate"></i> Home
                            </p>
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-Link" to="/BookTickets">
                            <p onClick={handleTicketNavigation}>
                              <i class="fa-solid fa-ticket Animate"></i>{" "}
                              BookTickets
                            </p>
                          </Link>
                        </li>

                        <li className="nav-item">
                          <Link
                            className="nav-Link disabled"
                            to="/Tourist"
                          >
                            <p onClick={handleTouristNavigation}>
                              <i class="fa-solid fa-mountain-sun Animate"></i>{" "}
                              Tourist Attractions
                            </p>
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-Link disabled" to="/Stay">
                            <p onClick={handleStayNavigation}>
                              <i class="fa-solid fa-hotel Animate"></i> Stay and
                              Accomodations
                            </p>
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-Link disabled" to="tel:">
                            <button type="button" class="btn btn-outline-info">
                              <h7>Contact</h7>
                            </button>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </nav>
              </div>
            </div>
          </div>
    </>
  );
}

export default Navbar;
