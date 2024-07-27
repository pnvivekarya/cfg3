import "./App.css";

import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import Login from "./components/Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { DoctorNavbar } from "./components/DoctorNavbar";
import Option from "./components/Option";
import Chatbot from "./components/Chatbot";
import Viewdata from "./components/Viewdata";

export default class App extends Component {
  render() {
    const router = createBrowserRouter([
      {
        path: "/",
        element: (
          <>
            <Navbar />
            <News />
          </>
        ),
      },
      {
        path: "/link",
        element: (
          <>
            <Login />
          </>
        ),
      },
      {
        path: "/doctor/uploaddata",
        element: (
          <>
            <DoctorNavbar />
            <div className="my-10">
              <Option />
            </div>
          </>
        ),
      },
      {
        path: "/doctor/uploaddata/chatbot",
        element: (
          <>
            <div className="my-10">
              <Chatbot />
            </div>
          </>
        ),
      },
      {
        path: "/doctor/updates",
        element: (
          <>
            <DoctorNavbar />
            <div className="my-10"></div>
          </>
        ),
      },
      {
        path: "/doctor/viewdata",
        element: (
          <>
            <DoctorNavbar />
            <div className="my-10">
              <Viewdata />
            </div>
          </>
        ),
      },
    ]);
    return (
      <>
        <RouterProvider router={router} />
      </>
    );
  }
}
