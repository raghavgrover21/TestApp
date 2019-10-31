const adminDAO = require("../services/DAO/adminDAO")


class UserController{
    constructor(userRouter)
    {
        console.log("reached here1");
        this.userRouter = userRouter;
        this.registerRouter();
    }
    registerRouter(){
        this.userRouter.get("/products",
        this.getProductsFromDAO
        );
        this.userRouter.post("/addProduct",
        this.addProduct)
        console.log("reached here2 ");

    }
    //GET ALL THE ROWS FROM DATABASE.
    getProductsFromDAO(req,res,next){
        adminDAO.getAllProducts().then((products)=>{
            res.send(products);
        })
        }
    //ADD ANOTHER PRODUCT INTO THE DATABASE WHICH CAN ONLY BE DONE BY ADMIN    
    addProduct(req,res,next){
        let product = {
            name : req.body.name,
            price : req.body.price
        }
        adminDAO.addProduct(product).then(result=>
            {
                res.send(result);
            }).catch(err =>{
                console.log(err)
                res.send("unable to insert into the database");
            })
    }
    }
const userController = userRouter => {
    return new UserController(userRouter);
}
module.exports = {
    userController,
    UserController
}