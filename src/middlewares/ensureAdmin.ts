import { Request, Response, NextFunction } from "express";

export const ensureAdmin = (request: Request, response: Response, next: NextFunction) => {

    const admin = false; //test do middleware de autenticação

    if(admin) {
        return next();
    }

    return response.status(401).json({ error: "Unauthorized" });
}