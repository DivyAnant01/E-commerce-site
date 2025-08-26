import { timeStamp } from 'console'
import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
    },
    cartData:{
        type:Object,
        default:{}
    }
} ,{timeStamp:true ,minimize:false})

const User =mongoose.Model("User",userSchema);

export default User