module.exports = app => {
  const medicine = require("../controllers/medicine.controller.js");
  //const patient = require("../controllers/medicine.controller.js");

  var router = require("express").Router();

  // Create a new Medicine
  router.post("/", medicine.create);
  //router.post("/", patient.create);

  // Retrieve all Medicines
  router.get("/", medicine.findAll);
  //router.get("/", patient.findAll);

  // Retrieve all isExpired Medicines
  router.get("/isExpired", medicine.findAllPublished);
  //router.get("/published", patient.findAllPublished);


  // Retrieve a single Medicine with id
  router.get("/:id", medicine.findOne);
  //router.get("/:id", patient.findOne);

  // Update a Medicine with id
  router.put("/:id", medicine.update);
  //router.put("/:id", patient.update);

  // Delete a Medicine with id
  router.delete("/:id", medicine.delete);
  //router.delete("/:id", patient.delete);

  // Create a new Medicine
  router.delete("/", medicine.deleteAll);
  //router.delete("/", patient.deleteAll);

  app.use("/api/medicine", router);
  //app.use("/api/patient", router);
};
