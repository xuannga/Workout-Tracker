const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
const Workouts = require("./models/workouts");
const seed = require("./seeders/seed");
var PORT = process.env.PORT || 3000;

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
    useNewUrlParser: true,
    useFindAndModify: false
});

//require(apiRoute)(app);
require("./routes/html-routes")(app);
require("./routes/api-routes")(app);

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});