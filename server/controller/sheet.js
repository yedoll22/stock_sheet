const { Sheets, sequelize } = require("../models");

module.exports = {
  get: async (req, res) => {
    try {
      const sheetList = await Sheets.findAll({
        attributes: ["id", "type", "pattern", "width", "height"],
        order: [
          ["type", "DESC"],
          ["pattern", "DESC"],
        ],
      });
      res.status(200).json(sheetList);
    } catch (err) {
      console.log(err);
      return res.sendStatus(500);
    }
  },

  getTypeList: async (req, res) => {
    try {
      const typeList = [];
      const typeObj = await Sheets.findAll({
        attributes: [[sequelize.fn("DISTINCT", sequelize.col("type")), "type"]],
      });

      for (key in typeObj) {
        typeList.push(typeObj[key].type);
      }

      res.status(200).json(typeArr);
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

  post: async (req, res) => {
    try {
      const { type, pattern, height, width } = req.body;
      const isExist = await Sheets.findOne({
        attributes: ["id"],
        where: { type, pattern, width, height },
      });

      if (isExist === null) {
        await Sheets.create({
          type,
          pattern,
          width,
          height,
        });
        return res.sendStatus(201);
      } else {
        res.status(200).json("existed!");
      }
    } catch (err) {
      console.log(err);
      return res.sendStatus(500);
    }
  },

  deleteSheetById: async (req, res) => {
    let id = req.params.id;
    await Sheets.destroy({
      where: { id },
    });
    res.sendStatus(200);
  },
};
