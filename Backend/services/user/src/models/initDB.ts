import mongoose from 'mongoose';

import ClientModel, { IClient } from './clientModel';
import CommModel, { IComm } from './commModel';
import DelivererModel, { IDeliverer } from './delivererModel';
import DevModel, { IDev } from './devModel';
import TecModel, { ITec } from './tecModel';

const clients: Partial<IClient>[] = [
    {
        firstName: 'John',
        lastName: 'Doe',
        phone: '1234567890',
        email: 'john@gmail.com',
        password: '$2a$10$VKM/uRGAWTUVE7veHSAZHeLThtMA/j6EP8a/E5RYnOYavfxo7F3xu',
        deliveryAddress: '123 Main St',
        role: 'client'
    }
];

const comms: Partial<IComm>[] = [
    {
        email: 'nico@gmail.com',
        password: '$2a$10$VKM/uRGAWTUVE7veHSAZHeLThtMA/j6EP8a/E5RYnOYavfxo7F3xu',
        role: 'comm'
    }
];

const deliverers: Partial<IDeliverer>[] = [
    {
        firstName: 'Jane',
        lastName: 'Smith',
        email: 'jane@deliverer.com',
        password: '$2a$10$VKM/uRGAWTUVE7veHSAZHeLThtMA/j6EP8a/E5RYnOYavfxo7F3xu',
        phoneNumber: '+11234567890',
        rib: 'FR1420041010050500013M02606',
        sponsorCode: 'SPONSOR123',
        sponsorId: new mongoose.Types.ObjectId(),  // Just an example, replace with actual ObjectId
        role: 'deliverer'
    }
];

const devs: Partial<IDev>[] = [
    {
        email: 'dev@example.com',
        password: '$2a$10$VKM/uRGAWTUVE7veHSAZHeLThtMA/j6EP8a/E5RYnOYavfxo7F3xu',
        apiKey: 'APIKEY123456789',
        role: 'Dev'
    }
];

const tecs: Partial<ITec>[] = [
    {
        email: 'tec@example.com',
        password: '$2a$10$VKM/uRGAWTUVE7veHSAZHeLThtMA/j6EP8a/E5RYnOYavfxo7F3xu',
        role: 'tec'
    }
];

const initDB = async () => {
    try {
        // Clear the existing data
        await mongoose.connection.dropCollection('users');

        // Insert new data
        await ClientModel.insertMany(clients);
        await CommModel.insertMany(comms);
        await DelivererModel.insertMany(deliverers);
        await DevModel.insertMany(devs);
        await TecModel.insertMany(tecs);
        
        console.log('DB data initialized');

    } catch (error) {
        console.error('Error initializing the database', error);
    }
};

export default initDB;