module.exports = (sequelize, DataTypes) => {
  const Out = sequelize.define(
    "Out",
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
  Out.associate = (db) => {
    db.Out.hasMany(db.Sheets);
    db.Out.hasMany(db.Storages);
  };
  return Out;
};
