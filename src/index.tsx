

import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import "./App.scss";
import { store } from "./store/authentification/store";
import { Provider } from "react-redux";
import { Build } from "@mui/icons-material";

import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
  uri: "http://localhost:5000",
  cache: new InMemoryCache(),
});

const appElement = document.getElementById("app");

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <ApolloProvider client={client}>
      <App />
      </ApolloProvider>
    </Provider>
  </React.StrictMode>,

  appElement
);
