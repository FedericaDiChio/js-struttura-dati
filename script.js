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
    // possiamo avere più di una abilità quindi creiamo un array
    abilities: [
        { 
            ability: ["Volare", "velocità"], //> separate o vicine?//
            description: "Qualcosa"
        },
        // nel caso ci fossero altre abilità 
        {
            ability: "Ci sarà sicuro un'altra abilità figa, tipo sputa fuoco",
            description: "Qualcosa"
        }
    ], 
    flavourText: {
        quote: "Volooo"
    },
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


// Recuperiamo l'elemento HTML 
const displayCard = document.getElementById("display-card");

// Stampiamo in pagina 
let cardTemplate = 
`<ul>
    <li><strong>Id Carta: </strong>${card.id};</li>
    <li><strong>Nome: </strong>${card.name};</li>
    <li><strong>Costo di lancio: </strong>${card.manaCost.join(", ")};</li>
    <li><strong>Tipo di carta: </strong>${card.typeOfCard};</li>

    <li><strong>Testo di colore: </strong>${card.flavourText.quote};</li>
    <li><strong>Illustratore: </strong>
        <ul>
            <li><strong>Nome: </strong> ${card.illustrator.name};</li>
            <li><strong>Id: </strong>${card.illustrator.id};</li>
        </ul>     
    </li>


</ul>`


displayCard.innerHTML = cardTemplate;