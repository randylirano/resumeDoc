const express = require("express");
const router = express.Router();

// import module to perform Users related operation with DB
const usersModuleDB = require("../db/usersModuleDB.js");

// route to check credential
router.post("/login", async function (req, res) {
  // debugging print: print the received request body
  // console.log("GOT THE FOLLOWING REQUEST BODY:", req.body);
  // retrieve the request body
  const body = req.body;
  let data = {};
  let statusCode = 200;

  try {
    // check if the provided credential exist in DB
    const checkResult = await usersModuleDB.getCredential(body);

    // no credential found
    if (checkResult.length == 0) {
      // console.log("CREDENTIAL NOT FOUND", checkResult);
      statusCode = 500;
      data.message = "Incorrect email/password";
    }
    // credential found
    else {
      // console.log("CREDENTIAL FOUND", checkResult);
    }
  } catch(err) {
    statusCode = 500;
    data.message = err.message;
  }

  res.status(statusCode).send(JSON.stringify(data));
  // res.json({status:"OK"})
});

// route to create new user during sign-up
router.post("/create", async function (req, res) {
  const body = req.body;
  let data = {};
  let statusCode = 200;

  try {
    // check if the provided credential exist in DB
    const checkResult = await usersModuleDB.getCredential(body);

    // no credential found ==> make new entry
    if (checkResult.length == 0) {
      // console.log("CREDENTIAL NOT IN DB", checkResult);
      // console.log("ENTERING NEW USER");
      const createRes = await usersModuleDB.createUser(body);
      // console.log("User created", createRes);
      data.message = "New user created";
    }
    // Credential found ==> cannot create entry
    else {
      // console.log("DUPLICATE FOUND");
      data.message = "Credential already exist";
      statusCode = 500;
    }
  } catch(err) {
    statusCode = 500;
    data.message = err.message;
  }
  res.status(statusCode).send(JSON.stringify(data));
});

module.exports = router;