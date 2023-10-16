const bookList = document.querySelector("#book-list ul");

let listStorage = ()=>{ localStorage.setItem("myStorage",bookList.innerHTML);}

let getStorage = ()=>{
    bookList.innerHTML = localStorage.getItem("myStorage");}
    
const addBook = document.querySelector("#add-book")
const bookSearch = document.querySelector("#search-books input");

//REMOVING BOOKS
bookList.addEventListener("click", (e)=>{
if(e.target.className==="delete"){
    let btn = e.target.parentNode;
    bookList.removeChild(btn); 
    listStorage();
}
});

console

//ADDING BOOKS
addBook.addEventListener("submit", (e)=>{
    e.preventDefault();
    let txtInput = addBook.querySelector("input");
    if(txtInput.value!==""){
        let newBook = document.createElement("li");
    let title = document.createElement("span");
    title.className = "name";
    title.textContent = txtInput.value;
    let del_btn = document.createElement("span");
    del_btn.className = "delete";
    del_btn.textContent="delete";
    newBook.appendChild(title);
    newBook.appendChild(del_btn);
    bookList.append(newBook); 
    txtInput.value = "";
    listStorage();
    }
     
})

//BOOK SEARCH

bookSearch.addEventListener("keyup",(e)=>{
let s_keyword = e.target.value;
let allBooks = document.querySelectorAll("#book-list li .name");
allBooks.forEach((a)=>{
    a.textContent.toLowerCase();
    s_keyword.toLowerCase();
    if (a.textContent.toLowerCase().indexOf(s_keyword.toLowerCase())!== -1){
      a.parentNode.style.display = "block";
}else{
    a.parentNode.style.display = "none";
}
})
});

//HIDE BOOKS
const hide = document.querySelector(".checkbox #checkbox");

hide.addEventListener("change",(e)=>{
    return(hide.checked)? bookList.style.display = "none" : bookList.style.display = "block";
});


/* 
let myPromise = new Promise((resolve, reject)=>{
    setTimeout( ()=>{
        resolve("Data retrieved sucessfully");
    }, 5000)
}
);

myPromise.then((value)=>{
    console.log(value);
}
) */