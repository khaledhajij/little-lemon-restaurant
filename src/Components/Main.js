import React from "react";
import { useState } from "react";
import { RouterProvider } from "react-router";
import { createBrowserRouter } from "react-router-dom";
import BookingPage from "./BookingPage";
import HomePage from "./HomePage";

const Main = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/book-a-table",
      element: (
        <BookingPage
        />
      ),
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Main;
