const mongoose = require('mongoose');
mongoose.connect(
    process.env.DB_CONNECTION,{
    useNewUrlParser: true, 
    useUnifiedTopology: true
   }
).then(() =>{
    console.log('db connected')
} ).catch(err =>{
    console.log(err);
})