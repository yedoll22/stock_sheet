const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const db = require("./models");
const app = express();
app.set("port", process.env.PORT);
const stockRouter = require("./routes/stock");

db.sequelize
  .sync()
  .then(() => {
    console.log("db 연결 성공 ");
  })
  .catch(console.error);

app.use("/list", listRouter);
app.use("/stock", stockRouter);

app.listen(app.get("port"), () => {
  console.log("서버연결성공");
});
