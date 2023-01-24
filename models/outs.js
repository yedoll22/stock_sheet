module.exports = (sequelize, DataTypes) => {
  const Outs = sequelize.define(
    "Outs",
    {
      date: {
        type: DataTypes.DATE,
      },
      quantity: {
        type: DataTypes.INTEGER,
      },
      category: {
        type: DataTypes.STRING(10),
        allowNull: false,
      },
    },
    {
      //한글 저장
      charset: "utf8",
      collate: "utf8_general_ci",
    }
  );
  Outs.associate = (db) => {
    db.Outs.belongsTo(db.Sheets, {
      foreignKey: "sheets_id",
      targetKey: "id",
    });
    db.Outs.belongsTo(db.Storages, {
      foreignKey: "storages_id",
      targetKey: "id",
    });
    db.Outs.belongsTo(db.Stocks, {
      foreignKey: "stocks_id",
      targetKey: "id",
    });
  };
  return Outs;
};
