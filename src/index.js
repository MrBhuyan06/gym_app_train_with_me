import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.js";
import Home from "./pages/Home.js";
import ExerciseDetails from "./pages/ExerciseDetails.js";

const appRoutes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/exercise/:id",
        element: <ExerciseDetails />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRoutes} />);
