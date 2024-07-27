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
              <br />
              <div className="radio-container">
                <label>
                  Doctor:
                  <input type="radio" name="op1" />
                </label>
                <label>
                  Coordinator:
                  <input type="radio" name="op1" />
                </label>
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
              <h1> Log in</h1>
              <br />
              <div className="radio-container">
                <label>
                  Doctor:
                  <input type="radio" name="op" />
                </label>
                <label>
                  Coordinator:
                  <input type="radio" name="op" />
                </label>
              </div>
              <span>Login With Email & Password</span>
              <input type="email" placeholder="Enter E-mail" />
              <input type="password" placeholder="Enter Password" />
              <a href="#">Forget Password?</a>

              <Link className="cr" to="/">
                <button className="" type="submit">
                  Log in
                </button>
              </Link>
            </form>
          </div>

          <div className="toggle-container">
            <div className="toggle">
              <div className="toggle-panel toggle-left">
                <h1>
                  Welcome To Rohini
                  <br />
                </h1>
                <p> Log in With ID & Passowrd</p>
                <button className="hidden" id="login">
                  Log in
                </button>
              </div>
              <div className="toggle-panel toggle-right">
                <h1>Rohini</h1>
                <p>Don't have an account? Create an account</p>
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
