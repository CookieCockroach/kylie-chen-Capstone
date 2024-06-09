const express = require('express')
const cors = require('cors')
const path = require('path')
const app = express()
require('dotenv').config() 
app.use(cors())
app.use(express.json())
const PORT = process.env.PORT || 8000

app.use(express.static(path.join(__dirname, 'public')));

const closetRoutes = require('./routes/closet_routes');

const inspirationRoutes = require('./routes/inspiration_routes');

app.use('/closet', closetRoutes);

app.use('/inspiration', inspirationRoutes)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})