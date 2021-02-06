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

function setEmptyLibrary() {
  let emptyLibraryText = document.createElement("p");
  emptyLibraryText.textContent = "Library is Empty";
  emptyLibraryText.id = "lib-empty";

  let cardsGridContainer = document.getElementById("cards-grid");
  cardsGridContainer.appendChild(emptyLibraryText);
}

function loadLibrary() {
  if (myLibrary.length === 0) {
    setEmptyLibrary();
  }
  else {
    for(let i = 0; i < myLibrary.length; ++i) {
      addCard(myLibrary[i].title, myLibrary[i].author, myLibrary[i].progressStatus);
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
    author: "	Tara Westover",
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



newBookBtn.addEventListener("click", () => {
  bookFormContainer.classList.remove("display-none");
});

cancelFormBtn.addEventListener("click", () => {
  bookForm.reset();
  bookFormContainer.classList.add("display-none");
});

submitFormBtn.addEventListener("click", () => {
  let isValid = validateForm(titleFormInput.value, 
    authorFormInput.value, 
    pagesTotalFormInput.value, 
    pagesReadFormInput.value);
  
  if (isValid) {
    let bookProgress = 100* Math.round(parseInt(10* pagesReadFormInput.value)/parseInt(pagesTotalFormInput.value))/10;

    addBookToLibrary(titleFormInput.value, 
      authorFormInput.value, 
      parseInt(pagesTotalFormInput.value), 
      parseInt(pagesReadFormInput.value), 
      bookProgress);
    
    addCard(titleFormInput.value, authorFormInput.value, bookProgress)

    bookForm.reset();
    bookFormContainer.classList.add("display-none");
  }
});