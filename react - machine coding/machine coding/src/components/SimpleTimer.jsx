
import { useState, useEffect, useRef } from 'react';

export default function SimpleTimer() {
    const [timer, setTimer] = useState(0)
    const timeInterval = useRef(null);

    const handlePlay = () => {
        if (timeInterval.current === null) {
            timeInterval.current = setInterval(() => {
                setTimer(prev => prev + 1)
            }, 1000)
        }
    }

    const handlePause = () => {
        clearInterval(timeInterval.current)
        timeInterval.current = null
    }

    const handleReset = () => {
        setTimer(0)
        clearInterval(timeInterval.current)
        timeInterval.current = null
    }

    return (
        <>
            {timer}
            <button onClick={handlePlay}>Play</button>
            <button onClick={handlePause}>Pause</button>
            <button onClick={handleReset}>Reset</button>
        </>
    )
}






