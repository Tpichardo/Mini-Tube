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

    handleComment = (e) => {
        this.setState({
            comment: e.target.value
        })
    }

    handleUserName = (e) => {
        this.setState({
            userName: e.target.value
        })
    }


    handleSubmit = (e) => {
        e.preventDefault();
        const newComment = {
            id: uuid(),
            userName: this.state.userName,
            text: this.state.comment
        }
        this.setState({
            userName: '',
            comment: '',
            comments: [...this.state.comments, newComment]
        })
    }

    handleDelete = (id) => {
        this.setState({
            comments: this.state.comments.filter((newComment) => newComment.id !== id)
        })
    }


    render() {
        const { comments, userName, comment } = this.state
        const commentList = comments.map(comment => {
            return <Comment comment={comment} handleDelete={this.handleDelete} key={comment.key} />
        })
        return (
            <div>
                <CommentForm userName={userName} comment={comment} handleSubmit={this.handleSubmit} handleComment={this.handleComment} handleUserName={this.handleUserName} />
                <ul>
                    {commentList}
                </ul>
            </div>
        )
    }

}

export default Comments;