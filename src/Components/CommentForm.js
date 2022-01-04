import React from "react";
import "./Form.css";

class CommentForm extends React.Component {
  render() {
    const { handleUserName, handleComment, handleSubmit } = this.props
    return (
      <div>
        <h1>Comments:</h1>
        <form onSubmit={handleSubmit}>
          <input
            onChange={handleUserName}
            placeholder="Name"
          />
          <textarea
            onChange={handleComment}
            placeholder="Add a comment"
          />
          <button>Submit</button>
        </form>
      </div>
    )
  }
}

export default CommentForm;
