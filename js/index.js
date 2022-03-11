const button = document.querySelector("#submit");
let titleDisplay = document.querySelector("#new-book-title");
let authorDisplay = document.querySelector("#new-book-author");
let pagesDisplay = document.querySelector("#new-book-pages");
let readDisplay = document.querySelector("#new-book-read");

// let myLibrary = [
//   { title: "yo", author: "test", pages: 20, read: "reading" },
//   {
//     title: "the Midnight Library",
//     author: "Matt Haig",
//     pages: 308,
//     read: "finished",
//   },
// ];
let myLibrary = [];
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
  displayNewBook(test);
}

function displayNewBook(newBook) {
  let bookList = document.querySelector("tbody");
  // bookList.innerHTML += `<tr id="newBook"> <td>${newBook.title} </td> <td> ${newBook.author} </td>
  //       <td> ${newBook.pages} </td> <td> ${newBook.read} </td> </tr>`;
  let newRow = document.createElement("tr");
  let titleData = document.createElement("td");
  let authorData = document.createElement("td");
  let pageData = document.createElement("td");
  let progressData = document.createElement("td");
  let deleteColumn = document.createElement("td");
  let title = document.createTextNode(newBook.title);
  let author = document.createTextNode(newBook.author);
  let pages = document.createTextNode(newBook.pages);
  let progress = document.createTextNode(newBook.read);

  bookList.appendChild(newRow);
  newRow.classList.add("newBook");
  newRow.appendChild(titleData);
  newRow.appendChild(authorData);
  newRow.appendChild(pageData);
  newRow.appendChild(progressData);
  newRow.appendChild(deleteColumn);
  titleData.appendChild(title);
  authorData.appendChild(author);
  pageData.appendChild(pages);
  progressData.appendChild(progress);

  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("btn");
  deleteBtn.innerHTML = '<i class="material-icons center">delete</i>';
  deleteColumn.appendChild(deleteBtn);
  deleteBtn.addEventListener("click", () => {
    newRow.remove();
  });
}

// function displayBooks() {
//   let bookList = document.querySelector("tbody");
//   for (let i = 0; i < myLibrary.length; i++) {
//     bookList.innerHTML += `<tr class="newBook"> <td>${myLibrary[i].title} </td> <td> ${myLibrary[i].author} </td>
//    <td>${myLibrary[i].pages} </td> <td>${myLibrary[i].read} </td> </tr>
//     `;
//   }
// }
// displayBooks();
