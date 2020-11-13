// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require("express");
// Start up an instance of app
const app = express();
/*Dependencies*/
const bodyParser = require("body-parser");
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require("cors");
app.use(cors());
// Initialize the main project folder
app.use(express.static('website'));

const port = 3000;

// Setup Server
const server = app.listen(port,(req,res)=>{
    console.log(`running on localhost: ${port}`)
});


// get route to returned projectData obj  
app.get("/all",(req,res)=>{
    res.send(projectData); 
    console.log(projectData)
}); 


// post route adds incoming data to projectData
app.post("/add",(req,res)=>{
    let newData = req.body;
    projectData["temp"] =newData.temp;
    projectData["date"] =newData.date;
    projectData["feelings"]=newData.feelings;
    res.status(200).send();   ///ok
   
});

