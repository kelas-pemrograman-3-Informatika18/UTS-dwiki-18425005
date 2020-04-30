const express = require('express')
const app = express()

//// list route
app.use('/user', require('./routes/user'))

app.listen(5000, function () {
    console.log('server started ot port 5000')
})