import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AuthProvider from "./components/authProvider";
import ProtectedRoute from "./components/protectedRoute";
import { Login } from "./features/auth/pages/login";
import { HomePage } from "./features/home/pages/home";
import { Register } from "./features/auth/pages/register";
import { BasePage } from "./components/ui/base-page";
import { ErrorPage } from "./components/ui/error-page";
import Logout from "./features/auth/pages/logout";
import { FaqPage } from "./features/support/pages/faq-page";
import { EditProfilePage } from "./features/profile/pages/edit-profile-page";
import QuickNotes from "./features/calendar/components/quick-note";
import NotificationsTable from "./features/notifications/components/notifications";
import AcademicEvents from "./features/activities/components/academicEvents";

const router = createBrowserRouter([
  {
    element: <BasePage />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/logout",
        element: <Logout />,
      },

      {
        path: "/home",
        element: (
          <ProtectedRoute allowedRoles={["viewer"]}>
            <HomePage />,
          </ProtectedRoute>
        ),
      },
      {
        path: "/support",
        element: (
          <ProtectedRoute allowedRoles={["viewer"]}>
            <FaqPage />,
          </ProtectedRoute>
        ),
      },
    ],
  },
  {
    path: "/profile",
    element: (
      <ProtectedRoute allowedRoles={["viewer"]}>
        <EditProfilePage />,
      </ProtectedRoute>
    ),
  },
  {
    path: "/notes",
    element: (
      <ProtectedRoute allowedRoles={["viewer"]}>
        <QuickNotes />,
      </ProtectedRoute>
    ),
  },
  {
    path: "/notifications",
    element: (
      <ProtectedRoute allowedRoles={["viewer"]}>
        <NotificationsTable />,
      </ProtectedRoute>
    ),
  },
  {
    path: "/activities",
    element: (
      <ProtectedRoute allowedRoles={["viewer"]}>
        <AcademicEvents />
      </ProtectedRoute>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
