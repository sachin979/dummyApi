const express = require("express");
const app = express();

const PORT = 8080;

app.use(express.json());
app.listen(PORT, () => console.log(`Server listening on port  ${PORT}`));

app.get("/employee", (req, res) => {
  res.status(200).send({
    id: 1,
    name: "Sachin",
  });
});

app.post("/employee/:id", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  if (!name) {
    res.status(400).send({ message: "Need a name" });
  }
  res.send({ employee: `Employee name is ${name} awith ID ${id}` });
});
