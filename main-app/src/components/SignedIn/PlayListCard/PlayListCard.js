import React from "react";
import "./PlayListCard.css";

function PlayListCard(props) {
  return (
    <div className={`playlist-card ${props.card_style}`}>
      <img src={props.image} />
      <h1 id={props.id}>{props.playlist_name}</h1>
    </div>
  );
}

export default PlayListCard;
