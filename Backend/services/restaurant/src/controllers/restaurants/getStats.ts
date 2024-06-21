import { Request, Response } from 'express';
import mongoose from 'mongoose';
import jwt, { JwtPayload } from 'jsonwebtoken';

const getStats = async (req: Request, res: Response) => {

    const token = req.header('Authorization')?.replace('Bearer ', '') || '';
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as JwtPayload;

    if (decoded.role !== 'restorer') {
        return res.status(403).json({ message: 'Unauthorized' });
    }

    try {
        const totalOrders = await mongoose.connection.collection('orders').countDocuments({ restaurantId: req.params.restaurantId });

        const totalRevenue = await mongoose.connection.collection('orders').aggregate([ 
                                                                                          { $match: { restaurantId: req.params.restaurantId } },
                                                                                          { $group: { _id: null, total: { $sum: '$total' } } }
                                                                                      ]).toArray();
        
        const averageOrderValue = totalRevenue.length ? totalRevenue[0].total / totalOrders : 0;

        const totalCustomers = await mongoose.connection.collection('orders').distinct('customerId', { restaurantId: req.params.restaurantId });

        const totalItemsSold = await mongoose.connection.collection('orders').aggregate([
                                                                                            { $match: { restaurantId: req.params.restaurantId } },
                                                                                            { $unwind: '$items' },
                                                                                            { $group: { _id: null, total: { $sum: '$items.quantity' } } }
                                                                                        ]).toArray();

        res.status(200).json({ totalOrders, 
                               totalRevenue: totalRevenue.length ? totalRevenue[0].total : 0, 
                               averageOrderValue, 
                               totalCustomers: totalCustomers.length, 
                               totalItemsSold: totalItemsSold.length ? totalItemsSold[0].total : 0
                            });
    } 
    catch (error) {
        res.status(500).json({ message: 'Erreur lors de la récupération des statistiques', error });
    }
}

export default getStats;