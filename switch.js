// SWITCH CASE
// è un'alternativa più pratica al if/else quando abbiamo molte condizioni da valutare insieme

/* 
switch(valore) {
    case "value1":
        codice da eseguire;
    break;
    case "value2":
        codice da eseguire;
    break;
    case "value3":
        codice da eseguire;
    break;
    default: 
        codice da eseguire in caso di mancata corrispondenza con ogni altro case precedente
}
*/

// immaginiamo di dover calcolare quante ore di cardio una persona deve farsi sul tapisroulant

let hoursOfIntenseCardio = 0;
const firstName = "Andrea";

// if (firstName === "Danilo") {
//   hoursOfIntenseCardio = 1;
// } else if (firstName === "Andrea") {
//   hoursOfIntenseCardio = 5;
// } else if (firstName === "Samuele") {
//   hoursOfIntenseCardio = 3;
// } else if (firstName === "Luigi") {
//   hoursOfIntenseCardio = 2;
// } else if (firstName === "Stefano") {
//   hoursOfIntenseCardio = 10;
// } else {
//   console.log("ti è andata bene... non devi fare cardio");
// }

switch (firstName) {
  case "Danilo":
    hoursOfIntenseCardio = 1;
    break;
  case "Andrea":
    hoursOfIntenseCardio = 5;
    break;
  case "Samuele":
    hoursOfIntenseCardio = 3;
    break;
  case "Luigi":
    hoursOfIntenseCardio = 2;
    break;
  case "Stefano":
    hoursOfIntenseCardio = 10;
    break;

  default:
    console.log("ti è andata bene... non devi fare cardio");
}

console.log(firstName + ", ti tocca fare " + hoursOfIntenseCardio + " ore di tapisroulant");

const fruit = prompt("che frutto vuoi?");

switch (fruit) {
  case "Apple":
    console.log("una mela al giorno...");
    break;
  case "Banana":
    console.log("mmmhh potassio!");
  // la mancanza del break fa eseguire anche il case successivo in automatico!
  case "Mango":
    console.log("tropicale ne abbiamo?");
    break;
  case "Kiwi":
    console.log("peloso ma morbido..");
    break;
  default:
    console.log("non mi piace questo " + fruit);
}

// questo switch sarà particolare perché va alla ricerca di un valore esattamente true,
// farà il match con il risultato della prima espressione che risultarà vera, quindi corrispondente a true

switch (true) {
  case hoursOfIntenseCardio === 10:
    console.log("Ciao Stefano, devi farti le tue 10 ore...");
    break;
  case hoursOfIntenseCardio >= 1:
    console.log(firstName + " comincia a correre che ne hai per almeno un'ora!");
    break;
  default:
    console.log("Ciao " + firstName + " oggi non devi correre, che ti fa male!");
}
