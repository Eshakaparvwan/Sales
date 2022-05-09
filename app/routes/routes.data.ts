import { IExclude, Route } from "./routes.types";
import userRouter from "../modules/user/user.routes"
import salesRouter from "../modules/sales/sales.routes"
export const routes: Route[] = [
    new Route('/user',userRouter),
    new Route('/sales',salesRouter)
];

export const excludedPaths: IExclude[] = [
    { method: 'POST', path: '/user/signin' }
    
];