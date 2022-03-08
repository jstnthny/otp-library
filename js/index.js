const button = document.querySelector("#submit");
let titleDisplay = document.querySelector("#new-book-title");
let authorDisplay = document.querySelector("#new-book-author");
let pagesDisplay = document.querySelector("#new-book-pages");
let readDisplay = document.querySelector("#new-book-read");
let myLibrary = [{title: 'yo', author: 'test', pages: 20, read: 'reading'}, 
                {title: 'the Midnight Library', author: 'Matt Haig', pages: 308, read: 'finished'}];
// let myLibrary = [];
button.addEventListener("click", addBookToLibrary);

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
    this.pages = pages;
    this.read = read;
  //   this.info = function () {
  //     return `${title}`;
  //   };
}

function addBookToLibrary() {
  let newBookTitle = document.querySelector("#title").value;
  let newBookAuthor = document.querySelector("#author").value;
  let newBookPages = document.querySelector("#pages").value;
  let newBookRead = document.querySelector("#read").value;
  let test = new Book(newBookTitle, newBookAuthor, newBookPages, newBookRead);
  //   myLibrary.push(newBook);
  myLibrary.push(test);
  // displayBooks();
}

function displayBooks(){
  let bookList = document.querySelector(".book-list");
  for (let i = 0; i <= myLibrary.length; i++){
    bookList.innerHTML += `<div class="book"> <ul>Title: ${myLibrary[i].title} <li>Author: ${myLibrary[i].author} </li>
   <li> Pages: ${myLibrary[i].pages} </li> <li> Progress: ${myLibrary[i].read} </li> <ul></div>
    ` ;
  }

}

displayBooks();
// titleDisplay.innerText = myLibrary[0].title;
// authorDisplay.innerText = myLibrary[0].author;
// pagesDisplay.innerText = myLibrary[0].pages;
// readDisplay.innerText = myLibrary[0].read;
// console.log(myLibrary[0].title + " " + myLibrary[0].author);