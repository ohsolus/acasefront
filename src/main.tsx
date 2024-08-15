import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";
import { BasePage } from "./components/ui/base-page";
import { ErrorPage } from "./components/ui/error-page";
import { Toaster } from "./components/ui/toaster";

const router = createBrowserRouter([
  {
    element: <BasePage />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        async lazy() {
          const { Landing } = await import(
            "./features/landing/pages/landing-page"
          );

          return { Component: Landing };
        },
      },
      {
        path: "/login",
        async lazy() {
          const { Login } = await import("./features/auth/pages/login");

          return { Component: Login };
        },
      },
      {
        path: "/register",
        async lazy() {
          const { Register } = await import("./features/auth/pages/register");

          return { Component: Register };
        },
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />

    <Toaster />
  </React.StrictMode>
);
