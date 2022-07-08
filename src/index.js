// import "./styles/main.scss";
// import chart from "./assets/chart.png";

// const laughImg = document.getElementById("laughImg");
// laughImg.src = chart;

import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import "./styles/App.scss";
import { store } from "./app/store";
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
