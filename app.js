const myLibrary = [];

function Book(title, author, pages = 0, read = false) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    return `${title} by ${author}, ${pages} pages, ${
      read ? "already readed" : "not read yet"
    }`;
  };
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
    const title = document.createElement("h3");
    title.textContent = book.title;
    const author = document.createElement("h4");
    author.textContent = book.author;
    const numOfPages = document.createElement("h5");
    numOfPages.textContent = `${book.pages} страницы`;
    if (book.read) {
      newBook.classList.add("readed");
    } else {
      newBook.classList.add("notReaded");
    }
    newBook.appendChild(author);
    newBook.appendChild(title);
    newBook.appendChild(numOfPages);
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
