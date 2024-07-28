import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa"; // Import Instagram icon from react-icons

export class Navbar extends Component {
  render() {
    return (
      <>
        <nav
          className="navbar navbar-expand-lg"
          style={{ backgroundColor: "rgb(136 184 255)" }}
        >
          <div className="container-fluid">
            <Link className="navbar-brand d-flex align-items-center" to="/">
              <strong>Rohini Foundation </strong> {/* Make Rohini bold */}
            </Link>
            <a
              href="https://www.instagram.com/rohinihealthfoundation/"
              target="_blank"
              rel="noopener noreferrer"
              className="ms-2" // Add some margin space to the right of "Rohini"
            >
              <FaInstagram size={20} /> {/* Instagram icon */}
            </a>
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
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">
                    Home
                  </Link>
                </li>
              </ul>
              <form className="d-flex" role="search">
                <Link className="cr" to="/link">
                  <button className="btn btn-outline-success" type="submit">
                    Sign In
                  </button>
                </Link>
              </form>
            </div>
          </div>
        </nav>
      </>
    );
  }
}

export default Navbar;
