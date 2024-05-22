const createFile = (req, res) => {
  // fs.writeFileSync(
  //   "perrito.txt",
  //   "hola soy uña texto creadó por nodejs",
  //   "utf-8"
  // );
  const { texto } = req.query;
  console.log(req.query.texto);
  fs.appendFileSync("perrito.txt", `\n${texto}`, "utf-8");
  res.send("");
};

const readFile = (req, res) => {
  // const { texto } = req.query;
  // console.log(req.query.texto);
  const content = fs.readFileSync("perrito.txt");
  res.send(content);
};

const deleteFile = (req, res) => {
  let response = "Archivo no existe";
  if (fs.existsSync("perrito.txt")) {
    fs.rmSync("perrito.txt");
    response = "eliminado correctamente";
  }
  res.send(response);
};

module.exports = { createFile, readFile, deleteFile };
