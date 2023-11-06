exports.genratedError = (err,req,res,next) =>{
    const statusCode = this.statusCode || 500;

   if(err.name === 'MongoServerError' && err.message.includes('E11000 duplicate key')){
        err.message = 'user with this email address already exist'
   };
    
    res.status(statusCode).json({
        message : err.message,
        errName : err.name,
        stack : err.stack,
    });
};