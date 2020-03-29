import React, {useRef, useEffect} from 'react'

function CommentInput(props){
    const inputEl = useRef(null)
    const textEl = useRef(null)

    useEffect(() => {
        textEl.current.focus()
    }, [])

    function _saveUsername(username) {
        localStorage.setItem('username', username)
    }

    function handleInputBlur(e) {
        _saveUsername(e.target.value)
    }

    return (
        <div className="comment-input">
            <div className="comment-field">
                <span className="comment-field-name">用户名：</span>
                <div className="comment-field-input">
                    <input 
                        value={props.username}
                        onChange={props.handleUsernameChange}
                        ref={inputEl}
                        onBlur={handleInputBlur}
                    />
                </div>
            </div>
            <div className="comment-field">
                <span className="comment-field-name">评论内容：</span>
                <div className="comment-field-input">
                    <textarea 
                        value={props.content}
                        onChange={props.handleContentChange}
                        ref={textEl}
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