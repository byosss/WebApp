import mongoose from 'mongoose';

import ClientModel, { IClient}  from './clientModel';
import CommModel, { IComm } from './commModel';

const clients: Partial<IClient>[] = [
    {
        firstName: 'John',
        lastName: 'Doe',
        phone: '1234567890',
        email: 'john@gmail.com',
        password: 'password',
        deliveryAddress: '123 Main St',
        role: 'client'
    },
    {
        firstName: 'Jane',
        lastName: 'Doe',
        phone: '1234567890',
        email: 'jane@gmail.com',
        password: 'password',
        deliveryAddress: '123 Main St',
        role: 'client'
    }
]; 

const comms: Partial<IComm>[] = [
    {
        email: 'nico@gmail.com',
        password: 'password',
        role: 'comm'
    },
    {
        email: 'paul@gmail.com',
        password: 'password',
        role: 'comm'
    }
]; 

const initDB = async () => {
    try {
        // Clear the existing data
        await mongoose.connection.dropCollection('users');

        // Insert new data
        await ClientModel.insertMany(clients);
        await CommModel.insertMany(comms);
        console.log('DB data initialized');

    } catch (error) {
        console.error('Error initializing the database', error);
    }
};

export default initDB;