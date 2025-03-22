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

const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', '295', 'unread')
console.log(theHobbit.info())


function addBookToLibrary() {

}