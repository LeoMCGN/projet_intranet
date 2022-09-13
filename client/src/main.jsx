import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import SayHello from "./components/SayHello";
import List from "./components/List";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/sayhello" element={<SayHello />} />
      <Route path="/list" element={<List />} />
      <Route path="/main" element={<App />} />
    </Routes>
  </BrowserRouter>
);
