import React, { useState } from "react";
import axios from "axios";
import "./Signed_In_Home.css";
import playlistImage from "./../../assets/sample-playlist.jpeg";
import playlistHero from "./../../assets/playlisthero.jpg";

function Signed_In_Home(props) {
  const [userID, setUserID] = useState("");
  axios
    .get("https://api.spotify.com/v1/me", {
      headers: {
        Authorization: "Bearer " + props.currentToken,
      },
    })
    .then((response) => {
      console.log(response);
      console.log(response.data.id);
      setUserID(response.data.id);
      console.log(response.data.id);
    });

  return (
    <div>
      <img className="hero" src={playlistHero} />
      <div className="welcome">
        <h1>Mixify</h1>
        <h2>Welcome {userID}</h2>
      </div>
      <div className="playlists-container">
        <h1>Your Playlists</h1>
        <div className="playlist-row">
          <div className="playlist-card">
            <img className="playlist-img" src={playlistImage} />
            <h1> Title</h1>
          </div>
          <div className="playlist-card">
            <img className="playlist-img" src={playlistImage} />
            <h1> Title</h1>
          </div>
          <div className="playlist-card">
            <img className="playlist-img" src={playlistImage} />
            <h1> Title</h1>
          </div>
          <div className="playlist-card">
            <img className="playlist-img" src={playlistImage} />
            <h1> Title</h1>
          </div>
        </div>
        <div className="playlist-row">
          <div className="playlist-card">
            <img className="playlist-img" src={playlistImage} />
            <h1> Title</h1>
          </div>
          <div className="playlist-card">
            <img className="playlist-img" src={playlistImage} />
            <h1> Title</h1>
          </div>
          <div className="playlist-card">
            <img className="playlist-img" src={playlistImage} />
            <h1> Title</h1>
          </div>
          <div className="playlist-card">
            <img className="playlist-img" src={playlistImage} />
            <h1> Title</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signed_In_Home;
