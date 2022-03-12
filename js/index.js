const button = document.querySelector("#submit");

let myLibrary = [];

// Event listener for when submit button is clicked
button.addEventListener("click", addBookToLibrary);

// Read Status
let statusIcon = document.querySelector(".status-icon");
statusIcon.value = "Not Read";
statusIcon.addEventListener("click", () => {
  if (statusIcon.textContent === "check_box_outline_blank") {
    statusIcon.textContent = "check_box";
    statusIcon.value = "Read";
  } else {
    statusIcon.textContent = "check_box_outline_blank";
    statusIcon.value = "Not Read";
  }
});

// Book Constructor Function
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

// Function to add new Book
function addBookToLibrary() {
  let newBookTitle = document.querySelector("#title").value;
  let newBookAuthor = document.querySelector("#author").value;
  let newBookPages = document.querySelector("#pages").value;
  let newBookRead = document.querySelector("#read").value;
  let test = new Book(newBookTitle, newBookAuthor, newBookPages, newBookRead);

  console.log(myLibrary);
  myLibrary.push(test);
  displayNewBook(test);
}

//Function to display new Book
function displayNewBook(newBook) {
  let bookList = document.querySelector("tbody");
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
