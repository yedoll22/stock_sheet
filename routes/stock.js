const express = require("express");
const router = express.Router();
const stockController = require("../controller/stock.js");
router.get("/", stockController.get);
router.get("/:type", stockController.getStockBySheet);
router.get("/:storage", stockController.getStorageByStorage);

// router.post("/", stockController.postIn);
router.post("/", stockController.post);
router.delete("/", stockController.delete);
router.delete("/:id", stockController.deleteStockById);

module.exports = router;
