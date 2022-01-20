const express = require("express");
const app = express();
const connectDB = require("./config/db");

//use a PORT number to run the app
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) =>
  res.send("It will send data to the browser- API running")
);

//app.listen([port[, host[, backlog]]][, callback])
app.listen(PORT, () => console.log(`listening to http://localhost:${PORT} `));

//connect database mongodb
connectDB();

//Init Middleware
app.use(express.json({ extented: false }));

//Define Routes
app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/profile", require("./routes/api/profile"));
app.use("/api/posts", require("./routes/api/posts"));
