const express = require("express");
const bodyParser = require("body-parser");

const fs = require("fs");
const cors = require("cors");
const app = express();

// installed mongoose package to connect to database and use its modeling
const mongoose = require("mongoose");

// setting up mongodb uri for connection and i am connecting to sepcific student db
const mongoURI = "mongodb://localhost:27017/studentdb";

// setting up studentschema for data entry
const studentSchema = new mongoose.Schema({
    name: {type: String, required:[true,"Name is required"]},
     age: {type: Number, required:[true,"Age is required"]}
});

// student schema is created for valid entry of student documents
const Student = mongoose.model("Student", studentSchema);

// in the api layer we are adding the validation of fields to be inserted in db

mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

// middleware  section
app.use(cors());

// hey express if you are getting any html form data application/x-www-form-urlencoded and url is like i am going to parse it
app.use(bodyParser.urlencoded({ extended: false }));

// hey express if you are getting any json data  am going to parse it
app.use(bodyParser.json());

//route section

// index route  .METHOD(PATH, HANDLER); there should be only one index route
app.get("/", function (request, response) {
  response.send("hello from express world");
});

// named routes

app.get("/home", function (request, response) {
  response.send("hello from home page");
});

app.get("/about", function (request, response) {
  response.send("hello from about page");
});

app.get("/contact", function (request, response) {
  response.send("hello from contact page");
});

app.get("/page1", function (request, response) {
  response.send("<h1>hello from Page1 </h1>");
});

app.get("/page2", function (request, response) {
  response.send(`<h1>hello from Page2 </h1><p>Lorem ipsum dolor 
    sit amet, consectetur adipiscing elit, sed do eiusmod tempor inc
    ididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>`);
});

app.get("/food-details", function (request, response) {
  fs.readFile("./food-details.json", function (error, data) {
    response.send(JSON.parse(data));
  });
});

app.post("/addFoodDetails", function (request, response) {
  console.log(request.body);

  // read existing data
  fs.readFile("./food-details.json", function (error, existingFoodDetailsData) {
    if (error) {
      response.send({
        status: 500,
        mesage: "some error from backend file add food details failed",
      });
    } else {
      const updatedFoodDetailsData = JSON.parse(existingFoodDetailsData);
      updatedFoodDetailsData.push(request.body);

      fs.writeFile(
        "./food-details.json",
        JSON.stringify(updatedFoodDetailsData),
        function (error, writeresponse) {
          if (error) {
            response.send({
              status: 500,
              mesage: "some error from backend file add food details failed",
            });
          } else {
            response.send({ status: 200, mesage: "food added successfully" });
          }
        }
      );
    }
  });
});

// please create an endpoint to insert newly added student into database
app.post("/addStudent", function (request, response) {
  // connect tos student db and with help  of student schema insert alice hardcoded object in api into db

  // older syntax with callback no longer used with latest version of mongoose package  please dont use only for read purpose
  // Student.create({ name: 'Alice', age: 30 },function(err,result){
  //     if (err) console.log(err);
  //     else console.log("new student created", result)
  //     response.send("new student created", result)
  // })

  const newStudent = request.body
  Student.create(newStudent)
    .then((result) => {
   
      response.status(200).send({message:"Student entry successfull" ,data:result})
    
    })
    .catch((err) => {
     
      response.status(500).send(err)
    
    });
});
// reading all users 
app.get('/viewAllStudents',function (request,response){
    Student.find({}).then((result) => {
 
        response.status(200).send({message:"Please find the students details as follows, fetching successfull" ,data:result})
      
      })
      .catch((err) => {
        console.log("Error fetching student:", err);
        response.status(500).send(err)
      
      });
})
// reading a particular  user with route params
app.get('/viewStudent/:name',function (request,response){
   const studentName =  request.params.name
    Student.find({name:studentName}).then((result) => {
        if(result.length>0){
            response.status(200).send({message:"student details as follows, fetching successfull" ,data:result})
        }else{
            response.status(501).send({message:"Student not present please enter valid user" })
        } 
      
      })
      .catch((err) => {
        console.log("Error fetching student:", err);
        response.status(500).send(err)
      
      });
})

// get the particular user using query params

app.get('/viewStudentByQueryParam',function (request,response){
    let query = {};
    //sanity check
    if(request.query.name){
        query.name = request.query.name;
    }
    if(request.query.age){
        query.age = request.query.age;
    }

     Student.find(query).then((result) => {
         if(result.length>0){
             response.status(200).send({message:"student details as follows, fetching successfull" ,data:result})
         }else{
             response.status(501).send({message:"Student not present please enter valid user" })
         } 
       
       })
       .catch((err) => {
         console.log("Error fetching student:", err);
         response.status(500).send(err)
       
       });
 })


// reading a particular  user in a unique way
app.get('/viewStudentById/:id',function (request,response){
    const studentId =  request.params.id
     Student.findById(studentId).then((result) => {
       
         if(result){
             response.status(200).send({message:"student detail as follows, fetching successfull" ,data:result})
         }else{
             response.status(404).send({message:"Student not present please enter valid user" })
         } 
       
       })
       .catch((err) => {
         console.log("Error fetching student:", err);
         response.status(500).send(err)
       
       });
 })
 // update the student details with we can use put or patch
 app.put('/updateStudent/:id',function (request,response){
    const studentId =  request.params.id
    const updatedData = request.body;
     Student.findByIdAndUpdate(studentId,updatedData).then((result) => {
       
         if(result){
             response.status(200).send({message:"student detail updated successfull"})
         }else{
             response.status(404).send({message:"Student detail updation failed" })
         } 
       
       })
       .catch((err) => {
         console.log("Error updating student:", err);
         response.status(500).send(err)
       
       });
 })

 app.delete('/deleteStudent/:id',function (request,response){
    const studentId =  request.params.id
    
     Student.findByIdAndDelete(studentId).then((result) => {
       
         if(result){
             response.status(200).send({message:"student detail deleted successfully"})
         }else{
             response.status(404).send({message:"Student detail deletion failed" })
         } 
       
       })
       .catch((err) => {
         console.log("Error deleting student:", err);
         response.status(500).send(err)
       
       });
 })

app.listen(4002, function () {
  console.log("server started with port", 4002);
});
