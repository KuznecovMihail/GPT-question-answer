const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.post("/api/ask", (req, res) => {
  const question = req.body.question;
  res.json({ answer: question });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});
