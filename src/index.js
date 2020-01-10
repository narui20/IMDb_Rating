import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./styles.css";

function Main() {
  return (
    <div>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Main />, rootElement);
