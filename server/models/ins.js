module.exports = (sequelize, DataTypes) => {
  const Ins = sequelize.define(
    "Ins",
    {
      date: {
        type: DataTypes.DATE,
        // defalutValue: sequelize.literal("now()"),
      },
      quantity: {
        type: DataTypes.INTEGER,
      },
      category: {
        type: DataTypes.STRING(10),
        // allowNull: false,
      },
      panding: {
        type: DataTypes.STRING(1),
      },
      orderer: {
        type: DataTypes.STRING(10),
        allowNull: true,
      },
      order_date: {
        type: DataTypes.DATE,
      },
    },
    {
      //한글 저장
      charset: "utf8",
      collate: "utf8_general_ci",
    }
  );
  Ins.associate = (db) => {
    db.Ins.belongsTo(db.Sheets, {
      foreignKey: "sheets_id",
      targetKey: "id",
    });
    db.Ins.belongsTo(db.Storages, {
      foreignKey: "storages_id",
      targetKey: "id",
    });
    db.Ins.belongsTo(db.Stocks, {
      foreignKey: "stocks_id",
      targetKey: "id",
    });
  };
  return Ins;
};
