//MongoDB stuff
const { MongoClient, ObjectId } = require("mongodb");

//MONGODB SETUP

const dbUrl = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PWD}@${process.env.DB_HOST}/?retryWrites=true&w=majority`;
const client = new MongoClient(dbUrl);

//MONGODB HELPER FUNCTIONS
async function connection() {
    db = client.db("testdb");
    console.log("db connected :)")
    return db;
}

async function getAllItems() {
    db = await connection();
    let results = db.collection("Furniture").find({});
   
    resultsArray = await results.toArray();
    return resultsArray;
}

async function getBlogList(){
    db = await connection();
    let results = db.collection("blogList").find({});

    resultsArray = await results.toArray();
    return resultsArray;
}
  


module.exports = { 
    getAllItems,
    getBlogList
};