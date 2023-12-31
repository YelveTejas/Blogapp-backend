import mongoose from "mongoose";
const Userschema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
})
const Usermodel = mongoose.model('users',Userschema)

 export default Usermodel