import React, { useState } from "react";
import axios from "axios";
import "./Signed_In_Home.css";
import playlistHero from "./../../assets/playlisthero.jpg";
import sampleResponse from "./../../assets/Sample.json";
import PlayListCard from "./PlayListCard/PlayListCard";

function Signed_In_Home(props) {
  /*
    API call to get the username the token and refresh need to be changed to be stored
    in session memory or redux because they get lost on a refresh
  */
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
  /*
    create an array of cards that is then filled with all of the playlist info from
    the back end call
  */
  const cards = [];
  sampleResponse.playlists.map((playlist, index) => {
    let position =
      index === 0
        ? "prevCard"
        : index === 1
        ? "activeCard"
        : index === 2
        ? "nextCard"
        : "out_of_view";
    const list = {
      image: playlist.image,
      id: playlist.id,
      playlist_name: playlist.name,
      card_style: position,
    };
    cards.push(list);
  });

  /* 
    test for carousel
  */

  return (
    <div>
      <img className="hero" src={playlistHero} />
      <div className="welcome">
        <h1>Mixify</h1>
        <h2>Welcome {userID}</h2>
      </div>
      <div className="playlists-container">
        <h1>Your Playlists</h1>
        {cards.map((card) => {
          return (
            <PlayListCard
              image={card.image}
              id={card.id}
              playlist_name={card.playlist_name}
              card_style={card.card_style}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Signed_In_Home;
