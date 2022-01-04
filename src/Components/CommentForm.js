import React from "react";
import "./Form.css";

class CommentForm extends React.Component {
  render() {
    const { handleuserNameChange, handleCommentChange, handleSubmit } = this.props
    return (
      <div>
        <h1>Comments:</h1>
        <form onSubmit={handleSubmit}>
          <input
            onChange={handleuserNameChange}
            placeholder="Name"
          />
          <textarea
            onChange={handleCommentChange}
            placeholder="Add a comment"
          />
          <button>Submit</button>
        </form>
      </div>
    )
  }
}

export default CommentForm;
