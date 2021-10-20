const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutsSchema = new Schema({
    date: {
        type: Date,
        required: true
    },
    day: {
        type: Number
    },

    exercises: {
        type: Array,
        default: undefined,
        duration: {
            type: Number
        }

    },

    totalDuration: {
        type: Number,
        default: 0
    }

});

WorkoutsSchema.methods.getTotalDuration = async function() {
    this.totalDuration = 0;
    this.exercises.forEach(element => {
        this.totalDuration += Number(element.duration);
    });

    return Number(this.totalDuration);

}

const Workouts = mongoose.model("Workouts", WorkoutsSchema);

module.exports = Workouts;