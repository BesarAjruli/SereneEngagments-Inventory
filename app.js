require("dotenv").config();
const express = require("express");
const app = express();
const usersRouter = require("./routers/indexRouter");

app.use(express.static('public'));

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use("/", usersRouter);

const PORT = process.env.PORT || 8000;
app.listen(PORT, '0.0.0.0', () => console.log(`Express app listening on port ${PORT}!`));
