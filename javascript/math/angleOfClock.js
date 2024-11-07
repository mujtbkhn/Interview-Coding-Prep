// Requirement: Write a function to calculate the smaller angle between the hour and minute hands on a clock given the hour and minute.
// Input: 
//   hour = 1
//   minute = 30
// Output: 
//   15

function angleOfClock(hour, minute) {
    let hourAngle = (hour * 30) + (minute * 0.5);
    let minuteAngle = minute * 6

    let angle = Math.abs(hourAngle - minuteAngle);
    let result = Math.min(angle, 360 - angle);

    return result
}

// Example usage
console.log(angleOfClock(3, 30));