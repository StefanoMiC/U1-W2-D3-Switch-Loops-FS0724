// CICLO FOR
// si utilizza in genere per eseguire un blocco di codice per un numero FINITO di volte
// è tipicamente usato in combinazione agli array per attraversarlo dall'inizio alla fine

// SINTASSI:
/*

for(definizione del contatore; condizione da valutare; incremento contatore) {
    
    blocco di codice da eseguire più volte

}

*/

// for (let i = 0; i < 100; i++) {
//   console.log("siamo dentro al for e il valore di i è: ", i + 1); // segliamo di manipolare il valore di i nel momento in cui lo visualizziamo
// }

// in questo caso cambiamo proprio la struttura iniziale per ottenere lo stesso effetto
for (let i = 1; i <= 100; i++) {
  console.log("siamo dentro al for e il valore di i è: ", i);
}

const progressiveNums = [];

for (let i = 1; i <= 100; i++) {
  progressiveNums.push(i);
}
// il for loop è una struttura bloccante quindi se siamo qui fuori possiamo già dare per scontato che l'operazione sia finita
// e quindi leggendo la variabile progressiveNums qui sotto ci darà il risultato finale (con i 100 numeri all'interno)
console.log("progressiveNums", progressiveNums);

const students = ["Melanie", "Marco", "Adriana", "Gianmarco", "Erika", "Emanuele"];

// console.log(students[0]);
// console.log(students[1]);
// console.log(students[2]);
// console.log(students[3]);
// console.log(students[4]);
// console.log(students[5]);

// attraversamento di un array da sinistra verso destra
// for (let i = 0; i < students.length; i++) {
//   console.log(students[i]);
// }

// attraversamento a ritroso
// for (let i = students.length - 1; i >= 0; i--) {
//   console.log(students[i]);
// }

// vogliamo trovare la posizione nell'array della stringa "Adriana"

for (let i = 0; i < students.length; i++) {
  console.log("iterazione");
  if (students[i] === "Adriana") {
    console.log("Adriana si trova in posizione: ", i + 1, "con indice: ", i);
    break;
  }
}

for (let i = 0; i < students.length; i++) {
  if (students[i] === "Adriana" || students[i] === "Erika") {
    continue;
  }
  console.log(students[i]); // in questo punto non ci arriviamo mai per Adriana o Erika, il console.log verrà saltato
}

const animalsArr = [
  { name: "Goldy", species: "goldfish", age: 1 },
  { name: "Fuffy", species: "dog", age: 3 },
  { name: "Bam Bam", species: "rabbit", age: 0.5 },
  { name: "Furia", species: "horse", age: 5 }
];

const names = [];

for (let i = 0; i < animalsArr.length; i++) {
  const animalObj = animalsArr[i]; // diamo un nome al singolo elemento per semplificare la sintassi (opzionale)

  names.push(animalObj.name); // scomponiamo l'oggetto nella singola stringa del nome e la pushiamo in un altro array

  // scateniamo un console log solo per animale con specie "horse"
  if (animalObj.species === "horse") {
    console.log(animalObj.name + " è il mio animale preferito");
  }
}

console.log("names", names);
