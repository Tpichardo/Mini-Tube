import React from "react";
import ReactPlayer from "react-player/youtube";
import { v4 as uuid } from 'uuid';
import Comment from './Comment';
import Form from './Form';
import "./Video.css";
class Video extends React.Component {
  state = {
    comment: '',
    comments: []
  }

  handleChange = (e) => {
    this.setState({
      comment: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const newComment = {
      id: uuid(),
      text: this.state.comment
    }
    this.setState({
      comments: [...this.state.comments, newComment]
    })
  }


  remove = (id) => {
    this.setState({
      comments: this.state.comments.filter((newComment) => newComment.id !== id)
    })
  }


  render() {
    const { comments } = this.state
    const listItem = comments.map(comment => {
      return <Comment comment={comment} remove={this.remove} key={comment.id} text={comment.text} />
    })
    const { id } = this.props.match.params
    return (
      <div>
        <div className="onevideo">
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${id}`}
          />
        </div>
        <Form handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
        <ul>
          {listItem}
        </ul>
      </div>


    );

  }
}

export default Video;
