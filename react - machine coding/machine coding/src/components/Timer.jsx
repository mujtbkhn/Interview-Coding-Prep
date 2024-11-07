// timer with start stop reset functionalities

import React, { useState } from "react";
const Timer = () => {

  const [timer, setTimer] = useState(0)
  const [timeInterval, setTimeInterval] = useState(null)

  const handlePlay = () => {
    clearInterval(timeInterval)
    setTimeInterval(setInterval(() => {
      setTimer((prev) => prev + 1)
    }, 1000))
  }

  const handlePause = () => {
    clearInterval(timeInterval)
  }
  const handleReset = () => {
    clearInterval(timeInterval)
    setTimer(0)
  }
  return (
    <div>
      {timer}
      <button onClick={() => handlePlay()}>Play</button>
      <button onClick={() => handlePause()}>Pause</button>
      <button onClick={() => handleReset()}>Reset</button>
    </div>
  );
};

export default Timer;
