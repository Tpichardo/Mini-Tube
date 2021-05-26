import React from "react";
import ReactPlayer from "react-player/youtube";
import "./Video.css";
function Video(props) {
  const { id } = props.match.params
  return (
    <div className="onevideo">
      <ReactPlayer
        url={`https://www.youtube.com/watch?v=${id}`}
      />
    </div>
  );
}

export default Video;
