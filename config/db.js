import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
const connectDB = process.env.DBCONNECT

    mongoose.connect(connectDB, {
    useNewUrlParser: true,
    useUnifiedTopology:true
    },
    (err)=> {
        if(!err) console.log('Successfully connected to db')
        else console.log('Failed to connect to db: ' + err)
    })


