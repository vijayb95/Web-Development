const { MongoClient } = require("mongodb");

//connection url
const uri =
  "mongodb+srv://testingApp:abcd1234@cluster1.aawpipb.mongodb.net/?retryWrites=true&w=majority";

//Creating new Mongo client
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//use connect method to connect to server
client.connect((err) => {
  const collection = client.db("fruitsDB").collection("fruits");

  //insert some data
  collection.insertMany([{ a: 1 }, { b: 2 }, { c: 3 }], function (err, result) {
    console.log("Inserted 3 docs");
  });

  // perform actions on the collection object
  client.close();
});
