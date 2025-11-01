const fs = require("fs");

fs.writeFile("output.txt", "Jay Dadaji", (err) => {
  {
    err
      ? console.log("Error Ocurred")
      : console.log("File Written Successfully");
  }
});
