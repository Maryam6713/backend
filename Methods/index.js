const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());
let users = [];

// Add user
app.post('/user', (req, res) => {
  users.push({ ...req.body, id: users.length + 1 });
  res.send({ message: 'User added successfully' });
});

// Get all users
app.get('/about', (req, res) => {
  res.send(users);
});

// Delete user by ID
//app.delete('/user/:id', (req, res) => {
  //const id = parseInt(req.params.id); // Ensure the id is treated as an integer
  // console.log("Attempting to delete user with id:", id);
  // console.log("Current users:", users);

  //const userIndex = users.findIndex(user => user.id === id);

//   if (userIndex === -1) {
//     return res.status(404).send({ message: 'User not found' });
//   }

//   // If user is found, delete it
//   users.splice(userIndex, 1);
//   res.send({ message: 'User deleted successfully' });
// });

app.delete('/user/:id' , (req,res)=>{
  const id = parseInt(req.params.id)
const userIndex = users.findIndex(user => user.id === id)
if(userIndex === -1){
  return res.status(404).send({message : "user not found"})
}
users.splice(userIndex , 1)
res.send({message : "user deleted succesfully"})

})
app.put('/user/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const userIndex = users.findIndex(user => user.id === id);

  if (userIndex === -1) {
    return res.status(404).send({ message: 'User not found' });
  }

  // Full update: Pure user object ko replace karenge
  users[userIndex] = { id, ...req.body };

  res.send({ message: 'User updated successfully' });
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
