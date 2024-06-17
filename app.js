const myLibrary = [];
class Book {
  constructor(title, author, pages = 0, read = false) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }

  info() {
    return `${title} by ${author}, ${pages} pages, ${
      read ? "already readed" : "not read yet"
    }`;
  }
}

function addBookToLibrary(title, author, pages, read) {
  const newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
}

addBookToLibrary("Война и мир", "wesdfsdfr", 123, true);
addBookToLibrary("Олеся", "sfdsd", 24, false);
addBookToLibrary("Мертвые души", "wesdr", 234, true);
addBookToLibrary("Гранатовый браслет", "dsdsf", 999, false);
addBookToLibrary("Война и мир", "wesdfsdfr", 123, true);
addBookToLibrary("Олеся", "sfdsd", 24, false);
addBookToLibrary("Мертвые души", "wesdr", 234, true);
addBookToLibrary("Гранатовый браслет", "dsdsf", 999, false);

const shelf = document.querySelector(".books-container");
function updateShelf() {
  myLibrary.forEach((book) => {
    const newBook = document.createElement("div");
    newBook.classList.add("book");
    newBook.style.backgroundColor = `${book.read ? "#22c55e" : "#ef4444"}`;

    const bookDiv = document.createElement("div");
    bookDiv.classList.add("book-upper");

    const title = document.createElement("h3");
    title.textContent = book.title;
    title.classList.add("book-title");
    const author = document.createElement("h4");
    author.textContent = book.author;
    author.classList.add("book-author");
    const numOfPages = document.createElement("h5");
    numOfPages.textContent = `${book.pages} страницы`;
    numOfPages.classList.add("book-pages");

    newBook.appendChild(bookDiv);

    bookDiv.appendChild(author);
    bookDiv.appendChild(title);
    bookDiv.appendChild(numOfPages);

    const isRead = document.createElement("h4");
    isRead.textContent = `${book.read ? "Прочитано" : "Не прочитано"}`;
    isRead.classList.add("book-read");

    newBook.appendChild(isRead);
    shelf.appendChild(newBook);
  });
}

updateShelf();

console.log(myLibrary);

const showDialog = document.querySelector(".menu button");
const dialog = document.querySelector("dialog");
showDialog.addEventListener("click", (e) => {
  dialog.showModal();
});

const closeButton = document.querySelector(".submit");
closeButton.addEventListener("click", (e) => {
  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const pages = document.querySelector("#pages").value;
  const read = document.querySelector("#read").checked;
  addBookToLibrary(title, author, pages, read);
  shelf.innerHTML = "";
  updateShelf();
  dialog.close();
});
