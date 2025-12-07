const book = {
    bookArray: [
        { id: 1, title: "Book One", author: "Alice", isbn: "1111" },
        { id: 2, title: "Book Two", author: "Bob", isbn: "2222" },
        { id: 3, title: "Book Three", author: "Charlie", isbn: "3333" }
    ],

    getAllBooks: function () {
        console.log(this.bookArray);
    },

    getOneBook: function (x) {
        console.log(this.bookArray[x]);
    },

    addBook: function (id_book, name, author, isbn) {
        this.bookArray.push({
            id: id_book,
            title: name,
            author: author,
            isbn: isbn
        });
    }
};

console.log("=== Kaikki kirjat ===");
book.getAllBooks();

console.log("=== Yksi kirja ===");
book.getOneBook(0);

console.log("=== Lisätään uusi kirja ===");
book.addBook(4, "New Book", "New Author", "4444");

console.log("=== Kirjat lisäyksen jälkeen ===");
book.getAllBooks();
