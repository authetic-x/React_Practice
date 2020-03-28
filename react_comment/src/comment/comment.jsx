import React from 'react'

function Comment(props) {
    return (
        <div className="comment">
            <div className="comment-user">
                <span>{props.comment.username}</span>：
            </div>
            <p>{props.comment.content}</p>
        </div>
    )
}

export default Comment