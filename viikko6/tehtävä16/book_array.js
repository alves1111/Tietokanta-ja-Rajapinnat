const bookArray = [
  { id: 1, title: "Book One", author: "Alice", year: 2020 },
  { id: 2, title: "Book Two", author: "Bob", year: 2021 },
  { id: 3, title: "Book Three", author: "Charlie", year: 2022 }
];

console.log("Tietotyyppi:", typeof bookArray);

console.log("Koko bookArray:", bookArray);

console.log("Ensimmäinen rivi:", bookArray[0]);

console.log("Ensimmäisen kirjan nimi:", bookArray[0].title);

console.log("Rivien määrä:", bookArray.length);

console.log("Kaikki kirjat:");
for (const book of bookArray) {
  console.log(book.title);
}
