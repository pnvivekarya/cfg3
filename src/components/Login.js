import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Login extends Component {
  componentDidMount() {
    const container = document.getElementById("container1");
    const registerBtn = document.getElementById("register");
    const loginBtn = document.getElementById("login");

    registerBtn.addEventListener("click", () => {
      container.classList.add("active");
    });

    loginBtn.addEventListener("click", () => {
      container.classList.remove("active");
    });
  }
  render() {
    return (
      <div className="divid">
        <div className="container1 " id="container1">
          <div className="form-container sign-up">
            <form>
              <h1>Create Account</h1>
              <div className="social-icons">
                <a href="#" className="icons">
                  <i className="bx bxl-google"></i>
                </a>
                <a href="#" className="icons">
                  <i className="bx bxl-facebook"></i>
                </a>
                <a href="#" className="icons">
                  <i className="bx bxl-github"></i>
                </a>
                <a href="#" className="icons">
                  <i className="bx bxl-linkedin"></i>
                </a>
              </div>
              <span>Register with E-mail</span>
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Enter E-mail" />
              <input type="password" placeholder="Enter Password" />
              <button>Sign Up</button>
            </form>
          </div>

          <div className="form-container sign-in">
            <form>
              <h1>Sign In</h1>
              <div className="social-icons">
                <a href="#" className="icons">
                  <i className="bx bxl-google"></i>
                </a>
                <a href="#" className="icons">
                  <i className="bx bxl-facebook"></i>
                </a>
                <a href="#" className="icons">
                  <i className="bx bxl-github"></i>
                </a>
                <a href="#" className="icons">
                  <i className="bx bxl-linkedin"></i>
                </a>
              </div>
              <span>Login With Email & Password</span>
              <input type="email" placeholder="Enter E-mail" />
              <input type="password" placeholder="Enter Password" />
              <a href="#">Forget Password?</a>

              <Link className="cr" to="/">
                <button className="" type="submit">
                  Sign In
                </button>
              </Link>
            </form>
          </div>

          <div className="toggle-container">
            <div className="toggle">
              <div className="toggle-panel toggle-left">
                <h1>
                  Welcome To <br />
                  News Monkey
                </h1>
                <p>Sign in With ID & Passowrd</p>
                <button className="hidden" id="login">
                  Sign In
                </button>
              </div>
              <div className="toggle-panel toggle-right">
                <h1>NewsMonkey</h1>
                <p>Join us to stay updated with all the news</p>
                <button className="hidden" id="register">
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
