// Written by Kennedy C. Ezumah
// This route handles loading, creation, and deletion of swe resume data

const express = require("express");
const router = express.Router();
const sweModuleDB = require("../db/sweModuleDB.js");

/* route for retrieving all swe resume data of a given user
   an object with fields {login_email : "XYZ"} is received in the body
*/
router.post("/", async (req, res) => {
  // define a resume array to store objects of resumes
  let body = req.body;
  const resumeArray = await sweModuleDB.getSWEResumes(body.login_email);
  console.log("swe.js: module loaded...");
  console.log("SWE ROUTER:" + resumeArray);

  // send back data in JSON format to calling frontend script
  res.json(resumeArray);
});

// route to create resume
router.post("/create", async (req, res) => {
  let data = { message: "No issues with creating!" };
  let statusCode = 200;

  // define a resume array to store objects of resumes
  let resumeObject = req.body;

  try {
    await sweModuleDB.createNewResume(resumeObject);
  } catch (error) {
    statusCode = 500;
    data.message = error.message;
  }
  res.status(statusCode).send(JSON.stringify(data));
});

// route to delete resume
router.delete("/delete", async (req, res) => {
  let data = { message: "No issues with deleting!" };
  let statusCode = 200;

  // define a resume array to store objects of resumes
  let resumeObject = req.body;

  try {
    console.log("DELETE CONSOLE LOG 1");
    await sweModuleDB.deleteResume(resumeObject);
  } catch (error) {
    statusCode = 500;
    data.message = error.message;
  }
  res.status(statusCode).send(JSON.stringify(data));
});
module.exports = router;
