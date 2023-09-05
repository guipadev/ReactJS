import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import AppRouter from "./router/AppRouter";
import "./index.css";
import Layout from "./components/layouts/Layout";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Layout>
      <RouterProvider router={AppRouter} />
    </Layout>
  </React.StrictMode>
);
