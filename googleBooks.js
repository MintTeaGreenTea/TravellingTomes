document.getElementById('searchQuery').addEventListener('input', function() {
    let searchQuery = document.getElementById('searchQuery').value;
    if (searchQuery.length >= 3) {
        searchBooks(searchQuery);
    } else {
        clearDropdown();
    }
});

function searchBooks(query) {
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}&key=AIzaSyBggiOPyDmer6A90ryZsJjXl8v_v6jdzl4&maxResults=5`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log('Data:', data);
            if (data && data.items && data.items.length > 0) {
                displayDropdown(data);
            } else {
                clearDropdown();
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            clearDropdown();
        });
}

function displayDropdown(data) {
    let dropdown = document.getElementById('searchResultsDropdown');
    dropdown.innerHTML = ''; // Clear previous results

    if (data.items && data.items.length > 0) {
        data.items.forEach(item => {
            // Check if the volumeInfo object contains a title
            if (item.volumeInfo && item.volumeInfo.title) {
                let title = item.volumeInfo.title;
                let option = document.createElement('div');
                option.textContent = title;
                option.addEventListener('click', function() {
                    document.getElementById('searchQuery').value = item.volumeInfo.infoLink;
                    clearDropdown();
                });
                dropdown.appendChild(option);
            }
        });
    } else {
        dropdown.innerHTML = '<div>No results found.</div>';
    }
}


function clearDropdown() {
    let dropdown = document.getElementById('searchResultsDropdown');
    dropdown.innerHTML = '';
}
