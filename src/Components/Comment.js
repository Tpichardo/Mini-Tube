import React from 'react';

class Comment extends React.Component {
    render() {
        const { comment, remove } = this.props
        return (
            <div>
                {comment.text}
                <button onClick={() => remove(comment.id)}>Delete</button>
            </div>
        )
    }
}

export default Comment;