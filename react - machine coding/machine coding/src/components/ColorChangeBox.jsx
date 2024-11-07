// Problem Statement: Create a ColorChangeBox component
// Requirements:
// 1. Display a 3x3 grid of boxes
// 2. Clicking a box should change its color from green to yellow
// 3. Track the order in which boxes are clicked
// 4. When all boxes are clicked, change them back to green in the order they were clicked
// 5. Each box should change back to green with a 1-second delay after the previous box

import React, { useEffect, useState } from 'react'

const ColorChangeBox = () => {
  const [boxes, setBoxes] = useState(Array(9).fill(null))
  const [green, setGreen] = useState(Array(9).fill(false))
  const [result, setResult] = useState([])

  useEffect(() => {
    removeGreen()
  }, [boxes, result])

  useEffect(() => {
    console.log('result :', result)
  }, [result])


  const removeGreen = () => {
    if (result.length === boxes.length) {
      console.log('all clicked')

      result.forEach((res, i) => {
        setTimeout(() => {
          setGreen((prev) => {
            const updatedGreen = [...prev]
            updatedGreen[res] = false
            return updatedGreen
          })
        }, i * 1000);
      })


      setResult([])
    }
  }

  const handleChange = (id) => {
    if (green[id]) return
    setGreen((prev) => {
      const updatedGreen = [...prev]
      updatedGreen[id] = true
      return updatedGreen
    })
    setResult((prev) => [...prev, id])
  }

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      ColorChangeBox
      {boxes.map((box, i) => (
        <div
          key={i}
          style={{ height: '100px', width: '100px', border: '1px solid black', backgroundColor: green[i] ? 'green' : null }}
          onClick={() => handleChange(i)}
        >
          {box}
        </div>
      ))}
    </div>
  )
}

export default ColorChangeBox