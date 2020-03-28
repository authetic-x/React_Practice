import React from 'react'

function CommentInput(props){
    return (
        <div className="comment-input">
            <div className="comment-field">
                <span className="comment-field-name">用户名：</span>
                <div className="comment-field-input">
                    <input 
                        value={props.username}
                        onChange={props.handleUsernameChange}
                    />
                </div>
            </div>
            <div className="comment-field">
                <span className="comment-field-name">评论内容：</span>
                <div className="comment-field-input">
                    <textarea 
                        value={props.content}
                        onChange={props.handleContentChange}
                    />
                </div>
            </div>
            <div className="comment-field-button">
                <button onClick={props.handleSubmit}>发布</button>
            </div>
        </div>
    )
}

export default CommentInput