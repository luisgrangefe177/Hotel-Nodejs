const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const router = require("./router");

console.log(process.env.PORT);

app.use(router);
app.set("view engine", "pug");

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
