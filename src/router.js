const express = require("express");
const { getHotel } = require("./controllers/Hotelcontroller");
const router = express.Router();
// const { handleHome, handleReport } = require("./controller");
// const { myMiddleware, checkChrome } = require("./middleware");
// const { createFile, readFile, deleteFile } = require("./fileController");
router.get("/hotel/:id?", getHotel);
// router.get("/hotel", [myMiddleware, checkChrome], handleReport);
// router.get("/createFile", createFile);
// router.get("/readFile", readFile);
// router.get("/deleteFile", deleteFile);
// router.get("/:id?/:name?", handleHome);

module.exports = router;
