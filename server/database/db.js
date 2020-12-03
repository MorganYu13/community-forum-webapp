const mc = require('mongoose')


const connectDB = async() => { //making a asynchronous function for connecting to db
            mc.connect('mongodb://localhost:27017',(err) => {
            if (err) console.log('Database not found'); 
            else{
                console.log('Database connected succesfully');
            }
        }
    );
}

module.exports = connectDB; 