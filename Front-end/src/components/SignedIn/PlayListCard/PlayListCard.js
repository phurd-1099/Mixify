import React from "react";
import "./PlayListCard.css";

function PlayListCard(props) {
  const goToPlaylist = () => {
    window.location.replace(`http://localhost:3000/home/playlist/${props.id}`);
  };
  return (
    <div className={`playlist-card ${props.card_style}`} onClick={goToPlaylist}>
      <img src={props.image} />
      <h1 id={props.id}>{props.playlist_name}</h1>
    </div>
  );
}

export default PlayListCard;
