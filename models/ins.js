module.exports = (sequelize, DataTypes) => {
  const Ins = sequelize.define(
    "Ins",
    {
      sheets_id: {
        type: DataTypes.INTEGER,
      },
      storages_id: {
        type: DataTypes.INTEGER,
      },
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
      panding: {
        type: DataTypes.STRING(1),
        allowNull: false,
      },
      orderer: {
        type: DataTypes.STRING(10),
        allowNull: false,
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
    db.Ins.hasMany(db.Sheets);
    db.Ins.hasMany(db.Storages);
  };
  return Ins;
};
