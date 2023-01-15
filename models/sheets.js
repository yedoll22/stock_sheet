module.exports = (sequelize, DataTypes) => {
  const Sheets = sequelize.define(
    "Sheets",
    {
      pattern: {
        type: DataTypes.STRING(10),
      },
      type: {
        type: DataTypes.STRING(10),
        allowNull: false,
      },
      width: {
        type: DataTypes.INTEGER,
      },
      height: {
        type: DataTypes.INTEGER,
      },
    },
    {
      //한글 저장
      charset: "utf8",
      collate: "utf8_general_ci",
    }
  );
  Sheets.associate = (db) => {
    db.Sheets.belongsTo(db.Ins);
    db.Sheets.belongsTo(db.Outs);
  };
  return Sheets;
};
