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
const checkAutentication = (req, res, next) => {
  if (!isAuthenticated(req)) {
    res.send({ state: false, message: "NO está autenticado" });
    return;
  } else {
    next();
  }
};

const checkAdminAuthorization = (req, res, next) => {
  const token = isAuthenticated(req);
  if (token.rol === "administrador") {
    next();
  } else {
    res.send({ state: false, message: "NO está autorizado" });
  }
};
module.exports = {
  myMiddleware,
  checkChrome,
  checkAutentication,
  checkAdminAuthorization,
};
