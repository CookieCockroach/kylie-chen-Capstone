const express = require('express')
const cors = require('cors')
const app = express()
require('dotenv').config() 
app.use(cors())
app.use(express.json())
const PORT = process.env.PORT || 8080

const closetRoutes = require('./routes/user-routes');

const inspirationRoutes = require('./routes/inspiration-routes');

app.use('/closet', closetRoutes);

app.use('/inspiration', inspirationRoutes)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})