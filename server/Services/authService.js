const generateToken = require("../Helpers/generateToken");
const { isPasswordMatched ,hashPassword} = require("../Helpers/hashedPassword");
const User = require("../Modals/User")

exports.findUserByEmail = (email) =>{
 return User.findOne({email: email}).
  then((data) =>{
      console.log(data);
      return {
        status:200,
        data: data
      }
  }).catch(err =>{
    //   
    return{
        status:400,
        error: err
    }
  })
}

exports.saveUser = (body) =>{
 return User(body).save()
  .then((data) =>{
    console.log(data);
    return{
      status: 201,
      data: data
    }
  }).catch(err =>{
    return {
      status:400,
      error: err
    }
  })
}
exports.singinUserByEmail = (email,password) => {
 return User.findOne({email})
 .then( async (user) =>{
  if(user){
     if(isPasswordMatched(password,user.password)){
       const token = await generateToken(user._id);
       console.log(token);
      return{
          status: 200,
          user,
          token:token
      }
     }
     
    } else{
      return{
        status:401,
      }
    }
  }).catch(err =>{
    return{
      status:400,
      error: err
    }
  })
}