let myLibrary = [];

function Book(title, author, pagesTotal, pagesRead, progressStatus) {
  this.title = title;
  this.author = author;
  this.pagesTotal = pagesTotal;
  this.pagesRead = pagesRead;
  this.progressStatus = progressStatus;
}

function addBookToLibrary(title, author, pagesTotal, pagesRead, progressStatus) {
  newBook = new Book(title, author, pagesTotal, pagesRead, progressStatus);

  myLibrary.push(newBook);
}