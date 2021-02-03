let myLibrary = [];

function Book(title, author, pagesTotal, pagesRead, progressStatus) {
  this.title = title;
  this.author = author;
  this.pagesTotal = pagesTotal;
  this.pagesRead = pagesRead;
  this.progressStatus = progressStatus;
}

function addBookToLibrary(title, author, pagesTotal, pagesRead, progressStatus) {
  let newBook = new Book(title, author, pagesTotal, pagesRead, progressStatus);

  myLibrary.push(newBook);
}

function addCard(title, author, progressStatus) {
  let cardContainer = document.createElement("div");
  cardContainer.classList.add("book-card");

  let cardUpperContainer = document.createElement("div");
  cardUpperContainer.classList.add("card-upper");
  let cardHeaderContainer = document.createElement("div");
  cardHeaderContainer.classList.add("card-header");
  let deleteBookButton = document.createElement("button");
  deleteBookButton.classList.add("delete-book");
  let bookTitleText = document.createElement("h1");
  bookTitleText.classList.add("book-title");
  let bookAuthorText = document.createElement("p");
  bookAuthorText.classList.add("book-author");

  let bookProgressContainer = document.createElement("div");
  bookProgressContainer.classList.add("book-progress");
  let cardFooterContainer = document.createElement("div");
  cardFooterContainer.classList.add("card-footer");
  let progressText = document.createElement("span");
  let progressValueText = document.createElement("span");
  progressValueText.classList.add("progress-value");
  let percentageText = document.createElement("span");
  let checkboxContainer = document.createElement("label");
  checkboxContainer.classList.add("checkbox-container");
  let readStatusCheckbox = document.createElement("input");
  readStatusCheckbox.classList.add("read-status");
  readStatusCheckbox.setAttribute("type", "checkbox");
  if (progressStatus === 100)  {
    readStatusCheckbox.checked = true;
  }
  let readCheckmarkText = document.createElement("span");
  readCheckmarkText.classList.add("read-checkmark");

  cardHeaderContainer.appendChild(deleteBookButton);
  cardUpperContainer.appendChild(cardHeaderContainer);
  bookTitleText.textContent = title;
  cardUpperContainer.appendChild(bookTitleText);
  bookAuthorText.textContent = author;
  cardUpperContainer.appendChild(bookAuthorText);
  cardContainer.appendChild(cardUpperContainer);

  progressText.textContent = "Progress: ";
  progressValueText.textContent = progressStatus;
  percentageText.textContent = "%";
  cardFooterContainer.appendChild(progressText);
  cardFooterContainer.appendChild(progressValueText);
  cardFooterContainer.appendChild(percentageText);
  bookProgressContainer.appendChild(cardFooterContainer);
  checkboxContainer.appendChild(readStatusCheckbox);
  checkboxContainer.appendChild(readCheckmarkText);
  bookProgressContainer.appendChild(checkboxContainer);
  cardContainer.appendChild(bookProgressContainer);

  let cardsGridContainer = document.getElementById("cards-grid");
  cardsGridContainer.appendChild(cardContainer);

}