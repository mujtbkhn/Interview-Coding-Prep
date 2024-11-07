// Requirement: Write a function that sorts people based on their heights in ascending order.
// Input: 
//   names = ["Mary", "John", "Emma"]
//   heights = [180, 165, 170]
// Output: 
//   [
//     { name: "John", height: 165 },
//     { name: "Emma", height: 170 },
//     { name: "Mary", height: 180 }
//   ]


function sortThePeople(names, heights) {

    // Sort the array based on the height property in ascending order
    let people = names.map((name, i) => ({
        name: name,
        height: heights[i]
    }))

    let sortPeople = people.sort((a, b) => a.height - b.height)
    return sortPeople;
}

// Example usage
const names = ["Mary", "John", "Emma"];
const heights = [180, 165, 170];
console.log(sortThePeople(names, heights));
