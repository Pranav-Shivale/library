const myLibrary = [];
const bookshelf = document.querySelector(".bookshelf");

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
}

function displayBooks() {
  for(const book of myLibrary) {
    const newCard = document.createElement("div");
    const newTitle = document.createElement("div");
    const newAuthor = document.createElement("div");
    const newChapterCount = document.createElement("div");
    const newStatus = document.createElement("div");

    newTitle.textContent = book.title;
    newAuthor.textContent = book.author;
    newChapterCount.textContent = "Chapters: " + book.chapterCount;
    newStatus.textContent = "Status: " + book.status;
    newTitle.classList.add("title");

    newCard.appendChild(newTitle);
    newCard.appendChild(newAuthor);
    newCard.appendChild(newChapterCount);
    newCard.appendChild(newStatus);
    newCard.classList.add("card");

    bookshelf.appendChild(newCard); 
  }
}

addBookToLibrary("Usogui", "Sako Toshio", 539, "Completed");
addBookToLibrary("20th Century Boys", "Naoki Urasawa", 249, "Reading");
addBookToLibrary("Chainsaw Man", "Tatsuki Fujimoto", 281, "Plan to read");
addBookToLibrary("Oyasumi Punpun", "Inio Asano", 147, "Completed");
addBookToLibrary("Vagabond", "Takehiko Inoue", 327, "Reading");
addBookToLibrary("Pluto", "Naoki Urasawa", 65, "Plan to read");

displayBooks();