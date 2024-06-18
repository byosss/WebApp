import { Request, Response } from 'express';
import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

const loginController = async (req: Request, res: Response) => {

    const { email, password } = req.body;

    try {
        // Check if user exists
        const user = await mongoose.connection.collection('users').findOne({ email }, 
                                                                           { projection: { password: 1, role: 1 } });
        if (!user) {
            return res.status(401).json({ msg: 'Invalid credentials' });
        }

        // Check password
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ msg: 'Invalid credentials' });
        }

        // Generate JWT token
        const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET as string, { expiresIn: '1h' });

        res.status(200).json({ msg: 'User logged successfully', id: user._id, token: token });
    } 
    catch (error) {
        res.status(500).json({ msg: 'Server Error', error: error });
    }

};

export default loginController;