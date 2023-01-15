module.exports = (sequelize, DataTypes) => {
  const Storages = sequelize.define(
    "Storages",
    {
      name: {
        type: DataTypes.STRING(10),
        allowNull: false,
      },
      color_code: {
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
  Storages.associate = (db) => {
    db.Storages.belongsTo(db.Ins);
    db.Storages.belongsTo(db.Outs);
  };
  return Storages;
};
