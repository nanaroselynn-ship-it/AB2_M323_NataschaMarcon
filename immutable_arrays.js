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


 const reviews = [4.5, 4.0, 5.0, 2.0, 1.0, 5.0, 3.0, 4.0, 1.0, 5.0, 4.5, 3.0, 2.5, 2.0];
 const summe = reviews.reduce((acc, val) => acc + val, 0);

 const durchschnitt = summe / reviews.length; 
 console.log("Das Total aller Reviews ist: ", summe); 
 console.log("Der Durchschnitt der Reviews ist: ", durchschnitt); 