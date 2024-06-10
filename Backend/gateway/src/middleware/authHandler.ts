import { Request, Response, NextFunction } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';

export const authHandler = (req: Request, res: Response, next: NextFunction) => {

  const token = req.header('Authorization')?.replace('Bearer ', '') || '';

  if (!token) {
    return res.status(401).json({ msg: 'No token, authorization denied' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as JwtPayload;
    req.body.userId = decoded.user.userId;
    next();
  } 
  catch (err) {
    res.status(401).json({ msg: 'Token is not valid' });
  }
  
};

module.exports = authHandler;