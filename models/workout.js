const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
    type: {
        type: String,
        enum: ["resistance", "cardio"],
        required: "Valid options are 'resistance' or 'cardio'",
    },
    name: {
        type: String,
        trim: true,
        required: "Enter a name for the exercise",
    },
    duration: {
        type: Number,
        required: "Enter the duration (minutes)",
    },
    weight: {
        type: Number,
        required: isRequired("weight"),
    },
    reps: {
        type: Number,
        required: isRequired("reps"),
    },
    sets: {
        type: Number,
        required: isRequired("sets"),
    },
    distance: {
        type: Number,
        required: isRequired("distance"),
    },
});

function isRequired(field) {
    return function() {
        if (field == "distance") {
            return this.type === "cardio";
        } else {
            return this.type === "resistance";
        }
    };
}