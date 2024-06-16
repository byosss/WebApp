import RestaurantModel, { IRestaurant } from './restaurantModel'; // Assurez-vous que le chemin est correct

const restaurants: Partial<IRestaurant>[] = [
    {
        name: 'Le Gourmet',
        address: '123 Rue de Paris, Paris, France',
        rating: 4.5
    },
    {
        name: 'Sushi World',
        address: '456 Sushi St, Tokyo, Japan',
        rating: 4.7
    },
    {
        name: 'Pasta Paradise',
        address: '789 Pasta Ave, Rome, Italy',
        rating: 4.6
    }
];

const initDB = async () => {
    try {
        // Clear the existing data
        await RestaurantModel.deleteMany({});

        // Insert new data
        await RestaurantModel.insertMany(restaurants);
        console.log('DB data initialized');

    } catch (error) {
        console.error('Error initializing the database', error);
    }
};

export default initDB;