import React, { useState } from "react";
import Login from "./components/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SayHello from "./components/SayHello";
import List from "./components/List";
import ModificationProfil from "./components/ModificationProfil";

function setToken(userToken) {
  localStorage.setItem("token", JSON.stringify(userToken));
}

function getToken() {
  const token = localStorage.getItem("token");

  return token;
}

function App() {
  const token = getToken();

  if (!token) {
    return <Login setToken={setToken} />;
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/sayhello" element={<SayHello />} />
          <Route path="/list" element={<List />} />
          <Route path="/modificationprofil" element={<ModificationProfil />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
