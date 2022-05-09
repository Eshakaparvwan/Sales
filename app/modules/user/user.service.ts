import userRepo from "./user.repo";
import { IUser } from "./user.types";
import { sign } from "jsonwebtoken"


 const create=async(user:IUser)=>{
    const { userId}= user;
    const userData= await userRepo.getOne(userId);
    // console.log(`userData: ${userData}`);
    let result=user;
    if(!userData){
        result=await userRepo.create(user);
        // console.log(result);
        //  result;

    }
    const { SECRET_KEY } = process.env;
    const token = sign(JSON.parse(JSON.stringify(result)), SECRET_KEY || '');
    // console.log(token);
    
    return { token };

 }
 const getAll=()=>userRepo.getAll()
 const getOne=(id:string)=>userRepo.getOne(id)
 const update=(user:IUser)=>userRepo.update(user)
 const deleteOne=(id:string)=>userRepo.deleteOne(id)


 export default{
     create,
     getAll,
     getOne,
     update,
     deleteOne
 }