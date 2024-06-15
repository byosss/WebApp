import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import UserModel, { IUser }  from '../models/userModel';

const registerController = async (req: Request, res: Response) => {

    // Create a new user instance
    const newUser: IUser = new UserModel(req.body);

    // Validate the user data
    try {
        await newUser.validate();
    } catch (error) {
        return res.status(400).json({ error: 'Error while validation of the data' });
    }

    try {
        // Check if the user already exists
        const existingUser = await UserModel.findOne({ email: newUser.email }).select('-_id email');
        if (existingUser) {
            return res.status(401).json({ error: 'Email already used' });
        }

        // Crypt the password
        const hashedPassword = await bcrypt.hash(newUser.password, 10);
        newUser.password = hashedPassword;

        // Save the user
        await newUser.save();

        // Generate a JWT token
        const token = jwt.sign({ id: newUser.id, role: newUser.role }, process.env.JWT_SECRET as string, { expiresIn: '1h' });

        // Reply successfully
        res.status(201).json({ msg: 'User registered successfully', token: token }
        );
    } catch (error) {
        // If an error occurs during validation, search, or save, return an error response
        res.status(500).json({ error: 'An error occurred while processing your request' });
    }
};

export default registerController;
