
const jwt = require('jsonwebtoken');

const  generateToken = async (userId) =>{
      
    return await jwt.sign({id:userId}, process.env.SECRET_KEY,{
        expiresIn:'30d',
    });
       
};
module.exports =  generateToken;