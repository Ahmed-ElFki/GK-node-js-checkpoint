let fs = require("fs");

fs.readFile("Hello.txt", "utf8", function (err, data) {
  if (err) return console.log(err);
  console.log(data);
});
