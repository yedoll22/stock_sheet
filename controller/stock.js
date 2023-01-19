const { Ins, Outs, Stocks, Sheets, Storages } = require("../models");
const sequelize = require("sequelize");
const stocks = require("../models/stocks");

module.exports = {
  getStorageByStorage: async (req, res) => {
    // try {
    const name = req.params.storage;
    const id = await Storages.findOne({
      attributes: ["id"],
      where: {
        name,
      },
    });
    const storages_id = id.id;
    const stockList = await Ins.findAll({
      attributes: ["quantity"],
      include: [
        { model: Storages, attributes: ["name", "color_code"] },
        { model: Sheets, attributes: ["pattern", "type", "width", "height"] },
      ],
      where: {
        storages_id,
      },
    });
    res.status(200).json(stockList);
    // } catch (err) {
    //   return res.sendStatus(500);
    // }
  },

  get: async (req, res) => {
    try {
      const stockList = await Ins.findAll({
        attributes: ["id", "date", "quantity", "panding"],
        include: [
          { model: Storages, attributes: ["name", "color_code"] },
          { model: Sheets, attributes: ["pattern", "type", "width", "height"] },
        ],
      });
      res.status(200).json(stockList);
    } catch (err) {
      return res.sendStatus(500);
    }
  },

  // getStockBySheet: async (req, res) => {
  //   try {
  //     const stockList = await Ins.findAll({
  //       attributes: ["id", "date", "quantity", "panding"],
  //       include: [
  //         { model: Storages, attributes: ["name", "color_code"] },
  //         { model: Sheets, attributes: ["pattern", "type", "width", "height"] },
  //       ],
  //     });
  //     res.status(200).json(stockList);
  //   } catch (err) {
  //     return res.sendStatus(500);
  //   }
  // },

  post: async (req, res) => {
    const { date, quantity, sheets_id, storages_id, category, orderer } =
      req.body;

    try {
      let panding;
      if (category === "발주") {
        panding = "Y";
      } else {
        panding = "N";
      }

      // if (category === "입고")
      await Ins.create({
        date,
        quantity,
        sheets_id,
        storages_id,
        category,
        panding,
        orderer,
      });

      const stocks = await Stocks.findAll({
        attributes: ["id", "quantity"],
      });

      if (stocks.id === sheets_id + "_" + storages_id) {
        await Stocks.create({
          id: sheets_id + "_" + storages_id,
          quantity,
        });
      } else {
        await Stocks.update({
          quantity: stocks.quantity + quantity,
        });
      }

      await Ins.findOne({
        attributes: ["id"],
        limit: 1,
        order: [["createdAt", DESC]],
      });
      return res.sendStatus(201);
    } catch (err) {
      console.log(err);
      return res.sendStatus(500);
    }
  },

  delete: async (req, res) => {
    await Ins.destroy({
      where: {},
      truncate: true,
    });
    res.sendStatus(200);
  },
  deleteStockById: async (req, res) => {
    let id = req.params.id;
    await Ins.destroy({
      where: { id },
    });
    res.sendStatus(200);
  },
};
