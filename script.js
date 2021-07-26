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
    mcm: 4,
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
},
{
    id: 2,
    name: "Tymna la tessitrice",
    // Creiamo un array perchè il costo di lancio si compone di più elementi// 
    manaCost: ["1", "W", "B"],
    mcm: 1,
    typeOfCard: "Creatura Leggendaria",
    subtype: "Chierico Umano",
    expansion: {
        name: "Commander 2016",
        rarityColor: "Golden - raro",
        reprint: 5,
    }, 
    // dividiamo il testo centrale in due oggetti// 
    // possiamo avere più di una abilità quindi creiamo un array//
    abilities: [
        { 
            ability: ["Legame Vitale"], //> separate o vicine?//
            description: "Qualcosa",
        },
        // nel caso ci fossero altre abilità// 
        {
            ability: [""],
            description: "",
        },
    ], 
    illustrator: {
        id: 2,   //l'ID può essere utile nella ricerca filtrata//
        name: "Winona Nelson"
    },
    cardNumber: 48,
    cardTotal: 120,
    strenght: 2,
    constitution: 2,
    borderColor: "Nero",
},
{
    id: 2,
    name: "Felidar a caccia",
    // Creiamo un array perchè il costo di lancio si compone di più elementi// 
    manaCost: ["3", "W"],
    mcm: 8,
    typeOfCard: "Creatura",
    subtype: "Bestia felino",
    expansion: {
        name: "Zendikar Rising",
        rarityColor: "Black - comune",
        reprint: 20,
    }, 
    // dividiamo il testo centrale in due oggetti// 
    // possiamo avere più di una abilità quindi creiamo un array//
    abilities: [
        { 
            ability: ["Cautela"], //> separate o vicine?//
            description: "Qualcosa",
        },
        // nel caso ci fossero altre abilità// 
        {
            ability: [""],
            description: "",
        },
    ], 
    flavourText: "i Felidar lasciano doni",
    illustrator: {
        id: 8,   //l'ID può essere utile nella ricerca filtrata//
        name: "Ilse Gort"
    },
    cardNumber: 34,
    cardTotal: 380,
    strenght: 2,
    constitution: 3,
    borderColor: "Nero",
},
]



// FUNCTION 

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


const renderDeck = (deck, targetElement) => {
    // Giriamo nell'array 
    // Variabile di appoggio 
    let deckTemplate = "";
    for (let i = 0; i < deck.length; i++) {
        const currentCard = deck[i];
        deckTemplate += createCardTemplate(currentCard);
    }
    targetElement.innerHTML = deckTemplate; 
}

// Recuperiamo l'elemento HTML e stampiamo in pagina
const displayCard = document.getElementById("display-card");
renderDeck(deck, displayCard);


// FILTRO
const inputField = document.getElementById("search");
const selectField =  document.getElementById("filter");
const button = document.getElementById("btn");

button.addEventListener("click", () => {
    const selectValue = selectField.value;
    const inputValue = inputField.value;
    
    const filtered = [];
    for (let i = 0; i < deck.length; i++) {
    const currentCard = deck[i];
  
    switch(selectValue) {
        case "id":
        case "convertedManaCost":
        case "strenght":
        case "constitution":
            if (currentCard[selectValue] == inputValue) {
                filtered.push(currentCard);
            };
        break;
        default:
            if (currentCard[selectValue].includes(inputValue)) {
                filtered.push(currentCard)
            }
        
    }
} 
renderDeck(filtered, displayCard);
});
