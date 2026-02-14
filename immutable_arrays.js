const namen = [
    { id: 1, user: "Nana", rolle: "student"},
    { id: 2, user: "Thivya", rolle: "gugus" }
]; 
console.log("Initial Array:", namen); 

const neuerUser = { id: 3, user: "Perris", rolle: "Kakadou" };
const usersErweitert = [...namen, neuerUser]; 

console.log("Altes Array nicht verändert:", namen);
console.log("Neues Array mit 3 Usern:", usersErweitert); 
