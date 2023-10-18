const bookList = document.querySelector("#book-list ul");
const addBookForm = document.querySelector("#add-book");
const bookSearchInput = document.querySelector("#search-books input");
const hideBooksCheckbox = document.querySelector(".checkbox #checkbox");

// Save the book list to local storage
function saveBookListToStorage() {
    localStorage.setItem("myStorage", bookList.innerHTML);
}

// Load the book list from local storage
function loadBookListFromStorage() {
    bookList.innerHTML = localStorage.getItem("myStorage");
}

// Event listener for removing books
bookList.addEventListener("click", (e) => {
    if (e.target.className === "delete") {
        const btn = e.target.parentNode;
        bookList.removeChild(btn);
        saveBookListToStorage();
    }
});

// Event listener for adding books
addBookForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const txtInput = addBookForm.querySelector("input");
    if (txtInput.value !== "") {
        const newBook = document.createElement("li");
        const title = document.createElement("span");
        title.className = "name";
        title.textContent = txtInput.value;
        const delBtn = document.createElement("span");
        delBtn.className = "delete";
        delBtn.textContent = "delete";
        newBook.appendChild(title);
        newBook.appendChild(delBtn);
        bookList.appendChild(newBook);
        txtInput.value = "";
        saveBookListToStorage();
    }
});

// Event listener for book search
bookSearchInput.addEventListener("keyup", (e) => {
    const searchKeyword = e.target.value.toLowerCase();
    const allBooks = document.querySelectorAll("#book-list li .name");
    allBooks.forEach((book) => {
        const bookTitle = book.textContent.toLowerCase();
        if (bookTitle.indexOf(searchKeyword) !== -1) {
            book.parentNode.style.display = "block";
        } else {
            book.parentNode.style.display = "none";
        }
    });
});

// Event listener for hiding books
hideBooksCheckbox.addEventListener("change", (e) => {
    bookList.style.display = e.target.checked ? "none" : "block";
});

// Load the book list from local storage when the page loads
loadBookListFromStorage();
