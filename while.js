// WHILE fa parte della categoria dei CICLI
// i CICLI sono strutture in grado di ripetere un blocco di codice fino a che la condizione utilizzata rimane vera

// CICLO WHILE
// si utilizza in genere per rieseguire un blocco di codice un numero INDEFINITO di volte
// (quando non si sa quante volte sia necessario eseguire un blocco prima di raggiungere un risultato)

/* 
while(condizione da verificare){
    blocco di codice che si eseguirà un certo numero di volte

    operazione che ne decreti la fine (es. incremento/decremento del valore iniziale in modo da falsificare la condizione ad un certo punto)
}
 */

// let contatore = 0;

// while (contatore < 1000) {
//   console.log("numero attuale", contatore);
//   //   contatore = contatore + 3
//   //   contatore += 3
//   // se invece ci basta un incremento di 1
//   contatore++;
// }

// let weight = 0;
// let iterationCount = 0;

// while (weight < 150) {
//   const addedWeight = prompt("il peso attuale è " + weight + "kg. Quanto peso vuoi aggiungere?");
//   weight += parseInt(addedWeight); // dal prompt arrivano SEMPRE stringhe quindi se vogliamo sommare un numero, bisogna prima trasformarlo in numero

//   iterationCount++;
// }

// console.log("il peso finale è: " + weight + "kg Ci abbiamo messo " + iterationCount + " iterazioni");

// template string - ammette valori dinamici al suo interno e permette l'andare a capo
// console.log(`Il peso finale è: ${weight} kg Ci abbiamo messo ${iterationCount} iterazioni`);

// mentre in un while loop la condizione viene valutata PRIMA,
// con un do...while possiamo avere ALMENO UNA esecuzione del blocco prima di valutare la condizione ed eventualmente fermarci

// let weight2 = 150;
// let iterationCount2 = 0;

// do {
//   console.log("DENTRO WHILE LOOP"); // QUI CI ENTRIAMO ALMENO UNA VOLTA ANCHE SE LA CONDIZIONE È FALSA
//   const addedWeight = prompt("il peso attuale è " + weight2 + "kg. Quanto peso vuoi aggiungere?");
//   weight2 += parseInt(addedWeight); // dal prompt arrivano SEMPRE stringhe quindi se vogliamo sommare un numero, bisogna prima trasformarlo in numero

//   iterationCount2++;
// } while (weight2 < 150);

// console.log(`Il peso finale è: ${weight2} kg Ci abbiamo messo ${iterationCount2} iterazioni`);

// _______________ DIFFERENZA PRATICA TRA WHILE E DO...WHILE ___________________

let weight3 = 150; // ipotizziamo che questa variabile riceva un valore random, nel caso in cui arrivi un valore di 150 o superiore...

// non vedremmo mai un console log con il peso se usassimo un normale while loop

// while (weight3 < 150) {
//   console.log("peso ", weight3);

//   weight3 += 10;
// }

// ma con un do...while avremmo ALMENO un console log che ci visualizza il valore di peso
do {
  console.log("peso ", weight3);

  weight3 += 10;
} while (weight3 < 150);
