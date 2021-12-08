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

    const usersCol = client.db(DB_NAME).collection(USERS_COL);
    const pmResumesCol = client.db(DB_NAME).collection(PM_RESUMES_COL);

    // query parameter for user collection
    let userQuery = {
      "credential.login_email": activeEmail,
    };

    // query the users collection to get the object representing the current active user
    let activeUser = await usersCol.find(userQuery).toArray();
    console.log("ACTIVE USER IS: ", activeUser);

    // store the value of the "pm_resume_id" key (an array of resume ids) in a new variable
    let pmResumeIds = activeUser[0].pm_resume_id;

    // query the swe resume collection to get an array of all objects whos "swe_resume_id" values match those in the sweResumeIds array
    let pmResumeObjectList = await pmResumesCol.find({ pm_resume_id: { $in: pmResumeIds } }).toArray();

    return pmResumeObjectList;
  } finally {
    await client.close();
  }
}

// Function to create new PM resume for current active user
async function createPmResume(entryObject) {
  // Initiate Mongo client
  const client = new MongoClient(uri);
  // Retrieve email of current active user
  let userEmail = entryObject.user.login_email;
  const pmResumesCol = client.db(DB_NAME).collection(PM_RESUMES_COL);

  try {
    await client.connect();

    // create a new object and assign values from entryObject to the newObject
    let newResumeEntry = {
      pm_resume_id: (await pmResumesCol.find().count()) + 1,
      fullName: entryObject.fullName,
      schoolAndMajor: entryObject.schoolAndMajor,
      schoolDates: entryObject.schoolDates,
      projectName: entryObject.projectName,
      projectDates: entryObject.projectDates,
      role: entryObject.role,
      descriptionOne: entryObject.descriptionOne,
      descriptionTwo: entryObject.descriptionTwo,
      descriptionThree: entryObject.descriptionThree,
      techSkillsList: entryObject.techSkillsList,
      interestsList: entryObject.interestsList,
    };

    await pmResumesCol.insertOne(newResumeEntry);
    // add new resume_id to the list of pm resumes owned by the user in the user collection
    return await client
      .db(DB_NAME)
      .collection("Users")
      .updateOne(
        { "credential.login_email": userEmail },
        { $addToSet: { pm_resume_id: newResumeEntry.pm_resume_id } }
      );
  } finally {
    await client.close();
  }
}

// Export modules
module.exports.getPMResumes = getPMResumes;
module.exports.createPmResume = createPmResume;