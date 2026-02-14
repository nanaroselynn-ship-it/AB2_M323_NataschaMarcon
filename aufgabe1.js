const alter = 27; 

const person = {
    vorname: "Nana",
    nachname: "Piranha",
    farbe: "Pink"
}; 
console.log(person);

const personAdresse = {
    ...person, 
    adresse: "Floorweg 33"

};
console.log("Original:", person);
console.log("New mit Adresse:", personAdresse);