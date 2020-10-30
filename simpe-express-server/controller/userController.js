const { ObjectId } = require("mongodb");
const setupDb = require("../databaseConnect/config");

let db;

const databaseSetup=async()=>{
    db=await setupDb();
}
databaseSetup();


const getUser = async (req, res, next) => {
  try {
    // let db = await setupDb();
    res.send(await db.collection("students").find().toArray());
  } catch (e) {
    console.log(e);
  }
};

const getUserById = async (req, res, next) => {
  try {
    // let db = await setupDb();
    res.send(
      await db
        .collection("students")
        .find({ _id: ObjectId(req.params.id) })
        .toArray()
    );
  } catch (e) {
    console.log(e);
  }
};

const createUser = (req, res, next) => {
  res.send("User Created");
};

module.exports = {
  getUser,
  createUser,
  getUserById,
};
