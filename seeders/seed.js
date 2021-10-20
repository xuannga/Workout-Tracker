let mongoose = require("mongoose");
let Workout = require("../models/workouts");

module.exports = function() {
    var d = new Date();



    let workoutSeed = [{
            date: new Date(new Date().setDate(new Date().getDate() - 8)),
            totalDuration: 50,
            day: dayCalc(8),
            exercises: [{
                type: "resistance",
                name: "Bicep Curl",
                duration: 30,
                weight: 100,
                reps: 10,
                sets: 4
            }]
        },
        {
            date: new Date(new Date().setDate(new Date().getDate() - 7)),
            totalDuration: 20,
            day: dayCalc(7),
            exercises: [{
                type: "resistance",
                name: "Lateral Pull",
                duration: 20,
                weight: 300,
                reps: 10,
                sets: 4
            }]
        },
        {
            date: new Date(new Date().setDate(new Date().getDate() - 6)),
            totalDuration: 25,
            day: dayCalc(6),
            exercises: [{
                type: "resistance",
                name: "Push Press",
                duration: 25,
                weight: 185,
                reps: 8,
                sets: 4
            }]
        },
        {
            date: new Date(new Date().setDate(new Date().getDate() - 5)),
            totalDuration: 125,
            day: dayCalc(5),
            exercises: [{
                type: "cardio",
                name: "Running",
                duration: 125,
                distance: 4
            }]
        },
        {
            date: new Date(new Date().setDate(new Date().getDate() - 4)),
            totalDuration: 20,
            day: dayCalc(4),
            exercises: [{
                type: "resistance",
                name: "Sumo Squats",
                duration: 20,
                weight: 285,
                reps: 10,
                sets: 4
            }]
        },
        {
            date: new Date(new Date().setDate(new Date().getDate() - 3)),
            totalDuration: 20,
            day: dayCalc(3),
            exercises: [{
                type: "resistance",
                name: "Face Pulls",
                duration: 20,
                weight: 120,
                reps: 10,
                sets: 4
            }]
        },
        {
            date: new Date(new Date().setDate(new Date().getDate() - 2)),
            totalDuration: 30,
            day: dayCalc(2),
            exercises: [{
                type: "resistance",
                name: "Quad Press",
                duration: 30,
                weight: 300,
                reps: 10,
                sets: 4
            }]
        },
        {
            date: new Date(new Date().setDate(new Date().getDate() - 1)),
            totalDuration: 20,
            day: dayCalc(1),
            exercises: [{
                type: "resistance",
                name: "Hammer Curls",
                duration: 20,
                weight: 30,
                reps: 10,
                sets: 4
            }]
        },
        {
            date: new Date(new Date().setDate(new Date().getDate() - 8)),
            totalDuration: 20,
            day: dayCalc(8),
            exercises: [{
                type: "resistance",
                name: "Military Press",
                duration: 20,
                weight: 300,
                reps: 10,
                sets: 4
            }]
        },
        {
            date: new Date(new Date().setDate(new Date().getDate() - 3)),
            totalDuration: 30,
            day: dayCalc(3),
            exercises: [{
                type: "cardio",
                name: "Swimming",
                duration: 30,
                distance: 2
            }]
        }
    ];

    Workout.deleteMany({})
        .then(() => Workout.insertMany(workoutSeed))
        .then(data => {
            console.log(data.length + " records inserted!");
            process.exit(0);
        })
        .catch(err => {
            console.error(err);
            process.exit(1);
        });

}

function dayCalc(num) {
    var d = new Date();
    num = num % 7;
    var sub = d.getDay() - num;

    if (sub >= 0) {
        return sub
    } else {
        sub += 7;
        return sub;
    }


}