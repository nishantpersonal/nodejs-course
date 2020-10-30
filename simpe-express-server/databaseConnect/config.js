const mongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017";

const connectToClient = async (url) => {
  try {
    console.log("Client connected");
    return await mongoClient.connect(url);
  } catch (e) {
    console.log(e);
  }
};

const connectToDb = async (client, dbName) => {
  try {
    console.log("Db connected");
    return await client.db(dbName);
  } catch (e) {
    console.log(e);
  }
};

const setupDb = async () => {
  let client = await connectToClient(url);
  return await connectToDb(client, "school");
};


module.exports = setupDb;
