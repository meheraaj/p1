import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/about/About.jsx";
import HeroSection from "./components/hero/HeroSection.jsx";
import Pricing from "./components/pricing/Pricing.jsx";
import NotFound from "./components/notfound/NotFound.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HeroSection />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/price",
        element: <Pricing />,
      },
      {
        path: "/*",
        element: <NotFound />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
