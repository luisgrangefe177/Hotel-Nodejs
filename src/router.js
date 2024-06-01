const express = require("express");
const {
  getHotel,
  createHotel,
  updateteHotel,
  deleteHotel,
} = require("./controllers/Hotelcontroller");
const router = express.Router();
//
// const { handleHome, handleReport } = require("./controller");
// const { myMiddleware, checkChrome } = require("./middleware");
router.post("/hotel", createHotel);
router.get("/hotel/:id?", getHotel);
router.put("/hotel/:id_rooms?", updateteHotel);
router.delete("/hotel/:id_rooms?", deleteHotel);
// router.get("/hotel", [myMiddleware, checkChrome], handleReport);

// router.get("/:id?/:name?", handleHome);

module.exports = router;
