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
      // let type = req.params.type;

      const total = [sequelize.fn("sum", sequelize.col("quantity")), "total"];
      const stockList = await Stocks.findAll({
        include: [{ model: Sheets, attributes: [] }],

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

  getStockBySheetId: async (req, res) => {
    try {
      let sheet = req.params.sheet;
      const sheetArr = sheet.split("_");

      const id = await Sheets.findOne({
        attributes: ["id"],
        where: {
          type: sheetArr[0],
          pattern: sheetArr[1],
        },
      });

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
        where: { sheet: id.id },
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
  // get: async (req, res) => {
  //   try {
  //     const stockList = await Stocks.findAll({
  //       include: [
  //         {
  //           model: Ins,
  //           include: [
  //             { model: Storages, attributes: ["name", "color_code"] },
  //             {
  //               model: Sheets,
  //               attributes: ["pattern", "type", "width", "height"],
  //             },
  //           ],
  //         },
  //         {
  //           model: Outs,
  //           include: [
  //             { model: Storages, attributes: ["name", "color_code"] },
  //             {
  //               model: Sheets,
  //               attributes: ["pattern", "type", "width", "height"],
  //             },
  //           ],
  //         },
  //         {
  //           model: Moves,
  //           include: [
  //             { model: Storages, attributes: ["name", "color_code"] },
  //             {
  //               model: Sheets,
  //               attributes: ["pattern", "type", "width", "height"],
  //             },
  //           ],
  //         },
  //       ],
  //     });

  //     res.status(200).json(stockList);
  //   } catch (err) {
  //     console.log(err);
  //     return res.sendStatus(500);
  //   }
  // },

  // postIn: async (req, res) => {
  //   try {
  //     const { date, quantity, pattern, type, storages_id, category } = req.body;
  //     const sheets_id = pattern + "_" + type;
  //     const stocks_id = pattern + "_" + type + "_" + storages_id;
  //     let panding;

  //     if (category === "발주") {
  //       panding = "Y";
  //     } else {
  //       panding = "N";
  //     }

  //     const preQuantity = (await Stocks.findOne({
  //       where: { id: stocks_id },
  //     })) || { quantity: 0 };

  //     const [id, created] = await Stocks.upsert({
  //       id: stocks_id,
  //       quantity: preQuantity.quantity + quantity,
  //     });

  //     // if (category === "입고")
  //     await Ins.create({
  //       date,
  //       quantity,
  //       sheets_id,
  //       storages_id,
  //       category,
  //       panding,
  //       stocks_id,
  //     });

  //     return res.sendStatus(201);
  //   } catch (err) {
  //     console.log(err);
  //     return res.sendStatus(500);
  //   }
  // },

  // postOut: async (req, res) => {
  //   try {
  //     const { date, quantity, pattern, type, storages_id, category } = req.body;
  //     const sheets_id = pattern + "_" + type;
  //     const stocks_id = pattern + "_" + type + "_" + storages_id;

  //     const preQuantity = (await Stocks.findOne({
  //       where: { id: stocks_id },
  //     })) || { quantity: 0 };

  //     const [id, created] = await Stocks.upsert({
  //       id: stocks_id,
  //       quantity: preQuantity.quantity - quantity,
  //     });

  //     await Outs.create({
  //       date,
  //       quantity,
  //       sheets_id,
  //       storages_id,
  //       category,
  //       stocks_id,
  //     });

  //     return res.sendStatus(201);
  //   } catch (err) {
  //     console.log(err);
  //     return res.sendStatus(500);
  //   }
  // },

  // postMove: async (req, res) => {
  //   try {
  //     const { date, quantity, pattern, type, newStorages_id, oldStorages_id } =
  //       req.body;
  //     const sheets_id = pattern + "_" + type;
  //     const oldStocks_id = sheets_id + "_" + oldStorages_id;
  //     const newStocks_id = sheets_id + "_" + newStorages_id;

  //     const preOld = (await Stocks.findOne({
  //       where: { id: oldStocks_id },
  //     })) || { quantity: 0 };

  //     const preNew = (await Stocks.findOne({
  //       where: { id: newStocks_id },
  //     })) || { quantity: 0 };

  //     await Stocks.bulkCreate(
  //       [
  //         {
  //           id: oldStocks_id,
  //           quantity: preOld.quantity - quantity,
  //         },
  //         {
  //           id: newStocks_id,
  //           quantity: preNew.quantity + quantity,
  //         },
  //       ],
  //       {
  //         updateOnDuplicate: ["quantity"],
  //       }
  //     );

  //     await Moves.create({
  //       date,
  //       quantity,
  //       sheets_id,
  //       newStorages_id,
  //       oldStorages_id,
  //       oldStocks_id,
  //       newStocks_id,
  //     });

  //     return res.sendStatus(201);
  //   } catch (err) {
  //     console.log(err);
  //     return res.sendStatus(500);
  //   }
  // },

  // delete: async (req, res) => {
  //   await Ins.destroy({
  //     where: {},
  //     truncate: true,
  //   });
  //   res.sendStatus(200);
  // },
};

// 최근데이터 찾기
// const lastest = await Ins.findOne({
//   limit: 1,
//   order: [["createdAt", "DESC"]],
// });
