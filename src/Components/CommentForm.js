import React from "react";
import "./CommentForm.css";

class CommentForm extends React.Component {
  render() {
    const { handleUserName, handleComment, handleSubmit, userName, comment } = this.props
    return (
      <div>
        <h1>Comments:</h1>
        <form onSubmit={handleSubmit}>
          <input
            value={userName}
            onChange={handleUserName}
            placeholder="Name"
            className="formName"
          />
          <textarea
            value={comment}
            onChange={handleComment}
            placeholder="Add a comment..."
          />
          <button className='form-btn' type='submit'>COMMENT</button>
        </form>
      </div>
    )
  }
}

export default CommentForm;
