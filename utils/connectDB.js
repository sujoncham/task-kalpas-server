
const mongoose = require('mongoose')
require('dotenv').config()


const URL = `mongodb+srv://adminUser:UI2iowaB461RTeN4@cluster0.vlwll5j.mongodb.net/newsBlog?retryWrites=true&w=majority`

const connectDB = async () =>{
    try {
        await mongoose.connect(URL, {
            useUnifiedTopology: true,
            useNewUrlParser: true
        });
        console.log('connected with database')
      } catch (error) {
        console.log(error);
      }
}

module.exports = connectDB;