const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const userRouter = require("./routes/users");
const bookRouter = require("./routes/books");
const logger = require("./middlewares/logger");

dotenv.config();

const {
  PORT = 3000,
  API_URL = "http://127.0.0.1",
  MONGO_URL = "mongodb://localhost:27017/test",
} = process.env;

const handleError = (error) => {
  console.log(error);
};

mongoose
  .connect(MONGO_URL)
  .then(() => console.log("Connected to DB"))
  .catch((error) => handleError(error));

const app = express();

app.use(cors());
app.use(logger);
app.use(bodyParser.json());
app.use(userRouter);
app.use(bookRouter);

app.listen(PORT, () => {
  console.log(`Сервер запущен по адрессу ${API_URL}:${PORT}`);
});
