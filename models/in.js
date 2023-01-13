module.exports = (sequelize, DataTypes) => {
  const In = sequelize.define(
    "In",
    {
      sheets_id: {
        type: DataTypes.INTEGER,
      },
      storages_id: {
        type: DataTypes.INTEGER,
      },
      Date: {
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
  In.associate = (db) => {
    db.In.hasMany(db.Sheets);
    db.In.hasMany(db.Storages);
  };
  return In;
};
