const express = require('express');
require('dotenv').config()
const cors = require('cors');
const connectDB = require('./utils/connectDB');
const newsRouter = require('./routes/news.route');
const userRouter = require('./routes/user.route');
const port = process.env.PORT || 5000;
const app = express();

// adminUser
// UI2iowaB461RTeN4


app.use(cors())
app.use(express.json())
connectDB()


app.use('/api/news', newsRouter)
app.use('/api/users', userRouter)



app.listen(port, ()=>{
    console.log('server port is', port)
})