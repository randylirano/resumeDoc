// This module handles database operations with the SWE database collection
// Written by Kennedy Ezumah

const { MongoClient } = require("mongodb");
const uri = process.env.MONGO_URL || "mongodb://localhost:27017";

// global variables
const DB_NAME = "resumeDoc";
const COLLECTION = "SWE_Resumes";
const USERCOL = "Users";

// method to return all resumes from this collection
async function getSWEResumes(activeEmail) {
  const client = new MongoClient(uri);
  const db = client.db(DB_NAME);
  console.log("DB EMAIL:" + activeEmail);

  try {
    await client.connect();
    console.log("sweModuleDB.js: db connection established...");

    // query parameter for user collection
    let userQuery = {
      "credential.login_email": activeEmail,
    };

    // query the users collection to get the object representing the current active user
    let activeUser = await db.collection(USERCOL).find(userQuery).toArray();
    console.log("ACTIVE USER IS: ", activeUser);

    // store the value of the "swe_resume_id" key (an array of resume ids) in a new variable
    let sweResumeIds = activeUser[0].swe_resume_id;

    // query the swe resume collection to get an array of all objects whos "swe_resume_id" values match those in the sweResumeIds array
    let sweResumeObjectList = await db
      .collection(COLLECTION)
      .find({ swe_resume_id: { $in: sweResumeIds } })
      .toArray();

    console.log("RESUME LIST IS:" + sweResumeObjectList);

    // return the result
    return sweResumeObjectList;
  } finally {
    await client.close();
  }
}

// method to create new SWE resume entry in database
async function createNewResume(entryObject) {
  const client = new MongoClient(uri);
  // Retrieve email of current active user
  let userEmail = entryObject.user.userEmail;
  const db = client.db(DB_NAME);

  try {
    await client.connect();
    console.log("sweModuleDB.js: db connection established...");

    // create a new object and assign values from entryObject to the newObject
    let newResumeEntry = {
      swe_resume_id: (await db.collection(COLLECTION).find().count()) + 1,
      title: entryObject.title,
      education: [{
        school_name: entryObject.education.school_name,
        degree: entryObject.education.degree,
        major: entryObject.education.major,
        start_date: entryObject.education.start_date,
        end_date: entryObject.education.end_date
      }],
      work_experience: [{
        company_name: entryObject.work_experience.company_name,
        position: entryObject.work_experience.position,
        start_date: entryObject.work_experience.start_date,
        end_date: entryObject.work_experience.end_date,
        location: entryObject.work_experience.location,
        question_1: entryObject.work_experience.question_1,
        question_2: entryObject.work_experience.question_2,
        question_3: entryObject.work_experience.question_3,
        question_4: entryObject.work_experience.question_4,
      }],
      project: [{
        name: entryObject.project.project_name,
        start_date: entryObject.project.start_date,
        end_date: entryObject.project.end_date,
        question_1: entryObject.project.question_1,
        question_2: entryObject.project.question_2,
        question_3: entryObject.project.question_3,
      }],
      skills: entryObject.skills
    };

    await db.collection(COLLECTION).insertOne(newResumeEntry);
    // add new resume_id to the list of swe resumes owned by the user in the user collection
    console.log("DB User collection about to be updated...");
    return await db
      .collection("Users")
      .updateOne(
        { "credential.login_email": userEmail },
        { $addToSet: { swe_resume_id: newResumeEntry.swe_resume_id } }
      );
  } finally {
    await client.close();
  }
}

module.exports.getSWEResumes = getSWEResumes;
module.exports.createNewResume = createNewResume;
