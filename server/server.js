const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const UserModel = require('./models/User');

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(
  'mongodb://localhost:27017/mediconnect'
)

app.post('/register',(req, res) => {
  UserModel.create(req.body)
  .then(user => {res.json(user)
  .catch(err => res.json(err))
  })
    

})

app.listen(3001, () => {
  console.log('Server is running on port 3001');
})