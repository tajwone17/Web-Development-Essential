const db = require("./db.js");
const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());

app.use(express.json());
app.post("/api/submit", (req, res) => {
  const { firstname, middlename, lastname } = req.body;
  db.query(
    "INSERT INTO form (firstname,  middlename, lastname ) VALUES (?, ?, ?)",
    [firstname, middlename, lastname],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values Inserted");
      }
    }
  );
});
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
