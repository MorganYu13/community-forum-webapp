const { MongoClient } = require('mongodb')
const url = 'mongodb://localhost:27017'

let client = new MongoClient(url);

const checkData = (data) => {
    console.log(data);
    return client.connect()
        .then(conn => {
            var db = conn.db("forum");
            var userCollection = db.collection("users");

            return userCollection.findOne({ username: data.username, password: data.password });
        }).then(result => {
            console.log(result);
            return result != null;
        });
}


module.exports = checkData; 
//result.next() returns a promiseee
// on that promise you call .then()
// that's where you register the callback'