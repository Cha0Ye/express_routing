const express = require('express');
const ExpressError = require('./ExpressError');
const {average, median} = require('./operators'); 


const app = express();

app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));


app.get("/mean", function(req, res, next){
    try {

     let numbers = req.query.nums;
     let numberArray = numbers.split(',');  
     let numberArr = numberArray.map( a => parseInt(a));
     let avg = average(numberArray); 
      
      if(avg === undefined ){
        throw new ExpressError("NUMBER A NUMBER!", 400)
      }
      return res.send({user: foundUser})
    } catch(err){
      return next(err)
    }
  })








// 404 handler
app.use(function (req, res, next) {
    const notFoundError = new ExpressError("Not Found", 404);
    return next(notFoundError)
});

// generic error handler
app.use(function(err, req, res, next) {
    // the default status is 500 Internal Server Error
    let status = err.status || 500;

    // set the status and alert the user
    return res.status(status).json({
        error: {
        message: err.message,
        status: status
        }
    });
}); 

  // end generic handler
app.listen(3000, function() {
    console.log('Server is listening on port 3000');
}); 





    