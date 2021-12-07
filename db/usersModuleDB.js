// This file handles user's credential related CRUD operation: Log-in, Sign-up, and Update
// Author: Randy Lirano

// Import Mongo Client
const { MongoClient } = require("mongodb");

// URI connection string, it takes
// URL connection to DB cluster defined in env if available, otherwise it connect to the local Mongo server
const uri = process.env.MONGO_URL || "mongodb://localhost:27017";

// Global variable const for DB and collections name
const DB_NAME = "resumeDoc";
const USERS_COL = "Users";

// Function to check if the provided credential combination exist in the database
// Returns an array containing query result for the given credential
async function getCredential(inputCredential) {
  // Initiate Mongo Client
  const client = new MongoClient(uri);
  // console.log("AT DB RECEIVING CREDENTIAL:", inputCredential);
  // console.log("TYPE OF INPUT", typeof inputCredential);

  try {
    await client.connect();

    // const usersDB = client.db(DB_NAME);
    const usersCol = client.db(DB_NAME).collection(USERS_COL);

    // query parameter
    const queryParams = {
      credential: {
        login_email: inputCredential.login_email,
        password: inputCredential.password,
      },
    };

    console.log("QUERY PARAMETER", queryParams);

    let queryResult = await usersCol.find(queryParams).toArray();
    console.log("DB QUERY RESULT", queryResult);

    return queryResult;
  } finally {
    await client.close();
  }
}

// Function to enter new user into the database
async function createUser(newUser) {
  // Initiate Mongo Client
  const client = new MongoClient(uri);

  try {
    await client.connect();

    // const usersDB = client.db(DB_NAME);
    const usersCol = client.db(DB_NAME).collection(USERS_COL);

    const newUserInfo = {
      user_id: (await usersCol.find().count()) + 1,
      credential: {
        login_email: newUser.login_email,
        password: newUser.password,
      },
      first_name: newUser.first_name,
      last_name: newUser.last_name,
      swe_resume_id: [],
      "ux/ui_resume_id": [],
      pm_resume_id: [],
    };

    return await usersCol.insertOne(newUserInfo);
  } finally {
    await client.close();
  }
}

// Export modules
module.exports.getCredential = getCredential;
module.exports.createUser = createUser;
