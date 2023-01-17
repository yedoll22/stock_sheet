const { Ins, Outs, Sheets, Storages } = require("../models");
const sheets = require("../models/sheets");
const sequelize = require("sequelize");

module.exports = {
  get: async (req, res) => {
    // try {
    const stockList = await Ins.findAll({
      attributes: ["id", "date", "quantity", "createdAt"],
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
    const { date, quantity, sheets_id, storages_id } = req.body;
    await Ins.create({
      date,
      quantity,
      sheets_id,
      storages_id,
      category: "입고",
    });
    res.status(200);
  },
};
