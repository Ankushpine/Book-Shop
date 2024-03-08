const express = require("express");
const app = express();
const cors = require("cors");

require("dotenv").config();
const port = process.env.SERVER_PORT || 5000;

require("./config/db");

app.use(cors());
app.use(express.json());

app.use("/api", require("./routes/main-routes"));
app.listen(port, () => console.log(`Server connected to port :: ${port}`));
