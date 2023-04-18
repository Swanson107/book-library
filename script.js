let books = [];
let bookDetails = [];

// inputs
const titleInput = document.getElementById("title-input");
const dateInput = document.getElementById("date-input");
const authorInput = document.getElementById("author-input");
const pagesInput = document.getElementById("pages-input");
const submitError = document.getElementById("submit-error");
const readCheck = document.getElementById("read-check");
let bookRead = false;

document.querySelector('h4').addEventListener('click', function() {
    console.log(bookRead);
})

function Book(title, date, author, pages, read) {
  this.title = title;
  this.date = date;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addToBooks() {
  let newTitle = titleInput.value;
  let newDate = dateInput.value;
  let newAuthor = authorInput.value;
  let newPages = pagesInput.value;
  let bookStatus = readCheck.checked;

  const newBook = new Book(
    newTitle,
    parseInt(newDate),
    newAuthor,
    parseInt(newPages),
    bookStatus
  );
  books.push(newBook);
  displayBooks();
}

const table = document.querySelector(".book-table");
tableCategories = [
  "Book Title",
  "Author",
  "Publishing Date",
  "Pages",
  "Completed",
];

function displayBooks() {
  table.innerHTML = "";
  const titleRow = document.createElement("tr");
  table.appendChild(titleRow);
  for (k = 0; k < 5; k++) {
    const tableTitle = document.createElement("th");
    tableTitle.className = "table-category";
    tableTitle.textContent = tableCategories[k];
    titleRow.appendChild(tableTitle);
  }
  for (let i = 0; i < books.length; i++) {
    const newBookRow = document.createElement("tr");
    table.appendChild(newBookRow);
    const book = books[i];
    const bookProperties = [
      book.title,
      book.date,
      book.author,
      book.pages,
    ];
    for (let j = 0; j < bookProperties.length; j++) {
      const newTableColumn = document.createElement("th");
      newTableColumn.className = "book-line";
      newTableColumn.textContent = bookProperties[j];
      newBookRow.appendChild(newTableColumn);
    }
    const bookStatus = document.createElement('img');
    bookStatus.className = 'book-check';
    if (book.read) {
        bookStatus.setAttribute('src', 'images/book-check-outline.svg');
    } else {
        bookStatus.setAttribute('src', 'images/book-cancel-outline.svg')
    }
    newBookRow.appendChild(bookStatus);
  }

}
displayBooks();

document.getElementById("submit-book").addEventListener("click", function () {
  if (titleInput.value === "") {
    submitError.textContent = "Error. Title needed";
  } else {
    addToBooks();
    titleInput.value = "";
    dateInput.value = "";
    authorInput.value = "";
    pagesInput.value = "";
    submitError.textContent = "Book submitted successfully";
    console.table(books);
  }
});
