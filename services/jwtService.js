const jwt = require("jsonwebtoken");
//secret key should be kept in environment variable
//for convenience at your end for execution I have taken a random string right here
const secretKey = "RIBK95BIa00jIGpLsKsTn6dwaHt2pnBU8f9KTsOtGScfGgqKxPe3RTkuFtAP0Xd";

class JWTService  {
//I generated a single token and worked on it for verification
    verifyToken(req,res,next){
        const bearerHeader  = req.headers['authorization']
        if(typeof bearerHeader !== 'undefined'){
            const bearer = bearerHeader.split(' ');
            const bearerToken = bearer[1]
            req.token = bearerToken;
            jwt.verify(req.token, secretKey, (err)=>{
                if(err){
                    res.send("wrong");
                    }
                else{
                    next()
                    }
                })
        }
        else{
            res.send("please try again")
        }
    }
    
    //WAS NOT SURE WHAT TO PASS INTO THE JWT (PAYLOAD) SO I GENERATED A SINGLE TOKEN AND USED IT FOR VERIFICATION
    //BELOW IS THE FUNCTION FOR GENERATING JWT (which I havent used anywhere)
    generateToken(req,res,next){
        jwt.sign(
            payload,
            secretKey,
            (err, token) => {
              if (err) {
                res.send("something went wrong");
              } else {
                next(token);
              }
            }
          );
    }
}
module.exports = new JWTService();