const userModel = require('../models/UserModels');




module.exports.createUser = async({
    firstname,lastname,email,password
})=>{
    if(!firstname || !email || !password){
        throw new Error('All fields are required')
    }

    const user = new UserModel.create({
        fullname:{
            firstname,
            lastname
        },
        email,
        password

    })
    return user;

}