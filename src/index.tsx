

import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import "./App.scss";
import { store } from "./store/authentification/store";
import { Provider } from "react-redux";
import { Build } from "@mui/icons-material";

const appElement = document.getElementById("app");

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,

  appElement
);
