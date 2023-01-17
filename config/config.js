const dotenv = require("dotenv");
dotenv.config();
const config = {
  development: {
    username: "root",
    password: process.env.PASSWORD,
    database: "stock_sheet",
    host: "127.0.0.1",
    dialect: "mysql",
    // https://wedul.site/548 시간설정 timezoe만 +09:00으로 바꾸기
    timezone: "+09:00",
    dialectOptions: {
      charset: "utf8mb4",
      dateStrings: true,
      typeCast: true,
    },
    define: {
      timestamps: true,
    },
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "mysql",
  },
  production: {
    username: "root",
    password: null,
    database: "database_production",
    host: "127.0.0.1",
    dialect: "mysql",
  },
};
module.exports = config;
