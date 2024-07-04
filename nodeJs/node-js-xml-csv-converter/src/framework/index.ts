import express from "express";
import FileController from "../adapters/controllers/FileController";

const app = express();
const port = process.env.PORT || 3000;

app.get("/", FileController.processFiles);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
