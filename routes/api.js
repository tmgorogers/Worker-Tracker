const router = require("express").Router();
const Transaction = require("../models/workout.js");


router.get("/api/workout", (req, res) => {
  Workout.find({})
    .sort({ date: -1 })
    .then(dbWorkout=> {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("/api/workout", (req, res) => {
  Workout.find({})
    
    .then(dbWorkout=> {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});



router.post("/api/workout", ({ body }, res) => {
  Workout.create({})
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.put("/api/workout/:idk", ({ body, params }, res) => {
  Workout.findByIdAndUpdate(
    params.id,
    {$push: { exercises: body}},
    {new: true, runValidators: true}
  )
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});



module.exports = router;
