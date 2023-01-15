const express = require("express");
const router = express.Router();

// router.get("/:type", (req, res) => {
//   const params = req.params;

//   res.json("ok");
// });
router.get("stock/:type", stockController.getStockBySheet);
router.get("stock/:storage", stockController.getStorageBySheet);

router.post("/", stockController.postIn);

module.exports = router;
