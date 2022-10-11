import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar/NavBar";
import VideoHero from "../components/VideoHero/VideoHero";
import Info from "../components/info/Info";

function Home(props) {
  return (
    <div>
      <NavBar
        updateToken={(newToken) => props.updateToken(newToken)}
        currentToken={props.currentToken}
      />
      <VideoHero />
      <Info currentToken={props.currentToken} />
    </div>
  );
}

export default Home;
