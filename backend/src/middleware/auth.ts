import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import { CustomJwtPayload } from '../types/express';

export const auth = (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
        return res.status(401).send({ message: 'Unauthorized' });
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET!) as CustomJwtPayload;
        req.auth = decoded;
        next();
    } catch (error) {
        return res.status(401).send({ message: 'Unauthorized' });
    }
}