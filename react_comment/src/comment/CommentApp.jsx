import React, {useState, useEffect} from 'react'
import CommentList from './CommentList'
import CommentInput from './CommentiInput'

function CommentApp() {
    let [username, setUsername] = useState('')
    let [content, setContent] = useState('')
    let [commentLists, setCommentLists] = useState([])

    function _loadUsername() {
        const username = localStorage.getItem('username')
        if (username) {
            setUsername(username)
        }
    }

    useEffect(() => {
        _loadUsername()
        _loadComments()
    }, [])

    function _loadComments() {
        let comments = localStorage.getItem('comments')
        comments = JSON.parse(comments)
        if (comments) {
            setCommentLists(comments)
        }
    }

    function _saveComments(comments) {
        if (comments.length === 0) {
            localStorage.setItem('comments', null)
            return
        }
        localStorage.setItem('comments', JSON.stringify(comments))
    }

    function hanldeCommentSubmit() {
        if (!username || !content) {
            alert('输入框不能为空！')
            return
        }
        let comment = {
            username,
            content,
            createdTime: +new Date()
        }
        let comments = [...commentLists, comment]
        _saveComments(comments)
        setCommentLists(comments)
        setContent('')
    }

    function handleDeleteComment(id) {
        let newComments = commentLists.filter((_, idx) => idx !== id)
        console.log(newComments)
        setCommentLists(newComments)
        _saveComments(newComments)
    }

    function handleUsernameChange(e) {
        setUsername(e.target.value)
    }

    function handleContentChange(e) {
        setContent(e.target.value)
    }

    function handleDeleteAll() {
        setCommentLists([])
        _saveComments([])
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
            <div className="delete-all">
                <span onClick={handleDeleteAll}>删除全部</span>
            </div>
            <CommentList 
                comments={commentLists}
                handleDeleteComment={handleDeleteComment}
            />
        </div>
    )
}

export default CommentApp