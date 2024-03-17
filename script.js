// Library
const library = [];

// Book constructor

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    this.info = () => {
            return `${this.title} 
            Author: ${this.author} 
            Pages: ${this.pages}`
    };
}

// Add to library
function addToLibrary(book){
    library.push(book);
}

let HP = new Book('Harry Potter', 'JK Rowling', 324, true);
let LOTR = new Book('Lord of the Rings', 'JRR Tolkien', 654, true);

addToLibrary(HP);
addToLibrary(LOTR);


let bookList = document.querySelector('.book-list');
let infoDisplay = document.querySelector('.info-display');

function generateList(library){
    bookList.innerHTML = '';
    for (let i = 0; i < library.length; i++) {
        // create book list card
        const card = document.createElement("div");
        card.innerText = `${library[i].title}`;
        card.style.fontWeight = 'bold';
        card.classList.add('book-card');
        card.setAttribute("data", i);
        card.style.marginBottom = '10px';
        let string = `${library[i].info()}`;

        // Delete 'x'
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        card.appendChild(span);

        // Info Button
        let infoBtn = document.createElement("button");
        infoBtn.innerText = 'More Info';
        infoBtn.classList.add('info-btn');
        card.appendChild(infoBtn);

        // Read checkbox
        let readCheck = document.createElement("input");
        readCheck.innerHTML = 'Read';
        readCheck.type = 'checkbox';
        readCheck.name = 'read-check';
        readCheck.classList.add('read-check');

        // if read selected, box will begin true.
        if (library[i].read){
            readCheck.checked = true;
            card.style.backgroundColor = '#d9f99d';
        }

        // label for checkbox
        let label = document.createElement("label");
        label.innerText = 'Read';
        label.style.for = 'read-check';

        card.appendChild(label);
        card.appendChild(readCheck);

        // add event listeners

        // delete
        card.addEventListener('click', function(e){
            if(e.target.tagName === "SPAN"){
                e.target.parentElement.remove();
                library.splice(i, 1);
            }
        }, false);

        // info button functionality
        infoBtn.addEventListener("click", () => {
            displayInfo(string);
        })
        // checkbox functionality
        readCheck.addEventListener("click", () => {
            if (readCheck.checked){
                library[i].read = true;
                card.style.backgroundColor = '#d9f99d';
            } else {
                library[i].read = false;
                card.style.backgroundColor = 'White';
            }
        })

        // Append the fully constructed card to list
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
    document.getElementById("popForm").style.visibility = "visible";
}
  
function closeForm() {
    document.getElementById("popForm").style.display = "none";
}


function updateList() {
    title = document.querySelector('.title-input');
    author = document.querySelector('.author-input');
    pages = document.querySelector('.pages-input');
    read = document.querySelector('.read-input');

    if (title.value == '' || author.value == '' || pages.value == ''){
        alert("You must complete all fields!");
        return;
    }

    if (read.checked) {
        book = new Book(title.value, author.value, pages.value, true);
    } else {
        book = new Book(title.value, author.value, pages.value, false);
    }
    
    library.push(book);

    title.value = '';
    author.value = '';
    pages.value = '';
    read.checked = false;
    generateList(library);
    closeForm();
}

