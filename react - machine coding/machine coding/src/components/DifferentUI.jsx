// Problem Statement:
// Create a React component with an input field that changes its border style based on user interactions:
// - When focused: green border
// - When typing (onChange): red border
// - When blurred: yellow border
// The border should be 10px solid for all states.

import React, { useState } from 'react'

const DifferentUI = () => {
    // TODO: Implement state for input value
    
    // TODO: Implement state for custom styles

    return (
        <div>
            <input 
                type="text" 
                placeholder='click, type, leave to see magic....'
                // TODO: Implement value prop
                // TODO: Implement onFocus handler
                // TODO: Implement onBlur handler
                // TODO: Implement onChange handler
                // TODO: Implement dynamic style based on user interaction
            />
        </div>
    )
}

export default DifferentUI
