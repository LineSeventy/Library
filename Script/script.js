const myLibrary =[];

function book(name, genre, audience, readStatus) {
    this.name = name;
    this.genre = genre; 
    this.audience = audience;
    this.readStatus = readStatus;
}

function addBookToLibrary() {
    document.getElementById("userForm").addEventListener('submit', function(event) {
        event.preventDefault();
        
        let display = document.querySelector(".anchor");
        let nameGiven = document.getElementById("nameInput").value;
        let genreGiven = document.getElementById("genreInput").value;
        let audienceGiven = document.getElementById("audienceInput").value;
        let readStatusGiven =  document.getElementById("readStatus").value;
        let content = document.createElement("li");

        let addBook = new book(nameGiven, genreGiven, audienceGiven,readStatusGiven);

        const index = myLibrary.length -1;
        content.setAttribute('data-index', index);
        
        myLibrary.push(addBook);
        content.textContent = `Name: ${addBook.name}, Genre: ${addBook.genre}, Audience: ${addBook.audience} Status: ${addBook.readStatus}` ;

        let deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.onclick = function() {
            deleteBook(index);
        }
        content.appendChild(deleteBtn);

        let readBtn = document.createElement("button")
        readBtn.textContent = "Read Status";
        readBtn.onclick = () => {
            readStatus(content, addBook);
        }
        content.appendChild(readBtn);

        document.getElementById("nameInput").value ='';
        document.getElementById("genreInput").value ='';
        document.getElementById("audienceInput").value = '';
        document.getElementById("readStatus").value = 'Not Read';
        
        display.appendChild(content);
        dialog.close();
    });
}
 
let dialog = document.querySelector("dialog");
let showBtn = document.querySelector("dialog + button");
let closeBtn = document.querySelector("dialog button");


function modalBtn(){
    showBtn.addEventListener("click", () => {
        dialog.showModal();
    })
    
    closeBtn.addEventListener("click", () => {
        dialog.close();
    })
}

function deleteBook(index){
    myLibrary.splice(index, 1);

     content = document.querySelector(`li[data-index= '${index}']`);
    content.remove();

     content = document.querySelectorAll('anchor li');
     content.array.forEach((item, i) => {
        item.setAttribute('data-index', i)
     });
}
function readStatus(content, addBook){
    let readStatusGiven =  document.querySelector("#readStatus");
    let currentStatus = readStatusGiven.value;

    if(currentStatus === "Have Read"){
        readStatusGiven.value = 'Not Read'
    } else{
        readStatusGiven.value = 'Have Read';        
    }
    content.textContent = `Name: ${addBook.name}, Genre: ${addBook.genre}, Audience: ${addBook.audience} Status: ${addBook.readStatus}` ;

    let deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.onclick = function() {
        deleteBook(content.getAttribute('data-index'));
    };
    content.appendChild(deleteBtn);

    let readBtn = document.createElement("button");
    readBtn.textContent = "Change Read Status";
    readBtn.onclick = function() {
        readStatus(content, addBook);
    };
}
modalBtn()
addBookToLibrary();
