import React from 'react'
import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom'
import Count from './hooks/count'
import CommentApp from './comment/CommentApp'

function App() {
    return (
        <Router>
            <Route exact path='/'>
                <CommentApp />
            </Route>
            <Route path='/count'>
                <Count />
            </Route>
        </Router>
    )
}

export default App