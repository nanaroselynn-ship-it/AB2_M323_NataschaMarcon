const namen = [
    { id: 1, user: "Nana", rolle: "student"},
    { id: 2, user: "Thivya", rolle: "gugus" }
]; 
console.log("Initial Array:", namen); 

const neuerUser = { id: 3, user: "Perris", rolle: "Kakadou" };
const usersErweitert = [...namen, neuerUser]; 

console.log("Altes Array nicht verändert:", namen);
console.log("Neues Array mit 3 Usern:", usersErweitert); 

const nameGeaendert = usersErweitert.map(u => {
    if (u.id === 2) {
        return { ...u, rolle: "Hero"};
    }
    return u;
});
console.log("Vorher: Thivya ist gugus:", usersErweitert[1]);
 console.log("Nacher: Thivya ist Hero:", nameGeaendert[1]);

 const usersOhneKleinsteId = nameGeaendert.filter(u => u.id !== 1);
 
 console.log("vorher mit ID1:", nameGeaendert); 
 console.log("Nacher ID 1 entfernt:", usersOhneKleinsteId); 
