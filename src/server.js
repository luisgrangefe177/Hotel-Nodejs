const express = require("express");
const app = express();
const bodyParser = require("body-parser");
//definicion del servidor
const port = process.env.PORT || 3000;
const router = require("./router");

console.log(process.env.PORT);

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use(router);
app.set("view engine", "pug");

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
