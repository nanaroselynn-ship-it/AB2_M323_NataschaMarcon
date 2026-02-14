const alter = 27; 

const person = {
    vorname: "Nana",
    nachname: "Piranha",
    farbe: "Pink"
}; 

const personAdresse = {
    ...person, 
    adresse: "Floorweg 33"
};

const personMitEmail = {
    ...personAdresse, 
    email: "hallohallo@gmail.com"
}; 

console.log("Vorher (in personAdresse):", personAdresse.email);
console.log("Nachher (in personMitEmail):", personMitEmail.email); 

const { farbe, ...personOhneFarbe } = personMitEmail; 

console.log("Objekt mit Farbe:", personMitEmail);
console.log("Objekt ohne Farbe:", personOhneFarbe); 
