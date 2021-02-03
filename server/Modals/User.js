const bcrypt = require('bcryptjs')
const mongoose = require('mongoose')
const userSchema = mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    email: {
        type: String,
        required:true
    },
    password: {
        type:String,
        required:true
    },
    
})

 // before saving password should be hashed
userSchema.pre('save', async function(next){
 
    const salt = await bcrypt.genSalt(10);
 //    console.log(this.password);
 this.password = await bcrypt.hash(this.password,salt);
   next();
 });

const User = mongoose.model('User',userSchema);
module.exports = User;