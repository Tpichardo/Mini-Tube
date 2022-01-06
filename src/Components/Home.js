import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import search from '../Assets/search.svg'
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
        `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=16&key=${API_KEY}&type=video&q=${search}`
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
        <Link className="video-link" to={`/videos/${video.id.videoId}`} key={video.id.videoId}>
          <li className="video-list-item">
            <img
              src={video.snippet.thumbnails.default.url}
              alt={video.snippet.description}
              className="thumbnail"
            />
            <h2 className="video-title">{video.snippet.title}</h2>
          </li>
        </Link>
      );
    });

    return (
      <div className='home'>
        <section className="search-form">
          <form onSubmit={this.handleSubmit}>
            <input
              onChange={this.handleChange}
              value={input}
              type="text"
              placeholder="search..."
              className="search"
            />
            <input type="image" src={search} alt="search icon" className="search-btn" />
          </form>
        </section>
        <section className="vid-container">
          {videoList.length === 0 && message}
          <ul className="video-list">
            {videoList}
          </ul>
        </section>
      </div>
    );
  }
}

export default Home;
