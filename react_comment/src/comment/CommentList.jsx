import React from 'react'
import Comment from './Comment'

function CommentList(props){
    function handleDeleteComment(id) {
        if (props.handleDeleteComment) {
            props.handleDeleteComment(id)
        }
    }

    return (
        <div className="comment-list">
            {
                props.comments.map((item, idx) => {
                    return (
                        <Comment 
                            key={idx}
                            comment={item}
                            id={idx}
                            handleDeleteComment={handleDeleteComment}
                        />
                    )
                })
            }
        </div>
    )
}

export default CommentList