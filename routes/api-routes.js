const express = require("express");
const mongoose = require("mongoose");
const Workouts = require("../models/workouts");
app = express();
var d = new Date();



module.exports = function(app) {
    //get all workouts
    app.get("/api/workouts", (req, res) => {
        Workouts.find({}).sort({ date: 1 }).then(data => {
            res.json(data);
        }).catch(err => {
            console.log(err);
        });
    });

    app.put("/api/workouts/:id", async(req, res) => {
        console.log("PUT ID", req.params.id);
        //NEED TO INCLUDE ALL OF EXERCISE 
        try {
            var addExcercise = await Workouts.findByIdAndUpdate({ _id: req.params.id }, { $set: { day: d.getDay(), date: Date.now() }, $push: { exercises: req.body } }, { new: true });
            addExcercise.getTotalDuration();
            console.log("update", addExcercise);
            var addTotalDur = await Workouts.findByIdAndUpdate({ _id: req.params.id }, { $set: { totalDuration: addExcercise.totalDuration } }, { new: true })
            console.log(addTotalDur, "update after");
            res.json(addTotalDur);
        } catch (err) {
            console.log(err)
        }

    });
    //Create new workout
    app.post("/api/workouts", (req, res) => {
        Workouts.create({ date: Date.now(), day: d.getDay() }).then(data => {
            res.json(data);
        }).catch(err => {
            console.log(err);
        });
    });

    //get all workouts
    app.get("/api/workouts/range", async(req, res) => {
        var sunday = new Date(new Date().setDate(new Date().getDate() - d.getDay())).setHours(00, 00, 00);
        console.log("sunday", sunday);
        try {
            const data = await Workouts.find({ date: { $gte: sunday } }).sort({ date: 1 });
            console.log(data);
            res.json(data);
        } catch (err) {
            throw err;
        }
    })

}