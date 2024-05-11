const myMiddleware = (req, res, next) => {
    console.log(req.headers);
    if (req.headers.host === "127.0.0.1:3000") {
      next();
    } else {
      res.send({ error: "host no valido" });
    }
  };
  
  const checkChrome = (req, res, next) => {
    console.log(req.headers);
    if (
      req.headers["sec-ch-ua"] ===
      '"Chromium";v="124", "Microsoft Edge";v="124", "Not-A.Brand";v="99"'
    ) {
      next();
    } else {
      res.send({ error: "browser no valido" });
    }
  };
  
  module.exports = { myMiddleware, checkChrome };
  