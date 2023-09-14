const express = require('express');
let books = require("./booksdb.js");
let isValid = require("./auth_users.js").isValid;
let users = require("./auth_users.js").users;
const public_users = express.Router();


public_users.post("/register", (req,res) => {
  //Write your code here
  return res.status(300).json({message: "Yet to be implemented"});
});

// Get the book list available in the shop
public_users.get('/',function (req, res) {
  //Write your code here
 
});

// Get book details based on ISBN
public_users.get('/isbn/:isbn',function (req, res) {
  //Write your code here
  const isbn = req.params.isbn;
  let filtered_isbn = books[isbn];
  res.send(filtered_isbn);
 });
  
// Get book details based on author
public_users.get('/author/:author',function (req, res) {
  //Write your code here
  const author_param = req.params.author;
  let booklist = Object.keys(books);
  for (let i = 1; i<booklist.length; i++){
    let authorbyISBN = books[i];
    if (authorbyISBN.author === author_param ){
      return res.status(300).json({booksbyAuthor: [
        {isbn: i,
         title: authorbyISBN.title,
         reviews: authorbyISBN.reviews}
        
      ]});
    }  
    
  }
  
  
 
  
  
});

// Get all books based on title
public_users.get('/title/:title',function (req, res) {
  const title_param = req.params.title;
  let booklist = Object.keys(books);
  for (let i = 1; i<booklist.length; i++){
    let titleByIsbn = books[i];
    if (titleByIsbn.title === title_param ){
      return res.status(300).json({booksbyTitle: [
        {isbn: i,
         Author: titleByIsbn.author,
         reviews: titleByIsbn.reviews}
        
      ]});
    }
  }
  //Write your code here
 
});

//  Get book review
public_users.get('/review/:isbn',function (req, res) {
  //Write your code here
  const isbn = req.params.isbn;
  let filtered_isbn = books[isbn];
  res.send(filtered_isbn.reviews);
  
});

module.exports.general = public_users;
