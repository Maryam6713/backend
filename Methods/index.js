const express = require('express')
const app = express()
const port = 3000

app.use(express.json())
app.get('/', (req, res) => {
  res.send('Hello World!')

})
let users =[] 
app.post('/about' ,(req,res)=>{


   users.push({...req.body ,id: users.length + 1})
    res.send({message : "user added successfully"})
})
app.get('/users' ,(req,res)=>{
    res.send(users)
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})