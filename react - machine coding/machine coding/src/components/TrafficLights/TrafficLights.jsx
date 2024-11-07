/**
 * Problem: Complete the Traffic Light component that changes the light color every 1 second in the sequence:
 * Red -> Yellow -> Green -> Red, in an infinite loop.
 *
 * BONUS: Add a button to pause or resume the light-changing sequence.
 */

import React, { useState, useEffect } from 'react';
import './TrafficLights.css'; // Assume basic styles for traffic light in App.css

const TrafficLights = () => {
    const lights = ['red', 'yellow', 'green'];
    const [light, setLight] = useState('red');

    // Your code here
   

    return (
        <div className="traffic-light">
            <div className={`light ${lights === 'red' ? 'red' : ''}`}></div>
            <div className={`light ${lights === 'yellow' ? 'yellow' : ''}`}></div>
            <div className={`light ${lights === 'green' ? 'green' : ''}`}></div>
        </div>
    );
};

export default TrafficLights