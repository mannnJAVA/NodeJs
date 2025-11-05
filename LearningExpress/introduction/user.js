const fs = require("fs");

const userRequestHandler = (req, res) => {
  console.log(req.url, req.method);
  //process.exit();

  //res.setHeader("Content-Type", "json"); or we can use single quote ' '
  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Complete Coding</title></head>");
    res.write("<body><h1>Welcome to Home</h1>");

    res.write('<form action="/submit-details" method="POST">');
    res.write(
      '<input type="text" name="username" placeholder="Enter your name"/><br>'
    );
    res.write(
      '<input type="email" name="email" placeholder="Enter your email"/><br>'
    );
    res.write('<label for="male">Male</label>');
    res.write('<input type="radio" id="male" name="gender" value="male" />');
    res.write('<label for="female">Female</label>');
    res.write('<input type="radio" id="female" name="gender" value="male" />');
    res.write('<br><input type="submit" value="submit"/>');

    res.write("</form>");

    res.write("</body>");
    res.write("</html>");
    return res.end(); // always return res.end(); if you have to fetch another request else it will end at first request
  } else if (
    req.url.toLowerCase() === "/submit-details" &&
    req.method == "POST"
  ) {
    const body = [];
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });

    req.on("end", () => {
      const fullBody = Buffer.concat(body).toString();
      console.log(fullBody);
      const params = new URLSearchParams(fullBody);
      // const bodyObject = {};
      // for (const [key, val] of params.entries()) {
      //   bodyObject[key] = val;
      // }
      const bodyObject = Object.fromEntries(params);
      fs.writeFileSync("user.txt", JSON.stringify(bodyObject));
      console.log(bodyObject);
    });

    res.statusCode = 302;
    res.setHeader("Location", "/");
  }
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>Complete Coding</title></head>");
  res.write("<body><h1>My Page</h1></body>");
  res.write("</html>");
  res.end();
};

module.exports = userRequestHandler;
