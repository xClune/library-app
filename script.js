// Library

const library = [];

// Books

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    this.info = () => {
        if (this.read){
            return `Title: ${this.title}, Author: ${this.author}, Pages: ${this.pages}, Read`;
        } else {
            return `Title: ${this.title}, Author: ${this.author}, Pages: ${this.pages}, 0% Complete`;
        }
    };
}

let theHobbit = new Book('The Hobbit', 'J.R.R Tolkien', 295, true);

// Add to library

function addToLibrary(book){
    library.push(book);
}

addToLibrary(theHobbit);

let bookList = document.querySelector('.book-list');

for (book of library) {
    bookList.innerText += `${book.info()}`;
}