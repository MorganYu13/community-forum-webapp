const mc = require('mongodb')
const url = 'mongodb://localhost:27017'


const insertData = (data) => {
    mc.connect(url, function(err, client){
        if (err) throw err; 

        var dbi = client.db("forum"); 
        dbi.collection("users").insertOne(data, function(err,res){
            if (err) throw err; 
            console.log("inserted"); 
        })
    })
}

module.exports = insertData; 