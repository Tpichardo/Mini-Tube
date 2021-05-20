import React from "react";
import ReactPlayer from "react-player/youtube";

function Video(props) {
  console.log(props.match.params.id);
  return (
    <div>
      <ReactPlayer
        url={`https://www.youtube.com/watch?v=${props.match.params.id}`}
      />
    </div>
  );
}

export default Video;
