const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const userModel = new mongoose.Schema(
    {   
        name : {
            type : String,
            required : [true, 'name is required'],
        },
        email : {
            type : String,
            required : [true, 'email address is required'],
            unique : true,
            match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
        },
        password : {
            type : String,
            minLength : [6, 'password should have atleast 6 characters'],
            maxLength : [15, 'password should not more than 15 characters'],
        },
    }
    ,{timestamps : true}
);

userModel.pre('save', function(){
    if(!this.isModified('password')){
        return;
    }
    let salt = bcrypt.genSaltSync(10);
    this.password = bcrypt.hashSync(this.password,salt);
});

userModel.methods.comparepassword = function(password){
    return bcrypt.compareSync(password, this.password)
};


const user = mongoose.model('user', userModel);
module.exports = user;