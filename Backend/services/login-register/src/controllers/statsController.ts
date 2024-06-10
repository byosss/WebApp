import { Request, Response } from 'express';

// Route pour les statistiques
const loginController = async (req: Request, res: Response) => {
    const stats = {
        cpuUsage: process.cpuUsage(),
        memoryUsage: process.memoryUsage(),
    };
    return res.status(200).json(stats);
};

export default loginController;