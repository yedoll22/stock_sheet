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
    db.Storages.hasMany(db.Ins, {
      foreignKey: "storages_id",
      sourceKey: "id",
    });
    db.Storages.hasMany(db.Outs, {
      foreignKey: "storages_id",
      sourceKey: "id",
    });
    db.Storages.hasMany(db.Moves, {
      foreignKey: "oldStorages_id",
      sourceKey: "id",
    });
    db.Storages.hasMany(db.Moves, {
      foreignKey: "newStorages_id",
      sourceKey: "id",
    });
  };
  return Storages;
};
