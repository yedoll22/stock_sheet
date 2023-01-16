const { Ins, Outs, Sheets, Storages } = require("../models");
const sheets = require("../models/sheets");
const sequelize = require("sequelize");

module.exports = {
  get: async (req, res) => {
    // try {
    const stockList = await Ins.findAll({
      attributes: ["id", "date", "quantity"],
      include: [
        { model: Storages, attributes: ["name"] },
        { model: Sheets, attributes: ["pattern", "type", "width", "height"] },
      ],
    });
    res.status(200).json(stockList);
    //     } catch (err) {
    //       return res.sendStatus(500);
    //     }
  },

  post: async (req, res) => {
    // const {'date', 'quatity', 'type', 'pattern'} = req.body;
    await Ins.create({
      date: new Date(),
      quantity: 800,
      sheets_id: 55,
      storages_id: 1,
      category: "입고",
    });
    res.send("ok");
  },
};
