const models = require("../../models/index");

class adminDAO{
    
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
}

module.exports = new adminDAO();