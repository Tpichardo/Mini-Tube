import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Home.css";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
      videos: [],
      message: 'no videos'
    };
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const API_KEY = process.env.REACT_APP_API_KEY;
    const search = this.state.input;

    try {
      const { data } = await axios.get(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=12&key=${API_KEY}&type=video&q=${search}`
      );

      this.setState({
        videos: data.items,
        input: "",
      });
    } catch (e) {
      console.log(e);
      this.setState({
        message: 'no videos'
      })
    }
  };

  handleChange = (e) => {
    this.setState({ input: e.target.value });
  };

  render() {
    const { input, videos, message } = this.state;
    const videoList = videos.map((video) => {
      return (
        <Link to={`/videos/${video.id.videoId}`} key={video.id.videoId}>
          <li className="list-item">
            <img
              src={video.snippet.thumbnails.default.url}
              style={{ height: "100px", width: "150px" }}
              alt={video.snippet.description}
            />
            <h3>{video.snippet.title}</h3>
          </li>
        </Link>
      );
    });

    return (
      <div>
        <form className="search" onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleChange}
            value={input}
            type="text"
            placeholder="search..."
            className="search"
          />
          <button className="search btn">Search</button>
        </form>
        <section className="vidContainer">
          {videoList.length === 0 && message}
          <ul className="thumbnails">{videoList}</ul>
        </section>
      </div>
    );
  }
}

export default Home;
