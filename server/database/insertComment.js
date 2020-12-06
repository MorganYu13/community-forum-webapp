const mc = require('mongodb')
const url = 'mongodb://localhost:27017'


const insertComment = (data) => {
    mc.connect(url, function(err, client){
        if (err) throw err; 

        console.log(data);  

        var dbi = client.db("forum"); 
        dbi.collection("posts").insertOne(data, function(err,res){
            if (err) throw err; 
            console.log("inserted comment"); 
        })
    })
}

module.exports = insertComment; 