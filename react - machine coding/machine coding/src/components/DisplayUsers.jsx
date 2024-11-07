/**
 * Problem Statement: Display Users in Alphabetical Order with Capitalized Names
 * Expected OUTPUT:
 * User names
 * 1. Adam Rose
 * 2. Adam Wayne
 * 3. Billy Doe
 * 4. Jane Doe
 * 5. John Doe
 */

import React from 'react';

function DisplayUsers() {

    const users = [
        { name: 'john doe', id: 1 },
        { name: 'jane doe', id: 2 },
        { name: 'billy doe', id: 3 },
        { name: 'adam Rose', id: 4 },
        { name: 'adam wayne', id: 5 },
    ];


    return (
        <>

            <h3>User names</h3>

        </>
    );
}

export default DisplayUsers;