const bookArray = [];

function Book(title, author, pages, status = false) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status = status;
}

const button = document.querySelector('#newbook');
const bookname = document.querySelector('#bookName');
const author = document.querySelector('#author');
const pages = document.querySelector('#pages');
const form = document.querySelector('#form');
const read = document.getElementById('readBookCheck');
const display = document.querySelector('#display');

button.addEventListener('click', (e) => {
  e.preventDefault();
  document.querySelector('#form').classList.remove('d-none');
});

function createNewBook(book, index) {
  const AllBooks = document.createElement('div');
  AllBooks.classList.add('card');
  const cardBody = document.createElement('div');
  cardBody.classList.add('card-body');

  const cardTitle = document.createElement('h5');
  cardTitle.textContent = `${book.title}`;
  cardTitle.classList.add('card-title');
  cardBody.appendChild(cardTitle);

  const author = document.createElement('h6');
  author.textContent = `${book.author}`;
  author.classList.add('card-subtitle');
  cardBody.appendChild(author);

  const pages = document.createElement('h6');
  pages.textContent = `${book.pages}`;
  pages.classList.add('card-subtitle');
  cardBody.appendChild(pages);

  const endbutton = document.createElement('button');
  endbutton.classList.add('btn');
  endbutton.setAttribute('data-index', index);
  endbutton.innerText = book.status ? 'Readed' : 'Unreaded';
  cardBody.appendChild(endbutton);

  const deletebutton = document.createElement('button');
  deletebutton.classList.add('btn');
  deletebutton.setAttribute('data-index', index);
  deletebutton.innerHTML = '<i class="fas fa-trash"></i>';
  cardBody.appendChild(deletebutton);

  AllBooks.appendChild(cardBody);
  display.appendChild(AllBooks);

  endbutton.addEventListener('click', EndBook);
  deletebutton.addEventListener('click', DeleteBook);
}

form.addEventListener('submit', addBookToLibrary);

function updateBookList() {
  display.innerHTML = '';
  bookArray.forEach((book, index) => createNewBook(book, index));
}

function addBookToLibrary(e) {
  e.preventDefault();
  if (bookname.value == '' || author.value == '' || pages.value == '') {
    alert('Fill All Fields');
  } else {
    const book = new Book(
      bookname.value,
      author.value,
      pages.value,
      read.chacked,
    );
    bookArray.push(book);
    updateBookList();
    form.reset();
  }
}

function DeleteBook(e) {
  const item = e.target;
  const index = item.getAttribute('data-index');
  bookArray.splice(index, 1);
  updateBookList();
}

function EndBook(e) {
  const item = e.target;
  const index = item.getAttribute('data-index');
  const book = bookArray[index];
  book.status = !book.status;
  updateBookList();
}