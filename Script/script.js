const myLibrary = [];

class Book {
  constructor(name, genre, audience, readStatus) {
    this.name = name;
    this.genre = genre;
    this.audience = audience;
    this._readStatus = readStatus; 
  }


  get readStatus() {
    return this._readStatus;
  }


  set readStatus(status) {
    if (status === 'Have Read' || status === 'Not Read') {
      this._readStatus = status;
    } else {
      console.log("Invalid status. Use 'Have Read' or 'Not Read'.");
    }
  }


  toggleReadStatus() {
    this.readStatus = this.readStatus === 'Have Read' ? 'Not Read' : 'Have Read';
  }
}


function addBookToLibrary() {
  document.getElementById("userForm").addEventListener('submit', function(event) {
    event.preventDefault();

    const display = document.querySelector(".anchor");
    const nameGiven = document.getElementById("nameInput").value;
    const genreGiven = document.getElementById("genreInput").value;
    const audienceGiven = document.getElementById("audienceInput").value;
    const readStatusGiven = document.getElementById("readStatus").value;

    const book = new Book(nameGiven, genreGiven, audienceGiven, readStatusGiven);
    const index = myLibrary.length;
    myLibrary.push(book);

    const content = document.createElement("li");
    content.setAttribute('data-index', index);
    content.textContent = `Name: ${book.name}, Genre: ${book.genre}, Audience: ${book.audience}, Status: ${book.readStatus}`;


    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.onclick = function() {
      deleteBook(index);
    };
    content.appendChild(deleteBtn);


    const readBtn = document.createElement("button");
    readBtn.textContent = "Toggle Read Status";
    readBtn.onclick = function() {
      book.toggleReadStatus();
      updateBookDisplay(content, book);
    };
    content.appendChild(readBtn);

    display.appendChild(content);


    document.getElementById("nameInput").value = '';
    document.getElementById("genreInput").value = '';
    document.getElementById("audienceInput").value = '';
    document.getElementById("readStatus").value = 'Not Read';
  });
}

function updateBookDisplay(content, book) {
  content.textContent = `Name: ${book.name}, Genre: ${book.genre}, Audience: ${book.audience}, Status: ${book.readStatus}`;
  

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.onclick = function() {
    deleteBook(content.getAttribute('data-index'));
  };
  content.appendChild(deleteBtn);

  const readBtn = document.createElement("button");
  readBtn.textContent = "Toggle Read Status";
  readBtn.onclick = function() {
    book.toggleReadStatus();
    updateBookDisplay(content, book);
  };
  content.appendChild(readBtn);
}


function modalBtn(){
  showBtn.addEventListener("click", () => {
    dialog.showModal();
  });
  
  closeBtn.addEventListener("click", () => {
    dialog.close();
  });
}

function deleteBook(index){
  myLibrary.splice(index, 1);

  const content = document.querySelector(`li[data-index='${index}']`);
  content.remove();


  const allContent = document.querySelectorAll(".anchor li");
  allContent.forEach((item, i) => {
    item.setAttribute('data-index', i);
  });
}

modalBtn();
addBookToLibrary();
