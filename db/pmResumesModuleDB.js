// This file handles product manager resume related CRUD operation: Listings, Adding
// Author: Randy Lirano

// Import Mongo Client
const { MongoClient } = require("mongodb");

// URI connection string, it takes
// URL connection to DB cluster defined in env if available, otherwise it connect to the local Mongo server
const uri = process.env.MONGO_URL || "mongodb://localhost:27017";

// Global variable const for DB and collections name
const DB_NAME = "resumeDoc";
const USERS_COL = "Users";
const PM_RESUMES_COL = "PM_Resumes";

// Function to get a list of PM resume ids of the current active email
async function getPMResumes(activeEmail) {
  // Initiate Mongo Client
  const client = new MongoClient(uri);

  try {
    await client.connect();

    // const usersDB = client.db(DB_NAME);
    const usersCol = client.db(DB_NAME).collection(USERS_COL);

    // query parameter
    const queryParams = [
      {
        $match: {
          "credential.login_email": {activeEmail},
        },
      },
      {
        $lookup: {
          from: "PM_Resumes",
          localField: "pm_resume_id",
          foreignField: "pm_resume_id",
          as: "User_PM_Resumes",
        },
      },
      {
        $project: {
          _id: 0,
          first_name: 1,
          last_name: 1,
          User_PM_Resumes: 1,
        },
      },
    ];

    console.log("QUERY PARAMETER", queryParams);

    let queryResult = await usersCol.aggregate(queryParams).toArray();
    // console.log("DB QUERY RESULT", queryResult);

    return queryResult;
  } finally {
    await client.close();
  }
}

// Export modules
module.exports.getPMResumes = getPMResumes;
