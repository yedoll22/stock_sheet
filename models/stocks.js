module.exports = (sequelize, DataTypes) => {
  const Stocks = sequelize.define(
    "Stocks",
    {
      id: {
        type: DataTypes.STRING(30),
        primaryKey: true,
        unique: true,
      },
      Ins_id: {
        type: DataTypes.INTEGER,
      },
      Outs_id: {
        type: DataTypes.INTEGER,
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
    db.Stocks.belongsTo(db.Ins, {
      foreignKey: "Ins_id",
      targetKey: "id",
    });
    db.Stocks.belongsTo(db.Outs, {
      foreignKey: "Outs_id",
      targetKey: "id",
    });
  };
  return Stocks;
};
