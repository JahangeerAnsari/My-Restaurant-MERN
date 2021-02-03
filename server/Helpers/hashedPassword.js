
const bcrypt = require('bcryptjs')
exports.hashMyPassword = async (password) =>{
    // we have to give salt value and return hash password and salt
       const salt = await bcrypt.genSalt(10);
       return await bcrypt.hash(password,salt);
}
// let compare two passwor input and database password
exports.isPasswordMatched = async (myPassword, dbPassword) => {
    return await bcrypt.compare(myPassword,dbPassword);
}