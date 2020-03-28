import React, {useState} from 'react'
import CommentList from './CommentList'
import CommentInput from './CommentiInput'

function CommentApp() {
    let [username, setUsername] = useState('')
    let [content, setContent] = useState('')
    let [commentLists, setCommentLists] = useState([])

    function hanldeCommentSubmit() {
        if (!username || !content) {
            alert('输入框不能为空！')
            return
        }
        setCommentLists([...commentLists, {username, content}])
        setContent('')
    }

    function handleUsernameChange(e) {
        setUsername(e.target.value)
    }

    function handleContentChange(e) {
        setContent(e.target.value)
    }

    return (
        <div className="wrapper">
            <CommentInput 
                username={username}
                content={content}
                handleUsernameChange={handleUsernameChange}
                handleContentChange={handleContentChange}
                handleSubmit={hanldeCommentSubmit}
            />
            <CommentList 
                comments={commentLists}
            />
        </div>
    )
}

export default CommentApp