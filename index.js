require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const connectDB = require("./db");

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors({ origin: process.env.CLIENT_URL }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.send("Server deployed and running on vercel.");
});

// respond with "hello world" when a GET request is made to the homepage
app.get("/api/team-members", (req, res) => {
  res.send(["team member 1", "team member 2", "team member 3"]);
});

// You can add more route files here as your application grows
// app.use("/api/team-members", require("./routes/users"));
// app.use('/api/posts', require('./routes/posts'));

const port = process.env.PORT || 9000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
