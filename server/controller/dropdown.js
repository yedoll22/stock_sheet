const { Sheets, Storages, sequelize } = require("../models");

module.exports = {
  getTypeList: async (req, res) => {
    try {
      const typeList = [];
      const typeObj = await Sheets.findAll({
        attributes: [[sequelize.fn("DISTINCT", sequelize.col("type")), "type"]],
      });

      for (key in typeObj) {
        typeList.push(typeObj[key].type);
      }

      res.status(200).json(typeList);
    } catch (err) {
      console.log(err);
      return res.sendStatus(500);
    }
  },

  getPatternList: async (req, res) => {
    try {
      const type = req.params.type;
      const patternList = [];
      const patternObj = await Sheets.findAll({
        attributes: [
          [sequelize.fn("DISTINCT", sequelize.col("pattern")), "pattern"],
        ],
        where: { type: type },
      });

      for (key in patternObj) {
        patternList.push(patternObj[key].pattern);
      }

      res.status(200).json(patternList);
    } catch (err) {
      console.log(err);
      return res.sendStatus(500);
    }
  },

  getStorageList: async (req, res) => {
    try {
      const storageList = [];
      const storageObj = await Storages.findAll({
        attributes: [[sequelize.fn("DISTINCT", sequelize.col("name")), "name"]],
      });

      for (key in storageObj) {
        storageList.push(storageObj[key].name);
      }

      res.status(200).json(storageList);
    } catch (err) {
      console.log(err);
      return res.sendStatus(500);
    }
  },
};
