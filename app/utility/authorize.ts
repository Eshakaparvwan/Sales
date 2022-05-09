import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { IExclude } from "../routes/routes.types";

const { verify } = jwt;

export const permit = (roles: string[]) => {
    return (req: Request, res: Response, next: NextFunction) => {
        try {
            if (!res.locals.user || !roles.some(role => res.locals.user.roles.includes(role))) {
                throw { statusCode: 403, message: 'Forbidden' };
            }
            next();
        }
        catch (error) {
            next(error);
        }
    }
}

export const authorize = (excludedPaths: IExclude[]) => {
    return (req: Request, res: Response, next: NextFunction) => {
        try {
            console.log(excludedPaths,req.url , req.method);
            
            if (excludedPaths.find(ep => ep.path === req.url && ep.method === req.method)) return next();
            const token = req.headers.authorization;
            if (!token) throw { statusCode: 401, message: 'Unauthorized' };
            const SECRET_KEY = process.env.SECRET_KEY || '';
            const payload = verify(token, SECRET_KEY);
            if (!payload) throw { statusCode: 401, message: 'Unauthorized' };
            res.locals.user = payload;
            next();
        } catch (error) {
            next(error);
        }
    };
};