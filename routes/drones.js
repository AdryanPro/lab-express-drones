const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Drones = require("../models/Drone.model");
// require the Drone model here

router.get("/drones", async (req, res, next) => {
  const dronesDB = await Drones.find();
  console.log(dronesDB);
  res.render("drones/list", { dronesDB });
});

router.get("/drones/create", (req, res, next) => {
  res.render("drones/create-form");
});

router.post("/drones/create", async (req, res, next) => {
  // Iteration #3: Add a new drone
  const newDrone = req.body; //Storing the value of the new drone inside newDrone
  await Drones.create(newDrone); //Saving the newDrone inside the dataBase
  res.redirect("/"); //send to the page after the user is done creating the new drone
  // console.log("Here is req body:", req.body);
});

router.get("/drones/:id/edit", (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
});

router.post("/drones/:id/edit", (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
});

router.post("/drones/:id/delete", (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
});

module.exports = router;
