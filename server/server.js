const express = require('express')
const cors = require('cors');  // Import cors

const app = express();
app.use(cors());  // Enable CORS

app.get('/api', (req, res) => {
  res.json({"users": ["user1", "user2", "user3"]})
})

app.listen(5000, () => {
  console.log('Server is running on http://localhost:5000')
})