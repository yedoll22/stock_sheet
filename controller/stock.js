const { Ins, Outs, Sheets, Storages } = require("../models");
const sequelize = require("sequelize");

module.exports = {
  get: async (req, res) => {
    // try {
    const stockList = await Ins.findAll({
      attributes: ["id", "date", "quantity"],
      include: [
        { model: Storages, attributes: ["name", "color_code"] },
        { model: Sheets, attributes: ["pattern", "type", "width", "height"] },
      ],
    });
    res.status(200).json(stockList);
    //     } catch (err) {
    //       return res.sendStatus(500);
    //     }
  },

  post: async (req, res) => {
    const { date, quantity, pattern, type, storages_id, category } = req.body;

    try {
      const id = await Sheets.findAll({
        attributes: ["id"],
        where: {
          pattern,
          type,
        },
      });

      const sheets_id = id[0].dataValues.id;
      await Ins.create({
        date,
        quantity,
        sheets_id,
        storages_id,
        category,
      });
      return res.sendStatus(201);
    } catch (err) {
      console.log(err);
      return res.sendStatus(500);
    }
  },
};
