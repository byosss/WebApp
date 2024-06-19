import RestaurantModel, { IRestaurant } from './restaurantModel'; // Assurez-vous que le chemin est correct

const restaurants: Partial<IRestaurant>[] = [
    {
        name: 'Le Gourmet',
        address: {
            street: '123 Main St',
            city: 'Paris',
            zip: '67000',
        }
    },
    {
        name: 'Sushi World',
        address: {
            street: '456 Sushi Blvd',
            city: 'Tokyo',
            zip: '12345',
        }
    },
    {
        name: 'Pasta Paradise',
        address: {
            street: '789 Pasta Ave',
            city: 'Rome',
            zip: '00100',
        }
    }
];

const initDB = async () => {
    try {
        // Clear the existing data
        await RestaurantModel.deleteMany({});

        // Insert new data
        await RestaurantModel.insertMany(restaurants);
        console.log('restaurants DB data initialized');

    } catch (error) {
        console.error('Error initializing the database', error);
    }
};

export default initDB;