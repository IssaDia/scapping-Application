require("dotenv").config();

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

const {
  getCompanyDataFromWebsite,
} = require("./utils/getCompanyDataFromWebsite");

const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

if (process.env.NODE_ENV !== "production") {
  app.use(cors());
}

app.get("/", (req, res) => {
  res.json({ message: "working" });
});

app.get("/api/search/:company", async (req, res) => {
  getCompanyDataFromWebsite(req, res);
});

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
