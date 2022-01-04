import React from "react";

class Comment extends React.Component {
  render() {
    const { comment, remove } = this.props;
    return (
      <li className="comment">
        {comment.userName}
        {comment.text}
        <button onClick={() => remove(comment.id)}>Delete</button>
      </li>
    );
  }
}

export default Comment;
