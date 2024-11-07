// Problem Statement: Create an app that allows user to click a button 5 times, and times them out afterwards.
// Requirements:
// 1. Display a button and a counter
// 2. Allow the user to click the button up to 5 times
// 3. After 5 clicks, disable the button and show a timeout message
// 4. After a 3-second timeout, reset the counter and re-enable the button

import React, { useState } from 'react'

const Button5Times = () => {
    const [count, setCount] = useState(0)
    const [isDisabled, setIsDisabled] = useState(false)
    const handleCount = () => {
        if (count < 5) {
            setCount(prev => prev + 1)
        } else {
            setIsDisabled(true)
            alert('count cannot be more than 5')
            setTimeout(() => {
                setIsDisabled(false)
                setCount(0)
            }, 3000);
        }
    }

    return (
        <div>
            <h1>{count}</h1>
            <button disabled={isDisabled} onClick={handleCount}>press</button>
        </div>
    )
}

export default Button5Times