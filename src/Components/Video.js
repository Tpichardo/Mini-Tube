import React from "react";
import ReactPlayer from "react-player/youtube";

function Video(props) {
  return (
    <div>
      <ReactPlayer
        url={`https://www.youtube.com/watch?v=${props.match.params.id}`}
      />
    </div>
  );
}

export default Video;
