// Problem Statement: Create a Reusable React Card Component
// Requirements:
// 1. The component should accept 'header' and 'type' as props
// 2. The card's style should be determined by the 'type' prop (e.g., 'facebook', 'twitter')
// 3. The card should have a header and a body
// 4. Nested components inside the body should also have styles based on the card type

import React from 'react'

const Card = ({ header, type }) => {
    // TODO: Implement logic to determine card style based on 'type' prop

    return (
        <div>
            {/* TODO: Implement card header */}
            
            {/* TODO: Implement card body with nested components */}
            {/* The style of these components should also depend on the 'type' prop */}
        </div>
    )
}

export default Card