import React from 'react'
import Comment from './Comment'

function CommentList(props){
    return (
        <div className="comment-list">
            {
                props.comments.map((item, idx) => {
                    return (
                        <Comment 
                            key={idx}
                            comment={item}
                        />
                    )
                })
            }
        </div>
    )
}

export default CommentList