// Library
const library = [];

// Book constructor

function Book(title, author, pages, read, blurb) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    this.info = () => {
        if (this.read){
            return `${this.title} 
            Author: ${this.author} 
            Pages: ${this.pages}
            Read`;
        } else {
            return `${this.title} 
            Author: ${this.author} 
            Pages: ${this.pages}
            Not Read`;
        }
    };
}

// Add to library
function addToLibrary(book){
    library.push(book);
}


let bookList = document.querySelector('.book-list');
let infoDisplay = document.querySelector('.info-display');

function generateList(library){
    bookList.innerHTML = '';
    for (book of library) {
        const card = document.createElement("div");
        card.innerText = `${book.title}`;
        card.classList.add('book-card');
        card.style.marginBottom = '10px';
        let string = `${book.info()}`;
    
        card.addEventListener("click", () => {
            displayInfo(string);
        })
        bookList.appendChild(card);
    }
}

generateList(library);


//Display info on click

function displayInfo(string){
    infoDisplay.innerHTML = '';
    const info = document.createElement("div");
    info.innerText = string;
    info.style.padding = '20px';
    infoDisplay.appendChild(info);
}


// New book form

function openForm() {
    document.getElementById("popForm").style.display = "block";
}
  
function closeForm() {
    document.getElementById("popForm").style.display = "none";
}


function updateList() {
    title = document.querySelector('.title-input');
    author = document.querySelector('.author-input');
    pages = document.querySelector('.pages-input');
    read = document.querySelector('.read-input');

    book = new Book(title.value, author.value, pages.value, read.value);

    library.push(book);

    generateList(library);
    closeForm();
}

