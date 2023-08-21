const express = require("express");
bodyParser = require("body-parser");
require("dotenv").config();
const { sendMail } = require("./controller/sendMail.js");
const app = express();

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.status(200).send("Hello");
});

app.post("/sendmail", sendMail);

app.listen(process.env.PORT, () => {
  console.log("Server started on port: " + process.env.PORT);
});
