import "./App.css";

import React, { Component } from "react";
import Navbar from "./components/Navbar";

import Login from "./components/Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { DoctorNavbar } from "./components/DoctorNavbar";
import Option from "./components/Option";
import Chatbot from "./components/Chatbot";
import Viewdata from "./components/Viewdata";
import QRCodeComponent from "./components/QRCodeComponent";
import styled from "styled-components";

import Comp1 from "./components/Comp1";
import Comp2 from "./components/Comp2";
import Comp3 from "./components/Comp3";
import Imagerow from "./components/Imagerow";
import PatientDetails from "./components/PatientDetails";

export default class App extends Component {
  render() {
    const AppContainer = styled.div`
      font-family: Arial, sans-serif;
    `;
    // const AppContainer = styled.div`
    //   font-family: Arial, sans-serif;
    // `;

    // const MainContent = styled.div`
    //   display: flex;
    //   flex-direction: column;
    //   align-items: center;
    // `;

    // const BottomSection = styled.div`
    //   display: flex;
    //   width: 100%;
    // `;
    // const comp2Ref = Component(null);

    // const scrollToComp2 = () => {
    //   comp2Ref.current.scrollIntoView({ behavior: "smooth" });
    // };
    const router = createBrowserRouter([
      {
        path: "/",
        element: (
          <>
            <Navbar />
            <div class="row">
              <div class="homebg" style={{ height: "700px" }}>
                <div
                  class="box-inner"
                  style={{
                    padding: "50px",
                    paddingTop: "200px",
                    fontSize: "20px",
                    color: "white",
                  }}
                >
                  <h1 style={{ fontStyle: "Times New Roman" }}>
                    ROHINI <br /> FOUNDATION
                  </h1>
                  <br />
                  <p>
                    Mission zero cavity "Dentistry is <br /> not expensive,
                    neglect is"
                  </p>
                </div>
              </div>
            </div>
            <br />
            <br />

            <div className="d-flex">
              <div className="p-2 w-40">
                <AppContainer>
                  <QRCodeComponent />
                </AppContainer>
              </div>
              <div className="p-2 w-60">
                <Imagerow
                  text1="Monthly Increase in Healthy lives"
                  text2="Montly decrease in number of dental deseases"
                />
              </div>
            </div>
          </>
        ),
      },
      {
        path: "/link",
        element: (
          <>
            <Login />
            <div className="my-10">
              <Option />
            </div>
          </>
        ),
      },

      {
        path: "/PatientDetails",
        element: (
          <>
            <Login />
            <div className="my-10">
              <PatientDetails />
            </div>
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
