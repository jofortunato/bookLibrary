let myLibrary = [];

function Book(title, author, pagesTotal, pagesRead) {
  this.title = title;
  this.author = author;
  this.pagesTotal = pagesTotal;
  this.pagesRead = pagesRead;
}

function addBookToLibrary(title, author, pagesTotal, pagesRead) {
  newBook = new Book(title, author, pagesTotal, pagesRead);

  myLibrary.push(newBook);
}