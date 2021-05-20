import { Component } from "react";
import axios from "axios";
import Video from "./Video";
import { Link } from "react-router-dom";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
      searchResults: "",
      videos: [],
    };
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const API_KEY = process.env.REACT_APP_API_KEY;
    const search = this.state.input;

    try {
      const { data } = await axios.get(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=6&key=${API_KEY}&type=video&q=${search}`
      );
      console.log(data);
      this.setState({
        videos: data.items,
        input: "",
      });
    } catch {
      console.log("error");
    }
  };

  handleChange = (e) => {
    this.setState({ input: e.target.value });
  };

  render() {
    const { input, searchResults, videos } = this.state;
    const videoList = videos.map((video) => {
      return (
        <Link to={`/videos/${video.id.videoId}`}>
          <li key={video.id.videoId}>
            <img
              src={video.snippet.thumbnails.default.url}
              style={{ height: "100px", width: "150px" }}
              alt={video.snippet.title}
            />
            <h3>{video.snippet.title}</h3>
          </li>
        </Link>
      );
    });

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleChange}
            value={input}
            type="text"
            placeholder="search..."
          />
          <button>Search</button>
        </form>
        <section>
          <ul>{videoList}</ul>
        </section>
      </div>
    );
  }
}

export default Home;
