let myLibrary = []


function Book(title, author, pages, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
    this.id = crypto.randomUUID()
}


function addBookToLibrary() {
    let title = document.querySelector('#title').value;
    let author = document.querySelector('#author').value;
    let pages = document.querySelector('#pages').value;
    let status = document.querySelector('#status').checked;
    let newBook = new Book(title, author, pages, status);
    myLibrary.push(newBook);   
}


function displayLibrary() {
    let library = document.querySelector('.library')
    myLibrary.forEach(book => {
        document.createElement('div')
    })
}

const newBookBtn = document.querySelector('.new-book')
newBookBtn.addEventListener('click', () => {
    let newBookForm = document.querySelector('.new-book-form')
    newBookForm.style.display = 'flex'
})

document.querySelector('.new-book-form').addEventListener('submit', () => {
    event.preventDefault();
    addBookToLibrary();
    console.log(myLibrary)
})

console.log(myLibrary)