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

function addCard(title, author, progressStatus, arrayIndex) {
  let cardContainer = document.createElement("div");
  cardContainer.classList.add("book-card");
  cardContainer.setAttribute("data-book-index", arrayIndex);

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

function setEmptyLibrary() {
  let emptyLibraryText = document.createElement("p");
  emptyLibraryText.textContent = "Library is Empty";
  emptyLibraryText.id = "lib-empty";

  cardsGridContainer.appendChild(emptyLibraryText);
}

function loadLibrary() {
  if (myLibrary.length === 0) {
    setEmptyLibrary();
  }
  else {
    for(let i = 0; i < myLibrary.length; ++i) {
      addCard(myLibrary[i].title, myLibrary[i].author, myLibrary[i].progressStatus, i);
    }
  }
}

function validateForm(titleValue, authorValue, pagesTotalValue, pagesReadValue) {
  let isValid = true;  
  let regexIntegerNumber = /^[0-9]*$/g;
  
  if (titleValue.replaceAll(" ", "").length === 0) {
    titleFormInput.classList.add("not-valid");
    titleFormLabel.classList.add("not-valid");
    isValid = false;
  }
  else {
    titleFormInput.classList.remove("not-valid");
    titleFormLabel.classList.remove("not-valid");
  }

  if (authorValue.replaceAll(" ", "").length === 0) {
    authorFormInput.classList.add("not-valid");
    authorFormLabel.classList.add("not-valid");
    isValid = false;
  }
  else {
    authorFormInput.classList.remove("not-valid");
    authorFormLabel.classList.remove("not-valid");
  }

  if (pagesTotalValue.match(regexIntegerNumber) === null) {
    pagesTotalFormInput.classList.add("not-valid");
    pagesTotalFormLabel.classList.add("not-valid");
    isValid = false;
  }
  else {
    pagesTotalFormInput.classList.remove("not-valid");
    pagesTotalFormLabel.classList.remove("not-valid");
  }

  if (pagesReadValue.match(regexIntegerNumber) === null) {
    pagesReadFormInput.classList.add("not-valid");
    pagesReadFormLabel.classList.add("not-valid");
    isValid = false;
  }
  else {
    pagesReadFormInput.classList.remove("not-valid");
    pagesReadFormLabel.classList.remove("not-valid");
  }

  if (parseInt(pagesReadValue) > parseInt(pagesTotalValue)) {
    pagesReadFormInput.classList.add("not-valid");
    pagesReadFormLabel.classList.add("not-valid");
    pagesTotalFormInput.classList.add("not-valid");
    pagesTotalFormLabel.classList.add("not-valid");
    isValid = false;
  }

  return isValid
}

function updateLibrary(title, author, pagesTotal, pagesRead, progress) {
  myLibrary[indexBookBeingEdited].title = title;
  myLibrary[indexBookBeingEdited].author = author;
  myLibrary[indexBookBeingEdited].pagesTotal = pagesTotal;
  myLibrary[indexBookBeingEdited].pagesRead = pagesRead;
  myLibrary[indexBookBeingEdited].progressStatus = progress;
}

function updateCard(title, author, progress) {
  let bookCardToUpdate = document.querySelector(`div[data-book-index="${indexBookBeingEdited}"]`);
  let bookTitle = bookCardToUpdate.querySelector("h1.book-title");
  let bookAuthor = bookCardToUpdate.querySelector("p.book-author");
  let bookProgress = bookCardToUpdate.querySelector("span.progress-value");
  let progressCheckbox = bookCardToUpdate.querySelector("input.read-status");

  bookTitle.textContent = title;
  bookAuthor.textContent = author;
  bookProgress.textContent = progress;

  if (progress === 100) {
    progressCheckbox.checked = true;
  }
  else {
    progressCheckbox.checked = false;
  }
}

function deleteBook(index) {
  myLibrary = myLibrary.slice(0, index).concat(myLibrary.slice(index+1));
  
  removeElements(document.querySelectorAll(".book-card"));
  
  loadLibrary();
}

const removeElements = (elements) => elements.forEach(el => el.remove());

let myLibrary = [
  {
    title: "Harry Potter and the Half-Blood Prince",
    author: "J. K. Rowling",
    pagesTotal: 375,
    pagesRead: 100,
    progressStatus: 26.7
    },
  {
    title: "Mrs. McGinty's Dead",
    author: "Agatha Christie",
    pagesTotal: 230,
    pagesRead: 70,
    progressStatus: 30.4
  },
  {
    title: "Educated",
    author: "Tara Westover",
    pagesTotal: 460,
    pagesRead: 460,
    progressStatus: 100 
  },
  {
    title: "Sapiens: A Brief History of Humankind",
    author: "Yuval Noah Harari",
    pagesTotal: 500,
    pagesRead: 500,
    progressStatus: 100 
  },
  {
    title: "Capitães da Areia",
    author: "Jorge Amado",
    pagesTotal: 250,
    pagesRead: 210,
    progressStatus: 84
  }
];

let isAddNewBook = false;
let indexBookBeingEdited = null;

loadLibrary();

const newBookBtn = document.getElementById("new-book");
const submitFormBtn = document.getElementById("submit-form");
const cancelFormBtn = document.getElementById("cancel-form");
const bookFormContainer = document.getElementById("book-form");
const bookForm = document.querySelector("#book-form form");
const titleFormInput = document.getElementById("form-book-title");
const titleFormLabel = document.querySelector("label[for=form-book-title]");
const authorFormInput = document.getElementById("form-book-author");
const authorFormLabel = document.querySelector("label[for=form-book-author]");
const pagesReadFormInput = document.getElementById("form-book-pages-read");
const pagesReadFormLabel = document.querySelector("label[for=form-book-pages-read]");
const pagesTotalFormInput = document.getElementById("form-book-num-pages");
const pagesTotalFormLabel = document.querySelector("label[for=form-book-num-pages]");
const cardsGridContainer = document.getElementById("cards-grid");



newBookBtn.addEventListener("click", () => {
  bookFormContainer.classList.remove("display-none");
  isAddNewBook = true;
});

cancelFormBtn.addEventListener("click", () => {
  bookForm.reset();
  bookFormContainer.classList.add("display-none");
  isAddNewBook = false;
});

submitFormBtn.addEventListener("click", () => {
  let isValid = validateForm(titleFormInput.value, 
    authorFormInput.value, 
    pagesTotalFormInput.value, 
    pagesReadFormInput.value);

  if (isValid) {
    let bookProgress = 100* Math.round(1000*parseInt(pagesReadFormInput.value)/parseInt(pagesTotalFormInput.value))/1000;

    if (isAddNewBook) {

      addBookToLibrary(titleFormInput.value, 
        authorFormInput.value, 
        parseInt(pagesTotalFormInput.value), 
        parseInt(pagesReadFormInput.value), 
        bookProgress);
      
      addCard(titleFormInput.value, authorFormInput.value, bookProgress, myLibrary.length-1)
    }
    else {
      updateLibrary(titleFormInput.value, 
        authorFormInput.value, 
        pagesTotalFormInput.value, 
        pagesReadFormInput.value, 
        bookProgress);

      updateCard(titleFormInput.value,
        authorFormInput.value,
        bookProgress);
    }
    bookForm.reset();
    bookFormContainer.classList.add("display-none");
    isAddNewBook = false;
    indexBookBeingEdited = null;
  }
});

cardsGridContainer.addEventListener("click", e => {
  let bookCard = e.target.closest(".book-card");
  let bookIndex = parseInt(bookCard.getAttribute("data-book-index"));
  /*If e.target = delete btn => ...*/
  if (e.target.classList.contains("delete-book")) {
    deleteBook(bookIndex);
  }
  /*If e.target = read checkbox => ...*/
  /*Else: */
  else {
    titleFormInput.value = myLibrary[bookIndex].title;
    authorFormInput.value = myLibrary[bookIndex].author;
    pagesReadFormInput.value = myLibrary[bookIndex].pagesRead;
    pagesTotalFormInput.value = myLibrary[bookIndex].pagesTotal;

    bookFormContainer.classList.remove("display-none");
    indexBookBeingEdited = bookIndex;
  }
},true)