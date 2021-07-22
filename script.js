/* Descrizione:
Proviamo a ripetere quanto visto in classe, 
creando la struttura che riteniamo più adeguata per rappresentare una carta di Magic.*/


const card = {
    name: "Drago dalle Ali ad Arco",
    // Creiamo un array perchè il costo di lancio si compone di più elementi 
    manaCost: ["2", "R", "R"],
    typeOfCard: "Creatura",
    subtype: "Drago",
    // dividiamo il testo centrale in due oggetti 
    flavourText: {
        quote: ""
    },
    // possiamo avere più di una abilità quindi creiamo un array
    abilities: [

    ]
    

       

}
console.table(card)