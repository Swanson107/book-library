let books = [];
const titleInput = document.getElementById('title-input');
const dateInput = document.getElementById('date-input');
const authorInput = document.getElementById('author-input');
const pagesInput = document.getElementById('pages-input');
const submitError = document.getElementById('submit-error');

function Book(title, date, author, pages) {
    this.title = title;
    this.date = date;
    this.author = author;
    this.pages = pages;
    this.read = false;
}

const twilight = new Book('Twilight', 2006, 'Stephanie Meyers', 267);
const twilightTwo = Object.create(twilight);
twilightTwo.title = 'New Moon';
twilightTwo.date = 2008;
twilightTwo.author = twilight.author;
twilightTwo.pages = 356;
twilightTwo.read = true;

books.push(twilight);
books.push(twilightTwo);

function addToBooks() {
    let newTitle = titleInput.value;
    let newDate = dateInput.value;
    let newAuthor = authorInput.value;
    let newPages = pagesInput.value;


    const newBook = new Book(newTitle, parseInt(newDate), newAuthor, parseInt(newPages));
    books.push(newBook);
}

console.table(books);


document.getElementById('submit-book').addEventListener('click', function() {
    if (titleInput.value === '' || dateInput.value === '' || authorInput.value === '') {
        submitError.textContent = 'Error. One or more fields are empty';
    } else {
        addToBooks();
        titleInput.value = '';
        dateInput.value = '';
        authorInput.value = '';
        pagesInput.value = '';
        submitError.textContent = 'Book submitted successfully';
        console.table(books);
    }
})