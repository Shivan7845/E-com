const mongoose = require('mongoose');

// const db = 'mongodb+srv://shivamn322:Everthing123@e-com.j8bkfon.mongodb.net/e-com?retryWrites=true&w=majority'

const db = "mongodb+srv://shivam:Everthing123@cluster0.jnyyfqu.mongodb.net/"

exports.dbconnect = async() =>{
    try {
        // await mongoose.connect('mongodb://127.0.0.1:27017/e-com-registration');
        await mongoose.connect(db)   
        console.log('database connection established.')
    } catch (error) {
        console.log(error.message)
    }
}