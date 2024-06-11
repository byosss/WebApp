import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import UserModel, { IUser }  from '../models/userModel';

const registerController = async (req: Request, res: Response) => {

    // Créer une nouvelle instance d'utilisateur avec les données de req.body
    const newUser: IUser = new UserModel(req.body);

    try {
        // Valider l'instance d'utilisateur avec Mongoose
        await newUser.validate();
    } catch (error) {
        return res.status(400).json({ error: 'Erreur de validation des données' });
    }

    try {
        // Vérifier si l'email est déjà utilisé
        const existingUser = await UserModel.findOne({ email: newUser.email }).select('-_id email');
        if (existingUser) {
            return res.status(401).json({ error: 'Cet email est déjà utilisé.' });
        }

        // Crypter le mot de passe
        const hashedPassword = await bcrypt.hash(newUser.password, 10);
        newUser.password = hashedPassword;

        // Sauvegarder l'utilisateur dans la base de données
        await newUser.save();

        // Générer un token JWT
        const token = jwt.sign(
            { email: newUser.email },
            process.env.JWT_SECRET as string,
            { expiresIn: '1h' }
        );

        // Répondre avec succès
        res.status(201).json({ msg: 'Utilisateur enregistré avec succès',
                               token: token }
        );
    } catch (error) {
        // Si une erreur se produit pendant la validation, la recherche ou la sauvegarde, renvoyez une réponse d'erreur
        res.status(500).json({ error: 'Une erreur s\'est produite lors du traitement de votre demande.' });
    }
};

export default registerController;
