let bookArray = [];

function Book(title, author, pages, status = false) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status = status;
}

let button = document.querySelector("#newbook");
let bookname = document.querySelector("#bookName");
let author = document.querySelector("#author");
let pages = document.querySelector("#pages");
let form = document.querySelector("#form");
let read = document.getElementById("readBookCheck");
let display = document.querySelector('#display')

button.addEventListener( "click", (e)=> {
  e.preventDefault();
  document.querySelector("#form").classList.remove("d-none")
})

function createNewBook() {

}

form.addEventListener('submit', addBookToLibrary)


function updateBookList() {
  display.innerHTML= "";
  bookArray.forEach((book, index) => createNewBook(book, index));
}

function addBookToLibrary(e) {
  e.preventDefault()
  if (bookname.value == "" || author.value == "" || pages.value == ""){
    alert("Fill All Fields");
  }
  else {
    const book = new Book(
      bookname.value,
      author.value,
      pages.value,
      read.chacked
    ),
    bookArray.push(book);
    updateBookList();
    form.reset
  }
}
