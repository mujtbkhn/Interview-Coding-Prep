/* Implement a previous and next functionality, create a button increment, display initial count to 0, when Increment is clicked it should show two text -
1. Current : that will display the incremented count.
2. Previous : This will show the previous value that was before incrementing the count. */
import React, { useState } from 'react'

const Prev_next = () => {

  const [count, setCount] = useState(0)
  const [prevCount, setPrevCount] = useState(null)

  const handleIncrement = () => {
    setPrevCount(count)
    setCount(prv => prv + 1)
  }
  return (
    <div>
      <h1>prevCount : {prevCount}</h1>
      <h1>count : {count} </h1>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  )
}

export default Prev_next