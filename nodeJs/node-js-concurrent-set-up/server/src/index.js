const express = require("express");

const app = express();

const PORT = 3001;

async function start() {
  try {
    app.listen(PORT, () => console.log(`App has been started on port ${PORT}..`));
    res.send("Hello from the server!");
  } catch (e) {
    console.log("Server error", e.message);
  }
}
start();
