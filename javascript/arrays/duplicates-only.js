// find the duplicates from the array and print only them in the descending order
const data = ["mujju", "nabbu", "uzair", "ashu", "mujju", "sonu", "nabbu", "ashu", "sonu", "tubu", "sullu", "mujju"]

const newData = Object.entries(data.reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1;
    return acc
}, {}))
    .filter(([word, count], i) => count > 1)
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))

const objData = Object.fromEntries(newData)

console.log(objData)