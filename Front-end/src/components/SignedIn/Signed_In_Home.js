import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Signed_In_Home.css";
import playlistHero from "./../../assets/playlisthero.jpg";
import sampleResponse from "./../../assets/Sample.json";
import PlayListCard from "./PlayListCard/PlayListCard";
import Toast from "../toast/Toast";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

function Signed_In_Home(props) {
  /*
    API call to get the username the token is stored in local storage under "Token"
    error is a use state that is triggered where there is a connection error to trigger a toast 
  */
  const [userID, setUserID] = useState("");
  const [error, setError] = useState("hidden");
  axios
    .get("https://api.spotify.com/v1/me", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("Token"),
      },
    })
    .then((response) => {
      console.log(response);
      console.log(response.data.id);
      setUserID(response.data.id);
      console.log(response.data.id);
    })
    .catch((err) => {
      console.log(err);
      setError("show");
    });

  /* 
    Carosel for playlist cards
  */
  const [indexes, setIndexes] = useState({
    previousIndex: 0,
    currentIndex: 1,
    nextIndex: 2,
  });
  //Slides ajust the indexes based on the click
  const slideLeft = () => {
    if (indexes.currentIndex > 0) {
      setIndexes({
        previousIndex: indexes.previousIndex - 1,
        currentIndex: indexes.currentIndex - 1,
        nextIndex: indexes.nextIndex - 1,
      });
      console.log(indexes);
    }
  };
  const slideRight = () => {
    if (indexes.currentIndex < sampleResponse.playlists.length - 1) {
      setIndexes({
        previousIndex: indexes.currentIndex,
        currentIndex: indexes.currentIndex + 1,
        nextIndex: indexes.nextIndex + 1,
      });
      console.log(indexes);
    }
  };

  //Update the class of a card based on it's position and the current indexes
  function determineClasses(indexes, cardIndex) {
    if (indexes.currentIndex === cardIndex) {
      return "activeCard";
    } else if (indexes.nextIndex === cardIndex) {
      return "nextCard";
    } else if (indexes.previousIndex === cardIndex) {
      return "prevCard";
    }
    return "inactive";
  }

  return (
    <div>
      <img className="hero" src={playlistHero} />
      <Toast
        buttonTitle="Click Here To Login"
        position="top-left"
        title="Error"
        description="login has expired please login again"
        show={error}
      />
      <div className="welcome">
        <h1>Mixify</h1>
        <h2>Welcome {userID}</h2>
      </div>
      <div className="playlists-container">
        <h1>Your Playlists</h1>
        <FaChevronLeft size={64} onClick={slideLeft} />
        <FaChevronRight size={64} onClick={slideRight} />
        {sampleResponse.playlists.map((playlist, index) => {
          return (
            <PlayListCard
              key={index}
              image={playlist.image}
              id={playlist.id}
              playlist_name={playlist.name}
              card_style={determineClasses(indexes, index)}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Signed_In_Home;
