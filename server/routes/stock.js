const express = require("express");
const router = express.Router();
const stockController = require("../controller/stock.js");

router.post("/", stockController.post);

router.get("/", stockController.get);
router.get("/sheet", stockController.getStockBySheet);
router.get("/storage", stockController.getStockByStorage);
router.get("/storage/:storage", stockController.getStockByStorageId);

router.delete("/", stockController.delete);
router.delete("/:id", stockController.deleteStockById);

module.exports = router;
