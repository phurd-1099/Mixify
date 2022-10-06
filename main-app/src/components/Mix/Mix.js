import React from "react";
import Toast from "./../toast/Toast";
import "./Mix.css";
import Song_card from "../Song_card/Song_card";

import playlist_data from "./../../assets/Playlist-Sample.json";
import background from "./../../assets/playlist.jpg";

function Mix() {
  /*
    Send A JSON request to the backend to get the current state of the playlist 
    **DEV note - Sync The playlist state from Spotify to the DB before responding 
    --TESTING use Playlist-Sample.json
  */
  //Store all of the song objects
  const songs = playlist_data.Songs;
  const title = playlist_data.playlist_name;

  //Function to *currently log all of the song_cards slider values
  //This will eventualy be sent to the backend to update the database
  const log_songs = () => {
    const cards = document.getElementsByClassName("song_card");
    console.log(cards.length);
    for (let pos = 0; pos < cards.length; pos++) {
      const sliders = cards[pos].getElementsByClassName("range-slider");
      const inputs = sliders[0].getElementsByTagName("input");
      const position =
        cards[pos].getElementsByClassName("position")[0].innerHTML;
      const song_name =
        cards[pos].getElementsByClassName("song_title")[0].innerHTML;
      const start = inputs[0].value;
      const end = inputs[1].value;
      const length = inputs[1].max;
      const uri = cards[pos].getElementsByClassName("uri")[0].innerHTML;
      console.log(
        `SongName: ${song_name} position: ${position} start:${start} end: ${end} lenght:${length} uri: ${uri}`
      );
    }
  };

  return (
    <div>
      <div className="title-card">
        <h1>{title}</h1>
      </div>
      <div className="background">
        <img src={background} />
      </div>
      <div className="songs">
        {songs.map((song, index) => {
          return (
            <Song_card
              className="song_card"
              id={index}
              song={song}
              position={index}
            />
          );
        })}
      </div>
      <h3 className="save" onClick={log_songs}>
        Save
      </h3>
    </div>
  );
}

export default Mix;
