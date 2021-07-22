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
        rarityColor: "golden",
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
            ability: "Ci sarà sicuro un'altra abilità figa, tipo sputa fuoco;",
            description: "Qualcosa",
        },
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
    cardTotal: 244,
    strenght: 4,
    constitution: 4
    
    //!RIVEDERE BORDER COLOR//
    // BorderColor: 
    
}
console.table(card)


// COSE FUORI DAL TEMPLATE

/* 1.Dobbiamo considerare che non tutte le carte hanno abilità. 
Nel caso in cui non ci fossero, comunichiamolo al giocatore*/
let abilitiesContent = "Questa è una carta Vanilla, non è in possesso di alcuna abilità!"
if (card.abilities.length) {
    abilitiesContent = `<ul>`;
    for (let i = 0; i < card.abilities.length; i++){
        const currentAbility = card.abilities[i];
        abilitiesContent += `<li><strong>Tipo di abilità: </strong>${currentAbility.ability};</li>`;
        abilitiesContent += `<li><strong>Descrizione: </strong>${currentAbility.description};</li>`
    }
} abilitiesContent += `</ul>`;




// Recuperiamo l'elemento HTML 
const displayCard = document.getElementById("display-card");

// Stampiamo in pagina 
let cardTemplate = 
`<ul>
    <li><strong>Id Carta: </strong>${card.id};</li>
    <li><strong>Nome: </strong>${card.name};</li>
    <li><strong>Costo di lancio: </strong>${card.manaCost.join(", ")};</li>
    <li><strong>Tipo di carta: </strong>${card.typeOfCard};</li>
    <li><strong>Espansione: </strong>
        <ul>
            <li><strong>Nome: </strong>${card.expansion.name};</li>
            <li><strong>Rarità: </strong>${card.expansion.rarityColor};</li>
            <li><strong>Ristampa: </strong>${card.expansion.reprint};</li>
        </ul>
        <li><strong>Abilità: </strong>${abilitiesContent}</li>  
        <li><strong>Testo di colore: </strong>${card.flavourText.quote};</li>
    <li><strong>Illustratore: </strong>
        <ul>
            <li><strong>Nome: </strong>${card.illustrator.name};</li>
            <li><strong>Id: </strong>${card.illustrator.id};</li>
        </ul>     
    </li>

    <li><strong>Numero Collezione: </strong>${card.cardNumber}/${card.cardTotal};
    <li><strong>Forza e Costituzione: </strong>${card.strenght}/${card.constitution};

</ul>`


displayCard.innerHTML = cardTemplate; 