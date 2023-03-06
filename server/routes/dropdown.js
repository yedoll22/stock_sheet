const express = require("express");
const router = express.Router();
const dropdownController = require("../controller/dropdown.js");

router.get("/type", dropdownController.getTypeList);
router.get("/pattern/:type", dropdownController.getPatternList);
router.get("/storage", dropdownController.getStorageList);
module.exports = router;
