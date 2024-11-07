// Problem Statement:
// Create a Progress Steps component with the following features:
// 1. Display 4 horizontal lines representing steps
// 2. Implement "Next" and "Previous" buttons
// 3. Clicking "Next" should fill the next line with blue color
// 4. Clicking "Previous" should revert the last filled line to black
// 5. Disable "Previous" button when on the first step
// 6. Disable "Next" button when on the last step
// 7. Initially, all lines should be black

import React, { useState } from 'react';

const ProgressSteps = () => {
    const [id, setId] = useState(-1)
    let len = 4

    return (
        <div style={{ display: 'flex' }}>
            {Array.from({ length: len }, (_, i) => (
                <div key={i} style={{ height: '10px', width: '100px', display: 'flex', backgroundColor: i <= id ? 'green' : 'black', margin: '1rem' }}>

                </div>
            ))}

            <button disabled={id === -1} onClick={() => setId((prev) => prev - 1)}>Previous</button>
            <button disabled={id === len - 1} onClick={() => setId((prev) => prev + 1)}>Next</button>
        </div>
    );
};

export default ProgressSteps;