const { Ins, Outs, Moves, Stocks, Sheets, Storages } = require("../models");
const sequelize = require("sequelize");
const stocks = require("../models/stocks");

module.exports = {
  get: async (req, res) => {
    try {
      const stockList = await Stocks.findAll({
        include: [
          {
            model: Ins,
            include: [
              { model: Storages, attributes: ["name", "color_code"] },
              {
                model: Sheets,
                attributes: ["pattern", "type", "width", "height"],
              },
            ],
          },
          {
            model: Outs,
            include: [
              { model: Storages, attributes: ["name", "color_code"] },
              {
                model: Sheets,
                attributes: ["pattern", "type", "width", "height"],
              },
            ],
          },
          {
            model: Moves,
            include: [
              { model: Storages, attributes: ["name", "color_code"] },
              {
                model: Sheets,
                attributes: ["pattern", "type", "width", "height"],
              },
            ],
          },
        ],
      });

      res.status(200).json(stockList);
    } catch (err) {
      console.log(err);
      return res.sendStatus(500);
    }
  },

  postIn: async (req, res) => {
    try {
      const { date, quantity, pattern, type, storages_id, category } = req.body;
      const sheets_id = pattern + "_" + type;
      const stocks_id = pattern + "_" + type + "_" + storages_id;
      let panding;

      if (category === "발주") {
        panding = "Y";
      } else {
        panding = "N";
      }

      const preQuantity = (await Stocks.findOne({
        where: { id: stocks_id },
      })) || { quantity: 0 };

      const [id, created] = await Stocks.upsert({
        id: stocks_id,
        quantity: preQuantity.quantity + quantity,
      });

      // if (category === "입고")
      await Ins.create({
        date,
        quantity,
        sheets_id,
        storages_id,
        category,
        panding,
        stocks_id,
      });

      return res.sendStatus(201);
    } catch (err) {
      console.log(err);
      return res.sendStatus(500);
    }
  },

  postOut: async (req, res) => {
    try {
      const { date, quantity, pattern, type, storages_id, category } = req.body;
      const sheets_id = pattern + "_" + type;
      const stocks_id = pattern + "_" + type + "_" + storages_id;

      const preQuantity = (await Stocks.findOne({
        where: { id: stocks_id },
      })) || { quantity: 0 };

      const [id, created] = await Stocks.upsert({
        id: stocks_id,
        quantity: preQuantity.quantity - quantity,
      });

      await Outs.create({
        date,
        quantity,
        sheets_id,
        storages_id,
        category,
        stocks_id,
      });

      return res.sendStatus(201);
    } catch (err) {
      console.log(err);
      return res.sendStatus(500);
    }
  },

  postMove: async (req, res) => {
    try {
      const { date, quantity, pattern, type, newStorages_id, oldStorages_id } =
        req.body;
      const sheets_id = pattern + "_" + type;
      const oldStocks_id = sheets_id + "_" + oldStorages_id;
      const newStocks_id = sheets_id + "_" + newStorages_id;

      const preOld = (await Stocks.findOne({
        where: { id: oldStocks_id },
      })) || { quantity: 0 };

      const preNew = (await Stocks.findOne({
        where: { id: newStocks_id },
      })) || { quantity: 0 };

      await Stocks.bulkCreate(
        [
          {
            id: oldStocks_id,
            quantity: preOld.quantity - quantity,
          },
          {
            id: newStocks_id,
            quantity: preNew.quantity + quantity,
          },
        ],
        {
          updateOnDuplicate: ["quantity"],
        }
      );

      await Moves.create({
        date,
        quantity,
        sheets_id,
        newStorages_id,
        oldStorages_id,
        oldStocks_id,
        newStocks_id,
      });

      return res.sendStatus(201);
    } catch (err) {
      console.log(err);
      return res.sendStatus(500);
    }
  },

  // delete: async (req, res) => {
  //   await Ins.destroy({
  //     where: {},
  //     truncate: true,
  //   });
  //   res.sendStatus(200);
  // },
  // deleteStockById: async (req, res) => {
  //   let id = req.params.id;
  //   await Ins.destroy({
  //     where: { id },
  //   });
  //   res.sendStatus(200);
  // },
};

// 최근데이터 찾기
// const lastest = await Ins.findOne({
//   limit: 1,
//   order: [["createdAt", "DESC"]],
// });
