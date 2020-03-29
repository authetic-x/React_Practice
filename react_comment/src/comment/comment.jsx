import React, {useState, useEffect} from 'react'

function Comment(props) {
    let [timeString, setTimeString] = useState('')

    useEffect(() => {
        _updateTimeString()
        let timer = setInterval(() => {
            _updateTimeString()
        }, 5000)

        return () => clearInterval(timer)
    }, [])

    function _updateTimeString() {
        let duration = (+Date.now() - props.comment.createdTime) / 1000
        let str = duration > 60 ? `${Math.round(duration / 60)} 分钟前`
                                : `${Math.round(Math.max(duration, 1))} 秒前`
        setTimeString(str)
    }

    function handleDelete() {
        if (props.handleDeleteComment) {
            props.handleDeleteComment(props.id)
        }
    }

    function _getProcessedContent(content) {
        return content.replace(/`([\S\s)]+?)`/g, '<code>$1</code>')
    }

    return (
        <div className="comment">
            <div className="comment-user">
                <span>{props.comment.username}</span>：
            </div>
            <p dangerouslySetInnerHTML={{__html: _getProcessedContent(props.comment.content)}}></p>
            <span className="createdTime">{timeString}</span>
            <span onClick={handleDelete} className="delete">删除</span>
        </div>
    )
}

export default Comment