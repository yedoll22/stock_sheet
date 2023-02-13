module.exports = (sequelize, DataTypes) => {
  const Stocks = sequelize.define(
    "Stocks",
    {
      date: {
        type: DataTypes.DATE,
      },
      category: {
        type: DataTypes.STRING(10),
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
    db.Stocks.belongsTo(db.Sheets, {
      foreignKey: "sheet",
      sourceKey: "id",
    });
    db.Stocks.belongsTo(db.Storages, {
      foreignKey: "storage",
      sourceKey: "id",
    });
  };
  return Stocks;
};
