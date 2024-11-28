const sanitize = require('sanitize')
const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser');
const { admin } = require('./Routs/AdminRout');

require('dotenv').config();


const app = express()

app.use(sanitize.middleware)
app.use(cookieParser())
app.use(express.json())
app.use(express.static('public'))




app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}));





app.use('/auth', admin)


app.listen(process.env.DB_PORT, () => {
    console.log('server is running')
})


