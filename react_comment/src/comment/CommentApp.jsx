import React, {Fragment} from 'react'
import CommentList from './CommentList'
import CommentInput from './CommentiInput'

function CommentApp() {
    return (
        <div className="wrapper">
            <CommentInput />
            <CommentList />
        </div>
    )
}

export default CommentApp