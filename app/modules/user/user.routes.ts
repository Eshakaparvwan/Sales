import { Router , Request , Response , NextFunction } from "express";
import { ResponseHandler } from "../../utility/response";
import { CreateUserValidator } from "./user.validation";
import userService from "./user.service";
const router=Router();


router.post("/signin",
    CreateUserValidator,
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const result = await userService.create(req.body);
            res.send(new ResponseHandler(result));
        }
        catch (e) {
            next(e);
        }
    });


export default router;