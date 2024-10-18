const myLibrary =[{
    name: "test",
    genre: "test",
    audience: "test" 
}];

function book(name, genre, audience) {
    this.name = name;
    this.genre = genre; 
    this.audience = audience;
}

function addBookToLibrary(){

}

let display = document.querySelector(".anchor");

myLibrary.forEach(myLibrary => {
    let content = document.createElement("div");
    content.textContent =  `Name: ${myLibrary.name}, Genre: ${myLibrary.genre}, Audience: ${myLibrary.audience}`
display.appendChild(content);
})
