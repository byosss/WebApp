import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

import ClientModel from '../models/clientModel';
import CommModel from '../models/commModel';
import RestorerModel from '../models/restorerModel';

const registerController = async (req: Request, res: Response) => {

    // Create a new user
    let UserModel: any;

    // Check the role of the user
    switch (req.body.role) {
        case 'client':
            UserModel = ClientModel;
            break;
        case 'comm':
            UserModel = CommModel;
            break;
        case 'restorer':
            UserModel = RestorerModel;
            break;
        default:
            return res.status(400).json({ error: 'Invalid role specified' });
    }
    
    try {
        // Create a new user instance
        const newUser = new UserModel(req.body);

        // Validate the user data
        await newUser.validate();

        // Check if the user already exists
        const existingUser = await UserModel.findOne({ email: newUser.email }).select('-_id email');
        if (existingUser) {
            return res.status(400).json({ error: 'Email already used' });
        }

        // Crypt the password
        const hashedPassword = await bcrypt.hash(newUser.password, 10);
        newUser.password = hashedPassword;

        // Save the user
        await newUser.save();

        // Generate a JWT token
        const token = jwt.sign({ id: newUser.id, role: newUser.role }, process.env.JWT_SECRET as string, { expiresIn: '1h' });

        // Reply successfully
        res.status(201).json({ msg: 'User registered successfully', id: newUser.id, token: token }
        );
    } catch (error) {
        // If an error occurs during validation, search, or save, return an error response
        res.status(500).json({ msg: 'An error occurred while processing your request', error: error});
    }
};

export default registerController;
