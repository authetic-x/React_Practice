import React, {useState, useEffect} from 'react'
import Clock from './clock'

function Count() {
    let [count, setCount] = useState(0)

    useEffect(() => {
        document.title = `You clicked ${count} times`
    })

    let [showClock, setShowClock] = useState(true)

    return (
        <div>
            <p>You have clicked {count} times</p>
            <button onClick={() => setCount(count+1)}>Click me</button>

            <div>
                {showClock ? <Clock /> : null}
                <button 
                    onClick={() => setShowClock(!showClock)}>
                    {showClock ? "隐藏" : "显示"}
                </button>
            </div>
        </div>
    )
}

export default Count