const mongoose = require('mongoose');
async function connectDB() {
    const conn=await mongoose.connect('mongodb+srv://aryaji31:root@cluster0.c7zwsb1.mongodb.net/crud-live?retryWrites=true&w=majority&appName=Cluster0') 
        if(conn){
            console.log('database connected successfully');
        }else {
                console.log('database connection failed');
        }
}
module.exports=connectDB;