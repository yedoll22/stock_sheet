const express = require("express");
const router = express.Router();
const sheetController = require("../controller/sheet.js");

router.get("/", sheetController.get);
router.post("/", sheetController.post);
router.delete("/:id", sheetController.deleteSheetById);
module.exports = router;
