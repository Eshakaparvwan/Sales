import { Schema, model } from "mongoose"

class UserSchema  extends Schema{
    // define schema 
   constructor(){
       super({ 
           userId:{
               type:String,
               required:true
           },
           name:{
               type: String,
               required: true,
           },
           email:{
            type: String,
            required: true,
        },

       }, {
           timestamps:true
       })  // callls the constructor of the schema class

   }
}
const UserModel=model('User',new UserSchema())

export default UserModel


// created at , updated at, created by, updated by, is deleted