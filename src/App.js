import "./App.css";

import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import Login from "./components/Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

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
        path: "/science",
        element: (
          <>
            <Navbar />
            <News category="science" />
          </>
        ),
      },
      {
        path: "/sports",
        element: (
          <>
            <Navbar />
            <News category="sports" />
          </>
        ),
      },
      {
        path: "/technology",
        element: (
          <>
            <Navbar />
            <News category="technology" />
          </>
        ),
      },
      {
        path: "/health",
        element: (
          <>
            <Navbar />
            <News category="health" />
          </>
        ),
      },
      {
        path: "/general",
        element: (
          <>
            <Navbar />
            <News category="general" />
          </>
        ),
      },
      {
        path: "/entertainment",
        element: (
          <>
            <Navbar />
            <News category="entertainment" />
          </>
        ),
      },
      {
        path: "/business",
        element: (
          <>
            <Navbar />
            <News category="business" />
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
