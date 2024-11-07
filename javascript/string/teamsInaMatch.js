//print no of times a team has played the matches

let str = "INDIA-PAKISTAN INDIA-ENGLAND ENGLAND-PAKISTAN PAKISTAN GERMANY" 
// output { INDIA: 2, PAKISTAN: 3, ENGLAND: 2, GERMANY: 1 }

function matches(str){
  
   str = str.split(' ');
   let map = {}
   for(let match of str){
     let [team1, team2] = match.split('-')
     if(team1){
        map[team1] = (map[team1] || 0) + 1;
     }
     if(team2){
        map[team2] = (map[team2] || 0) + 1;
     }
   }
   return map
}
console.log(matches(str))