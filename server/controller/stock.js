const { Stocks, Sheets, Storages, sequelize } = require("../models");

module.exports = {
  get: async (req, res) => {
    try {
      const stockList = await Stocks.findAll({
        include: [
          { model: Sheets, attributes: [] },
          { model: Storages, attributes: [] },
        ],

        attributes: {
          include: [
            [sequelize.col("Sheet.pattern"), "pattern"],
            [sequelize.col("Sheet.type"), "type"],
            [sequelize.col("Sheet.width"), "width"],
            [sequelize.col("Sheet.height"), "height"],
            [sequelize.col("Storage.name"), "name"],
            [sequelize.col("Storage.color_code"), "color"],
          ],
          exclude: ["createdAt", "updatedAt", "sheet", "storage"],
          order: ["date", "DESC"],
        },
      });

      res.status(200).json(stockList);
    } catch (err) {
      console.log(err);
      return res.sendStatus(500);
    }
  },

  getStockBySheet: async (req, res) => {
    try {
      let sheetObj = [];
      let sheetArr = [];
      if (req.query.type) {
        if (req.query.pattern) {
          sheetObj = await Sheets.findAll({
            attributes: ["id"],
            where: { type: req.query.type, pattern: req.query.pattern },
          });
        } else {
          sheetObj = await Sheets.findAll({
            attributes: ["id"],
            where: { type: req.query.type },
          });
        }
      } else {
        sheetObj = await Sheets.findAll({
          attributes: ["id"],
        });
      }

      for (key in sheetObj) {
        sheetArr.push(sheetObj[key].id);
      }

      const stockList = await Stocks.findAll({
        include: [{ model: Sheets, attributes: [], where: { id: sheetArr } }],

        attributes: {
          include: [
            [sequelize.col("Sheet.pattern"), "pattern"],
            [sequelize.col("Sheet.type"), "type"],
            [sequelize.col("Sheet.width"), "width"],
            [sequelize.col("Sheet.height"), "height"],

            // [sequelize.literal("json_arrayagg((select distinct name from Storages where Stocks.storage = Storages.id))"
            //   ),"Name",],

            [sequelize.fn("sum", sequelize.col("quantity")), "total"],
          ],
          exclude: [
            "date",
            "category",
            "quantity",
            "createdAt",
            "updatedAt",
            "sheet",
            "storage",
            "id",
          ],
        },

        group: ["sheet"],
      });
      // select pattern, type, concat('{name:',json_arrayagg((select distinct name from Storages where Stocks.storage = Storages.id)),', color:',json_arrayagg((select distinct color_code from Storages where Stocks.storage = Storages.id)),'}'), sum(quantity) from Stocks left join Sheets on Stocks.sheet = Sheets.id group by sheet;

      res.status(200).json(stockList);
    } catch (err) {
      console.log(err);
      return res.sendStatus(500);
    }
  },

  getStockByStorage: async (req, res) => {
    try {
      const stockList = await Stocks.findAll({
        include: [
          { model: Sheets, attributes: [] },
          { model: Storages, attributes: [] },
        ],

        attributes: {
          include: [
            [sequelize.col("Storage.name"), "name"],
            [sequelize.col("Storage.color_code"), "color"],
            [sequelize.col("Sheet.pattern"), "pattern"],
            [sequelize.col("Sheet.type"), "type"],
            [sequelize.col("Sheet.width"), "width"],
            [sequelize.col("Sheet.height"), "height"],
            [sequelize.fn("sum", sequelize.col("quantity")), "total"],
          ],
          exclude: [
            "date",
            "category",
            "quantity",
            "createdAt",
            "updatedAt",
            "sheet",
            "storage",
            "id",
          ],
        },

        group: ["storage", "sheet"],
      });

      res.status(200).json(stockList);
    } catch (err) {
      console.log(err);
      return res.sendStatus(500);
    }
  },

  getStockByStorageId: async (req, res) => {
    try {
      let name = req.params.storage;

      const storage = await Storages.findOne({
        attributes: ["id"],
        where: { name },
      });

      const stockList = await Stocks.findAll({
        include: [
          { model: Sheets, attributes: [] },
          { model: Storages, attributes: [] },
        ],

        attributes: {
          include: [
            [sequelize.col("Storage.name"), "name"],
            [sequelize.col("Storage.color_code"), "color"],
            [sequelize.col("Sheet.pattern"), "pattern"],
            [sequelize.col("Sheet.type"), "type"],
            [sequelize.col("Sheet.width"), "width"],
            [sequelize.col("Sheet.height"), "height"],
            [sequelize.fn("sum", sequelize.col("quantity")), "total"],
          ],
          exclude: [
            "date",
            "category",
            "quantity",
            "createdAt",
            "updatedAt",
            "sheet",
            "storage",
            "id",
          ],
        },

        group: ["storage", "sheet"],
        where: { storage: storage.id },
      });
      res.status(200).json(stockList);
    } catch (err) {
      console.log(err);
      return res.sendStatus(500);
    }
  },

  post: async (req, res) => {
    try {
      const {
        date,
        quantity,
        pattern,
        type,
        oldStorageName,
        storageName,
        category,
      } = req.body;

      const storage = await Storages.findOne({
        attributes: ["id"],
        where: { name: storageName },
      });

      const sheet = await Sheets.findOne({
        attributes: ["id"],
        where: { pattern, type },
      });

      if (category === "재고이동") {
        const oldStorage = await Storages.findOne({
          attributes: ["id"],
          where: { name: oldStorageName },
        });

        await Stocks.create({
          date,
          category,
          quantity: -quantity,
          sheet: sheet.id,
          storage: oldStorage.id,
        });
      }
      await Stocks.create({
        date,
        category,
        quantity,
        sheet: sheet.id,
        storage: storage.id,
      });
      return res.sendStatus(201);
    } catch (err) {
      console.log(err);
      return res.sendStatus(500);
    }
  },

  delete: async (req, res) => {
    await Stocks.destroy({
      where: {},
      truncate: true,
    });
    res.sendStatus(200);
  },
  deleteStockById: async (req, res) => {
    let id = req.params.id;
    await Stocks.destroy({
      where: { id },
    });
    res.sendStatus(200);
  },
};
