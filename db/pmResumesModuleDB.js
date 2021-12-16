// This file handles product manager resume related CRUD operation: Listings, Adding, Deleting
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

    // for (let resume of pmResumeObjectList) {
    //   console.log(resume);
    // }

    return pmResumeObjectList;
  } finally {
    await client.close();
  }
}


async function createPmResume(entryObject) {
  // Initiate Mongo client
  const client = new MongoClient(uri);
  // Retrieve email of current active user
  let userEmail = entryObject.user.userEmail;
  const pmResumesCol = client.db(DB_NAME).collection(PM_RESUMES_COL);

  try {
    await client.connect();

    // create a new object and assign values from entryObject to the newObject
    let newResumeEntry = {
      pm_resume_id: (await pmResumesCol.find().count()) + 1,
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