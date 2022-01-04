import React from "react";
import "./Form.css";

class CommentForm extends React.Component {
  render() {
    const { handleChange, handleSubmit } = this.props
    return (
      <div>
        <h1>Comments:</h1>
        <form onSubmit={handleSubmit}>
          <input
            onChange={handleChange}
            placeholder="Name"
          />
          <textarea
            onChange={handleChange}
            placeholder="Add a comment"
          />
          <button>Submit</button>
        </form>
      </div>
    )
  }
}

export default CommentForm;
