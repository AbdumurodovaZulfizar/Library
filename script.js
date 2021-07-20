let bookArray = [];

function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status = false;
}

let button = document.querySelector("#newbook");
let bookname = document.querySelector("#bookName");
let author = document.querySelector("#author");
let pages = document.querySelector("#pages");
let form = document.querySelector("#form");

button.addEventListener( "click", (e)=> {
  e.preventDefault();
  document.querySelector("#form").classList.remove("d-none")
})

function createNewBook() {

}

form.addEventListener('submit', addBookToLibrary)


function addBookToLibrary(e) {
  e.preventDefault()
  if (bookname.value == "" || author.value == "" || pages.value == ""){
    alert("Fill All Fields");
  }
  else {
    let new_book = {};
    new_book.name = bookname.value;
    new_book.auhtor = author.value;
    new_book.pages = pages.value;
    console.log(new_book);
    bookArray.push(new_book);
  }
}

const diplayBook = document.createElement('div')
let display = document.querySelector('#display')
display.appendChild(displayBook)