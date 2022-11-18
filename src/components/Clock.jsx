import React, { useEffect, useRef, useState } from 'react'

const Clock = () => {
    const [time, setTime] = useState(new Date())

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date())
        }, 1000)

        return () => clearInterval(interval)
    }, [])


    return (
        <div className="clock">
            <div className="hand   hour" data-hour-hand
                style={{ "--rotation": `${time.getHours() * 30}` }}
            ></div>
            <div className="hand   minute" data-minute-hand
                style={{ "--rotation": `${time.getMinutes() * 6}` }}
            ></div>
            <div className="hand   second" data-second-hand
                style={{ "--rotation": `${time.getSeconds() * 6}` }}
            ></div>
            <div className="number number1">1</div>
            <div className="number number2">2</div>
            <div className="number number3">3</div>
            <div className="number number4">4</div>
            <div className="number number5">5</div>
            <div className="number number6">6</div>
            <div className="number number7">7</div>
            <div className="number number8">8</div>
            <div className="number number9">9</div>
            <div className="number number10">10</div>
            <div className="number number11">11</div>
            <div className="number number12">12</div>
        </div>

    );
}

export default Clock