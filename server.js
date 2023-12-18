const express = require('express')
const app = express()
const mongoose = require ('mongoose')


app.use(express.json())

app.get('/', function (req, res) {
  res.send('Universty of Ghana Medical Centre Database Management System')
})

app.get('/ok', function (req, res) {
    res.send('Please be kind')
  })

app.post('/patient',  async(req, res)=> {
    
    console.log(req.body);
    res.send(req.body);
})


mongoose.connect('mongodb+srv://paakwesi:8524566@dcit205.vuyrewt.mongodb.net/?retryWrites=true&w=majority')
.then(() => {
    console.log('connected to MongoDB')
    app.listen(3000, () => {
        console.log('Node API running successfully')
    })
   
}).catch(() => {
console.log(error)
})





