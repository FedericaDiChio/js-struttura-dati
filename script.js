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
    expansion: {
        name: "Avacyn Restored",
        rarityColor: "Golden - raro",
        reprint: 1,
    }, 
    // dividiamo il testo centrale in due oggetti 
    // possiamo avere più di una abilità quindi creiamo un array
    abilities: [
        { 
            ability: ["Volo", "rapidità"], //> separate o vicine?//
            description: "Qualcosa",
        },
        // nel caso ci fossero altre abilità 
        {
            ability: ["Sputafuoco", "alito pesante"],
            description: "Qualcosa",
        },
    ], 
    flavourText: "Volooo",
    // !RIVEDERE ABILITIES//
    illustrator: {
        id: 5,   //l'ID può essere utile nella ricerca filtrata//
        name: "Daarken"
    },
    cardNumber: 126,
    cardTotal: 244,
    strenght: 4,
    constitution: 4,
    
    //!RIVEDERE BORDER COLOR//
    borderColor: "Nero",
    
}
console.table(card)



// COSE FUORI DAL TEMPLATE

/* 1.Dobbiamo considerare che non tutte le carte hanno abilità. 
Nel caso in cui non ci fossero, comunichiamolo al giocatore*/
let abilitiesContent = "<em>Questa è una carta Vanilla, non è in possesso di alcuna abilità!</em>";
if (card.abilities.length) {
    abilitiesContent = "<ul>";
    for (let i = 0; i < card.abilities.length; i++){
        const currentAbility = card.abilities[i];
        abilitiesContent += `<li><strong>Tipo di abilità: </strong>${currentAbility.ability.join(", ")};</li>`;
        abilitiesContent += `<li><strong>Descrizione: </strong>${currentAbility.description};</li>`
    }
} abilitiesContent += "</ul>";


/* 2.Consideriamo che anche il Flavour Text + qualcosa che non tutte le carte hanno, come le abilities*/
const cardFlavourText = card.flavourText ? `<li><strong>Testo di colore: </strong> ${card.flavourText};` : " ";

/* 3.Consideriamo che non tutte le carte hanno un sottotipo*/
const cardSubtype = card.subtype ? ` - <strong>Sottotipo: </strong> ${card.subtype}` : "";

/* Questo equivale a fare
if(card.subtype) {
    subtype = card.subtype;
} else {
    subtype = "";
}
(card.subtype !== undefined)
*/

// Recuperiamo l'elemento HTML 
const displayCard = document.getElementById("display-card");

// Stampiamo in pagina 
let cardTemplate = 
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


displayCard.innerHTML = cardTemplate; 