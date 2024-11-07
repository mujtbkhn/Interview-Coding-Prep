function task1(callback) {
  setTimeout(() => {
    console.log("Task 1 completed");
    if (callback) callback();
  }, 3000);
}

function task2(callback) {
  setTimeout(() => {
    console.log("Task 2 completed");
    if (callback) callback();
  }, 1000);
}

function task3(callback) {
  setTimeout(() => {
    console.log("Task 3 completed");
    if (callback) callback();
  }, 2000);
}

function executeTasksAsynchronously() {
  task1();
  task2();
  task3();
}

function executeTasksSynchronously() {
  task1(() => {
    task2(() => {
      task3();
    });
  });
}

// Run the functions to see the results
// executeTasksAsynchronously();
// executeTasksSynchronously();

//make synchronous without causing a callback hell

// write a delay function that makes tasks wait till one task is finished executing without callback hell


let c1 = () => console.log("first")
let c2 = () => console.log("second")
let c3 = () => console.log("third")

//Promises

//Async await



// This function returns a promise that resolves after a specified delay.
// You need to implement the promise logic inside.
const delayPromise = delay => {
  // Return a new Promise.
  // The promise should resolve after the set delay.

};

function delay(ms, cb) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve()
      cb()
    }, ms * 1000);
  })
}

// delay(2, c1)
//   .then(() => delay(5, c2))
//   .then(() => delay(3, c3))
//   .then(() => console.log("All Tasks completed"))


  const asyncPromises = async() => {
    await delay(5, c1)
    await delay(2, c2)
    await delay(6, c3)
  }
  // console.log(asyncPromises().then(() => console.log("all functions executed")))
// Example usage:
// Call the delayPromise function and log "done" when the promise resolves.
// console.log(delayPromise(5000).then(() => console.log('done')))
