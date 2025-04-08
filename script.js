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
    library.textContent = ''
    myLibrary.forEach(function(book,index) {
        let bookContainer = document.createElement('div');
        bookContainer.setAttribute('class', 'book-container');

        let titleContainer = document.createElement('div');
        titleContainer.setAttribute('class', 'title-container');
        titleContainer.textContent = book.title;
        bookContainer.appendChild(titleContainer);

        let authorContainer = document.createElement('div')
        authorContainer.setAttribute('class', 'author-container');
        authorContainer.textContent = book.author;
        bookContainer.appendChild(authorContainer)

        let pagesContainer = document.createElement('div')
        pagesContainer.setAttribute('class', 'pages-container');
        pagesContainer.textContent = book.pages;
        bookContainer.appendChild(pagesContainer)

        let readContainer = document.createElement('div')
        readContainer.setAttribute('class', 'read-container');
        if (book.status == true) {
            readContainer.textContent = 'Read'
        } else {
            readContainer.textContent = 'Unread'
        }
        bookContainer.appendChild(readContainer)

        library.appendChild(bookContainer);
        index++
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
    displayLibrary()
    console.log(myLibrary)
})