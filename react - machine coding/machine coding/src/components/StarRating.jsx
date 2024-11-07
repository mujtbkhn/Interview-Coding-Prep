// Problem: Implement a star rating component in React
// Requirements:
// 1. Display 5 stars
// 2. Allow user to hover over stars to see potential rating
// 3. Allow user to click on stars to set the rating
// 4. Display the current rating
// 5. Use the provided STAR image for each star

import React, { useState } from 'react';
import STAR from '../../public/star.png';

const StarRating = () => {
    // Add necessary state variables here
    const [hover, setHover] = useState(0)
    const [rating, setRating] = useState(0)

    return (
        <div className="star-rating" style={{ display: 'flex' }}>
            {/* Display current rating */}
            {hover} {rating}
            {Array.from({ length: 5 }, (_, i) => (
                <img src={STAR} alt='star'
                    onMouseEnter={() => setHover(i + 1)}
                    onMouseLeave={() => setHover(0)}
                    onClick={() => setRating(i + 1)}
                    style={{backgroundColor: (hover || rating) > i ? 'gold' : null}}
                />
            ))}
        </div>
    );
};

export default StarRating;