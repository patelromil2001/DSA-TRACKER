require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/logs", require("./routes/logs"));
app.use("/api/settings", require("./routes/settings"));

app.get("/ping", (req, res) => {
  console.log(`Ping received at ${new Date().toISOString()}`);

  res.status(200).json({
    success: true,
    message: "Server is alive",
    timestamp: new Date().toISOString(),
  });
});

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected");

    const PORT = process.env.PORT || 5000;

    app.listen(PORT, () => console.log(`Server is running at ${PORT}`)

    );
  })
  .catch((err) => {
    console.error("MongoDB connection failed ❌", err);
    process.exit(1);
  });