import { body } from "express-validator";
import  validate  from "../../utility/validate";


// userId:string;
//name
// email:string;

export const CreateUserValidator=[
    body('userId').isString().withMessage("id is required"),
    body('name').isString().withMessage("name is required"),
    body('email').isEmail().withMessage("Email is Required"),
    // body('roleId').isString().withMessage("roleId is Required"),
    validate
]
 