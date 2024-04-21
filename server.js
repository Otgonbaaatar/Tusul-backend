const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const logger = require("./middleware/logger.js");
const connectDB = require("./db");
dotenv.config({ path: "./config.env" });

//router routes
const userRoutes = require("./routes/user");
const perfumeRoutes = require("./routes/perfume.js");

const errorHandler = require("./middleware/error.js");
connectDB();
const app = express();
app.use(cors());
app.use(logger);
app.use(express.json());
app.use("/uploads", express.static(__dirname + "/uploads"));
app.use("/api/v1/user", userRoutes);
app.use("/api/v1/perfume", perfumeRoutes);
app.use(errorHandler);

const server = app.listen(
  process.env.PORT,
  console.log(`Express server is running on port ${process.env.PORT}`)
);

process.on("unhandledRejection", (err, promise) => {
  console.log(`Unhandled rejection error: ${err.message}`);
  server.close(() => {
    process.exit(1);
  });
});
