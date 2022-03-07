const button = document.querySelector("#submit");
let myLibrary = [];
button.addEventListener("click", addBookToLibrary);

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  //   this.pages = pages;
  //   this.read = read;
  //   this.info = function () {
  //     return `${title}`;
  //   };
}

function addBookToLibrary() {
  let newBookTitle = document.querySelector("#title").value;
  let newBookAuthor = document.querySelector("#author").value;
  let test = new Book(newBookTitle, newBookAuthor);
  //   myLibrary.push(newBook);
  myLibrary.push(test);
  console.log(myLibrary[0].title + " " + myLibrary[0].author);
}
