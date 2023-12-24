
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs')

const cors = require('cors')
const app = express();

// middleware  section
app.use(cors())

// hey express if you are getting any html form data application/x-www-form-urlencoded and url is like i am going to parse it
app.use(bodyParser.urlencoded({ extended: false }))

// hey express if you are getting any json data  am going to parse it
app.use(bodyParser.json())

//route section

// index route  .METHOD(PATH, HANDLER); there should be only one index route
app.get('/' , function (request,response){
       response.send('hello from express world')
     
})

// named routes

app.get('/home' , function (request,response){
    response.send('hello from home page')
  
})

app.get('/about' , function (request,response){
    response.send('hello from about page')
  
})

app.get('/contact' , function (request,response){
    response.send('hello from contact page')
  
})

app.get('/page1' , function (request,response){
    response.send('<h1>hello from Page1 </h1>')
  
})


app.get('/page2' , function (request,response){

    response.send(`<h1>hello from Page2 </h1><p>Lorem ipsum dolor 
    sit amet, consectetur adipiscing elit, sed do eiusmod tempor inc
    ididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>`)
  
})

app.get('/food-details', function (request,response){

    fs.readFile('./food-details.json',function(error,data){
          response.send(JSON.parse(data))
    })
})

app.post('/addFoodDetails', function(request,response){
    console.log(request.body)

    // read existing data 
    fs.readFile('./food-details.json',function(error,existingFoodDetailsData){
        if(error){
            response.send({status:500,mesage:"some error from backend file add food details failed"})
        }else{
            const updatedFoodDetailsData = JSON.parse(existingFoodDetailsData)
            updatedFoodDetailsData.push(request.body)
            
            fs.writeFile('./food-details.json',JSON.stringify(updatedFoodDetailsData), function (error,writeresponse){
                    if(error){
                        response.send({status:500,mesage:"some error from backend file add food details failed"})
                    }else{
                        response.send({status:200,mesage:"food added successfully"})
                    }
            })
        }
      
  })
   
})


app.listen(4002,function(){
    console.log('server started with port',4002)
})