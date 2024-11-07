// Problem Statement:
// Create a toast message using Javascript/React that disappears automatically after 5 seconds.
// The toast should be triggered by a button click and display a success message.

import React, { useState } from 'react'

const CustomToast = () => {
    const [isVisible, setIsVisible] = useState(false)
    const [direction, setDirection] = useState('top')

    const handleClick = () => {
        setIsVisible(true)
        setTimeout(() => {
            setIsVisible(false)
        }, 5000);
    }

    const toastPosition = {
        top: { top: '50px', left: '50%', transform: 'translateX(-50%)' },
        left: { top: '50%', left: '50px', transform: 'translateY(-50%)' },
        right: { top: '50%', right: '50px', transform: 'translateY(-50%)' },
        bottom: { bottom: '50px', left: '50%', transform: 'translateX(-50%)' },
    }
    return (
        <div>
            {isVisible && (
                <div style={{
                    padding: '10px 16px',
                    margin: '1rem',
                    border: '1px solid black',
                    width: 'fit-content',
                    backgroundColor: 'yellow',
                    color: 'red',
                    position: 'fixed',
                    ...toastPosition[direction]
                }}>
                    Toast is visible successfully
                </div>
            )}

            <button onClick={handleClick}>Click to see the toast</button>
            <select onChange={(e) => setDirection(e.target.value)} name="options" id="">
                <option value="top">top</option>
                <option value="left">left</option>
                <option value="right">right</option>
                <option value="bottom">bottom</option>
            </select>
        </div>
    )
}

export default CustomToast
