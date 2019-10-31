const express = require("express");
const bodyParser =  require("body-parser");
const userController = require("./controllers/UserController").userController;
// const requestResponseHandler = require("./services/reqeustResponseHandler")
const app = express();
const userRouter = express.Router();
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use("/api/v1",userRouter);

const port = process.env.PORT || 8000;

//calling controller
userController(userRouter);
app.listen(port, err =>{
    if(err)
    console.log(err);

    else
    console.log("server is running on port "+ port);
})
app.get('/api1',(req, res)=>{
    res.json({
        message:"here"
    })
})