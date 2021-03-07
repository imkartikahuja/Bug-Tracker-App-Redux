var express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let bugs = [
  {
    id: 1,
    description: "Bug 1",
    userId: 1,
    resolved: true,
  },
  {
    id: 2,
    description: "Bug 2",
    userId: 1,
  },
  {
    id: 3,
    description: "Bug 3",
    userId: 2,
  },
  {
    id: 4,
    description: "Bug 4",
  },
];

app.get("/api/bugs", (req, res) => {
  res.json(bugs);
});

app.post("/api/bugs", (req, res) => {
  let bug = {
    id: ++bugs[bugs.length - 1].id,
    description: req.body.description,
    resolved: false,
    userId: null,
  };

  bugs.push(bug);
  res.json(bug);
});

app.patch("/api/bugs/:bugId", (req, res) => {
  let bugid = req.params.bugId;
  let newBug;
  bugs.map((bug) => {
    if (bug.id.toString() === bugid) {
      bug = { ...bug, ...req.body };
      newBug = bug;
    }
  });
  if (newBug) res.json(newBug);
  else res.status(500);
});

app.listen(9001, () => {
  console.log("Server running on port 9001");
});
