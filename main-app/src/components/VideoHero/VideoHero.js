import React, { useEffect, useState, setValue} from "react";
import { Link } from "react-router-dom";
import "./VideoHero.css";

import BackgroundVideo from "../../assets/Turntable - 8437.mp4";


function VideoHero(props){
  
  return (
    <div className="hero">
      <video autoPlay loop muted id="video">
        <source src={BackgroundVideo} type="video/mp4" />
      </video>

      <div className="content">
        <h1>Mixify</h1>
        <p>
          Make your own custom DJ-ed playlists directly from your existing
          Spotify™ playlists.
        </p>
        <div>
          <Link to="/signup" className="btn">
            SignUp
          </Link>
        </div>
      </div>
    </div>
  );
};

export default VideoHero;
