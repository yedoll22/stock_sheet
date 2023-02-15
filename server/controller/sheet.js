const { Sheets } = require("../models");

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
