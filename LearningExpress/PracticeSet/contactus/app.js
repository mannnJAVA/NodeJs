const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const cont = require("./routes/cont");
const hom = require("./routes/home");
const app = express();
const rootDir = require("./utils/pathUtils");

app.use(bodyParser.urlencoded());
app.use(hom);
app.use(cont);
app.use((req, res, next) => {
  res.status(404).sendFile(path.join(rootDir, "views", "404.html"));
});

const PORT = 4000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
