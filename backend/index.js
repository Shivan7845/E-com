require('dotenv').config({path : './.env'});
const express = require('express');
const User = require('./models/userModel');
const app = express();
const cors = require('cors');

//db connections
require('./models/db').dbconnect();

//body-paser
app.use(express.json());
app.use(express.urlencoded({extended : false}));

  app.use(cors({
    origin: 'https://e-com-frontend-beryl.vercel.app',
  }));
  
//GET 
app.get('/', (req,res,next) =>{
    res.json('Hello from inside the code')
});


//POST /register

app.post('/register', (req,res,next) =>{
    const user = new User(req.body).save()
    .then(user => res.json(user))
    .catch(err => res.json(err))
});
//POST /login

// app.post('/signin', (req,res,next)=>{
//     const {email,password} = req.body;
//     User.findOne({email: email})
//     .then(user => {
//         if(user) {
//             let isMatch = user
//         }else{
//             res.json('no record existed')
//         }
//     })
// });
app.post('/signin', async(req,res,next) =>{
    const user = await User.findOne({email : req.body.email});
    if(!user){
        return next (new ErrorHandler(`User with this email address is not register`,401))
    };
    let isMatch = user.comparepassword(req.body.password);
    if(!isMatch){
        return next (new ErrorHandler('Wrong credentials',500))
    };
    res.status(200).json({
        success : true,
    })
})
//Error handling
const ErrorHandler = require('./utils/ErrorHandler');
const { genratedError } = require('./middleware/error');

app.use('*', (req,res,next) =>{
    next (new ErrorHandler(`Requested url not found`,404))
});

app.use(genratedError);

//server
const PORT = 8080;

app.listen(PORT , () => {
    console.log(`server running on http://localhost:${PORT}`)
});

