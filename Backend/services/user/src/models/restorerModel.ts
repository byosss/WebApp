import { Schema, model, Document } from 'mongoose';

export interface IRestaurant extends Document {
    email: string;
    password: string;
    restaurantId: string;
    role: 'restorer';
}

const restaurantSchema = new Schema<IRestaurant>({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    restaurantId: {
        type: String,
        required: true,
        unique: true
    },
    role: {
        type: String,
        enum: ['restorer'],
        required: true
    }
}, { versionKey: false, collection: 'users' });

const RestaurantModel = model<IRestaurant>('Restorer', restaurantSchema);

export default RestaurantModel;
