// Iteration #1
const { model, Schema } = require("mongoose");

const dronesSchema = new Schema({
  name: {
    type: String,
    unique: true,
  },
  propellers: {
    type: Number,
    required: true,
  },
  maxSpeed: {
    type: Number,
    unique: true,
  },
});

const droneModel = model("drone", dronesSchema);

module.exports = droneModel;
