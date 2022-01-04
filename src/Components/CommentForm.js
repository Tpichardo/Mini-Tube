import React from "react";
import "./Form.css";

class CommentForm extends React.Component {
  render() {
    const { handleUserName, handleComment, handleSubmit, userName, comment } = this.props
    console.log(handleUserName)
    return (
      <div>
        <h1>Comments:</h1>
        <form onSubmit={handleSubmit}>
          <input
            value={userName}
            onChange={handleUserName}
            placeholder="Name"
          />
          <textarea
            value={comment}
            onChange={handleComment}
            placeholder="Add a comment"
          />
          <button type='submit'>Submit</button>
        </form>
      </div>
    )
  }
}

export default CommentForm;
