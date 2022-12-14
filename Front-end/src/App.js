import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./routes/Home";
import Login from "./routes/Login/Login";
import SignedIn from "./routes/SignedIn";
import Playlist from "./routes/Playlist";

function App() {
  const [token, setToken] = useState("");
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              updateToken={(newToken) => setToken(newToken)}
              currentToken={token}
            />
          }
        />
        <Route
          path="/login"
          element={
            <Login
              updateToken={(newToken) => setToken(newToken)}
              currentToken={token}
            />
          }
        />
        <Route path="/home" element={<SignedIn currentToken={token} />} />
        <Route path="/home/playlist/:id" element={<Playlist />} />
      </Routes>
    </>
  );
}

export default App;
