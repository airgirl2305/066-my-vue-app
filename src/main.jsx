// import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { getUser, getUsers } from "./state.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  // маршруты начинаются с vite - возвращается на него при перезагрузке
  <BrowserRouter basename="vite">
    {/*<BrowserRouter>*/}
    {/* двойная прогрузка */}
    {/* <React.StrictMode> */}
    <App users={{ key_getUser: getUser, key_getUsers: getUsers }} />
    {/* </React.StrictMode> */}
  </BrowserRouter>
);
