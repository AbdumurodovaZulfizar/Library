let bookArray = [];

function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
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
    console.log(new_book)
    new_book.name = bookname.value;
    new_book.auhtor = author.value;
    new_book.pages = pages.value;
    console.log(new_book);
    bookname.push(new_book);
    form.submit(); // Submit the form
   form.reset();  // Reset all form data
   return false;
  }
}