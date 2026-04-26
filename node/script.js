const fs = require("fs");

// fs.writeFile("man.txt", "Hello world", (err) => {
//   if (err) console.log(err);
//   else console.log("donen!");
// });

// fs.appendFile("man.txt", " hi", (err) => {
//   if (err) console.log(err);
//   else console.log("done!");
// });

// fs.copyFile("man.txt", "./copy/nam.txt", (errr) => {
//   if (errr) console.log(errr);
//   else console.log("done!");
// });

// fs.readFile("./copy/nam.txt", "utf-8", (err, data) => {
//   if (err) console.log(err);
//   else console.log("File contains : " + data);
// });

fs.unlink("./copy/nam.txt", (err) => {
  if (err) console.log(err);
  else console.log("File id deleted successfully!");
});
