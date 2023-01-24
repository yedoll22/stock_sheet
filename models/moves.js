module.exports = (sequelize, DataTypes) => {
  const Moves = sequelize.define(
    "Moves",
    {
      quantity: {
        type: DataTypes.INTEGER,
      },
    },
    {
      //한글 저장
      charset: "utf8",
      collate: "utf8_general_ci",
    }
  );
  Moves.associate = (db) => {
    db.Moves.belongsTo(db.Sheets, {
      foreignKey: "sheets_id",
      targetKey: "id",
    });
    db.Moves.belongsTo(db.Storages, {
      foreignKey: "oldStorages_id",
      targetKey: "id",
    });
    db.Moves.belongsTo(db.Storages, {
      foreignKey: "newStorages_id",
      targetKey: "id",
    });
    db.Moves.belongsTo(db.Stocks, {
      foreignKey: "oldStocks_id",
      targetKey: "id",
    });
    db.Moves.belongsTo(db.Stocks, {
      foreignKey: "newStocks_id",
      targetKey: "id",
    });
  };
  return Moves;
};
