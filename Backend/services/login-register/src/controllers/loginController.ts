import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import UserModel from '../models/userModel';

const loginController = async (req: Request, res: Response) => {

    try {
        const { email, password } = req.body;

        // Check if user exists
        const user = await UserModel.findOne({ email }).select('-_id email password');
        if (!user) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        // Check password
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        // Generate JWT token
        const token = jwt.sign(
            { email: user.email },
            process.env.JWT_SECRET as string,
            { expiresIn: '1h' });

        res.status(200).json({ token });
    } 
    catch (error) {
        res.status(500).json({ message: 'Server Error',
                               error: error
         });
    }

};

export default loginController;