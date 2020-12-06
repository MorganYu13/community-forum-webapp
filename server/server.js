const express = require('express'); 
const app = express(); 

const bodyparse = require('body-parser'); 
const cookies = require('cookie-parser');


app.use(cookies()); 


const connectDB = require('./database/connectDB'); 
const checkData = require('./database/checkData'); 
const insertData = require('./database/insertData');

const insertComment = require('./database/insertComment');
const getComment = require('./database/getComment');

connectDB(); //to connect to DB 

const port = 5000; 

app.use(express.static("../client/src")); //making our express host the server interanally, used instead of Apache for XAMPP 
app.use(bodyparse.json()); //registering middleware 

app.post("/api/login",(req,res) => {
    checkData(req.body).then(isValid => {
        if (isValid) {
            
            res.cookie("username",req.body.username);
            res.status(200).send({});
        }
        else{
            res.status(401).send({}); 
        }
    });
});


app.post("/api/signup",(req,res) => {
    insertData(req.body);
})

app.post("/api/homepage",(req,res) => {
    console.log(req.cookies.username); 

    let author = req.cookies.username || "";
    if (author == "") {
        res.sendStatus(401);
    }

    req.body.author = author;
    insertComment(req.body); 
})

app.get("/api/homepage",(req,res) => {
    getComment().then( function(posts){
        res.send(posts);
    })

    .catch(() => {
        res.sendStatus(500);
        console.error("Couldnt Retrieve posts")
    })
})

app.listen(port, () => console.log('Listening on port 5000'));