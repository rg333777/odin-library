const myLibrary = []


function Book(name, author, pages, status) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.status = status;
    this.id = crypto.randomUUID()
    this.info = () => {
        return this.name + ' by ' + this.author + ', ' + this.pages + ' pages, ' + this.status + ', ' + this.id
    }

}

const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295, 'unread')
const alphabet = new Book ('alphabet', 'unknown', 26, 'unread')


function addBookToLibrary(book) {
    myLibrary.push(book)    
}

addBookToLibrary(theHobbit)
addBookToLibrary(alphabet)

console.log(myLibrary)