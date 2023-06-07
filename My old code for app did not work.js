/*const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require("https");

const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true})); //with this code we tell to our code to use the body-parser package which help us log the user inputs.

app.get("/", function(req, res){
    res.sendFile(__dirname + "/signup.html");
});

app.post("/", function(req, res){
    const firstName = req.body.fName;
    const lastName = req.body.lName;
    const email = req.body.email;

    const data = {
        members: [
        {
            email_address: email,
            status: "subscribed",
            merge_fields: {
                FNAME: firstName,
                LNAME: lastName,
            }
            
        }
        ]
    };

   const jsonData = JSON.stringify(data);
   const url = "https://us21.api.mailchimp.com/3.0/lists/1f675efd8b"
   const option = {
    method: "POST",
    auth: "Moe93:c607910ccf70e5f732b5446c9d847bf6-us21"
   }
   const request = https.request(url, option, function(respose){

    if (response.statusCode === 200) {
        res.send("Successfully Subscribed!");
    } else {
        res.send("There was an error signing uo, pleasd try again!");
    } 

    respose.on("data", function(data){
        console.log(JSON.parse(data));
    })
   });

   request.write(jsonData);
   request.end();

    //console.log(firstName, lastName, emailAddress);
});

app.listen(3000, function(){
    console.log("You're good bro!");
});



// API Key
//c607910ccf70e5f732b5446c9d847bf6-us21
//List/Audience ID
//1f675efd8b*/