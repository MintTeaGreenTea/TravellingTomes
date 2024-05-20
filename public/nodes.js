let availableCount = 0;
let exchangedCount = 0;

function readCSVFromData(csvData) {
    const rows = csvData.split('\n');
    const books = [];

    rows.forEach(row => {
        const columns = row.split(',');
        const book = {
            title: columns[0],
            author: columns[1],
            status: columns[2],
            exchangeDate: columns[3]
        };

        if (book.status === 'Available') {
            availableCount++;
        } else if (book.status === 'Unavailable' && book.exchangeDate.includes('2024-05')) {
            exchangedCount++;
        }

        books.push(book);
    });

    displayBooks(books);
    displayCounts();
}

function displayCounts() {
    const countDiv = document.getElementById('countDiv');
    countDiv.innerHTML = `Available Books: ${availableCount}<br>Books Exchanged in May 2024: ${exchangedCount}`;
}

function displayBooks(books) {
    const bookListDiv = document.getElementById('bookList');

    books.forEach(book => {
        const bookDiv = document.createElement('div');
        bookDiv.classList.add('book');

        const titlePara = document.createElement('p');
        titlePara.textContent = `Title: ${book.title}`;

        const authorPara = document.createElement('p');
        authorPara.textContent = `Author: ${book.author}`;

        const statusPara = document.createElement('p');
        statusPara.textContent = `Status: ${book.status}`;

        const exchangeDatePara = document.createElement('p');
        exchangeDatePara.textContent = `Exchange Date: ${book.exchangeDate}`;

        bookDiv.appendChild(titlePara);
        bookDiv.appendChild(authorPara);
        bookDiv.appendChild(statusPara);
        bookDiv.appendChild(exchangeDatePara);

        bookListDiv.appendChild(bookDiv);
    });
}

const csvData = `Pride and Prejudice,Jane Austen,Unavailable,2024-05-09
Crudo,Olivia Laing,Available,
Good Material,Dolly Alderton,Unavailable,2024-05-12
The Bell Jar,Sylvia Plath,Available,
Orlando,Virginia Woolf,Unavailable,2024-05-11
Normal People,Sally Rooney,Available,
Emma,Jane Austen,Available,
Mrs. Dalloway,Virginia Woolf,Unavailable,2024-05-20
Conversations with Friends,Sally Rooney,Unavailable,
Sense and Sensibility,Jane Austen,Available,
To the Lighthouse,Virginia Woolf,Unavailable,
The Picture of Dorian Gray,Oscar Wilde,Available,
My Year of Rest and Relaxation,Ottessa Moshfeg,Unavailable,2024-05-15
Frankenstein,Mary Shelley,Available,2024-05-10
Jane Eyre,Charlotte Bronte,Unavailable,
Wuthering Heights,Emily Bronte,Available,
Mansfield Park,Jane Austen,Unavailable,
The Secret History,Donna Tartt,Available,2024-05-25
The Great Gatsby,F. Scott Fitzgerald,Unavailable,
Beloved,Toni Morrison,Available,2024-05-05
The Catcher in the Rye,J.D. Salinger,Unavailable,
1984,George Orwell,Available,
The Handmaid's Tale,Margaret Atwood,Unavailable,
Brave New World,Aldous Huxley,Available,
The Road,Cormac McCarthy,Unavailable,`;

readCSVFromData(csvData);
