// Define the array of books directly in JavaScript
const books = [
    { title: "Pride and Prejudice", author: "Jane Austen", status: "Unavailable", exchangeDate: "2024-05-03" },
    { title: "Crudo", author: "Olivia Laing", status: "Available" },
    { title: "Good Material", author: "Dolly Alderton", status: "Unavailable", exchangeDate: "2024-05-12" },
    { title: "The Bell Jar", author: "Sylvia Plath", status: "Available" },
    { title: "Orlando", author: "Virginia Woolf", status: "Unavailable", exchangeDate: "2024-05-07" },
    { title: "Normal People", author: "Sally Rooney", status: "Available" },
    { title: "Emma", author: "Jane Austen", status: "Unavailable" },
    { title: "Mrs. Dalloway", author: "Virginia Woolf", status: "Unavailable", exchangeDate: "2024-05-20" },
    { title: "Conversations with Friends", author: "Sally Rooney", status: "Unavailable" },
    { title: "Sense and Sensibility", author: "Jane Austen", status: "Available" },
    { title: "To the Lighthouse", author: "Virginia Woolf", status: "Unavailable" },
    { title: "The Picture of Dorian Gray", author: "Oscar Wilde", status: "Available" },
    { title: "My Year of Rest and Relaxation", author: "Ottessa Moshfeg", status: "Unavailable", exchangeDate: "2024-05-15" },
    { title: "Frankenstein", author: "Mary Shelley", status: "Available", exchangeDate: "2024-05-10" },
    { title: "Jane Eyre", author: "Charlotte Bronte", status: "Unavailable" },
    { title: "Wuthering Heights", author: "Emily Bronte", status: "Available" },
    { title: "Mansfield Park", author: "Jane Austen", status: "Unavailable" },
    { title: "The Secret History", author: "Donna Tartt", status: "Available", exchangeDate: "2024-05-25" },
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", status: "Unavailable" },
    { title: "Beloved", author: "Toni Morrison", status: "Available", exchangeDate: "2024-05-05" },
    { title: "The Catcher in the Rye", author: "J.D. Salinger", status: "Unavailable" },
    { title: "1984", author: "George Orwell", status: "Available" },
    { title: "The Handmaid's Tale", author: "Margaret Atwood", status: "Unavailable" },
    { title: "Brave New World", author: "Aldous Huxley", status: "Available" },
    { title: "The Road", author: "Cormac McCarthy", status: "Unavailable" }
];

// Define a function to display the book counts
function displayCounts() {
    const availableBooks = books.filter(book => book.status === 'Available').length;
    const exchangedThisMonth = books.filter(book => {
        const today = new Date();
        const exchangeDate = book.exchangeDate ? new Date(book.exchangeDate) : null;
        return exchangeDate && exchangeDate.getMonth() === today.getMonth() && exchangeDate.getFullYear() === today.getFullYear();
    }).length;

    const counterDiv = document.getElementById('bookCounter');
    counterDiv.innerHTML = `Available Books: ${availableBooks}<br>Books Exchanged This Month: ${exchangedThisMonth}`;
}

// Call the displayCounts function when the webpage loads
window.onload = displayCounts;
