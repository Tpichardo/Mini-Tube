import React from 'react';
import Comment from './Comment';
import CommentForm from './CommentForm';
import { v4 as uuid } from 'uuid';

class Comments extends React.Component {
    state = {
        userName: '',
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
        const commentList = comments.map(comment => {
            return <Comment comment={comment} remove={this.remove} key={comment.key} />
        })
        return (
            <div>
                <CommentForm handleSubmit={this.handleSubmit} handleChange={this.handleChange} />
                <ul>
                    {commentList}
                </ul>
            </div>
        )
    }

}

export default Comments;