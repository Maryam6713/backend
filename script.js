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

//=============Date 9 march 2025 Sunday

// const express = require('express');
// const path = require('path')
// const app = express();

// // Middleware to parse JSON bodies
// app.use(express.json());  // For parsing application/json
// app.use(express.urlencoded({ extended : true}))
// app.set('view engine' , 'ejs')
// app.use(express.static(path.join(__dirname , 'public')))

// app.get('/' , function(req,res){
// res.render("index")
// })
// //agr kisi rout ko dynamic bnana hy to : ka use kren is se profile k bad koi bhi khud se rout deny se chal jae ga error nahi aey ga kiyun k ye ab variable ban chuka hy
// app.get('/profile/:anybody' , function(req,res){
//     //agr humain front ka data yani user jo rout open kary ga wo backend se dobara front end par aey to

//     res.send(`welcome ${req.params.anybody} to create rout`)
//     })

// app.listen(3000 , function(){
//     console.log("server in running");
    
// })

//======Date 10 March 2025 Monday

const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());  // For parsing application/json
app.use(express.urlencoded({ extended : true }));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
    fs.readdir('./files', function(err, files) {
        if (err) {
            return res.status(500).send("Error reading files directory");
        }
        res.render('index', { files: files });
    });
});


app.get('/files/:filename', function(req, res) {
    const filePath = `./files/${req.params.filename}`;
    fs.readFile(filePath, "utf-8", function(err, filedata) {
        if (err) {
            return res.status(500).send("Error reading file");
        }
        // Pass the file content (filedata) to the 'show' view
        res.render("show", { filename: req.params.filename, filedata: filedata });
    });
});
app.get('/edit/:filename' , function(req , res){
    res.render('edit' , {filename: req.params.filename})
})

app.post('/edit', function(req, res) {
    const { previous, new: newFilename } = req.body;

    // Ensure both filenames are provided
    if (!previous || !newFilename) {
        return res.status(400).send("Both previous and new filenames are required.");
    }

    // Rename the file
    fs.rename(`./files/${previous}`, `./files/${newFilename}`, function(err) {
        if (err) {
            return res.status(500).send("Error renaming file.");
        }
        res.redirect('/');
    });
});



app.post('/create', function(req, res) {
    // Ensure title is sanitized for use in the file name
    const title = req.body.title ? req.body.title.split(' ').join('') : 'untitled'; // Default to 'untitled' if title is empty
    const fileName = `./files/${title}.txt`;

    // Ensure the folder exists before writing the file
    fs.mkdir('./files', { recursive: true }, function(err) {
        if (err) {
            return res.status(500).send("Error creating directory");
        }

        // Write the file
        fs.writeFile(fileName, req.body.details, function(err) {
            if (err) {
                return res.status(500).send("Error writing file");
            }
            res.redirect('/');
        });
    });
});

app.listen(3000, function() {
    console.log("Server is running on port 3000");
});
