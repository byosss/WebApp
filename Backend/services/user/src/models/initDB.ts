import UserModel, { IUser}  from './userModel'; // Assurez-vous que le chemin est correct

const users: Partial<IUser>[] = [
    {
        firstName: 'John',
        lastName: 'Doe',
        email: 'John@gmail.com',
        password: 'password',
        role: 'client'
    },
    {
        firstName: 'Jane',
        lastName: 'Doe',
        email: 'Jane@gmail.com',
        password: 'password',
        role: 'restorer'
    }
]; 

const initDB = async () => {
    try {
        // Clear the existing data
        await UserModel.deleteMany({});

        // Insert new data
        await UserModel.insertMany(users);
        console.log('DB data initialized');

    } catch (error) {
        console.error('Error initializing the database', error);
    }
};

export default initDB;