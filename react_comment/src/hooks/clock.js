import React, {useState, useEffect} from 'react'

function Clock() {
    let [date, setDate] = useState(new Date())

    useEffect(() => {
        let timer = setInterval(() => {
            setDate(new Date())
        }, 1000)

        return () => clearInterval(timer)
    }, [])

    return (
        <div style={{width: 500, margin: "0 auto", border: "1px solid #f1f1f1", padding: "10px 20px"}}>
            <p>现在的时间是：</p>
            <h2>{date.toLocaleTimeString()}</h2>
        </div>
    )
}

export default Clock