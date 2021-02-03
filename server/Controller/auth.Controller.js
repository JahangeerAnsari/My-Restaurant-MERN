const { findUserByEmail ,saveUser, singinUserByEmail} = require("../Services/authService");

exports.authSignUp = async (req,res) =>{
      const {email} = req.body
    const result = await findUserByEmail(email);

     if(result.status === 400){
        return res.status(result.status).json(result);
     }
     
     if(result.data){
       return  res.status(result.status).json({
            message:"User Alredy Exits"
         })
     }

     // lets save the user if new 
     const savedUser = await saveUser(req.body);
     if(savedUser.status === 400){
       return  res.status(savedUser.status).json({
             message:"something wrong"
             
         })
     }
     if(savedUser.status === 201){
       return  res.status(savedUser.status).json({
             message: "User has been successfully registered",
             userdata:savedUser.data
         })
     }
}

exports.authSignin = async (req,res) =>{
    const {email,password} = req.body;
    const result = await singinUserByEmail(email,password);
    if(result.status === 200){
      return  res.status(result.status).json({
            message:"User successfully login",
            user : result.user,
            token:result.token
        })
    }

     // in case of wrong credentials

     if(result.status === 401){
        return res.status(result.status).json({
             message: "Wrong Credentials"
         })
     }

     return res.status(result.status).json({
     ...result
  })
}