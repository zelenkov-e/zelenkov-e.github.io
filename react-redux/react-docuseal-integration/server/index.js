const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API Server is running");
});

app.post("/api/docuseal/builder_token", (req, res) => {
  const payload = {
    user_email: "zeliankovaala@gmail.com",
    integration_email: "customer@example.com",
    name: "Integration W-9 Test Form",
    document_urls: ["https://www.irs.gov/pub/irs-pdf/fw9.pdf"],
  };

  console.log("DOCUSEAL_TOKEN", process.env.DOCUSEAL_TOKEN);

  const token = jwt.sign(payload, process.env.DOCUSEAL_TOKEN);

  res.json({ token });
});

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
