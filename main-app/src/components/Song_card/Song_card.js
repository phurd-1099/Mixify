import { React, useState } from "react";
import Mix_slider from "../mix-slider/Mix_slider";
import "./Song_card.css";

function Song_card(props) {
  const title = props.song.Title;
  const start = props.song.Start;
  const end = props.song.End;
  const length = props.song.length;
  const position = props.position;
  const [newStart, SetNewStart] = useState(start);
  const [newEnd, SetNewEnd] = useState(end);

  return (
    <div className="song_card">
      <div className="uri">{props.song.uri}</div>
      <h2 className="position">{position}</h2>
      <h1 className="song_title">{title}</h1>
      <div className="range-slider">
        <Mix_slider
          min={0}
          max={length}
          start={start}
          end={end}
          onChange={({ min, max }) => {
            SetNewStart(min);
            SetNewEnd(max);
            console.log(`min = ${newStart}, max = ${newEnd}`);
          }}
          length={length}
        />
      </div>
    </div>
  );
}

export default Song_card;
