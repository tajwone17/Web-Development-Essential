const express = require("express");
const fs = require("fs");
const app = express();
const port = 3000;
const FILE_PATH = "users.json";
app.use(express.json());
// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });
//function to read users from file
const readUsers = () => {
  try {
    const data = fs.readFileSync(FILE_PATH, "utf8");
    return JSON.parse(data);
  } catch (err) {
    return [];
  }
};
const writeUsers = (users) => {
  fs.writeFileSync(FILE_PATH, JSON.stringify(users, null, 2), "utf8");
};
//Get:Fetch Users
app.get("/users", (req, res) => {
  res.json(readUsers());
});
//POST: Add users
app.post("/users", (req, res) => {
  const users = readUsers();
  const newUser = { id: users.length + 1, name: req.body.name };
  users.push(newUser);
  writeUsers(users);
  res.status(201).json(newUser);
});
// run server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
