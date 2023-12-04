import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'


import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Reports from './pages/Reports/';
import Users from './pages/Users/';
import Tasks from './pages/Tasks/';
import App from './App';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Dashboard />
      },
      {
        path: "/reports",
        element: <Reports />
      },
      {
        path: "/users",
        element: <Users />
      },
      {
        path: "/tasks",
        element: <Tasks />
      },
    ]
  },

]);



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
