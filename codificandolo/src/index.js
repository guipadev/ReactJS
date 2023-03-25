import { BrowserRouter } from "react-router-dom";
import React from 'react';
import ReactDOM from 'react-dom';
import AppRoute from "./routes/AppRoute"

ReactDOM.render(
  <BrowserRouter>
    <AppRoute />
  </BrowserRouter>,
  document.getElementById('root')
);