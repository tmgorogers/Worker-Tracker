const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//Define a schema
const workoutSchema = new Schema({
  day: {
    type: Date,
    default: () => new Date(),
  },
  excerise: [
      {
    type: {
        type: String,
        trim: true,
        required: "Enter an exercise type",
      },

      name: {
        type: String,
        trim: true,
        required: "Enter an excerise name",
      },

      duration: {
          type: Number,
          required: "Enter an excerise duration in minutes",
      },

      weight: {
          type: Number,
        },

        reps: {
            type: Number,
        },

        sets: {
            type: Number,
        },

        distance: {
            type: Number,
        },
    },
  ]
  
});



const Workout = mongoose.model("Workout", workoutSchema);

module.exports = workout;
