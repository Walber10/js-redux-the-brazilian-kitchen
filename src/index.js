import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import recipesReducer from "./Features/Recipe";

const store = configureStore({
  reducer: {
    recipes: recipesReducer,
  },
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
)
