require('dotenv').config({path : './.env'});
const express = require('express');
const User = require('./models/userModel');
const app = express();
const cors = require('cors')

//db connections
require('./models/db').dbconnect();

//body-paser
app.use(express.json());
app.use(express.urlencoded({extended : false}));

  app.use(cors({
    origin: 'https://e-com-frontend-beryl.vercel.app',
  }));
  
// app.use((req, res, next) => {
//     res.setHeader('Access-Control-Allow-Origin', 'https://e-com-frontend-beryl.vercel.app/');
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
//     res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
//     res.setHeader('Access-Control-Allow-Credentials', 'true');
//     next();
//   });
  

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

app.post('/signin', (req,res,next)=>{
    const {email,password} = req.body;
    User.findOne({email: email})
    .then(user => {
        if(user) {
            if(user.password === password) {
                res.json('success')
            } else{
                res.json('password is incorrect')
            }
        }else{
            res.json('no record existed')
        }
    })
});

//server
const PORT = 8080;

app.listen(PORT , () => {
    console.log(`server running on http://localhost:${PORT}`)
});

