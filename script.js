// foreach map filter indexof find 

// var arr = [1, 2, 3 , 4]
// arr.forEach(function(val){
//     console.log(val + " hi");
// })

// var res = arr.map(function(val){
//    return   val + 100
// })
// console.log(res);
// var res = arr.filter(function(val){
// if(val >= 3){
//     return true
// }else {
//     return false
// }
// })
// console.log(res);
// var res =arr.find(function(val){
// if(val ===2){
//     return val
// }
// })
// console.log(res);

// var obj = {
//     name : "maryam",
//     age : 20,
//     city:"karachi"
// }
// console.log(obj.name);
// console.log(obj["age"]);
// // obj.freeze(obj)
// obj.city = "Sukkur"
// console.log(obj["city"]);




// function abc(){
// return 67
// }

// console.log(abc());
// console.log("maryam");

// async function data(){
//     var blob = await fetch('https://fakestoreapi.com/products/1') 
//     var res = await blob.json()
//     console.log(res);
    
// }
// console.log("hello");

// data()

//const fs = require("fs")
// fs.writeFile("write.txt" , "hello world" , function(err){
// if(err){
//     console.log(err);
// }else{
//     console.log("file created");
// }
// })

// fs.appendFile("write.txt" , "nice to meet you" , function(err){
//     if(err){
//         console.log(err);
//     }else{
//         console.log("file created");
//     }
   // })

    // fs.rename("write.txt" , "practice.txt" , function(err){
    //     if(err){
    //         console.log(err);
    //     }else{
    //         console.log("file created");
    //     }
    //     })
        // fs.copyFile("practice.txt" , "./copy/copy.txt" , function(err){
        //     if(err){
        //         console.log(err);
        //     }else{
        //         console.log("file created");
        //     }
        //     })

            // fs.unlink("./copy/copy.txt" , function(err){
            //     if(err){
            //         console.log(err);
            //     }else{
            //         console.log("file created");
            //     }
            //     })
            // fs.rmdir("./copy" , {recursive : true
            // }, function(err){
          
            //     if(err){
            //         console.log(err);
            //     }else{
            //         console.log("file created");
            //     }
            //     })

            // const http = require("http")

            // const server = http.createServer(function(req,res){
            //     res.end("hello world")
            // })

            // server.listen(3000)

//             const express = require('express')
// const app = express()
// const port = 5000

// app.use((req,res,next)=>{
//     console.log("middileware is running");
//     next()
   
//   })
// app.get('/', (req, res) => {
//   res.send('Hello maryam amir')
// })

// app.get('/about', (req, res) => {
//     res.send('Hello kese ho!')
//   })
  
//   app.post('/about', (req, res) =>{

//   })
  
  
// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })

const express = require('express');
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());  // For parsing application/json

// POST request on /about
app.post('/about', (req, res) => {
    // Request body se data lene ka tareeqa
    const { name, age } = req.body;

    // Data ko process karke response bhejna
    if (name && age) {
        res.status(200).send({
            message: 'Data received successfully',
            receivedData: { name, age }
        });
    } else {
        res.status(400).send({
            message: 'Name and Age are required'
        });
    }
});

// Server listening on a port
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
