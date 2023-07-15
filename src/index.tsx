import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import Router from "./routes";
import { store } from "./store";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./styles/globals.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.Fragment>
    <Provider store={store}>
      <BrowserRouter>
      <ToastContainer
        autoClose={3000}
        theme="colored"
        draggablePercent={60}
        closeOnClick
      />
        <Router />
      </BrowserRouter>
    </Provider>
  </React.Fragment>
);
