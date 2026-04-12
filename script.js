const myLibrary = [];
const bookshelf = document.querySelector(".bookshelf");
const showBtn = document.querySelector("#new-book-btn");
const newBookDialog = document.querySelector("#new-book-dialog");
const form = document.querySelector(".new-book-form");
const cancelBtn = document.querySelector(".cancel-btn");
const submitBtn = document.querySelector(".submit-btn");
const titleEl = document.querySelector("#title");
const authorEl = document.querySelector("#author");
const chapterCountEl = document.querySelector("#chapter-count");
const statusEl = document.querySelector("#status");

function Book(id, title, author, chapterCount, status) {
  this.id = id;
  this.title = title;
  this.author = author;
  this.chapterCount = chapterCount;
  this.status = status;
}

function addBookToLibrary(title, author, chapterCount, status) {
  let id = crypto.randomUUID();
  let newBook = new Book(id, title, author, chapterCount, status);
  myLibrary.push(newBook);  
  displayBook();
}

function displayBook() {
    const book = myLibrary.at(-1);  

    const newCard = document.createElement("div");
    const newTitle = document.createElement("div");
    const newAuthor = document.createElement("div");
    const newChapterCount = document.createElement("div");
    const newStatus = document.createElement("div");

    const removeBookBtn = document.createElement("button");
    removeBookBtn.classList.add("remove-btn");
    
    newTitle.textContent = book.title;
    newAuthor.textContent = book.author;
    newChapterCount.textContent = "Chapters: " + book.chapterCount;
    newStatus.textContent = "Status: " + book.status;
    removeBookBtn.textContent = "Remove Book";
    newTitle.classList.add("title");

    newCard.appendChild(newTitle);
    newCard.appendChild(newAuthor);
    newCard.appendChild(newChapterCount);
    newCard.appendChild(newStatus);
    newCard.appendChild(removeBookBtn);
    newCard.classList.add("card");

    newCard.setAttribute("data-id", book.id); // Set attribute to associate DOM element with Book objects
    
    bookshelf.appendChild(newCard); 
    removeButton(removeBookBtn);
}

function removeButton(btn) {
    btn.addEventListener("click", () => {
    const btnId = btn.parentElement.dataset.id;
    const removeIndex = myLibrary.findIndex((book) => book.id === btnId);
    myLibrary.splice(removeIndex, 1);
    btn.parentElement.remove();
  });
}

addBookToLibrary("Usogui", "Sako Toshio", 539, "Completed");
addBookToLibrary("20th Century Boys", "Naoki Urasawa", 249, "Reading");
addBookToLibrary("Chainsaw Man", "Tatsuki Fujimoto", 281, "Plan to read");
addBookToLibrary("Oyasumi Punpun", "Inio Asano", 147, "Completed");
addBookToLibrary("Vagabond", "Takehiko Inoue", 327, "Reading");
addBookToLibrary("Pluto", "Naoki Urasawa", 65, "Plan to read");

showBtn.addEventListener("click", () => {
  newBookDialog.showModal();
});

cancelBtn.addEventListener("click", () => {
  newBookDialog.close();
});

submitBtn.addEventListener("click", (event) => {
  if(form.checkValidity()) {
    event.preventDefault();
    addBookToLibrary(titleEl.value, authorEl.value, chapterCountEl.value, statusEl.value);
    form.reset();
    newBookDialog.close();
  }
});