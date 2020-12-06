const mc = require('mongodb')
const url = 'mongodb://localhost:27017'

const connectDB = async() => { //making a asynchronous function for connecting to db
            mc.connect(url,(err,db) => {
            if (err) console.log('Database not found'); 
            else{
                console.log('Database connected succesfully');
                var dbo = db.db("users");
                dbo.createCollection('users',function(err){
                    if (err) console.log("Collection prexisting");
                    else {
                    console.log("Collection created") 
                    }
                }); 
            }
        }
    );
}

module.exports = connectDB; 
