import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
setTimeout(() => {
  window.scrollTo(0, 1);
}, 100);
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
