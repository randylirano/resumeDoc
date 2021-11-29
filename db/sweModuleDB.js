// This module handles database operations with the SWE database collection
// Written by Kennedy Ezumah

const { MongoClient } = require("mongodb");
const uri = process.env.MONGO_URL || "mongodb://localhost:27017";

// global variables
const DB_NAME = "resumeDoc";
const COLLECTION = "SWE_Resumes";

// method to return all resumes from this collection
async function getAllResumes(credentialObject) {
  const client = new MongoClient(uri);
  const db = client.db(DB_NAME);

  try {
    await client.connect();
    console.log("sweModuleDB.js: db connection established...");

  query = [
    {
      $match: {
        "credential.login_email": {credentialObject},
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

 return await db.collection(COLLECTION).aggregate(query).toArray();
  } finally {
    await client.close();
  }
}

// method to create new SWE resume entry in database
async function createNewResume(entryObject) {

  const client = new MongoClient(uri);
  let userEmail = entryObject.user.login_email
  const db = client.db(DB_NAME);

  try {
    await client.connect();
    console.log("sweModuleDB.js: db connection established...");

    // create a new object and assign values from entryObject to the newObject
    let newResumeEntry = {
      swe_resume_id: (await db.collection(COLLECTION).find().count()) + 1,
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
    }

    await db.collection(COLLECTION).insertOne(newResumeEntry);
    // add new resume_id to the list of swe resumes owned by the user in the user collection 
   return await db.collection("Users").update(
   { credential: {login_email : userEmail }},
   { $addToSet: { swe_resume_id: newResumeEntry.swe_resume_id } }
)

  }finally {
    await client.close();
  }

}

module.exports.getAllResumes = getAllResumes;
module.exports.createNewResume = createNewResume;