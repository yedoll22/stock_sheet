module.exports = (sequelize, DataTypes) => {
  const Outs = sequelize.define(
    "Outs",
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
    },
    {
      //한글 저장
      charset: "utf8",
      collate: "utf8_general_ci",
    }
  );
  Outs.associate = (db) => {
    db.Outs.hasMany(db.Sheets);
    db.Outs.hasMany(db.Storages);
  };
  return Outs;
};
