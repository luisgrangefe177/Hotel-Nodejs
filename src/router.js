const express = require("express");
const {
  getHotel,
  createHotel,
  updateteHotel,
  deleteHotel,
  getAllHotels,
} = require("./controllers/Hotelcontroller");
const { checkAutentication, checkAdminAuthorization } = require("./middleware");
const { checkUser } = require("./controllers/authController");
// const { checkUser } = require("./controllers/authController");
const router = express.Router();
//
// const { handleHome, handleReport } = require("./controller");
// const { myMiddleware, checkChrome } = require("./middleware");
router.post("/hoteles", createHotel);
router.get("/hoteles/:id?", getAllHotels);
router.post(
  "/hoteles",
  [checkAutentication, checkAdminAuthorization],
  createHotel
);
router.put("/hoteles/:id_rooms?", updateteHotel);
router.delete("/hoteles/:id_rooms?", deleteHotel);
router.post("/auth", checkUser);
// router.get("/hotel", [myMiddleware, checkChrome], handleReport);

// router.get("/:id?/:name?", handleHome);

module.exports = router;
