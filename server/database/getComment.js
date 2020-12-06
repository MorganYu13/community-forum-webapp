const { MongoClient } = require('mongodb')
const url = 'mongodb://localhost:27017'

let client = new MongoClient(url);

const getComment = () => {

    return client.connect()
        .then(conn => {
            var db = conn.db("forum");
            var userCollection = db.collection("posts");
            return userCollection.find({}).toArray();
        })
}


module.exports = getComment; 