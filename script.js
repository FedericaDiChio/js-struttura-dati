/* Descrizione:
Proviamo a ripetere quanto visto in classe, 
creando la struttura che riteniamo più adeguata per rappresentare una carta di Magic.*/


const card = {
    id: 1,
    name: "Drago dalle Ali ad Arco",
    // Creiamo un array perchè il costo di lancio si compone di più elementi 
    manaCost: ["2", "R", "R"],
    typeOfCard: "Creatura",
    subtype: "Drago",
    // dividiamo il testo centrale in due oggetti 
    flavourText: {
        quote: "volooo"
    },
    // possiamo avere più di una abilità quindi creiamo un array
    abilities: [
        { 
            ability: ["Volare", "velocità"],
            description: "qualcosa"
        },
        {
            ability: "ci sarà sicuro un'altra abilità figa, tipo sputa fuoco",
            description: "qualcosa"
        }
    ], 
    // !RIVEDERE ABILITIES//
    illustrator: {
        id: 5,   //l'ID può essere utile nella ricerca filtrata//
        name: "Daarken"
    },
    cardNumber: 126,
    cardTotal: 350,
    strenght: 4,
    constitution: 4
    
    //!RIVEDERE BORDER COLOR E FARE ESPANSIONE//
    // BorderColor: 
    
}
console.table(card)


// STAMPIAMO IN PAGINA 

let cardTemplate = 
`<ul>
    <li></li>
</ul>`