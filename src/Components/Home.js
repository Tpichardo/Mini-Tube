import { Component } from "react";

class Home extends Component {
  render() {
    return (
      <div>
        <form onSubmit>
          <input type="text" placeholder="search..." />
          <button>Search</button>
        </form>
        <section>
          <h1>videos</h1>
        </section>
      </div>
    );
  }
}

export default Home;
