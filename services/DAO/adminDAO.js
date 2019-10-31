const models = require("../../models/index");

//ALL DATABASE CALL FUNCTIONS ARE DEFINED HERE RELATED TO ADMIN
class adminDAO{
    //DB CALL TO GET ALL PRODUCT
    getAllProducts(){
     return new Promise((resolve,reject) =>{
        models.Product.findAll().then(products =>{
            console.log(products);
            resolve(products);
           
        })
        .catch((err)=>{
            console.log(err);
            reject(err);
        })
     })
    }
    
    ///DB CALL TO ADD PRODUCT
    addProduct(product){
        return new Promise((resolve,reject)=>{
            models.Product.create(product).then(()=>{
                console.log("product added")
                resolve("added into the db");
            }).catch(err =>{
                console.log(err);
                reject(err);
            })
        })
    }

    //DB CALL TO DELETE PRODUCT
    deleteProduct(productId) {
        return new Promise( (resolve,reject) => {
            models.Product.destroy({
                where : { id : productId }
            }).then( () => {
                resolve("successfully deleted product");
            }).catch( (err)=>{
                console.log(err);
                reject(err);
            })
        })
    }
}

module.exports = new adminDAO();