import UserModel from "./user.schema";
import { IUser } from "./user.types";
 const create=(user:IUser)=>UserModel.create(user)
 const getAll=()=>UserModel.find()
 const getOne=(id:string)=>UserModel.findOne({ userId: id})
 const update=(user:IUser)=>UserModel.updateOne({_id:user.userId},user)
 const deleteOne=(id:string)=>UserModel.findByIdAndDelete(id)

 export default{
     create,
     getAll,
     getOne,
     update,
     deleteOne
 }