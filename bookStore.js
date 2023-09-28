/* 
A program that reads your book information from the CLI and logs the information in the console.
*/

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

//PROMTS
rl.question("Title: ", function (userInputA) {
  rl.question("Author: ", function (userInputB) {
    rl.question("Pages: ", function (userInputC) {
      rl.question("Read? (y/n): ", function (userInputD) {
        if (userInputD === "y") {
          isRead = "and is read";
        } else {
          isRead = " and is not read yet!";
        }
        isPages = userInputC;
        isAuthor = userInputB;
        isTitle = userInputA;

        const myBook = new book(isTitle, isAuthor, isPages, isRead); //Creating an object of the book function
        myBook.info(); //accessing a property

        rl.close();
      });
    });
  });
});

//BookInfo and display function
function book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    console.log(`${title} by ${author}, is ${pages} pages, ${read}`);
  };
}

const book1 = new book("The Harry Potter", "JKRowling", 295, "not read yet!");
