import SalesModel from "./sales.schema";
import { ISales } from "./sales.types";
 const create=(sales:ISales)=>SalesModel.create(sales)
 const getAll=()=>SalesModel.find()
 const getOne=(id:string)=>SalesModel.findOne({ userId: id})

 const filterData=(from: number , to: number)=> SalesModel.aggregate([{
     $match:{
         $and:[{YEAR_ID: { $gte : from }},
                { YEAR_ID :{ $lte : to}}
        ]
     }
 }])


 export default{
     create,
     getAll,
     getOne,
     filterData,

 }