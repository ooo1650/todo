const express = require("express");
const path = require("path");
const app = express();
const port = 3000;
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/index.html"));
});
app.use("/static", express.static(path.join(__dirname, "../frontend")));
app.get("/api/message", (req, res) => {
  res.json({ message: "Hello from the backend!" });
});
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
