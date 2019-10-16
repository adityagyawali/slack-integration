const express = require('express')
const app = express()
const PORT = 5000
const cors = require('cors')



const bodyParser = require('body-parser')
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))



app.get('/', (req, res) => {
  res.send('hello')
})

app.post('/', (req, res) => {
  console.log('req', req.body.text)
  if(req.body.text === 'rens') {
    res.send('latteshoe')
  }

})

app.listen(PORT, () => {
  console.log(`running on ${PORT}`)
})
