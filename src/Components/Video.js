import React from "react";
import ReactPlayer from "react-player/youtube";
import "./Video.css";
function Video(props) {
  return (
    <div className="onevideo">
      <ReactPlayer
        url={`https://www.youtube.com/watch?v=${props.match.params.id}`}
      />
    </div>
  );
}

export default Video;
