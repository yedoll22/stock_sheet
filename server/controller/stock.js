const { Stocks, Sheets, Storages, sequelize } = require("../models");
const { Op, fn, col } = require("sequelize");

module.exports = {
  getStockBySheet: async (req, res) => {
    try {
      // let type = req.params.type;

      const stockList = await Stocks.findAll({
        include: [{ model: Sheets, attributes: [], required: false }],

        attributes: {
          include: [
            [sequelize.col("sheet.pattern"), "pattern"],
            [sequelize.col("sheet.type"), "type"],
            // [sequelize.literal("concat('{name:',json_arrayagg((select name from storages where stocks.storage = storages.id)),', color:',json_arrayagg((select color_code from storages where stocks.storage = storages.id)),'}')"),"storageDetails",],
            [
              sequelize.literal(
                "json_arrayagg((select name from storages where stocks.storage = storages.id))"
              ),
              "Name",
            ],
            [
              sequelize.literal(
                "json_arrayagg((select color_code from storages where stocks.storage = storages.id))"
              ),
              "color_code",
            ],
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
        // where: { sheet: 45 },
      });
      // select pattern, type, concat('{name:',json_arrayagg((select name from storages where stocks.storage = storages.id)),', color:',json_arrayagg((select color_code from storages where stocks.storage = storages.id)),'}'), sum(quantity) from stocks left join sheets on stocks.sheet = sheets.id group by sheet;

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
            [sequelize.col("storage.name"), "name"],
            [sequelize.col("storage.color_code"), "color"],
            [sequelize.col("sheet.pattern"), "pattern"],
            [sequelize.col("sheet.type"), "type"],
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

      const id = await Storages.findOne({
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
            [sequelize.col("storage.name"), "name"],
            [sequelize.col("storage.color_code"), "color"],
            [sequelize.col("sheet.pattern"), "pattern"],
            [sequelize.col("sheet.type"), "type"],
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
        where: { storage: id.id },
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
            [sequelize.col("storage.name"), "name"],
            [sequelize.col("storage.color_code"), "color"],
            [sequelize.col("sheet.pattern"), "pattern"],
            [sequelize.col("sheet.type"), "type"],
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
        storage,
        oldStorage,
        newStorage,
        category,
      } = req.body;
      const sheet = pattern + "_" + type;

      if (category === "재고이동") {
        await Stocks.create({
          date,
          category,
          quantity: -quantity,
          sheet,
          storage: oldStorage,
        });
        await Stocks.create({
          date,
          category,
          quantity,
          sheet,
          storage: newStorage,
        });
      } else {
        await Stocks.create({ date, category, quantity, sheet, storage });
      }
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
