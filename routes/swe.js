// Written by Kennedy C. Ezumah
// This route handles loading, creation, and deletion of swe resume data

const express = require("express");
const router = express.Router();
const sweModuleDB = require("../db/sweModuleDB.js");

// route for loading all swe resume data of a given user
// an object with fields {userEmail : "XYZ"} is received in the body
router.post("/", async (req, res) => {
  // define a resume array to store objects of resumes
  let body = req.body;
  const resumeArray = await sweModuleDB.getAllResumes(body);
  console.log("swe.js: module loaded...");
  console.log("SWE ROUTER:" + resumeArray);

  // send back data in JSON format to calling frontend script
  res.json(resumeArray);
});

// route to create resume
router.post("/create", async (req, res) => {
  let data = { message: "No issues!" };
  let statusCode = 200;

  // define a resume array to store objects of resumes
  let body = req.body;

  try {
    await sweModuleDB.createNewResume(body);
  } catch (error) {
    statusCode = 500;
    data.message = error.message;
  }
  // send back response
  res.status(statusCode).send(JSON.stringify(data));
});

module.exports = router;
