import React from "react";
import './Comment.css'

class Comment extends React.Component {
  render() {
    const { comment, handleDelete } = this.props;
    return (
      <li className="comment">
        {comment.userName}: {comment.text}
        <button onClick={() => handleDelete(comment.id)}>Delete</button>
      </li>
    );
  }
}

export default Comment;
