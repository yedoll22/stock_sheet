module.exports = (sequelize, DataTypes) => {
  const Stocks = sequelize.define(
    "Stocks",
    {
      id: {
        type: DataTypes.STRING(30),
        primaryKey: true,
        unique: true,
      },
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
  Stocks.associate = (db) => {
    db.Stocks.hasMany(db.Ins, {
      foreignKey: "stocks_id",
      sourceKey: "id",
    });
    db.Stocks.hasMany(db.Outs, {
      foreignKey: "stocks_id",
      sourceKey: "id",
    });
    db.Stocks.hasMany(db.Moves, {
      foreignKey: "oldStocks_id",
      sourceKey: "id",
    });
    db.Stocks.hasMany(db.Moves, {
      foreignKey: "newStocks_id",
      sourceKey: "id",
    });
  };
  return Stocks;
};
