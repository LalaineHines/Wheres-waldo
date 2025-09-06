const express = require("express");
const cors = require("cors");
require("dotenv").config();
const iconsRoute = require("./routes/iconsRoute.js");
const gameRoute = require("./routes/gameRoute.js");
const leaderboardRoute = require("./routes/leaderBoardRoute.js");



const app = express();

app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());


app.use("/icons", iconsRoute);
app.use("/play", gameRoute);
app.use("/leaderboard", leaderboardRoute);
app.use(function(req, res) {
  return res.status(404).json(
    {errors: [{msg: "Page not found"}]}
  );
});
app.use(function(error, req, res, next) {
  return res.status(500).json(
    {errors: [{msg: error.message}]}
  );
});



const PORT = process.env.PORT;

app.listen(PORT, function() {
  console.log(`Server running on port ${PORT}`);
});