import React from "react";
import YouTube from 'react-youtube'
import Comments from "./Comments";
// import "./Video.css";

class Video extends React.Component {
  render() {
    const { id } = this.props.match.params;
    return (
      <div>
        <div className="selected-vid">
          <YouTube videoId={`${id}`} />
        </div>
        <section>
          <Comments />
        </section>
      </div>
    );
  }
}

export default Video;
