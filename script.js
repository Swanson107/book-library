let books = [];

function Book(title, date, author) {
    this.title = title;
    this.date = date;
    this.author = author;
}

const twilight = new Book('Twilight', 2006, 'Stephanie Meyers');
const twilightTwo = Object.create(twilight);
twilightTwo.title = 'New Moon';
twilightTwo.date = 2008;
twilightTwo.author = twilight.author;

books.push(twilight);
books.push(twilightTwo);

function addToBooks() {
    let newTitle = prompt('Enter a book title');
    let newDate = prompt('Enter a date (must be a valid integer)');
    let newAuthor = prompt('Enter author name');

    const newBook = new Book(newTitle, parseInt(newDate), newAuthor);
    books.push(newBook);
    
}

console.table(books);


document.getElementById('submit-book').addEventListener('click', function() {
    
})