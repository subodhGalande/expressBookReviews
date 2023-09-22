const express = require('express');
const jwt = require('jsonwebtoken');
let books = require("./booksdb.js");
const regd_users = express.Router();

let users = [ {
 "username" : "subodh",
 "password" : "12345"
},
{
  "username" : "hello",
  "password" : "world"
} ];

const isValid = (username)=>{ 
  users.forEach(user => {
    if(user.username == username){
      return true;
    
  }
 }
  );
//returns boolean

//write code to check is the username is valid
}

authenticatedUser = async (username,password)=>{ 
  
 users.forEach(user => {
  if(user.username == username && user.password == password)
    
      return true;
 });
   
//returns boolean
//write code to check if username and password match the one we have in records.
}

//only registered users can login
regd_users.post("/login", (req,res) => {
  //Write your code here
  let authenticatUser = authenticatedUser(req.body.username, req.body.password)
  if (authenticatUser){
    return res.status(300).json({message: "Login successfull"});
  }else{
    return res.status(300).json({message: "user not found", authenticatUser: req.body.username});  
  }
});

// Add a book review
regd_users.put("/auth/review/:isbn", (req, res) => {
  //Write your code here
  return res.status(300).json({message: "Yet to be implemented"});
});

module.exports.authenticated = regd_users;
module.exports.isValid = isValid;
module.exports.users = users;
