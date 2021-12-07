// This module handles database operations with the SWE database collection
// Written by Kennedy Ezumah

const { MongoClient } = require("mongodb");
const uri = process.env.MONGO_URL || "mongodb://localhost:27017";

// global variables
const DB_NAME = "resumeDoc";
const COLLECTION = "SWE_Resumes";
const USERCOL = "Users";

// method to return all resumes from this collection
async function getAllResumes(credentialObject) {
  const client = new MongoClient(uri);
  const db = client.db(DB_NAME);
  console.log("DB EMAIL:" + credentialObject.login_email);
  let login_email = credentialObject.login_email;

  try {
    await client.connect();
    console.log("sweModuleDB.js: db connection established...");

    // query parameter for user collection
    let userQuery = {
      "credential.login_email": { login_email },
    };

    // get the currently active user
    let activeUser = await db.collection(USERCOL).find(userQuery).toArray;

    console.log("ACTIVE USERS: " + activeUser);

    // get the resume ids of the current active user
    let resumeIds = activeUser[0].swe_resume_id;

    /* let query = [
      {
        $match: {
          "credential.login_email": { login_email },
        },
      },
      {
        $lookup: {
          from: "SWE_Resumes",
          localField: "swe_resume_id",
          foreignField: "swe_resume_id",
          as: "User_SWE_Resumes",
        },
      },
      {
        $project: {
          _id: 0,
          first_name: 1,
          last_name: 1,
          User_SWE_Resumes: 1,
        },
      },
    ];
*/
    console.log("RESUME IDS " + resumeIds);
    //   return await db.collection(COLLECTION).aggregate(query).toArray();

    //let temp = await db.collection(COLLECTION).find(query).toArray();

    //console.log(temp);
    return;
  } finally {
    await client.close();
  }
}

// method to create new SWE resume entry in database
async function createNewResume(entryObject) {
  const client = new MongoClient(uri);
  let userEmail = entryObject.author;
  let credential = { login_email: userEmail };
  const db = client.db(DB_NAME);

  try {
    await client.connect();
    console.log("sweModuleDB.js: db connection established...");

    // create a new object and assign values from entryObject to the newObject
    let newResumeEntry = {
      swe_resume_id: (await db.collection(COLLECTION).find().count()) + 1,
      author: entryObject.author,
      resumeTitle: entryObject.resumeTitle,
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

    await db.collection(COLLECTION).insertOne(newResumeEntry);
    // add new resume_id to the list of swe resumes owned by the user in the user collection
    return await db
      .collection("Users")
      .update(
        { "credential.login_email": userEmail },
        { $addToSet: { swe_resume_id: newResumeEntry.swe_resume_id } }
      );
  } finally {
    await client.close();
  }
}

module.exports.getAllResumes = getAllResumes;
module.exports.createNewResume = createNewResume;
