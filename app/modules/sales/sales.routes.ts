import { NextFunction, Router, Response, Request } from "express";
import { ResponseHandler } from "../../utility/response";
import salesServices from "./sales.services";
import redis from "redis"

// const redisPort=6379;
// const client=redis.createClient(redisPort);
const router = Router();

router.post("/create",
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const result = await salesServices.create(req.body);
            res.send(new ResponseHandler(result));
        }
        catch (e) {
            next(e);
        }
    });

router.post("/dashboard",
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { from, to } = req.body;
            console.log(from)
            const result=await salesServices.filterData(from,to);

            res.send(new ResponseHandler(result));
        }
        catch (e) {
            next(e)
        }
    });


export default router;