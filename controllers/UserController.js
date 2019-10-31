const adminDAO = require("../services/DAO/adminDAO")
const jwtService = require("../services/jwtService")


class UserController{
    constructor(userRouter)
    {
        this.userRouter = userRouter;
        this.registerRouter();
    }
    registerRouter(){
        
        this.userRouter.get("/products",
        this.getProductsFromDAO
        );
        
        this.userRouter.post("/addProduct",
        jwtService.verifyToken,
        this.addProductDAO)

        this.userRouter.delete("/deleteProduct",
        jwtService.verifyToken,
        this.deleteProduct)

    }

    //GET ALL THE ROWS FROM DATABASE.
    getProductsFromDAO(req,res,next) {
        adminDAO.getAllProducts().then((products)=> {
            res.send(products);
        })
        }

    //ADD ANOTHER PRODUCT INTO THE DATABASE WHICH CAN ONLY BE DONE BY ADMIN    
    addProductDAO(req,res,next) {
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

    //DELETE FROM PRODUCT TABLE
    deleteProduct(req,res,next) {
        let productId = req.body.id;

        adminDAO.deleteProduct(productId).then(()=>{
            res.send("record deleted successfully");
        }).catch(err =>{
            console.log(err);
            res.send("unable to delete the record");
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