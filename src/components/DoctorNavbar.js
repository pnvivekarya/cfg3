import React, { Component } from "react";
import { Link } from "react-router-dom";
export class DoctorNavbar extends Component {
  render() {
    return (
      <>
        <nav
          className="navbar navbar-expand-lg "
          style={{ backgroundColor: "rgb(136 184 255)" }}
        >
          <div className="container-fluid">
            <Link className="navbar-brand" to="/doctorpage">
              Rohini Foundation
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
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/doctor/uploaddata"
                  >
                    Uplaod Data
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/doctor/viewdata"
                  >
                    View Data
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/doctor/updates"
                  >
                    Updates
                  </Link>
                </li>
              </ul>
              <form className="d-flex" role="search">
                <span>Welcome Back </span>
                <Link className="cr" to="/doctor/uploaddata">
                  <button className="btn btn-outline-success">Logged IN</button>
                </Link>
              </form>
            </div>
          </div>
        </nav>
      </>
    );
  }
}

export default DoctorNavbar;
