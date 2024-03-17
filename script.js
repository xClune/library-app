// Library
const library = [];
const blurbs = {'The Hobbit':
"The Hobbit by J.R.R. Tolkien follows the journey of Bilbo Baggins, a hobbit who is reluctantly swept into an epic quest by the wizard Gandalf and a group of dwarves. As they travel to reclaim the Lonely Mountain and its treasure from the dragon Smaug, Bilbo discovers courage and cunning he never knew he possessed.", 'The Fellowship of the Ring': "The Fellowship of the Ring is the first volume in J.R.R. Tolkien's epic fantasy trilogy, The Lord of the Rings. It tells the story of Frodo Baggins, a hobbit who sets out to destroy a powerful ring that could bring about the end of Middle-earth. Joined by a diverse group including hobbits, men, elves, and dwarves, Frodo embarks on a perilous journey to Mount Doom, the only place where the ring can be destroyed.", 'Harry Potter and the Philosoper\'s Stone': "The Philosopher's Stone is the first book in the Harry Potter series by J.K. Rowling. It follows the adventures of a young wizard, Harry Potter, as he discovers his magical heritage and attends Hogwarts School of Witchcraft and Wizardry. Along with his friends Ron and Hermione, Harry uncovers the mystery of the Philosopher's Stone, a powerful magical object that grants immortality.", 'Harry Potter and the Chamber of Secrets': "The Chamber of Secrets is the second book in J.K. Rowling\'s Harry Potter series. In this installment, Harry returns to Hogwarts for his second year and discovers that a mysterious force is petrifying students. With the help of his friends Ron and Hermione, Harry uncovers the Chamber of Secrets, where a dangerous creature lurks and threatens the safety of the school."};

// Book constructor

function Book(title, author, pages, read, blurb) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.blurb = blurb;

    this.info = () => {
        if (this.read){
            return `${this.title} 
            Author: ${this.author} 
            Pages: ${this.pages}
            Read`;
        } else {
            return `${this.title} 
            ${this.author} 
            ${this.pages} pages
            0% Complete`;
        }
    };
}

// Books
let theHobbit = new Book('The Hobbit', 'J.R.R Tolkien', 295, true, blurbs['The Hobbit']);

let theFellowship = new Book('The Fellowship of the Ring', 'J.R.R Tolkien', 432, false, blurbs['The Fellowship of the Ring']);

let harryPotter1 = new Book('Harry Potter and the Philosopher\'s Stone', 'J.K Rowling', 311, false, blurbs['Harry Potter and the Philosoper\'s Stone']);

let harryPotter2 = new Book('Harry Potter and the Chamber of Secrets', 'J.K Rowling', 396, false, blurbs['Harry Potter and the Chamber of Secrets']);

// Add to library
function addToLibrary(book){
    library.push(book);
}

addToLibrary(theHobbit);
addToLibrary(harryPotter1);
addToLibrary(harryPotter2);
addToLibrary(theFellowship);


let bookList = document.querySelector('.book-list');
let blurbDisplay = document.querySelector('.info-display');

for (book of library) {
    const card = document.createElement("div");
    card.innerText = `${book.info()}`;
    card.classList.add('book-card');
    card.style.marginBottom = '10px';
    let string = book.blurb;

    card.addEventListener("click", () => {
        displayInfo(string);
    })
    bookList.appendChild(card);
}

//Display info on click

function displayInfo(string){
    blurbDisplay.innerHTML = '';
    const blurb = document.createElement("div");
    blurb.innerText = string;
    blurb.style.padding = '20px';
    blurbDisplay.appendChild(blurb);
}

// Blurbs

