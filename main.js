const express = require('express')
require('dotenv').config()
const app = express()
const port = 5000

//express(library) creates server.
//server is listener, listen on virual port like here 5000
//some devices may not have 5000 port free..
//in that case ..on production level... we have env value PORT=3000 ... if 3000 is not free then production code take some other port which is free
// some of the informations like password etc risk wise .... also needs to be insert in env file 
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})