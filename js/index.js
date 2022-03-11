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
  console.log(myLibrary);
  // console.log(test.title);
  myLibrary.push(test);
  // displayBooks();
  displayNewBook(test)

}

function displayNewBook(newBook){
  let bookList = document.querySelector("tbody");
    bookList.innerHTML += `<tr> <td>${newBook.title} </td> <td> ${newBook.author} </td>
        <td> ${newBook.pages} </td> <td> ${newBook.read} </td>`
}

function displayBooks(){
  let bookList = document.querySelector("tbody");
  for (let i = 0; i <= myLibrary.length; i++){
    bookList.innerHTML += `<tr> <td>${myLibrary[i].title} </td> <td> ${myLibrary[i].author} </td>
   <td>${myLibrary[i].pages} </td> <td>${myLibrary[i].read} </td> </tr>
    ` ;
  }

}

displayBooks();






