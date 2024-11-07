// Problem Statement: Create an Accordion component in React
// The component should display a list of items with clickable headers
// Clicking a header should toggle the visibility of its corresponding content
// Only one item's content should be visible at a time

import React, { useState } from 'react'

const Accordion = () => {
    const [id, setId] = useState(null)
    const data = [
        ["a winter day", "winter winter wintery winter jadsf sadfdsjafjsadfjdsajfsdjf"],
        ["cherie", "cherie is a food damn it"],
        ["matt rife", "best crowd work comedian, also handsome, but gayish"],
        ["pay for the job", "i want a minimum 5.5LPA job"],
    ]

    return (
        <div>
            {data.map(([key, value], i) => (
                <>
                    <button style={{ color: 'black' }} onClick={() => setId(i)}>{key}</button>
                    {id === i && (<p>{value}</p>)}
                </>
            ))}
        </div>
    )
}

export default Accordion