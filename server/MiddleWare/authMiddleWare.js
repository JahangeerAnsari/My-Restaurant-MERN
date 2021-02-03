const jwt = require('jsonwebtoken');
const User = require('../Modals/User');

const authMiddleWare = async (req,res,next) =>{

    let token;
    // token uses header authorization lets authorised

    if(req.headers.authorization && 
        req.headers.authorization.startsWith('Bearer')
        ){
            try {
               // we have token and we have to splite into
               //two part Bearer[0] and token[1]
               token = req.headers.authorization.split(' ')[1]; 

            //    now we have to decode token

          const  decodeToken = jwt.verify(token,process.env.SECRET_KEY)
          const user = await User.findById(decodeToken.id);
          if(user) {
              req.user = user;
              console.log("---- decode token--")
              console.log(req.user.id);
              // call moddleware function
              next();
          } else{
              res.status(401).json({
                  message:"expired token "
              })
          }

            } catch (error) {
              res.status(400).json({
                message:'Not Authorized invalid token'
              })  

            }
        }

}

module.exports = authMiddleWare;