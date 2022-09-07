let fs = require("fs");

fs.writeFile("Welcome.txt", "Hello Node", function (err) {
  if (err) return console.log(err);
  console.log("Welcome.txt file created successfully");
});
