const mongoose = require("mongoose");
const BlogPost = require("./models/BlogPost");
mongoose.connect("mongodb://localhost/blogProject", { useNewUrlParser: true });

// TO CREATE A BLOGPOST
// BlogPost.create(
//   { title: "Money is good", body: "I really know" },
//   (error, blogpost) => {
//     console.log(error, blogpost);
//   }
// );

// TO FIND ALL

// BlogPost.find({}, (error, blogpost) => {
//   console.log(error, blogpost);
// });

// TO FIND BY TITLE

// BlogPost.find({ title: "Money is good" }, (error, blogpost) => {
//   console.log(error, blogpost);
// });

// TO FIND ALL WITH KEYWORD 'THE' IN TITLE

// BlogPost.find({ title: /The/ }, (error, blogpost) => {
//   console.log(error, blogpost);
// });

// TO FIND BY ID
// var id = "634268a3e2c0f9e6378e0b7d";
// BlogPost.findById(id, (error, blogpost) => {
//   console.log(error, blogpost);
// });

// TO FIND BY ID AND UPDATE
// var id = "634268a3e2c0f9e6378e0b7d";
// BlogPost.findByIdAndUpdate(
//   id,
//   { title: "Story of my life" },
//   (error, blogpost) => {
//     console.log(error, blogpost);
//   }
// );

// TO FIND BY ID AND DELETE
// var id = "634268a3e2c0f9e6378e0b7d";
// BlogPost.findByIdAndDelete(id, (error, blogpost) => {
//   console.log(error, blogpost);
// });
