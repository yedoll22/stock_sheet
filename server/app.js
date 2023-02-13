const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const db = require("./models");
const app = express();
const cors = require("cors");
app.set("port", process.env.PORT);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
const stockRouter = require("./routes/stock");
// const storageRouter = require("./routes/byStorage");

db.sequelize
  .sync()
  .then(() => {
    console.log("db 연결 성공 ");
  })
  .catch(console.error);

app.get("/", (req, res) => {
  res.send("테스트중");
});
app.use("/stock", stockRouter);
console.log(stockRouter);

app.listen(app.get("port"), () => {
  console.log("서버연결성공");
});
