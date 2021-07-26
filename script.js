/* Descrizione:
Proviamo a ripetere quanto visto in classe, 
creando la struttura che riteniamo più adeguata per rappresentare una carta di Magic.*/


// Creiamo un array di oggetti per gestire un mazzo di carte 
//**AGGIUNGERE ALTRE CARTE*/
const deck = [
    
 {
    id: 1,
    name: "Drago dalle Ali ad Arco",
    // Creiamo un array perchè il costo di lancio si compone di più elementi// 
    manaCost: ["2", "R", "R"],
    typeOfCard: "Creatura",
    subtype: "Drago",
    expansion: {
        name: "Avacyn Restored",
        rarityColor: "Golden - raro",
        reprint: 1,
    }, 
    // dividiamo il testo centrale in due oggetti// 
    // possiamo avere più di una abilità quindi creiamo un array//
    abilities: [
        { 
            ability: ["Volo", "rapidità"], //> separate o vicine?//
            description: "Qualcosa",
        },
        // nel caso ci fossero altre abilità// 
        {
            ability: ["Sputafuoco", "alito velenoso"],
            description: "Qualcosa",
        },
    ], 
    flavourText: "Volooo",
    illustrator: {
        id: 5,   //l'ID può essere utile nella ricerca filtrata//
        name: "Daarken"
    },
    cardNumber: 126,
    cardTotal: 244,
    strenght: 4,
    constitution: 4,
    borderColor: "Nero",
}
]



// FUNCTION 
// Creiamo una funzione per stampare in pagina 
const createCardTemplate = (card) => {

/* 1. Dobbiamo considerare che non tutte le carte hanno abilità. 
    Nel caso in cui non ci fossero, comunichiamolo al giocatore */
    let abilitiesContent = "<em>Questa è una carta Vanilla, non è in possesso di alcuna abilità!</em>";
    if (card.abilities.length) {
        abilitiesContent = "<ul>";
        for (let i = 0; i < card.abilities.length; i++){
            const currentAbility = card.abilities[i];
            abilitiesContent += `<li><strong>Tipo di abilità: </strong>${currentAbility.ability.join(", ")};</li>`;
            abilitiesContent += `<li><strong>Descrizione: </strong>${currentAbility.description};</li>`
        }
    } abilitiesContent += "</ul>";
    
    
    
    // 2. Consideriamo che anche il Flavour Text è qualcosa che non tutte le carte hanno, proprio come le abilities //
    const cardFlavourText = card.flavourText ? `<li><strong>Testo di colore: </strong> ${card.flavourText};` : " ";
    
    // 3. Consideriamo che non tutte le carte hanno un sottotipo //
    const cardSubtype = card.subtype ? ` - <strong>Sottotipo: </strong> ${card.subtype}` : "";
    
    /* Questo equivale a fare
    if(card.subtype) {
        subtype = card.subtype;
    } else {
        subtype = "";
    }
    
    (card.subtype !== undefined)
    */
        
    // Stampiamo in pagina //
    const cardTemplate = 
    `<ul>
        <li><strong>Id Carta: </strong>${card.id};</li>
        <li><strong>Nome: </strong><em>${card.name};</em></li>
        <li><strong>Costo di lancio: </strong>${card.manaCost.join(", ")};</li>
        <li><strong>Tipo di carta: </strong>${card.typeOfCard}${cardSubtype};</li>
        <li><strong>Espansione: </strong>
            <ul>
                <li><strong>Nome: </strong>${card.expansion.name};</li>
                <li><strong>Rarità: </strong>${card.expansion.rarityColor};</li>
                <li><strong>Ristampa: </strong>${card.expansion.reprint};</li>
            </ul>
            <li><strong>Abilità: </strong>${abilitiesContent}</li>  
            ${cardFlavourText}
        <li><strong>Illustratore: </strong>
            <ul>
                <li><strong>Nome: </strong>${card.illustrator.name};</li>
                <li><strong>Id: </strong>${card.illustrator.id};</li>
            </ul>     
        </li>
        <li><strong>Numero Collezione: </strong>${card.cardNumber}/${card.cardTotal};
        <li><strong>Forza e Costituzione: </strong>${card.strenght}/${card.constitution};
        <li><strong>Bordo della carta: </strong>${card.borderColor};
    </ul>`

    return cardTemplate;
} 


// Recuperiamo l'elemento HTML 
const displayCard = document.getElementById("display-card");

// Giriamo nell'array 
// Variabile di appoggio 
let deckTemplate = "";
for (let i = 0; i < deck.length; i++) {
    const currentCard = deck[i];
    deckTemplate += createCardTemplate(currentCard);
}

displayCard.innerHTML = deckTemplate; 
//**TO DO: FUNZIONE**// 
