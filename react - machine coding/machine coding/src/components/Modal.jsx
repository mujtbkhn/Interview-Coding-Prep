// show a modal when clicked on button then modal is shown and has a close button which when clicked closes it additionally when the modal is open either clicking on close or clicking outside the modal anywhere closes it

import React, { useEffect, useRef, useState } from 'react'

const Modal = () => {

    return (
        <div style={{ height: '100%' }}>
            <button style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '0 auto' }} >Show Modal!</button>

        </div>
    )
}

export default Modal